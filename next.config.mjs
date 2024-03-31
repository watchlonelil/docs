/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import { guider } from "@neato/guider";
import million from "million/compiler";

const withGuider = guider({
  // The location of your theme file, created in the next step
  themeConfig: "./src/theme.config.tsx",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

const millionConfig = {
  auto: true, // if you're using RSC: auto: { rsc: true },
};

export default million.next(
  //@ts-expect-error
  withGuider(nextConfig),
  millionConfig
);
