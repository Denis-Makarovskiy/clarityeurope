/**
 * Production copy, transcribed verbatim from CONTENT.md (owner-approved
 * source of truth for the Clarity Europe brand).
 *
 * Do not edit copy here without updating CONTENT.md (or vice versa) — this
 * file is the single runtime source of truth for section text so strings
 * never get scattered/duplicated across components.
 *
 * Hard rule (CONTENT.md): no addiction vocabulary anywhere on this site —
 * no "addiction", "rehab", "substance", "detox", "sobriety", "recovery"
 * (including in slugs, alt text, metadata and JSON-LD). The offer is
 * strictly mental health: depression, anxiety, burnout, trauma, bipolar
 * disorder, eating disorders. Never claim guaranteed outcomes, cure,
 * specific success rates, or "admission in 24/48 hours".
 *
 * The "Scenarios" section and the "/professionals" page from the sister
 * site (European Recovery Access) do not exist on this brand — removed
 * entirely per the build brief, not replaced.
 */

export interface NavContent {
  items: string[];
  utility: string;
  cta: string;
}

export const nav: NavContent = {
  items: ["Why Europe", "How It Works", "What's Included", "FAQ"],
  utility: "100% Confidential",
  cta: "Check Availability",
};

export interface HeroContent {
  eyebrow: string;
  headline: string;
  body: string;
  proofBullets: string[];
  primaryCta: string;
  secondaryCta: string;
  microcopy: string;
}

export const hero: HeroContent = {
  eyebrow: "PRIVATE MENTAL HEALTH TREATMENT PLACEMENT IN EUROPE",
  headline: "A quiet place to get well.",
  body: "Depression, anxiety and burnout rarely improve in the environment that produced them. We help clients from the United States and Canada identify suitable private European treatment programs, confirm availability and coordinate admission and travel — quickly and discreetly.",
  proofBullets: [
    "Private-pay admission without waiting lists.",
    "English-speaking coordination from first call to arrival.",
    "An ocean between treatment and your professional life.",
  ],
  primaryCta: "Check Availability",
  secondaryCta: "Call Us",
  microcopy: "Free initial consultation. No obligation. Completely confidential.",
};

export interface HeroFormContent {
  title: string;
  subtitle: string;
  fields: string[];
  relationshipOptions: string[];
  urgencyOptions: string[];
  submit: string;
  securityNote: string;
}

export const heroForm: HeroFormContent = {
  title: "Request a confidential consultation",
  subtitle: "Tell us a little about the situation. A coordinator will contact you to discuss the next step.",
  fields: ["Full name", "Phone number", "Email address", "Who needs support?", "How urgent is the situation?"],
  relationshipOptions: [
    "Myself",
    "My spouse or partner",
    "My child (adult)",
    "My parent",
    "A relative or friend",
    "A client (I am a professional)",
  ],
  urgencyOptions: ["As soon as possible", "Within a few weeks", "Planning ahead", "Just exploring"],
  submit: "Request My Consultation",
  securityNote: "Your information is handled confidentially and is used only to respond to your request.",
};

export const trustStrip: string[] = [
  "Independent placement service",
  "English-speaking coordination",
  "Private-pay access",
  "Serving clients in the US and Canada",
];

export interface WhyEuropeCard {
  title: string;
  body: string;
}

export interface WhyEuropeContent {
  heading: string;
  intro: string;
  cards: WhyEuropeCard[];
}

export const whyEurope: WhyEuropeContent = {
  heading: "Why clients choose treatment in Europe",
  intro:
    "Sometimes getting better requires stepping out of your life for a while — out of the office, the inbox, the family dynamics and the daily pressure that feed the condition.",
  cards: [
    {
      title: "Distance that protects",
      body: "Treatment far from your professional and social circles means nobody has to know. Discretion here is structural, not promised.",
    },
    {
      title: "Time to actually recover",
      body: "Residential programs give depression, anxiety and burnout what outpatient hours between meetings cannot: sustained, uninterrupted clinical attention.",
    },
    {
      title: "Faster access",
      body: "Private European programs may have availability within days, without the waiting lists common at well-known clinics at home.",
    },
    {
      title: "One coordinator",
      body: "We handle assessment logistics, program matching, travel, arrival and family communication, so you deal with one person.",
    },
  ],
};

