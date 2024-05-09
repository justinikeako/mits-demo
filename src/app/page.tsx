import Image from "next/image";
import { Button } from "~/components/button";
import { Icon } from "~/components/icon";
import { PageSection, SectionHeading } from "~/components/page-section";
import { NewsSection } from "~/components/sections/news";
import { ServicesSection } from "~/components/sections/services";
import mitsSign from "../../public/mits-sign.jpg";
import Link from "next/link";
import { Suspense } from "react";
import { Footer } from "~/components/footer";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <>
      <main>
        <div className="absolute top-0 -z-10 h-screen w-full">
          <Image src="decorative-background.svg" alt="" fill aria-hidden />
        </div>

        {/* Hero */}
        <PageSection className="flex flex-col items-center py-24">
          <p className="text-center text-sm sm:text-base">
            Mona Information Technology Services
          </p>
          <h1 className="text-pretty text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            How can we help you today?
          </h1>

          <form
            action={async (data) => {
              "use server";
              const message = data.get("message")?.toString();

              // Navigate to the chat page with the input value
              redirect(`/chat?message=${message}`);
            }}
            className="border-1 mt-10 flex w-full rounded-xl border border-gray-400 py-1 pl-4 pr-1 text-sm shadow-sm outline-2 -outline-offset-1 outline-blue-800 has-[input:focus]:outline sm:w-fit sm:text-base md:text-lg"
          >
            <input
              type="text"
              name="message"
              id="message"
              placeholder="E.g. I need a projector for my next class"
              className="flex-1 placeholder-gray-500 outline-none sm:w-96"
            />
            <Button type="submit" className="md:hidden" iconOnly>
              <Icon name="arrow_right" />
            </Button>
            <Button type="submit" size="lg" className="max-md:hidden">
              <span>Get your Answer</span>
              <Icon name="arrow_right" />
            </Button>
          </form>

          <div className="mt-4 flex gap-4 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-950 md:py-1">
            <div className="-mr-2 flex h-5 items-center self-start">
              <div className="size-2 rounded-full bg-amber-600 before:block before:size-full before:animate-ping before:rounded-full before:bg-amber-600 before:opacity-75" />
            </div>

            <span className="text-balance">
              Scheduled SoSci Networking Maintenance
            </span>
            <div className="block w-px bg-amber-200" />
            <button className="text-nowrap font-bold">Learn More</button>
          </div>
        </PageSection>

        {/* News Section */}
        <Suspense>
          <NewsSection />
        </Suspense>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <PageSection className="space-y-16" id="about">
          <SectionHeading>About M.I.T.S.</SectionHeading>

          <div className="grid-auto-rows grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-12 lg:col-span-2 lg:row-span-2">
              <h3 className="text-pretty text-2xl !leading-[1.1] md:text-3xl lg:text-4xl xl:text-5xl">
                Driving innovation & efficiency in education & administration
                across campus and beyond.
              </h3>
              <p className="leading-relaxed">
                M.I.T.S. spearheads technological advancement at the Campus,
                overseeing enterprise systems, software, and infrastructure.
                Committed to enhancing education and administrative efficiency,
                the institution focuses on increasing awareness of ICT&apos;s
                transformative power. Goals include strengthening institutional
                memory, fostering continuous ICT learning, ensuring a secure
                infrastructure, and enhancing technical competencies. M.I.T.S.
                covers services such as network management, internet provision,
                user support, application development, and multimedia
                facilitation. The team plays a crucial role in keeping the IT
                infrastructure up-to-date and fostering linkages with the wider
                community for local and international outreach.
              </p>
            </div>
            <div className="relative row-start-1 aspect-[3/2] lg:col-span-1 lg:row-span-2 lg:aspect-auto">
              <Image
                src={mitsSign}
                fill
                className="object-contain"
                alt="M.I.T.S Building Sign"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild intent="primary">
              <Link href="https://notprimitive.com/hiremelol">
                Join Our Team
                <Icon name="arrow_right" />
              </Link>
            </Button>
            <Button asChild intent="secondary" color="gray">
              <Link href="https://www.mona.uwi.edu/mits/news/2018/09/mits-enabler-positive-transformation">
                Meet M.I.T.S. Leadership
              </Link>
            </Button>
          </div>
        </PageSection>

        {/* FAQ Section */}
        <PageSection className="flex flex-col gap-8 md:flex-row" id="faq">
          <SectionHeading className="md:flex-1">
            Frequently Asked Questions
          </SectionHeading>
          <dl className="flex-1 space-y-8">
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">General (1)</dt>
              <dd>Who do I call if I have an issue?</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Managed Printing Services (14)
              </dt>
              <dd>What are Managed Print Services (MPS)?</dd>
              <dd>What are The UWIs goals in adopting MPS?</dd>
              <dd>Wasn&apos;t the campus in a previous MPS agreement?</dd>
              <dd>Who is the new provider?</dd>
              <dd>What does the new arrangement mean for my department?</dd>
              <dd>What does the new arrangement mean for me?</dd>
              <dd>
                But my job function requires me to print high volumes, what do I
                do?
              </dd>
              <dd>Can you explain how the quota system works?</dd>
              <dd>What are the default policies in place for printing?</dd>
              <dd>How do I check my quota?</dd>
              <dd>I have a personal printer, how does this affect me?</dd>
              <dd>My department owns a printer, how does this impact us?</dd>
              <dd>How will toner be delivered?</dd>
              <dd>How do I report a problem with a printer?</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                PeopleSoft (2)
              </dt>
              <dd>How can I get training for PeopleSoft?</dd>
              <dd>How do I get access to PeopleSoft?</dd>
            </div>
          </dl>
        </PageSection>
      </main>

      <Footer />
    </>
  );
}
