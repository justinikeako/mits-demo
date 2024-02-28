import { DrupalNode } from "next-drupal";
import { NodeArticleTeaser } from "~/components/node--article--teaser";
import { drupal } from "~/lib/drupal";

export default async function Page() {
  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--article",
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    },
  );

  return (
    <>
      <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>

      {nodes?.length ? (
        <ul>
          {nodes.map((node) => (
            <li key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-4">No nodes found</p>
      )}
    </>
  );
}