export interface AssessmentStep1 {
  question: string;
  options: string[];
}
export interface AssessmentStep2 {
  question: string;
  options: string[];
}
export interface AssessmentStep3 {
  question: string;
  options: string[];
  underageNote: string;
}
export interface AssessmentStep4 {
  question: string;
  fields: string[];
  consent: string;
  submit: string;
}

export interface AssessmentContent {
  heading: string;
  body: string;
  confidentialityNote: string;
  step1: AssessmentStep1;
  step2: AssessmentStep2;
  step3: AssessmentStep3;
  step4: AssessmentStep4;
  confirmation: { title: string; body: string };
  schedulerCta: string;
}

export const assessment: AssessmentContent = {
  heading: "Is treatment in Europe a realistic option for you?",
  body: "Answer four short questions. We will review the information and explain which options may be appropriate.",
  confidentialityNote: "Your answers are private and do not commit you to anything.",
  step1: {
    question: "What best describes the situation?",
    options: [
      "Depression",
      "Anxiety or panic",
      "Burnout or exhaustion",
      "Trauma or PTSD",
      "Bipolar disorder",
      "An eating disorder",
      "Several of these",
      "I'd rather discuss by phone",
    ],
  },
  step2: {
    question: "How urgent is it?",
    options: [
      "I need help as soon as possible",
      "Within the next few weeks",
      "I am planning ahead",
      "I am exploring for someone else",
    ],
  },
  step3: {
    question: "How old is the person who needs support?",
    options: ["Under 18", "18–25", "26–40", "41–60", "Over 60"],
    underageNote: "Programs for minors require separate clinical and legal review.",
  },
  step4: {
    question: "Where should we contact you?",
    fields: ["Country", "Full name", "Phone", "Email", "Best time to call"],
    consent: "I agree to be contacted about this request. This is not emergency care.",
    submit: "Request My Consultation",
  },
  confirmation: {
    title: "Your request has been received.",
    body: "A coordinator will review the information and contact you using the details provided.",
  },
  schedulerCta: "Choose a Call Time",
};

export interface HowItWorksStep {
  title: string;
  body: string;
}

export interface HowItWorksContent {
  heading: string;
  steps: HowItWorksStep[];
}

export const howItWorks: HowItWorksContent = {
  heading: "A clear path from first call to admission",
  steps: [
    {
      title: "Confidential consultation",
      body: "We listen to what is happening and explain whether a European program may be realistic.",
    },
    {
      title: "Initial assessment",
      body: "We gather the clinical, practical and travel information needed to identify appropriate options.",
    },
    {
      title: "Program matching",
      body: "Suitable programs based on clinical needs, setting, budget and availability.",
    },
    {
      title: "Travel coordination",
      body: "Documentation, flights, arrival instructions, airport pickup and private transfer.",
    },
    {
      title: "Admission and handoff",
      body: "The receiving program completes its admission process and its clinical team takes over.",
    },
  ],
};

export interface IncludedContent {
  heading: string;
  items: string[];
  note: string;
}

export const included: IncludedContent = {
  heading: "What we coordinate",
  items: [
    "Initial case review",
    "Program matching",
    "Availability confirmation",
    "Medical-record coordination",
    "Travel planning",
    "Airport pickup and private transfer",
    "Family communication and aftercare planning",
  ],
  note: "Clinical services are provided by the selected treatment program, not by Clarity Europe.",
};

export interface TrustProcessItem {
  title: string;
  body: string;
}

export interface TrustProcessContent {
  heading: string;
  items: TrustProcessItem[];
}

/** "Trust section" in CONTENT.md. */
export const trustProcess: TrustProcessContent = {
  heading: "Built for people who need clarity quickly",
  items: [
    {
      title: "One point of contact",
      body: "You do not have to coordinate several unfamiliar providers at once.",
    },
    {
      title: "Options based on fit",
      body: "Clinical needs, urgency, budget, setting and travel requirements all weigh in.",
    },
    {
      title: "Clear costs before commitment",
      body: "You receive the available program and coordination costs in writing before deciding.",
    },
    {
      title: "Support across time zones",
      body: "Communication is arranged for clients in the United States and Canada.",
    },
  ],
};

