"use client";

import { PageSection, SectionHeading } from "~/components/page-section";
import { useState } from "react";
import Link from "next/link";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("tech-in-education");

  const currentCategory = serviceCategories.find(
    (category) => category.id === activeCategory,
  );

  return (
    <PageSection className="space-y-8 sm:space-y-16">
      <SectionHeading>Our Services</SectionHeading>

      <div className="flex flex-col gap-8 sm:flex-row">
        <ul className="flex shrink-0 flex-wrap items-start gap-x-4 gap-y-2 sm:flex-col">
          {serviceCategories.map((category) => (
            <li
              key={category.name}
              className="relative flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 text-sm text-gray-700 hover:bg-gray-50 has-[input:checked]:border-blue-800 has-[input:checked]:bg-blue-50 has-[input:checked]:font-bold has-[input:checked]:text-blue-800"
            >
              <label htmlFor={category.id} className="absolute inset-0" />
              <input
                type="radio"
                name="category"
                className="hidden"
                id={category.id}
                value={category.id}
                checked={activeCategory === category.id}
                onChange={(e) => setActiveCategory(e.target.value)}
              />
              {category.name}
            </li>
          ))}
        </ul>

        <ul className="grid h-fit grid-cols-1 gap-8 lg:grid-cols-2">
          {currentCategory?.services.map((service, index) => (
            <li
              key={service.name}
              className="relative flex min-h-72 flex-col justify-between gap-8 rounded-md border border-gray-200 bg-gradient-to-t from-gray-50 p-4 text-sm text-gray-700 "
            >
              <span className="top-4 self-end text-5xl">0{index + 1}</span>

              <div className="space-y-1">
                <h3 className="text-xl font-semibold">
                  <Link
                    href={service.link}
                    className="before:absolute before:inset-0 before:block"
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className="">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}

function ServiceCategory({ category }: { category: ServiceCategories }) {
  return (
    <div className="space-y-2">
      <dt className="text-lg font-semibold md:text-xl">{category.name}</dt>
      {category.services.map((service) => (
        <dd key={service.name}>{service.name}</dd>
      ))}
    </div>
  );
}

// Represent services as an array of categories with an array of services
type ServiceCategories = {
  name: string;
  id: string;

  services: {
    name: string;
    description: string;
    link: string;
  }[];
};

const serviceCategories: ServiceCategories[] = [
  {
    id: "tech-in-education",
    name: "Tech in Education",
    services: [
      {
        name: "Training Services",
        description:
          "MITS offers diverse training services, including OurVLE and BigBlueButton support, digital literacy courses, and workshops on technology integration for faculty, staff, and students.",
        link: "https://www.mona.uwi.edu/mits/training-services",
      },
      {
        name: "Statistical Analysis",
        description:
          "MITS supports statistical analysis using SPSS for postgraduates, UWI staff, and external entities, aiding in data preparation, organization, and report generation to achieve research objectives.",
        link: "https://www.mona.uwi.edu/mits/statistical-analysis",
      },
    ],
  },
  {
    id: "infrastructure-services",
    name: "Infrastructure Services",
    services: [
      {
        name: "IT Security",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/information-technology-security",
      },
      {
        name: "Email Service",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/email-service",
      },
      {
        name: "MonaSecure VPN",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/monasecure-vpn",
      },
      {
        name: "MonaSpeedtest",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://speedtest.mona.uwi.edu/",
      },
      {
        name: "Mona Virtual Desktop Services",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/mona-vds",
      },
      {
        name: "Building Access Control",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/building-access-control",
      },
      {
        name: "VOIP Phones",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/voip-phones",
      },
      {
        name: "Other Infrastructure Services",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/other-infrastructure-services",
      },
    ],
  },
  {
    id: "academic-staff-and-student-support",
    name: "Academic Staff and Student Support",
    services: [
      {
        name: "Programming and Administration of the Virtual Learning Environment",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/programming-and-administration-virtual-learning-environment",
      },
      {
        name: "Student Administration",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/student-administration",
      },
      {
        name: "Time Tabling",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/time-tabling",
      },
      {
        name: "Computer Purchasing",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/computer-purchasing",
      },
    ],
  },
  {
    id: "user-support-services",
    name: "User Support Services",
    services: [
      {
        name: "General Information",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/user-support-services",
      },
      {
        name: "Service Level Agreement",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/service-level-agreement",
      },
      {
        name: "Service Catalogue",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/service-catalogue",
      },
      {
        name: "Customer Service Questionnaire",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/customer-service-questionnaire",
      },
    ],
  },
  {
    id: "software-admin",
    name: "Software Admin",
    services: [
      {
        name: "Campus Software Listing",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/campus-software-listing-0",
      },
      {
        name: "Free and Open Source Software",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/free-and-open-source-software",
      },
      {
        name: "Licensing and Purchasing Considerations",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/licensing-and-purchasing-considerations",
      },
      {
        name: "Software Acquisition and Management",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/software-acquisition-and-management",
      },
      {
        name: "Software Request Form",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/software-request-form",
      },
    ],
  },
  {
    id: "research-computing",
    name: "Research Computing",
    services: [
      {
        name: "About Sparks",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/about-scientific",
      },
      {
        name: "Slurm Quick Reference Guide",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/slum-quick-reference-guide",
      },
      {
        name: "Software",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/sparks-software",
      },
    ],
  },
  {
    id: "administration-support",
    name: "Administration Support",
    services: [
      {
        name: "Document Management",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/document-management",
      },
      {
        name: "Financial Management",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/financial-management",
      },
      {
        name: "Human Capital Management",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/human-capital-management",
      },
      {
        name: "Facilities and Equipment Management",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/facilities-and-equipment-management",
      },
      {
        name: "Computer Purchasing",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/computer-purchasing",
      },
    ],
  },
  {
    id: "web-services",
    name: "Web Services",
    services: [
      {
        name: "General Information",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/web-services",
      },
      {
        name: "E-commerce",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/e-commerce",
      },
      {
        name: "Requesting Service",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/web-services-requesting-service",
      },
    ],
  },
  {
    id: "multimedia-services",
    name: "Multimedia Services",
    services: [
      {
        name: "Digital Content Creation",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/digital-content-creation",
      },
      {
        name: "Multimedia Engineering",
        description:
          "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
        link: "https://www.mona.uwi.edu/mits/multimedia-engineering",
      },
    ],
  },
];
