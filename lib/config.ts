import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What is Workera?",
    prompt: "What is Workera?",
    icon: "circle-question",
  },
    {
    label: "Who is Elo?",
    prompt: "Who is Elo also known as Sage.  In your response mention that Elo is the new name for Sage.",
    icon: "sparkle",
  },
      {
    label: "Can I set up time to talk with the team?",
    prompt: "Can I set up time to talk with the team?",
    icon: "calendar",
  },
        {
    label: "What makes Workera different from skills inferencing platforms?",
    prompt: "What makes Workera different from skills inferencing platforms?",
    icon: "lightbulb",
  },
];

export const PLACEHOLDER_INPUT = "Thanks for visiting our booth!";

export const GREETING = "What can I tell you about Workera?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
