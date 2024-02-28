import {} from "next";
import { DrupalNode } from "next-drupal";

import { drupal } from "~/lib/drupal";
import { NodeArticle } from "~/components/node--article";
import { NodeBasicPage } from "~/components/node--basic-page";

const RESOURCE_TYPES = ["node--page", "node--article"];

export default async function NodePage(params: { slug: string }) {
  const resource = await getResource(params.slug);
  const path = await drupal.translatePath(params.slug);

  if (resource.type === "node--page") return <NodeBasicPage node={resource} />;
  else if (resource.type === "node--article")
    return <NodeArticle node={resource} />;
  else return null;
}

export async function generateMetadata(params: { slug: string }) {
  const resource = await getResource(params.slug);

  return {
    title: resource.title,
  };
}
export async function generateStaticParams() {
  return await drupal.getPathsFromContext(RESOURCE_TYPES, {});
}

export async function getResource(slug: string) {
  const path = await drupal.translatePath(slug);

  const type = path.jsonapi?.resourceName;

  let params = {};
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    };
  }

  const resource = await drupal.getResource<DrupalNode>(type!, slug, {
    params,
  });

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi?.individual}`);
  }

  return resource;
}
