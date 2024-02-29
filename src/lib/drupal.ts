import { DrupalClient } from "next-drupal";
import { env } from "~/env";

export const drupal = new DrupalClient(env.NEXT_PUBLIC_DRUPAL_BASE_URL, {
  fetcher: (
    input: string | URL | globalThis.Request,
    init?: RequestInit,
  ): Promise<Response> => {
    return fetch(input, {
      cache: "default",
      // next: { revalidate: 60 * 60 * 24 },
      ...init,
    });
  },
});
