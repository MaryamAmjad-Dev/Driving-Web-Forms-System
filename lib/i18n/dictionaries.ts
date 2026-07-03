import type { Locale } from "./config";

export const dictionaries = {
  en: {
    brand: "MSA Driving School",
    city: "Peterborough",
    meta: {
      siteName: "MSA Driving School Peterborough",
      defaultDescription:
        "DVSA-approved driving lessons in Peterborough. Manual and automatic tuition, intensive courses, test preparation, and Pass Plus. Book with confidence.",
    },
    nav: {
      home: "Home",
      services: "Services",
      packages: "Packages",
      about: "About",
      contact: "Contact",
      booking: "Booking",
      book: "Book a lesson",
    },
    footer: {
      tagline: "Professional driving instruction helping learners in Peterborough pass with confidence.",
      quickLinks: "Quick links",
      contact: "Contact",
      socialTitle: "Social",
      rights: "All rights reserved.",
      dvsa: "DVSA approved instructor",
      copyEmail: "Copy email address",
      copyEmailSuccess: "Email copied",
      copyEmailError: "Couldn't copy — try again",
      floatingWhatsapp: {
        label: "Chat on WhatsApp",
        tooltip: "Need a hand? Chat with us",
        message: "Hi MSA, I'd like to ask about driving lessons.",
      },
    },
    home: {
      badge: "DVSA approved — Peterborough",
      titleLine1: "Drive with",
      titleLine2: "confidence.",
      intro:
        "Expert, patient instruction to get you test-ready. Learn at your pace — morning, evening, or weekends.",
      ctaBook: "Book a lesson",
      ctaBookNow: "Book now",
      ctaWhatsApp: "WhatsApp us",
      heroDetails: [
        {
          title: "DVSA-approved instruction",
          body: "Patient teaching on local Peterborough routes, tailored to how you learn best.",
        },
        {
          title: "First-time pass focus",
          body: "Mock tests, manoeuvres, and real DVSA test-route practice so test day feels familiar.",
        },
        {
          title: "Flexible booking",
          body: "Morning, evening, or weekend slots with easy WhatsApp booking around your life.",
        },
      ],
      heroCards: {
        meter: "Progress meter",
        driving: "On the road",
        license: "Licence ready",
        test: "Test preparation",
        schedule: "Flexible booking",
        instructor: "DVSA instructor",
      },
      scrollStory: {
        intro: {
          highlight: "Clear lesson plans",
          headlineSuffix: " & not a single worry",
          body:
            "We handle structured progress, test-route practice, and calm guidance so you stay focused on learning — not the admin.",
          footnote: "*DVSA-approved instruction with dual-control vehicle for your safety.",
        },
        tabs: [
          {
            titleBefore: "Learn with ",
            titleHighlight: "DVSA-approved",
            titleAfter: " instruction",
            body:
              "Our mission is to build real confidence behind the wheel — patient teaching, local Peterborough routes, and lessons tailored to how you learn best.",
          },
          {
            titleBefore: "Test-ready training for ",
            titleHighlight: "first-time passes",
            titleAfter: "",
            body:
              "Mock tests, manoeuvres, and route familiarisation on roads used at local DVSA centres — so test day feels familiar, not frightening.",
          },
          {
            titleBefore: "Flexible scheduling, ",
            titleHighlight: "all the way",
            titleAfter: "",
            body:
              "Morning, evening, or weekend slots with easy WhatsApp booking — we fit lessons around your life until you are licence-ready.",
          },
        ],
        cta: "Book a lesson",
        mediaBadge: "DVSA approved",
        mediaAlt: "Learner driver training illustration",
      },
      explore: {
        title: "Where to next?",
        subtitle:
          "We split content across clear pages — less scrolling, faster answers.",
        cards: [
          {
            title: "Services",
            description: "Lesson types and what you can expect.",
            path: "/services",
            icon: "car" as const,
          },
          {
            title: "Packages",
            description: "Bundles and indicative pricing.",
            path: "/packages",
            icon: "tag" as const,
          },
          {
            title: "About",
            description: "Our approach, milestones, and story.",
            path: "/about",
            icon: "user" as const,
          },
          {
            title: "Contact",
            description: "Call, WhatsApp, form, and map.",
            path: "/contact",
            icon: "map" as const,
          },
        ],
      },
      stats: {
        title: "Results that speak for themselves",
        subtitle:
          "Trusted instruction across Peterborough — from first lesson to test day.",
        totalPassed: {
          label: "Total passed",
          description:
            "Learners who have passed their driving test with our instruction across Peterborough and the surrounding area.",
        },
        highlights: {
          pass: {
            label: "First-time pass rate",
            description:
              "Structured lesson plans and calm test-day preparation help many pupils pass on their first attempt.",
          },
          years: {
            label: "Years of experience",
            description:
              "Over a decade of DVSA-approved tuition tailored to Peterborough roads and local test routes.",
          },
          rating: {
            label: "Average rating",
            description:
              "Consistently strong feedback from pupils and parents for patience, clear guidance, and results.",
          },
        },
      },
      offerTitle: "Our driving lessons",
      services: {
        beginner: {
          title: "Beginner lessons",
          body: "Start from zero — patient guidance through every control and manoeuvre, building confidence before busy roads.",
        },
        intensive: {
          title: "Intensive courses",
          body: "Need your licence fast? Compact learning into days, ideal when you have a test date in sight.",
        },
        refresher: {
          title: "Refresher lessons",
          body: "Already licensed but lost confidence? Rebuild skills and road awareness at your own pace.",
        },
        testPrep: {
          title: "Test preparation",
          body: "Mock tests and targeted training on routes and manoeuvres used at Peterborough DVSA test centres.",
        },
        passPlus: {
          title: "Pass Plus",
          body: "Six modules of advanced driving — motorways, night driving, rural roads — for safer driving after you pass.",
        },
        flexible: {
          title: "Flexible scheduling",
          body: "Morning, afternoon, evening or weekend — book when it suits you, with easy WhatsApp rescheduling.",
        },
      },
      whyTitle: "Learn from the best.",
      whyIntro:
        "Every lesson is tailored to you. Whether it is your first time behind the wheel or you are brushing up after years away, we meet you where you are.",
      whyPoints: [
        "DVSA-approved, fully qualified instructor",
        "Dual-control vehicle for your safety",
        "Flexible morning, evening & weekend slots",
        "Structured lesson plans with clear progress",
        "Competitive pricing with no hidden fees",
        "Easy booking via call, email or WhatsApp",
      ],
      reviewsTitle: "What pupils say",
      customersTitle: "Customer responses",
      customersSubtitle:
        "Auto-rotating cards — pause by hovering or focusing the carousel.",
      sliderPrev: "Previous testimonial",
      sliderNext: "Next testimonial",
      sliderDotLabel: "Show testimonial",
      sliderLive: "Showing testimonial {n} of {total}",
      reviews: [
        {
          tag: "First-time pass",
          initials: "SM",
          quote:
            "Passed first time! The instructor was incredibly calm and patient. I was a nervous wreck at the start but felt genuinely ready by test day.",
          name: "Sarah M.",
        },
        {
          tag: "Clear explanations",
          initials: "JK",
          quote:
            "Brilliant instructor — explains everything clearly and adapts to how you learn. WhatsApp communication made booking a breeze.",
          name: "James K.",
        },
        {
          tag: "Intensive course",
          initials: "PR",
          quote:
            "Did an intensive course and passed within 3 weeks. Could not have asked for a better experience. Highly recommended for Peterborough learners.",
          name: "Priya R.",
        },
        {
          tag: "Confidence rebuilt",
          initials: "TW",
          quote:
            "I avoided roundabouts for years. After a short refresher plan, I finally feel in control — the mock test routes were spot on.",
          name: "Tom W.",
        },
        {
          tag: "Automatic licence",
          initials: "HL",
          quote:
            "Patient, structured lessons and no pressure. I passed with only two minors and actually enjoyed learning to drive.",
          name: "Hannah L.",
        },
        {
          tag: "Student-friendly",
          initials: "OA",
          quote:
            "Lessons around my uni timetable, honest feedback every week, and a calm approach on test day. Worth every penny.",
          name: "Omar A.",
        },
        {
          tag: "Local routes",
          initials: "LD",
          quote:
            "Knew every Colwick and Beeston test route inside out. The route training made test day feel like just another lesson.",
          name: "Liam D.",
        },
        {
          tag: "Back on the road",
          initials: "EF",
          quote:
            "After ten years off the road, I assumed I'd need to start over. A few targeted refreshers and I'm driving the kids to school again.",
          name: "Emma F.",
        },
        {
          tag: "Test centre prep",
          initials: "NK",
          quote:
            "Mock tests at Watnall before the real one — same examiner-style feedback. Walked in calm, walked out with a pass.",
          name: "Noah K.",
        },
        {
          tag: "Manoeuvres sorted",
          initials: "OP",
          quote:
            "Bay parking and parallel were my nightmare. Two focused sessions later they're easily my strongest part of the test.",
          name: "Olivia P.",
        },
        {
          tag: "Roundabout mastery",
          initials: "AS",
          quote:
            "Used to freeze at busy roundabouts. Step-by-step coaching on Peterborough's worst ones and now I just drive through them.",
          name: "Aiden S.",
        },
        {
          tag: "Weekend learner",
          initials: "MB",
          quote:
            "Weekend slots that actually stuck to time, plus a clear plan from week one. Couldn't ask for a smoother experience.",
          name: "Maya B.",
        },
      ],
      successStory: {
        badge: "Success story",
        title: "From first lesson to test-ready — without the stress spiral.",
        name: "Alex T.",
        initials: "AT",
        tagline: "Intensive manual course · Peterborough",
        body: "Alex started as a complete beginner with tight deadlines for work. We built a structured weekly plan, added focused mock tests on realistic routes, and used short debriefs after every lesson so progress stayed visible. The result: a confident drive on test day — not just a pass.",
        statLabel: "Test result",
        statValue: "Pass — 2 minors",
        highlight:
          "Weekly mock routes, calm briefings, and a plan that matched real life commitments.",
      },
      successSlider: {
        eyebrow: "Pass results",
        title: "Real pupils. Real passes.",
        subtitle:
          "Step through the gallery — these are MSA learners on the day they got their full UK licence.",
        imageAlt: "MSA Driving School pupil holding their pass certificate",
        prev: "Previous pupil photo",
        next: "Next pupil photo",
        live: "Showing pupil photo {n} of {total}",
        passedBadge: "Passed",
        services: {
          fullPass: "Full Pass",
          intensive: "Intensive",
          refresh: "Refresh",
          passPlus: "Pass Plus",
          automatic: "Automatic",
          manual: "Manual",
          mockTest: "Mock Test",
        },
      },
      achievements: {
        title: "Achievements & milestones",
        subtitle: "Targets we aim for with every learner — backed by structured training.",
        items: [
          {
            title: "97% first-time pass rate",
            body: "Strong preparation, mock tests, and route awareness before you book the real thing.",
          },
          {
            title: "500+ pupils passed",
            body: "Years of Peterborough-focused instruction across manual and automatic tuition.",
          },
          {
            title: "10+ years experience",
            body: "Deep familiarity with local DVSA centres, manoeuvres, and examiner expectations.",
          },
          {
            title: "5★ average rating",
            body: "Consistent communication, punctuality, and lessons paced to your confidence level.",
          },
        ],
      },
      packages: {
        title: "Lesson packages",
        subtitle: "Popular bundles — confirm the latest price when you book.",
        disclaimer:
          "Indicative pricing only; your quote may vary by vehicle type, lesson length, and availability.",
        pricingNote:
          "All prices include dual-control vehicle. Contact us to discuss bespoke arrangements.",
        popular: "Best value",
        choose: "Enquire now",
        benefitsTitle: "What's included",
        lessonsLabel: "Lessons",
        scheduleLabel: "Schedule",
        transmissionManual: "Manual",
        transmissionAutomatic: "Automatic",
        items: [
          {
            name: "Pay as you go",
            description: "Single lessons booked when you need them — no block commitment.",
            price: "£40",
            priceUnit: "/hour",
            billing: "Single 1-hour lessons",
            highlightLessons: "1 hr",
            highlightSchedule: "Flexible",
            features: [
              "Single 1-hour lessons",
              "No upfront commitment",
              "Flexible scheduling",
              "Manual or automatic",
              "Instructor-led progress assessment",
            ],
            popular: false,
          },
          {
            name: "10-hour block",
            description: "Structured bundle with progress tracking and a free mock test.",
            price: "£370",
            priceUnit: "/10 hours",
            billing: "£370 for 10 hours",
            highlightLessons: "10 hrs",
            highlightSchedule: "Structured",
            features: [
              "£370 for 10 hours",
              "Structured lesson plan",
              "Progress tracked each session",
              "Free mock test included",
              "Priority slot booking",
              "Manual or automatic",
            ],
            popular: true,
          },
          {
            name: "Intensive course",
            description: "Fast-track to test-ready when you can commit to 1–2 weeks.",
            price: "£750",
            priceUnit: "full course",
            billing: "£750 for 20 hours",
            highlightLessons: "20 hrs",
            highlightSchedule: "1–2 weeks",
            features: [
              "£750 for 20 hours",
              "Fast-track to test-ready",
              "Theory support included",
              "Mock test included",
              "Ideal if you have a test date",
              "Manual or automatic",
            ],
            popular: false,
          },
        ],
      },
      map: {
        title: "Locations & coverage",
        subtitle: "Serving Peterborough and surrounding areas — pickup points agreed when you book.",
        note: "Map shows Peterborough, UK — lesson pickup is arranged directly with your instructor.",
        iframeTitle: "Peterborough map",
      },
      finalCtaTitle: "Ready to start driving?",
      finalCtaBody: "Book your first lesson today. Spaces fill up fast — secure yours now.",
      finalCtaOnline: "Book online",
      finalCtaCall: "Call now",
    },
    servicesPage: {
      title: "Driving lessons & courses",
      subtitle:
        "From first lesson to test day and beyond — structured tuition that fits your goals and schedule.",
      listLabel: "Services list",
      prevService: "Previous service",
      nextService: "Next service",
      includedTitle: "What every pupil gets",
      included: [
        "Clear learning objectives each lesson",
        "Progress notes and next-step focus",
        "Calm, supportive teaching style",
        "Dual-control car for safe practice",
      ],
      packagesBanner: "Need a bundle instead of pay-as-you-go?",
      packagesLink: "View packages",
      faq: {
        title: "Frequently asked questions",
        subtitle: "Common questions about our lessons.",
        items: [
          {
            question: "Do you teach manual and automatic?",
            answer:
              "Yes — we offer both. Tell us your preference when you book so we match you with the right vehicle.",
          },
          {
            question: "How long is a standard lesson?",
            answer:
              "Most pupils book 1.5-hour sessions. Shorter or longer slots can be discussed based on your progress and concentration.",
          },
          {
            question: "Can you help with the Peterborough test routes?",
            answer:
              "Absolutely. Test preparation includes mock tests and practice on routes and manoeuvres used at local DVSA centres.",
          },
          {
            question: "What if I need to cancel?",
            answer:
              "Contact us as early as possible by phone or WhatsApp. We will do our best to reschedule without losing your progress.",
          },
        ],
      },
    },
    packagesPage: {
      title: "Lesson packages",
      subtitle:
        "Pay as you go, 10-hour block, or intensive course — confirm the latest price when you book.",
      comparison: {
        title: "Compare packages",
        subtitle: "See how each bundle differs — figures are indicative; we confirm your quote when you book.",
        columnFeature: "Feature",
        columns: {
          starter: "Pay as you go",
          testReady: "10-hour block",
          intensive: "Intensive course",
        },
        included: "Included",
        notIncluded: "Not included",
        rows: [
          {
            feature: "Price",
            starter: "£40/hour",
            testReady: "£370",
            intensive: "£750",
          },
          {
            feature: "Total lesson time",
            starter: "1 hour per booking",
            testReady: "10 hours",
            intensive: "20 hours",
          },
          {
            feature: "Typical duration",
            starter: "Flexible",
            testReady: "4–8 weeks",
            intensive: "1–2 weeks",
          },
          {
            feature: "Mock test included",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Priority booking",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Theory support",
            starter: "no",
            testReady: "no",
            intensive: "yes",
          },
          {
            feature: "Best for",
            starter: "Flexible learners",
            testReady: "Structured progress",
            intensive: "Test date booked",
          },
        ],
      },
      learningJourney: {
        label: "Your Learning Journey",
        title: "What to expect",
        steps: [
          {
            number: "01",
            title: "Get in Touch",
            body: "Book online, call, email, or WhatsApp us. We'll confirm your first slot quickly — usually within 24 hours.",
          },
          {
            number: "02",
            title: "First Lesson",
            body: "We'll assess your current level, explain our approach, and set a realistic roadmap to your test.",
          },
          {
            number: "03",
            title: "Regular Lessons",
            body: "Consistent, structured lessons tailored to your pace. We adapt our teaching style to how you learn best.",
          },
          {
            number: "04",
            title: "Mock Tests",
            body: "Before your test, we run realistic mock drives on the actual routes used at your local test centre.",
          },
          {
            number: "05",
            title: "Test Day",
            body: "We accompany you to your practical test in our car. You'll arrive feeling prepared and confident.",
          },
          {
            number: "06",
            title: "Pass & Beyond",
            body: "Celebrate your pass. Consider Pass Plus to build advanced skills and potentially reduce your insurance premium.",
          },
        ],
      },
      faq: {
        title: "Package FAQ",
        subtitle: "Common questions about pay-as-you-go, the 10-hour block, and the intensive course.",
        items: [
          {
            question: "Are the prices on this page final?",
            answer:
              "Prices are indicative and confirmed when you book. We offer pay as you go at £40 per hour, a 10-hour block at £370, and a 20-hour intensive course at £750. Your final quote may vary slightly by vehicle type and availability.",
          },
          {
            question: "Which option should I choose?",
            answer:
              "Choose pay as you go if you want single 1-hour lessons with no upfront commitment. The 10-hour block suits learners who want a structured plan, progress tracking, a free mock test, and priority booking. The intensive course is best if you can commit to 20+ hours over 1–2 weeks and often already have a test date.",
          },
          {
            question: "What is included in each package?",
            answer:
              "All options include a dual-control car and manual or automatic tuition. The 10-hour block adds a structured lesson plan and a free mock test. The intensive course includes 20+ hours over 1–2 weeks, theory support, and a mock test — geared towards reaching test standard quickly.",
          },
          {
            question: "Can I switch from pay as you go to a block or intensive later?",
            answer:
              "Yes. Many pupils start with single lessons and move to the 10-hour block or intensive when their goals change. We will explain any difference in hours or cost before you continue.",
          },
          {
            question: "How do I book and pay?",
            answer:
              "Contact us online, by phone, email, or WhatsApp. Payment terms are agreed when you book your first lesson or block — ask about current options when you enquire.",
          },
        ],
      },
    },
    aboutPage: {
      title: "About MSA Driving School",
      subtitle: "Peterborough-based instruction with a pupil-first approach.",
      ownerHeading: "Your instructor",
      instructor: {
        name: "MSA Instructor",
        role: "DVSA-approved · Manual & automatic",
        initials: "MS",
        blurb:
          "One consistent instructor — clear feedback every lesson, not a rotating call-centre team.",
      },
      achievementsHeading: "Milestones",
      successHeading: "Success story",
      p1: "MSA Driving School Peterborough exists to make learning to drive straightforward, calm, and effective. Lessons are planned around your pace — not a one-size-fits-all syllabus rushed to a deadline.",
      p2: "Whether you prefer little-and-often practice or an intensive course, you will get honest feedback, realistic mock tests, and routes that reflect real DVSA conditions in Peterborough.",
      listTitle: "What we believe",
      beliefs: [
        "Confidence comes from clarity — we explain the why, not just the how.",
        "Safety is non-negotiable — dual controls and defensive habits from day one.",
        "Communication matters — easy reach by phone, email, or WhatsApp.",
      ],
      faq: {
        title: "About us — FAQ",
        subtitle: "Who we are and how we work.",
        items: [
          {
            question: "Are you DVSA approved?",
            answer:
              "Yes. Instruction is delivered by a DVSA-approved, fully qualified driving instructor.",
          },
          {
            question: "Will I have the same instructor every time?",
            answer:
              "Yes — one consistent instructor so your progress and learning style stay aligned.",
          },
          {
            question: "Which areas do you cover?",
            answer:
              "We serve Peterborough and surrounding areas. Pickup points are agreed when you book.",
          },
          {
            question: "How soon can I start?",
            answer:
              "Availability varies — contact us with your preferred days and we will offer the next suitable slot.",
          },
        ],
      },
    },
    bookingPage: {
      badge: "Secure your slot",
      title: "Book a lesson",
      subtitle:
        "Fill in the form below and we will confirm your preferred slot within 24 hours. Or, reach us instantly on WhatsApp.",
      formTitle: "Booking request form",
      formName: "Full name",
      formPhone: "Phone number",
      formEmail: "Email address",
      formLessonType: "Lesson type",
      formLessonTypePlaceholder: "Select lesson type",
      lessonTypeOptions: [
        { value: "beginner", label: "Beginner lessons" },
        { value: "intensive", label: "Intensive course" },
        { value: "refresher", label: "Refresher lessons" },
        { value: "testPrep", label: "Test preparation" },
        { value: "passPlus", label: "Pass Plus" },
      ],
      formTransmission: "Transmission",
      formTransmissionPlaceholder: "Select transmission",
      transmissionOptions: [
        { value: "manual", label: "Manual" },
        { value: "automatic", label: "Automatic" },
      ],
      formPreferredDay: "Preferred day",
      formPreferredDayPlaceholder: "Any day",
      preferredDayOptions: [
        { value: "any", label: "Any day" },
        { value: "monday", label: "Monday" },
        { value: "tuesday", label: "Tuesday" },
        { value: "wednesday", label: "Wednesday" },
        { value: "thursday", label: "Thursday" },
        { value: "friday", label: "Friday" },
        { value: "saturday", label: "Saturday" },
        { value: "sunday", label: "Sunday" },
      ],
      formPreferredTime: "Preferred time",
      formPreferredTimePlaceholder: "Any time",
      preferredTimeOptions: [
        { value: "any", label: "Any time" },
        { value: "morning", label: "Morning (8am–12pm)" },
        { value: "afternoon", label: "Afternoon (12pm–5pm)" },
        { value: "evening", label: "Evening (5pm–8pm)" },
      ],
      formExperience: "Your experience level",
      formExperiencePlaceholder: "Select your experience",
      experienceOptions: [
        { value: "complete-beginner", label: "Complete beginner — never driven" },
        { value: "some-experience", label: "Some experience — not yet taken test" },
        { value: "test-date", label: "Have a test date / previously failed" },
        { value: "licence-refresher", label: "Already have a licence — refresher needed" },
      ],
      formNotes: "Additional notes",
      formNotesMinWords: "Please enter at least 10 words in additional notes.",
      formSubmit: "Submit booking request",
      formSending: "Sending…",
      formSuccess:
        "Thank you — we received your booking request and will confirm your preferred slot within 24 hours.",
      formError: "Something went wrong. Please check your details and try again.",
      whatsappTitle: "Prefer WhatsApp?",
      whatsappBody: "Message us directly for instant confirmation and easy scheduling.",
      whatsappCta: "Open WhatsApp",
      sidebarTitle: "Contact details",
      locationLabel: "Area",
      locationText: "Peterborough & surrounding areas",
      successTitle: "Thank you for your booking request",
      successMessage:
        "We received your request and will confirm your preferred slot within 24 hours.",
      successNote:
        "For a faster response, reach us directly on WhatsApp and we will prioritise your booking.",
      successWhatsappCta: "Message on WhatsApp",
    },
    contactPage: {
      title: "Contact & enquiries",
      subtitle: "Ask about availability, lesson packages, or intensive courses. We reply as soon as we can.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Message on WhatsApp",
      openingHours: {
        title: "Available hours",
        todayLabel: "Today",
        rows: [
          {
            key: "monday",
            label: "Monday",
            hours: "8:00am – 8:00pm",
            weekday: 1,
          },
          {
            key: "tuesday",
            label: "Tuesday",
            hours: "8:00am – 8:00pm",
            weekday: 2,
          },
          {
            key: "wednesday",
            label: "Wednesday",
            hours: "8:00am – 8:00pm",
            weekday: 3,
          },
          {
            key: "thursday",
            label: "Thursday",
            hours: "8:00am – 8:00pm",
            weekday: 4,
          },
          {
            key: "friday",
            label: "Friday",
            hours: "8:00am – 8:00pm",
            weekday: 5,
          },
          {
            key: "saturday",
            label: "Saturday",
            hours: "8:00am – 6:00pm",
            weekday: 6,
          },
          {
            key: "sunday",
            label: "Sunday",
            hours: "10:00am – 4:00pm",
            weekday: 0,
          },
        ],
      },
      formTitle: "Send a message",
      formName: "Name",
      formSubject: "Subject",
      formSubjectPlaceholder: "Select a subject",
      formSubjectOptions: [
        { value: "book-lesson", label: "Book a lesson" },
        { value: "price-inquiry", label: "Price inquiry" },
        { value: "availability", label: "Availability" },
        { value: "other", label: "Other" },
      ],
      formEmail: "Email",
      formPhone: "Phone (optional)",
      formMessage: "Message",
      formMessageMinWords: "Please enter at least 10 words in your message.",
      formSubmit: "Send enquiry",
      formSending: "Sending…",
      formSuccess: "Thank you — we have received your message and will get back to you shortly.",
      formError: "Something went wrong. Please try again or call us directly.",
      faq: {
        title: "Booking FAQ",
        subtitle: "Getting in touch and what happens next.",
        items: [
          {
            question: "How quickly will you reply?",
            answer:
              "We aim to respond as soon as possible — often the same day on weekdays. Urgent enquiries: call or WhatsApp.",
          },
          {
            question: "What should I include in my message?",
            answer:
              "Your name, contact number, whether you want manual or automatic, and any preferred days or times.",
          },
          {
            question: "Can I book by phone only?",
            answer:
              "Yes. Call, email, WhatsApp, or the form on this page — whichever suits you.",
          },
          {
            question: "Where do lessons start?",
            answer:
              "Pickup is arranged in Peterborough when you book. See the map below for our coverage area.",
          },
        ],
      },
    },
    notFoundPage: {
      code: "404",
      title: "Wrong turn",
      subtitle: "This page does not exist or may have moved.",
      back: "Go back",
      home: "Back to home",
    },
    common: {
      manualAuto: "Manual & automatic",
      allAreas: "All areas of Peterborough",
      readMore: "Read more",
      learnMore: "Learn more",
      readAbout: "Read our story",
    },
  },
  pl: {
    brand: "Szkoła jazdy MSA",
    city: "Peterborough",
    meta: {
      siteName: "Szkoła jazdy MSA Peterborough",
      defaultDescription:
        "Zatwierdzone przez DVSA lekcje jazdy w Peterborough. Kursy na manual i automat, kursy intensywne, przygotowanie do egzaminu i Pass Plus.",
    },
    nav: {
      home: "Strona główna",
      services: "Usługi",
      packages: "Pakiety",
      about: "O nas",
      contact: "Kontakt",
      booking: "Rezerwacja",
      book: "Umów jazdę",
    },
    footer: {
      tagline:
        "Profesjonalna nauka jazdy, która pomaga kursantom w Peterborough zdać egzamin z pewnością siebie.",
      quickLinks: "Na skróty",
      contact: "Kontakt",
      socialTitle: "Social media",
      rights: "Wszelkie prawa zastrzeżone.",
      dvsa: "Instruktor zatwierdzony przez DVSA",
      copyEmail: "Skopiuj adres e-mail",
      copyEmailSuccess: "Skopiowano e-mail",
      copyEmailError: "Nie udało się skopiować — spróbuj ponownie",
      floatingWhatsapp: {
        label: "Napisz na WhatsApp",
        tooltip: "Masz pytanie? Napisz do nas",
        message: "Cześć MSA, chciał(a)bym zapytać o naukę jazdy.",
      },
    },
    home: {
      badge: "Zatwierdzone przez DVSA — Peterborough",
      titleLine1: "Jedź z",
      titleLine2: "pewnością.",
      intro:
        "Cierpliwa, profesjonalna nauka przygotowująca do egzaminu. Tempo dopasowane do Ciebie — rano, wieczorem lub w weekendy.",
      ctaBook: "Umów jazdę",
      ctaBookNow: "Zarezerwuj teraz",
      ctaWhatsApp: "Napisz na WhatsApp",
      heroDetails: [
        {
          title: "Instruktor DVSA",
          body: "Cierpliwa nauka na lokalnych trasach w Peterborough, dopasowana do Twojego tempa.",
        },
        {
          title: "Nastawienie na pierwsze podejście",
          body: "Jazdy próbne, manewry i prawdziwe trasy egzaminacyjne DVSA — egzamin bez stresu.",
        },
        {
          title: "Elastyczne terminy",
          body: "Lekcje rano, wieczorem lub w weekendy z łatwą rezerwacją przez WhatsApp.",
        },
      ],
      heroCards: {
        meter: "Wskaźnik postępu",
        driving: "Za kierownicą",
        license: "Prawo jazdy",
        test: "Przygotowanie do testu",
        schedule: "Elastyczne terminy",
        instructor: "Instruktor DVSA",
      },
      scrollStory: {
        intro: {
          highlight: "Przejrzysty plan lekcji",
          headlineSuffix: " — bez zbędnego stresu",
          body:
            "Zajmujemy się strukturą nauki, trasami egzaminacyjnymi i spokojnym wsparciem, abyś mógł skupić się na jeździe — nie na formalnościach.",
          footnote:
            "*Instrukcja zatwierdzona przez DVSA, pojazd z podwójną kontrolą dla Twojego bezpieczeństwa.",
        },
        tabs: [
          {
            titleBefore: "Nauka z ",
            titleHighlight: "instruktorem DVSA",
            titleAfter: "",
            body:
              "Budujemy realną pewność za kierownicą — cierpliwe prowadzenie, lokalne trasy w Peterborough i lekcje dopasowane do Twojego tempa.",
          },
          {
            titleBefore: "Przygotowanie do egzaminu pod ",
            titleHighlight: "pierwsze podejście",
            titleAfter: "",
            body:
              "Jazdy próbne, manewry i znajomość tras używanych w lokalnych ośrodkach DVSA — aby dzień egzaminu był przewidywalny.",
          },
          {
            titleBefore: "Elastyczne terminy ",
            titleHighlight: "na każdym etapie",
            titleAfter: "",
            body:
              "Lekcje rano, wieczorem lub w weekendy z łatwą rezerwacją przez WhatsApp — dopasowujemy grafik do Twojego życia.",
          },
        ],
        cta: "Umów jazdę",
        mediaBadge: "DVSA",
        mediaAlt: "Ilustracja nauki jazdy",
      },
      explore: {
        title: "Dokąd dalej?",
        subtitle:
          "Treść podzielona na osobne strony — mniej przewijania, szybsze odpowiedzi.",
        cards: [
          {
            title: "Usługi",
            description: "Rodzaje lekcji i czego się spodziewać.",
            path: "/services",
            icon: "car" as const,
          },
          {
            title: "Pakiety",
            description: "Zestawy i orientacyjne ceny.",
            path: "/packages",
            icon: "tag" as const,
          },
          {
            title: "O nas",
            description: "Podejście, kamienie milowe, historia.",
            path: "/about",
            icon: "user" as const,
          },
          {
            title: "Kontakt",
            description: "Telefon, WhatsApp, formularz i mapa.",
            path: "/contact",
            icon: "map" as const,
          },
        ],
      },
      stats: {
        title: "Wyniki, które mówią same za siebie",
        subtitle:
          "Zaufana nauka w Peterborough — od pierwszej jazdy po egzamin.",
        totalPassed: {
          label: "Łącznie zdanych",
          description:
            "Kursanci, którzy zdali egzamin na prawo jazdy pod naszą opieką w Peterborough i okolicach.",
        },
        highlights: {
          pass: {
            label: "Zdawalność za pierwszym razem",
            description:
              "Przemyślany plan lekcji i spokojne przygotowanie do egzaminu pomagają wielu zdać za pierwszym podejściem.",
          },
          years: {
            label: "Lat doświadczenia",
            description:
              "Ponad dekadę nauki z instruktorem zatwierdzonym przez DVSA, dopasowaną do dróg i tras egzaminacyjnych w Peterborough.",
          },
          rating: {
            label: "Średnia ocena",
            description:
              "Stałe, pozytywne opinie kursantów i rodziców za cierpliwość, jasne wskazówki i skuteczność.",
          },
        },
      },
      offerTitle: "Nasze lekcje jazdy",
      services: {
        beginner: {
          title: "Lekcje dla początkujących",
          body: "Start od zera — spokojne wprowadzenie do każdej manewru i elementów pojazdu, zanim wyjedziesz na ruchliwe drogi.",
        },
        intensive: {
          title: "Kursy intensywne",
          body: "Potrzebujesz prawa jazdy szybko? Skondensowana nauka w kilka dni — idealnie, gdy masz już termin egzaminu.",
        },
        refresher: {
          title: "Jazdy doskonalące",
          body: "Masz prawo jazdy, ale brak pewności? Odbudujemy umiejętności i świadomość na drodze w Twoim tempie.",
        },
        testPrep: {
          title: "Przygotowanie do egzaminu",
          body: "Jazdy próbne i trening na trasach i manewrach z ośrodków egzaminacyjnych DVSA w Peterborough.",
        },
        passPlus: {
          title: "Pass Plus",
          body: "Sześć modułów zaawansowanej jazdy — autostrady, noc, drogi wiejskie — dla bezpieczniejszej jazdy po zdaniu.",
        },
        flexible: {
          title: "Elastyczny harmonogram",
          body: "Rano, po południu, wieczór lub weekend — umówisz się, kiedy Ci pasuje, z łatwą zmianą terminu przez WhatsApp.",
        },
      },
      whyTitle: "Ucz się z najlepszymi.",
      whyIntro:
        "Każda jazda jest dopasowana do Ciebie. Niezależnie, czy pierwszy raz trzymasz kierownicę, czy wracasz po latach — zaczynamy od Twojego poziomu.",
      whyPoints: [
        "Instruktor zatwierdzony przez DVSA, pełne kwalifikacje",
        "Pojazd z podwójnymi pedałami dla bezpieczeństwa",
        "Elastyczne terminy: rano, wieczór, weekendy",
        "Uporządkowany plan lekcji i widoczny postęp",
        "Konkurencyjne ceny bez ukrytych opłat",
        "Kontakt: telefon, e-mail lub WhatsApp",
      ],
      reviewsTitle: "Opinie kursantów",
      customersTitle: "Opinie klientów",
      customersSubtitle:
        "Automatyczna karuzela — wstrzymaj, najeżdżając kursorem lub ustawiając fokus.",
      sliderPrev: "Poprzednia opinia",
      sliderNext: "Następna opinia",
      sliderDotLabel: "Pokaż opinię",
      sliderLive: "Opinia {n} z {total}",
      reviews: [
        {
          tag: "Za pierwszym razem",
          initials: "SM",
          quote:
            "Zdałam za pierwszym razem! Instruktor był spokojny i cierpliwy. Na początku się bałam, a na egzamin czułam się naprawdę gotowa.",
          name: "Sarah M.",
        },
        {
          tag: "Jasne wyjaśnienia",
          initials: "JK",
          quote:
            "Świetny instruktor — wszystko jasno tłumaczy i dostosowuje się do sposobu nauki. Umawianie przez WhatsApp było bezproblemowe.",
          name: "James K.",
        },
        {
          tag: "Kurs intensywny",
          initials: "PR",
          quote:
            "Kurs intensywny i zdanie w 3 tygodnie. Nie mogłabym prosić o lepsze doświadczenie. Polecam każdemu w Peterborough.",
          name: "Priya R.",
        },
        {
          tag: "Odbudowa pewności",
          initials: "TW",
          quote:
            "Unikałem rond latami. Po krótkim planie doskonalącym w końcu czuję kontrolę — trasy próbne były trafione.",
          name: "Tom W.",
        },
        {
          tag: "Prawo jazdy na automat",
          initials: "HL",
          quote:
            "Cierpliwe, uporządkowane lekcje bez presji. Zdałem z dwoma drobnymi błędami i naprawdę polubiłem naukę jazdy.",
          name: "Hannah L.",
        },
        {
          tag: "Dla studentów",
          initials: "OA",
          quote:
            "Jazdy pod plan zajęć na uczelni, szczery feedback co tydzień i spokój w dniu egzaminu. Warte każdego funta.",
          name: "Omar A.",
        },
        {
          tag: "Lokalne trasy",
          initials: "LD",
          quote:
            "Znał na pamięć trasy egzaminacyjne z Colwick i Beeston. Trening tras sprawił, że dzień egzaminu był jak kolejna lekcja.",
          name: "Liam D.",
        },
        {
          tag: "Powrót za kierownicę",
          initials: "EF",
          quote:
            "Po dziesięciu latach przerwy myślałam, że zaczynam od zera. Kilka jazd doskonalących i znów wożę dzieci do szkoły.",
          name: "Emma F.",
        },
        {
          tag: "Przygotowanie do egzaminu",
          initials: "NK",
          quote:
            "Jazdy próbne pod Watnall przed prawdziwym egzaminem — feedback jak od egzaminatora. Wszedłem spokojny, wyszedłem ze zdanym.",
          name: "Noah K.",
        },
        {
          tag: "Manewry pod kontrolą",
          initials: "OP",
          quote:
            "Parkowanie i równoległe to był koszmar. Dwie skupione sesje i to teraz mój najmocniejszy element egzaminu.",
          name: "Olivia P.",
        },
        {
          tag: "Mistrzostwo rond",
          initials: "AS",
          quote:
            "Zamierałem na ruchliwych rondach. Krok po kroku w najtrudniejszych miejscach Peterborough — dziś po prostu przez nie przejeżdżam.",
          name: "Aiden S.",
        },
        {
          tag: "Weekendowy kursant",
          initials: "MB",
          quote:
            "Weekendowe terminy zawsze punktualne i czytelny plan od pierwszego tygodnia. Nie mogłem prosić o lepsze doświadczenie.",
          name: "Maya B.",
        },
      ],
      successStory: {
        badge: "Historia sukcesu",
        title: "Od pierwszej jazdy do gotowości na egzamin — bez spirali stresu.",
        name: "Alex T.",
        initials: "AT",
        tagline: "Intensywny kurs na manual · Peterborough",
        body: "Alex zaczynał od zera i miał napięty harmonogram pracy. Ułożyliśmy tygodniowy plan, dodaliśmy skupione jazdy próbne na realistycznych trasach i krótkie podsumowania po każdej lekcji, by postęp był widoczny. Efekt: pewna jazda w dniu egzaminu — nie tylko zdany test.",
        statLabel: "Wynik egzaminu",
        statValue: "Zdanie — 2 drobne błędy",
        highlight:
          "Cotygodniowe trasy próbne, spokojne omówienia i plan dopasowany do życia codziennego.",
      },
      successSlider: {
        eyebrow: "Wyniki egzaminu",
        title: "Prawdziwi kursanci. Prawdziwe zdania.",
        subtitle:
          "Przeglądaj galerię — to nasi kursanci w dniu odbioru prawa jazdy.",
        imageAlt: "Kursant szkoły MSA z certyfikatem zdanego egzaminu",
        prev: "Poprzednie zdjęcie kursanta",
        next: "Następne zdjęcie kursanta",
        live: "Zdjęcie kursanta {n} z {total}",
        passedBadge: "Zdane",
        services: {
          fullPass: "Pełny kurs",
          intensive: "Intensywny",
          refresh: "Doszkalanie",
          passPlus: "Pass Plus",
          automatic: "Automat",
          manual: "Manual",
          mockTest: "Egzamin próbny",
        },
      },
      achievements: {
        title: "Osiągnięcia i kamienie milowe",
        subtitle: "Cele, do których dążymy z każdym kursantem — poparte strukturalną nauką.",
        items: [
          {
            title: "97% zdawalności za pierwszym razem",
            body: "Solidne przygotowanie, jazdy próbne i znajomość tras przed zapisem na prawdziwy egzamin.",
          },
          {
            title: "500+ zdanych kursantów",
            body: "Lata nauki w Peterborough na manual i automat.",
          },
          {
            title: "10+ lat doświadczenia",
            body: "Dobra znajomość lokalnych ośrodków DVSA, manewrów i oczekiwań egzaminatorów.",
          },
          {
            title: "Średnia ocena 5★",
            body: "Stały kontakt, punktualność i tempo dopasowane do Twojej pewności siebie.",
          },
        ],
      },
      packages: {
        title: "Pakiety lekcji",
        subtitle: "Popularne zestawy — aktualną cenę potwierdzisz przy rezerwacji.",
        disclaimer:
          "Ceny orientacyjne; wycena może się różnić w zależności od auta, długości jazdy i dostępności.",
        pricingNote:
          "Wszystkie ceny obejmują samochód z podwójnymi pedałami. Skontaktuj się z nami, aby omówić indywidualne ustalenia.",
        popular: "Najlepsza wartość",
        choose: "Zapytaj o termin",
        benefitsTitle: "Co obejmuje pakiet",
        lessonsLabel: "Lekcje",
        scheduleLabel: "Harmonogram",
        transmissionManual: "Manual",
        transmissionAutomatic: "Automat",
        items: [
          {
            name: "Płatność za jazdę",
            description: "Pojedyncze lekcje bez zobowiązania do pakietu.",
            price: "£40",
            priceUnit: "/godzina",
            billing: "Pojedyncze lekcje 1 godzina",
            highlightLessons: "1 godz.",
            highlightSchedule: "Elastycznie",
            features: [
              "Pojedyncze lekcje 1 godzina",
              "Bez zaliczki na pakiet",
              "Elastyczne terminy",
              "Manual lub automat",
              "Ocena postępów z instruktorem",
            ],
            popular: false,
          },
          {
            name: "Pakiet 10 godzin",
            description: "Uporządkowany plan z jazdą próbną w cenie.",
            price: "£370",
            priceUnit: "/10 godzin",
            billing: "£370 za 10 godzin",
            highlightLessons: "10 godz.",
            highlightSchedule: "Plan",
            features: [
              "£370 za 10 godzin",
              "Uporządkowany plan lekcji",
              "Postęp śledzony co jazdę",
              "Darmowa jazda próbna",
              "Priorytetowa rezerwacja",
              "Manual lub automat",
            ],
            popular: true,
          },
          {
            name: "Kurs intensywny",
            description: "Szybka ścieżka do egzaminu w 1–2 tygodnie.",
            price: "£750",
            priceUnit: "cały kurs",
            billing: "£750 za 20 godzin",
            highlightLessons: "20 godz.",
            highlightSchedule: "1–2 tygodnie",
            features: [
              "£750 za 20 godzin",
              "Szybka droga do egzaminu",
              "Wsparcie teoretyczne",
              "Jazda próbna w cenie",
              "Idealny przy znanej dacie egzaminu",
              "Manual lub automat",
            ],
            popular: false,
          },
        ],
      },
      map: {
        title: "Lokalizacje i zasięg",
        subtitle: "Peterborough i okolice — miejsce odbioru ustalamy przy rezerwacji.",
        note: "Mapa pokazuje Peterborough, UK — szczegóły odbioru omawiasz bezpośrednio z instruktorem.",
        iframeTitle: "Mapa Peterborough",
      },
      finalCtaTitle: "Gotowy, by zacząć?",
      finalCtaBody: "Umów pierwszą jazdę już dziś. Miejsca znikają szybko — zarezerwuj swój termin.",
      finalCtaOnline: "Umów online",
      finalCtaCall: "Zadzwoń",
    },
    servicesPage: {
      title: "Lekcje jazdy i kursy",
      subtitle:
        "Od pierwszej jazdy po egzamin i dalej — nauka dopasowana do celów i grafiku.",
      listLabel: "Lista usług",
      prevService: "Poprzednia usługa",
      nextService: "Następna usługa",
      includedTitle: "Co otrzymuje każdy kursant",
      included: [
        "Jasne cele na każdą lekcję",
        "Notatki z postępem i kolejnymi krokami",
        "Spokojny, wspierający styl nauczania",
        "Samochód z podwójnymi pedałami",
      ],
      packagesBanner: "Wolisz pakiet zamiast pojedynczych jazd?",
      packagesLink: "Zobacz pakiety",
      faq: {
        title: "Często zadawane pytania",
        subtitle: "Najczęstsze pytania o lekcje.",
        items: [
          {
            question: "Uczycie na manual i automat?",
            answer:
              "Tak — oba. Podaj preferencję przy rezerwacji, dopasujemy odpowiedni samochód.",
          },
          {
            question: "Jak długo trwa standardowa lekcja?",
            answer:
              "Większość kursantów wybiera 1,5 godziny. Krótsze lub dłuższe jazdy omawiamy indywidualnie.",
          },
          {
            question: "Czy pomagacie w trasach egzaminacyjnych w Peterborough?",
            answer:
              "Tak. Przygotowanie obejmuje jazdy próbne i trening na trasach i manewrach z lokalnych ośrodków DVSA.",
          },
          {
            question: "Co jeśli muszę odwołać jazdę?",
            answer:
              "Skontaktuj się jak najwcześniej telefonicznie lub przez WhatsApp — postaramy się przełożyć termin.",
          },
        ],
      },
    },
    packagesPage: {
      title: "Pakiety lekcji",
      subtitle:
        "Płatność za jazdę, pakiet 10 godzin lub kurs intensywny — potwierdź cenę przy rezerwacji.",
      comparison: {
        title: "Porównanie pakietów",
        subtitle:
          "Zobacz różnice między pakietami — ceny orientacyjne; potwierdzamy wycenę przy rezerwacji.",
        columnFeature: "Cecha",
        columns: {
          starter: "Płatność za jazdę",
          testReady: "Pakiet 10 godzin",
          intensive: "Kurs intensywny",
        },
        included: "W pakiecie",
        notIncluded: "Brak",
        rows: [
          {
            feature: "Cena",
            starter: "£40/godz.",
            testReady: "£370",
            intensive: "£750",
          },
          {
            feature: "Łączny czas jazd",
            starter: "1 godzina / rezerwacja",
            testReady: "10 godzin",
            intensive: "20 godzin",
          },
          {
            feature: "Typowy czas trwania",
            starter: "Elastycznie",
            testReady: "4–8 tygodni",
            intensive: "1–2 tygodnie",
          },
          {
            feature: "Jazda próbna w cenie",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Priorytetowa rezerwacja",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Wsparcie teoretyczne",
            starter: "no",
            testReady: "no",
            intensive: "yes",
          },
          {
            feature: "Najlepszy dla",
            starter: "Elastycznej nauki",
            testReady: "Uporządkowanego postępu",
            intensive: "Znanej daty egzaminu",
          },
        ],
      },
      learningJourney: {
        label: "Twoja droga do prawa jazdy",
        title: "Czego możesz się spodziewać",
        steps: [
          {
            number: "01",
            title: "Kontakt",
            body: "Rezerwuj online, dzwoń, pisz e-mail lub WhatsApp. Pierwszy termin potwierdzamy szybko — zwykle w ciągu 24 godzin.",
          },
          {
            number: "02",
            title: "Pierwsza lekcja",
            body: "Oceniamy Twój poziom, tłumaczymy podejście i układamy realistyczny plan do egzaminu.",
          },
          {
            number: "03",
            title: "Regularne jazdy",
            body: "Stałe, uporządkowane lekcje w Twoim tempie. Dopasowujemy styl nauczania do sposobu, w jaki uczysz się najlepiej.",
          },
          {
            number: "04",
            title: "Jazdy próbne",
            body: "Przed egzaminem robimy realistyczne jazdy próbne na trasach z Twojego lokalnego ośrodka egzaminacyjnego.",
          },
          {
            number: "05",
            title: "Dzień egzaminu",
            body: "Towarzyszymy Ci na egzamin praktyczny naszym autem. Przyjedziesz przygotowany i pewny siebie.",
          },
          {
            number: "06",
            title: "Egzamin i dalej",
            body: "Świętuj zdanie. Rozważ Pass Plus, by rozwinąć zaawansowane umiejętności i ewentualnie obniżyć składkę ubezpieczenia.",
          },
        ],
      },
      faq: {
        title: "FAQ — pakiety",
        subtitle:
          "Najczęstsze pytania o płatność za jazdę, pakiet 10 godzin i kurs intensywny.",
        items: [
          {
            question: "Czy ceny na tej stronie są ostateczne?",
            answer:
              "To ceny orientacyjne — potwierdzamy je przy rezerwacji. Oferujemy płatność za jazdę (£40/godz.), pakiet 10 godzin (£370) oraz kurs intensywny 20 godzin (£750). Wycena może się nieznacznie różnić w zależności od auta i dostępności.",
          },
          {
            question: "Którą opcję wybrać?",
            answer:
              "Płatność za jazdę — pojedyncze lekcje 1 godzina bez zaliczki na pakiet. Pakiet 10 godzin — uporządkowany plan, śledzenie postępu, darmowa jazda próbna i priorytetowe terminy. Kurs intensywny — 20+ godzin w 1–2 tygodnie, często gdy masz już datę egzaminu.",
          },
          {
            question: "Co obejmuje każdy pakiet?",
            answer:
              "Wszystkie opcje obejmują samochód z podwójnymi pedałami oraz jazdy na manual lub automat. Pakiet 10 godzin dodaje plan lekcji i darmową jazdę próbną. Kurs intensywny obejmuje 20+ godzin w 1–2 tygodnie, wsparcie teoretyczne i jazdę próbną — szybka droga do poziomu egzaminu.",
          },
          {
            question: "Czy mogę przejść z pojedynczych jazd na pakiet lub kurs intensywny?",
            answer:
              "Tak. Wielu kursantów zaczyna od pojedynczych lekcji, a potem przechodzi na pakiet 10 godzin lub kurs intensywny. Wyjaśnimy różnicę w godzinach lub kosztach przed kontynuacją.",
          },
          {
            question: "Jak zarezerwować i zapłacić?",
            answer:
              "Skontaktuj się online, telefonicznie, e-mailem lub przez WhatsApp. Warunki płatności ustalamy przy rezerwacji pierwszej jazdy lub pakietu — zapytaj o aktualne opcje przy zapytaniu.",
          },
        ],
      },
    },
    aboutPage: {
      title: "O szkole jazdy MSA",
      subtitle: "Nauka w Peterborough z naciskiem na kursanta.",
      ownerHeading: "Twój instruktor",
      instructor: {
        name: "Instruktor MSA",
        role: "Zatwierdzony przez DVSA · Manual i automat",
        initials: "MS",
        blurb:
          "Jeden stały instruktor — jasny feedback po każdej jeździe, bez rotacji jak w call centerze.",
      },
      achievementsHeading: "Kamienie milowe",
      successHeading: "Historia sukcesu",
      p1: "MSA Driving School Peterborough ma sprawić, by nauka jazdy była spokojna, przejrzysta i skuteczna. Plan lekcji uwzględnia Twoje tempo — bez sztampowego programu na siłę.",
      p2: "Niezależnie, czy wolisz krótsze jazdy regularnie, czy kurs intensywny, dostaniesz szczery feedback, realistyczne próby i trasy zbliżone do warunków DVSA w Peterborough.",
      listTitle: "Nasze zasady",
      beliefs: [
        "Pewność wynika ze zrozumienia — tłumaczymy dlaczego, nie tylko jak.",
        "Bezpieczeństwo jest priorytetem — podwójne pedały i nawyki defensywne od pierwszej jazdy.",
        "Kontakt się liczy — telefon, e-mail lub WhatsApp.",
      ],
      faq: {
        title: "O nas — FAQ",
        subtitle: "Kim jesteśmy i jak pracujemy.",
        items: [
          {
            question: "Czy jesteście zatwierdzeni przez DVSA?",
            answer:
              "Tak. Naukę prowadzi instruktor z pełnymi kwalifikacjami i zatwierdzeniem DVSA.",
          },
          {
            question: "Czy będę miał tego samego instruktora?",
            answer:
              "Tak — jeden stały instruktor, spójny postęp i styl nauki.",
          },
          {
            question: "Jaki obszar obejmujecie?",
            answer:
              "Peterborough i okolice. Miejsce odbioru ustalamy przy rezerwacji.",
          },
          {
            question: "Kiedy mogę zacząć?",
            answer:
              "Zależy od wolnych terminów — napisz preferowane dni, zaproponujemy najbliższy slot.",
          },
        ],
      },
    },
    bookingPage: {
      badge: "Zarezerwuj termin",
      title: "Umów jazdę",
      subtitle:
        "Wypełnij formularz poniżej, a potwierdzimy preferowany termin w ciągu 24 godzin. Możesz też napisać do nas od razu na WhatsApp.",
      formTitle: "Formularz rezerwacji",
      formName: "Imię i nazwisko",
      formPhone: "Numer telefonu",
      formEmail: "Adres e-mail",
      formLessonType: "Rodzaj kursu",
      formLessonTypePlaceholder: "Wybierz rodzaj kursu",
      lessonTypeOptions: [
        { value: "beginner", label: "Lekcje dla początkujących" },
        { value: "intensive", label: "Kurs intensywny" },
        { value: "refresher", label: "Jazdy doszkalające" },
        { value: "testPrep", label: "Przygotowanie do egzaminu" },
        { value: "passPlus", label: "Pass Plus" },
      ],
      formTransmission: "Skrzynia biegów",
      formTransmissionPlaceholder: "Wybierz skrzynię",
      transmissionOptions: [
        { value: "manual", label: "Manualna" },
        { value: "automatic", label: "Automatyczna" },
      ],
      formPreferredDay: "Preferowany dzień",
      formPreferredDayPlaceholder: "Dowolny dzień",
      preferredDayOptions: [
        { value: "any", label: "Dowolny dzień" },
        { value: "monday", label: "Poniedziałek" },
        { value: "tuesday", label: "Wtorek" },
        { value: "wednesday", label: "Środa" },
        { value: "thursday", label: "Czwartek" },
        { value: "friday", label: "Piątek" },
        { value: "saturday", label: "Sobota" },
        { value: "sunday", label: "Niedziela" },
      ],
      formPreferredTime: "Preferowana pora",
      formPreferredTimePlaceholder: "Dowolna pora",
      preferredTimeOptions: [
        { value: "any", label: "Dowolna pora" },
        { value: "morning", label: "Rano (8:00–12:00)" },
        { value: "afternoon", label: "Popołudnie (12:00–17:00)" },
        { value: "evening", label: "Wieczór (17:00–20:00)" },
      ],
      formExperience: "Twoje doświadczenie",
      formExperiencePlaceholder: "Wybierz poziom",
      experienceOptions: [
        { value: "complete-beginner", label: "Kompletny początkujący — nigdy nie prowadziłem/am" },
        { value: "some-experience", label: "Mam trochę doświadczenia — bez egzaminu" },
        { value: "test-date", label: "Mam termin egzaminu / wcześniej niezdany" },
        { value: "licence-refresher", label: "Mam prawo jazdy — potrzebuję doszkolenia" },
      ],
      formNotes: "Dodatkowe informacje",
      formNotesMinWords: "Wpisz co najmniej 10 słów w dodatkowych informacjach.",
      formSubmit: "Wyślij prośbę o rezerwację",
      formSending: "Wysyłanie…",
      formSuccess:
        "Dziękujemy — otrzymaliśmy zgłoszenie i potwierdzimy preferowany termin w ciągu 24 godzin.",
      formError: "Coś poszło nie tak. Sprawdź dane i spróbuj ponownie.",
      whatsappTitle: "Wolisz WhatsApp?",
      whatsappBody:
        "Napisz do nas bezpośrednio, aby szybko potwierdzić termin i łatwo ustalić grafik.",
      whatsappCta: "Otwórz WhatsApp",
      sidebarTitle: "Dane kontaktowe",
      locationLabel: "Obszar",
      locationText: "Peterborough i okolice",
      successTitle: "Dziękujemy za zgłoszenie rezerwacji",
      successMessage:
        "Otrzymaliśmy zgłoszenie i potwierdzimy preferowany termin w ciągu 24 godzin.",
      successNote:
        "Aby dostać szybszą odpowiedź, napisz do nas bezpośrednio na WhatsApp — priorytetowo obsłużymy rezerwację.",
      successWhatsappCta: "Napisz na WhatsApp",
    },
    contactPage: {
      title: "Kontakt i zapytania",
      subtitle:
        "Zapytaj o wolne terminy, pakiety lekcji lub kurs intensywny. Odpowiadamy tak szybko, jak to możliwe.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Napisz na WhatsApp",
      openingHours: {
        title: "Godziny otwarcia",
        todayLabel: "Dziś",
        rows: [
          {
            key: "monday",
            label: "Poniedziałek",
            hours: "8:00am – 8:00pm",
            weekday: 1,
          },
          {
            key: "tuesday",
            label: "Wtorek",
            hours: "8:00am – 8:00pm",
            weekday: 2,
          },
          {
            key: "wednesday",
            label: "Środa",
            hours: "8:00am – 8:00pm",
            weekday: 3,
          },
          {
            key: "thursday",
            label: "Czwartek",
            hours: "8:00am – 8:00pm",
            weekday: 4,
          },
          {
            key: "friday",
            label: "Piątek",
            hours: "8:00am – 8:00pm",
            weekday: 5,
          },
          {
            key: "saturday",
            label: "Sobota",
            hours: "8:00am – 6:00pm",
            weekday: 6,
          },
          {
            key: "sunday",
            label: "Niedziela",
            hours: "10:00am – 4:00pm",
            weekday: 0,
          },
        ],
      },
      formTitle: "Wyślij wiadomość",
      formName: "Imię i nazwisko",
      formSubject: "Temat",
      formSubjectPlaceholder: "Wybierz temat",
      formSubjectOptions: [
        { value: "book-lesson", label: "Umów lekcję" },
        { value: "price-inquiry", label: "Zapytanie o cenę" },
        { value: "availability", label: "Dostępność" },
        { value: "other", label: "Inne" },
      ],
      formEmail: "E-mail",
      formPhone: "Telefon (opcjonalnie)",
      formMessage: "Wiadomość",
      formMessageMinWords: "Wpisz co najmniej 10 słów w wiadomości.",
      formSubmit: "Wyślij zapytanie",
      formSending: "Wysyłanie…",
      formSuccess: "Dziękujemy — otrzymaliśmy wiadomość i wkrótce się odezwiemy.",
      formError: "Coś poszło nie tak. Spróbuj ponownie lub zadzwoń bezpośrednio.",
      faq: {
        title: "FAQ — kontakt",
        subtitle: "Kontakt i kolejne kroki.",
        items: [
          {
            question: "Jak szybko odpowiadacie?",
            answer:
              "Staramy się odpowiadać jak najszybciej — często tego samego dnia w dni robocze. Pilne sprawy: telefon lub WhatsApp.",
          },
          {
            question: "Co wpisać w wiadomości?",
            answer:
              "Imię, telefon, manual lub automat oraz preferowane dni lub godziny.",
          },
          {
            question: "Czy mogę zarezerwować tylko telefonicznie?",
            answer:
              "Tak. Telefon, e-mail, WhatsApp lub formularz na tej stronie.",
          },
          {
            question: "Skąd zaczynają się lekcje?",
            answer:
              "Odbiór w Peterborough — ustalamy przy rezerwacji. Mapę zasięgu zobaczysz poniżej.",
          },
        ],
      },
    },
    notFoundPage: {
      code: "404",
      title: "Zły skręt",
      subtitle: "Ta strona nie istnieje lub została przeniesiona.",
      back: "Wróć",
      home: "Strona główna",
    },
    common: {
      manualAuto: "Manual i automat",
      allAreas: "Całe Peterborough",
      readMore: "Czytaj więcej",
      learnMore: "Dowiedz się więcej",
      readAbout: "Poznaj naszą historię",
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}
