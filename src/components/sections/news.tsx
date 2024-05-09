/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Link from "next/link";
import { PageSection, SectionHeading } from "../page-section";
import { drupal } from "~/lib/drupal";
import type { DrupalNode } from "next-drupal";
import { absoluteUrl } from "~/lib/utils";
import Image from "next/image";

export async function NewsSection() {
  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--article",
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]":
          "title,path,field_image,field_description,field_tags,uid,created",
        include: "field_image,field_tags,uid",
        sort: "created",
      },
    },
  );

  return (
    <PageSection className="space-y-16" id="news">
      <div className="flex items-center justify-between">
        <SectionHeading>Featured News & Events</SectionHeading>
        <Link
          href="/news"
          className="text-sm font-bold text-blue-800 md:text-base"
        >
          See All
        </Link>
      </div>

      <ul className="grid auto-rows-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li className="relative space-y-3 sm:col-span-2 lg:row-span-2">
          <div className="relative flex aspect-[3/1] items-center justify-center bg-gray-300">
            <Image
              className="object-cover object-right"
              src={absoluteUrl(nodes[0]?.field_image.uri.url)}
              alt={nodes[0]?.field_image.resourceIdObjMeta.alt}
              // width={nodes[0]?.field_image.resourceIdObjMeta.width}
              // height={nodes[0]?.field_image.resourceIdObjMeta.height}
              fill
            />
          </div>
          <p className="text-amber-600">
            {(nodes[0]?.field_tags as { name: string }[]).map(
              (tag) => tag.name,
            )}
          </p>
          <h3 className="text-balance text-3xl">
            <Link
              href={"/news/" + nodes[0]?.id}
              className="before:absolute before:inset-0 before:block"
            >
              {nodes[0]?.title}
            </Link>
          </h3>
          <p className="max-w-prose text-pretty">
            {nodes[0]?.field_description}
          </p>
        </li>
        <li className="relative col-span-1 row-span-1 space-y-1">
          <div className="relative aspect-[3/1] bg-gray-300">
            <Image
              className="object-cover"
              src={absoluteUrl(nodes[1]?.field_image.uri.url)}
              alt={nodes[1]?.field_image.resourceIdObjMeta.alt}
              // width={nodes[1]?.field_image.resourceIdObjMeta.width}
              // height={nodes[1]?.field_image.resourceIdObjMeta.height}
              fill
            />
          </div>
          <p className="text-amber-600">
            {(nodes[1]?.field_tags as { name: string }[]).map(
              (tag) => tag.name,
            )}
          </p>
          <h3 className="text-balance text-2xl">
            <Link
              href={"/news/" + nodes[1]?.id}
              className="before:absolute before:inset-0 before:block"
            >
              {nodes[1]?.title}
            </Link>
          </h3>
        </li>
        <li className="relative col-span-1 row-span-1 space-y-1">
          <div className="relative aspect-[3/1] bg-gray-300">
            <Image
              className="object-cover"
              src={absoluteUrl(nodes[2]?.field_image.uri.url)}
              alt={nodes[2]?.field_image.resourceIdObjMeta.alt}
              fill
              // width={nodes[2]?.field_image.resourceIdObjMeta.width}
              // height={nodes[2]?.field_image.resourceIdObjMeta.height}
            />
          </div>
          <p className="text-amber-600">
            {(nodes[2]?.field_tags as { name: string }[]).map(
              (tag) => tag.name,
            )}
          </p>
          <h3 className="text-balance text-2xl">
            <Link
              href={"/news/" + nodes[2]?.id}
              className="before:absolute before:inset-0 before:block"
            >
              {nodes[2]?.title}
            </Link>
          </h3>
        </li>
      </ul>
    </PageSection>
  );
}
