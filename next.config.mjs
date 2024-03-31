/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import { guider } from "@neato/guider";

const withGuider = guider({
  // The location of your theme file, created in the next step
  themeConfig: "./src/theme.config.tsx",
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withGuider(config);
