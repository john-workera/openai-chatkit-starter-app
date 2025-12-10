import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const DOMAIN_KEY =
  process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_KEY?.trim() ?? "";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Explain what Workera does in simple terms.",
    prompt: "Explain what Workera does in simple terms.",
    icon: "bolt",
  },
    {
    label: "What makes Workera different than other skills intelligence solutions?",
    prompt: "What makes Workera different than other skills intelligence solutions?",
    icon: "lightbulb",
  },
      {
    label: "What is Elo, Workera's AI Agent?",
    prompt: "What is Elo, Workera's AI Agent?",
    icon: "sparkle-double",
  },
];

export const PLACEHOLDER_INPUT = "Ask your questions about Workera here";

export const GREETING = "Welcome! What can I tell you about Workera?";

// lib/config.ts
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  // layout & shape
  density: "spacious",
  radius: "pill",

  // typography
  typography: {
    baseSize: 16,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
    fontSources: [
      { family: "Inter", src: "https://rsms.me/inter/font-files/Inter-Regular.woff2", weight: 400, style: "normal" },
      { family: "Inter", src: "https://rsms.me/inter/font-files/Inter-Medium.woff2",  weight: 500, style: "normal" },
      { family: "Inter", src: "https://rsms.me/inter/font-files/Inter-SemiBold.woff2",weight: 600, style: "normal" },
      { family: "Inter", src: "https://rsms.me/inter/font-files/Inter-Bold.woff2",    weight: 700, style: "normal" },
    ],
  },

  // colors
  color: {
    grayscale: {
      hue: 309,        // slightly cool neutral to pair with magenta
      tint: 8,
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      primary: "#943588", // Workera-friendly magenta/purple
      level: 3,           // stronger emphasis for buttons/links
    },
  },
});

