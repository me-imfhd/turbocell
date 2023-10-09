import type { Config } from "tailwindcss";

import baseConfig from "@turbocell/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "../../apps/web/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
    "../../packages/shadcn/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
} satisfies Config;
