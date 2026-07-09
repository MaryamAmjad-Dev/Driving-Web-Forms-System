import dns from "dns";
import mongoose from "mongoose";

const publicDns = ["8.8.8.8", "1.1.1.1"] as const;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

async function resolveMongoUri(uri: string): Promise<string> {
  if (!uri.startsWith("mongodb+srv://")) {
    return uri;
  }

  const withoutScheme = uri.slice("mongodb+srv://".length);
  const atIndex = withoutScheme.lastIndexOf("@");
  if (atIndex === -1) {
    throw new Error("Invalid MONGODB_URI: missing credentials host separator.");
  }

  const credentials = withoutScheme.slice(0, atIndex);
  const hostAndRest = withoutScheme.slice(atIndex + 1);
  const slashIndex = hostAndRest.indexOf("/");
  const clusterHost =
    slashIndex === -1 ? hostAndRest : hostAndRest.slice(0, slashIndex);
  const pathAndQuery =
    slashIndex === -1 ? "" : hostAndRest.slice(slashIndex);

  try {
    dns.setServers([...new Set([...publicDns, ...dns.getServers()])]);

    const records = await dns.promises.resolveSrv(
      `_mongodb._tcp.${clusterHost}`,
    );

    const hosts = records
      .map((record) => `${record.name}:${record.port}`)
      .join(",");
    const params = new URLSearchParams(
      pathAndQuery.includes("?") ? pathAndQuery.split("?")[1] : "",
    );

    if (!params.has("ssl")) {
      params.set("ssl", "true");
    }
    if (!params.has("authSource")) {
      params.set("authSource", "admin");
    }

    const query = params.toString();
    return `mongodb://${credentials}@${hosts}${pathAndQuery.split("?")[0]}${query ? `?${query}` : ""}`;
  } catch {
    return uri;
  }
}

export async function connectDB(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable in .env.local",
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = (async () => {
      const resolvedUri = await resolveMongoUri(uri);
      return mongoose.connect(resolvedUri, {
        bufferCommands: false,
      });
    })();
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    cached.conn = null;
    throw error;
  }
}
