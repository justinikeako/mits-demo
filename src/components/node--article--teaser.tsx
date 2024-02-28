import Image from "next/image";
import Link from "next/link";
import { DrupalNode } from "next-drupal";

import { absoluteUrl, formatDate } from "~/lib/utils";

interface NodeArticleTeaserProps {
  node: DrupalNode;
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  // console.log(node);

  return (
    <article {...props}>
      <Link href={"d"} className="no-underline hover:text-blue-600">
        <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
      </Link>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure className="my-4">
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={480}
            alt={node.field_image.resourceIdObjMeta.alt}
          />
        </figure>
      )}
      <Link
        href={"d"}
        className="inline-flex items-center rounded-full border border-gray-600 px-6 py-2 hover:bg-gray-100"
      >
        Read article
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
