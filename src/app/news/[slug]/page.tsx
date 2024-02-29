/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Image from "next/image";
import { PageSection } from "~/components/page-section";
import { drupal } from "~/lib/drupal";
import { absoluteUrl } from "~/lib/utils";
import { JSDOM } from "jsdom";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await drupal.getResource("node--article", params.slug, {
    params: { include: "field_image,uid" },
  });

  const articleBody = article.body.processed;

  const replaceImagePaths = (htmlString: string) => {
    // Create a virtual DOM using jsdom
    const dom = new JSDOM(htmlString);
    const doc = dom.window.document;

    // Select all img tags
    const imgElements = doc.querySelectorAll("img");

    // Update src attribute with absolute URLs
    imgElements.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      const absoluteSrc = absoluteUrl(currentSrc!); // Replace this with your function
      img.setAttribute("src", absoluteSrc);
    });

    // Serialize the modified HTML back to a string
    const modifiedHtmlString = dom.serialize();

    return modifiedHtmlString;
  };

  return (
    <PageSection>
      <div className="mx-auto max-w-prose space-y-8">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        {article.field_image && (
          <figure>
            <Image
              src={absoluteUrl(article.field_image.uri.url)}
              width={768}
              height={400}
              alt={article.field_image.resourceIdObjMeta.alt}
              priority
            />
            {article.field_image.resourceIdObjMeta.title && (
              <figcaption className="py-2 text-center text-sm text-gray-600">
                {article.field_image.resourceIdObjMeta.title}
              </figcaption>
            )}
          </figure>
        )}

        {articleBody && (
          <div
            dangerouslySetInnerHTML={{
              __html: replaceImagePaths(articleBody),
            }}
            className="prose mt-6 max-w-prose leading-loose"
          />
        )}
      </div>
    </PageSection>
  );
}