export interface SuitabilityContent {
  heading: string;
  suitableList: string[];
  heading2: string;
  unsuitableList: string[];
  emergencyNote: string;
}

export const suitability: SuitabilityContent = {
  heading: "When this service may help",
  suitableList: [
    "You need more than an hour a week of outpatient care.",
    "Local programs have waiting lists, or feel too close to home.",
    "Privacy matters to your career or family situation.",
    "The daily environment is part of what keeps you unwell.",
    "Private-pay care is possible.",
  ],
  heading2: "When another first step is necessary",
  unsuitableList: [
    "There is an immediate risk of harm to yourself or others.",
    "Urgent medical stabilization is needed before travel.",
    "The person cannot legally travel.",
    "Involuntary treatment is being sought.",
  ],
  emergencyNote:
    "In an immediate crisis, call 911, or call or text 988 — the Suicide & Crisis Lifeline (US and Canada). This website is not a crisis resource.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "How quickly can admission happen?",
    answer:
      "Availability depends on clinical needs, travel readiness and current program capacity. In suitable cases, admission may be organized within days.",
  },
  {
    question: "How much does treatment cost?",
    answer:
      "Most private European residential programs fall between €3,000 and €30,000 per month, depending on the program, level of care, accommodation and length of stay. Coordination fees are separate and quoted upfront. You receive exact costs in writing before any commitment.",
  },
  {
    question: "Does insurance cover it?",
    answer:
      "Most international placements are private-pay. Some clients later request reimbursement from their insurer, but coverage is not guaranteed and should be confirmed directly with the insurer.",
  },
  {
    question: "Can I keep working during treatment?",
    answer:
      "Some programs can accommodate a limited remote-work arrangement where the clinical team considers it appropriate; others advise a full pause. Tell us what you need and we will match accordingly.",
  },
  {
    question: "Will anyone find out?",
    answer:
      "Discretion is built into the format: treatment takes place far from your professional and social circles, communication runs through a single coordinator, and European programs operate under strict privacy law.",
  },
  {
    question: "Can my family be involved?",
    answer:
      "Many programs provide scheduled family communication or family sessions, subject to your consent and the program's clinical policy.",
  },
  {
    question: "What about my current medication?",
    answer:
      "The receiving program's physicians manage all medication decisions after assessment. With your consent we coordinate the transfer of records and prescriptions information.",
  },
  {
    question: "What conditions do partner programs work with?",
    answer:
      "Depression, anxiety disorders, burnout and stress-related conditions, trauma, bipolar disorder and eating disorders, among others. Suitability is always decided by the program's clinical team after assessment.",
  },
  {
    question: "How long are programs?",
    answer:
      "Length varies by program and clinical recommendation; many residential stays run several weeks, with aftercare planned before departure.",
  },
  {
    question: "Do I need a visa?",
    answer:
      "US and Canadian passport holders generally do not need a visa for short European stays. We walk you through the practicalities, and the receiving program confirms specifics for its country.",
  },
];

export interface FinalCtaContent {
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  microcopy: string;
}

export const finalCta: FinalCtaContent = {
  headline: "You don't have to wait for a breaking point.",
  body: "We help you understand the options and move quickly when you decide the time is right.",
  primaryCta: "Check Availability",
  secondaryCta: "Call Us",
  microcopy: "Free initial consultation. No obligation.",
};

export interface FooterContent {
  descriptor: string;
  disclaimer: string;
  companyLine1: string;
  companyLine2: string;
}

export const footer: FooterContent = {
  descriptor: "Independent placement and coordination service for private mental-health treatment in Europe.",
  disclaimer:
    "Clarity Europe is an independent placement and coordination service. It is not an emergency service and does not provide medical care. Program availability and admission depend on clinical suitability and provider capacity. In an immediate crisis, call 911, or call or text 988 (Suicide & Crisis Lifeline, US and Canada).",
  companyLine1:
    "Clarity Europe is a service of MK REHAB DOO, a limited liability company registered in Montenegro (reg. no. 5-1051097/002, PIB 03459586).",
  companyLine2: "Registered address: Vojina Katnića, ulaz C-14, stan 19, Podgorica, Montenegro.",
};
