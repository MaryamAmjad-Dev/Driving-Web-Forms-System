export type FormApiResult =
  | { ok: true; message: string }
  | { ok: false; message: string; status: number };

type FormApiResponse = {
  ok?: boolean;
  message?: string;
};

export async function submitFormApi(
  endpoint: string,
  payload: Record<string, FormDataEntryValue>,
): Promise<FormApiResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data: FormApiResponse = {};
    try {
      data = (await response.json()) as FormApiResponse;
    } catch {
      data = {};
    }

    const message =
      typeof data.message === "string" && data.message.trim()
        ? data.message.trim()
        : "";

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        message,
      };
    }

    return {
      ok: true,
      message,
    };
  } catch {
    return {
      ok: false,
      status: 0,
      message: "",
    };
  }
}
