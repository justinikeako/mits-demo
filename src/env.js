import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NEXT_IMAGE_DOMAIN: z
      .string()
      .refine(
        (str) => !str.includes("dev.next-drupal.org"),
        "You forgot to change the default image domain. This is necessary for next/image to work properly.",
      ),
    OPENAI_API_KEY: z
      .string()
      .refine(
        (str) =>
          str !== "sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "You forgot to change the default OpenAI API key",
      ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_DRUPAL_BASE_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("https://dev.next-drupal.org"),
        "You forgot to change the default Drupal URL",
      ),
  },

  /**
   * You can't destructure `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destructure manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DRUPAL_BASE_URL: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
    NEXT_IMAGE_DOMAIN: process.env.NEXT_IMAGE_DOMAIN,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
