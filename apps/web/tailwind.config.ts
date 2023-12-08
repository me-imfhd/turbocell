import type { Config } from "tailwindcss";

import baseConfig from "@turbocell/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
} satisfies Config;
