import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";

export default async function Page() {
  return (
    <main>
      <div className="absolute top-0 -z-10 h-screen w-full">
        <Image src="decorative-background.svg" alt="" fill aria-hidden />
      </div>
      <section className="flex flex-col items-center px-16 py-24 2xl:container">
        <p>Mona Information Technology Services</p>
        <h1 className="text-7xl">How can we help you today?</h1>

        <div className="border-1 mt-10 flex rounded-xl border border-gray-400 py-1 pl-4 pr-1 text-lg shadow-sm outline-2 -outline-offset-1 outline-blue-600 has-[input:focus]:outline">
          <input
            type="text"
            name=""
            id=""
            placeholder="E.g. I need a projector for my next class"
            className="w-96 placeholder-gray-500 outline-none"
          />
          <Button size="lg">Get your Answer</Button>
        </div>
        <div className="mt-4 flex h-8 items-center gap-2 rounded-lg border border-amber-100 bg-amber-50 px-2 text-amber-950 ">
          <span className="size-2 rounded-full bg-amber-600 before:block before:size-full before:animate-ping before:rounded-full before:bg-amber-600 before:opacity-75" />
          <span>Scheduled SoSci Networking Maintenance</span>
          <div className="block h-6 w-px bg-amber-200" />
          <span className="font-bold">Learn More</span>
        </div>
      </section>

      <section className="bg space-y-16 bg-gray-100 px-16 py-16 2xl:container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">Featured News & Events</h2>
          <Link href="/news" className="font-bold text-blue-600">
            See All News
          </Link>
        </div>
        <ul className="grid grid-cols-3 grid-rows-2 gap-8">
          <li className="col-span-2 row-span-2 space-y-3">
            <div className="bg-3 aspect-video bg-gray-300"></div>
            <p className="text-amber-600">Staff Software</p>
            <h3 className="text-balance text-5xl">Introducing eTimesheets</h3>
            <p className="max-w-prose text-pretty">
              M.I.T.S. rolls out a new electronic timesheet (eTimesheet) system
              for managerial staff. This system allows employees to easily
              record their own eTimesheets which their managers/supervisors may
              approve them...
            </p>
          </li>
          <li className="col-span-1 row-span-1 space-y-1">
            <div className="bg-3 aspect-video bg-gray-300"></div>
            <p className="text-amber-600">Miscellaneous</p>
            <h3 className="text-balance text-2xl">
              MITS — An Enabler of Positive Transformation
            </h3>
          </li>
          <li className="col-span-1 row-span-1 space-y-1">
            <div className="bg-3 aspect-video bg-gray-300"></div>
            <p className="text-amber-600">Miscellaneous</p>
            <h3 className="text-balance text-2xl">
              Second Edition M.I.T.S. Newsletter
            </h3>
          </li>
        </ul>
      </section>

      <section className="bg space-y-16 px-16 py-16 2xl:container ">
        <h2 className="text-3xl">Our Services</h2>

        <dl className="flex gap-16">
          <div className="min-w-0 flex-1 space-y-16">
            <div className="space-y-2">
              <dt className="text-xl">Tech in Education</dt>
              <dd>Training Services</dd>
              <dd>Statistical Analysis</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Infrastructure Services</dt>
              <dd>IT Security</dd>
              <dd>Email Service</dd>
              <dd>MonaSecure VPN</dd>
              <dd>MonaSpeedtest</dd>
              <dd>Mona Virtual Desktop Services</dd>
              <dd>Building Access Control</dd>
              <dd>VOIP Phones</dd>
              <dd>Other Infrastructure Services</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Academic Staff and Student Support</dt>
              <dd>
                Programming and Administration of the Virtual Learning
                Environment
              </dd>
              <dd>Student Administration</dd>
              <dd>Time Tabling</dd>
              <dd>Computer Purchasing</dd>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-16">
            <div className="space-y-2">
              <dt className="text-xl">User Support Services</dt>
              <dd>General Information</dd>
              <dd>Service Level Agreement</dd>
              <dd>Service Catalogue</dd>
              <dd>Customer Service Questionnaire</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Software Admin</dt>
              <dd>Campus Software Listing</dd>
              <dd>Free and Open Source Software</dd>
              <dd>Licensing and Purchasing Considerations</dd>
              <dd>Software Acquisition and Management</dd>
              <dd>Software Request Form</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Research Computing</dt>
              <dd>About Sparks</dd>
              <dd>Slurm Quick Reference Guide</dd>
              <dd>Software</dd>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-16">
            <div className="space-y-2">
              <dt className="text-xl">Administration Support</dt>
              <dd>Document Management</dd>
              <dd>Financial Management</dd>
              <dd>Human Capital Management</dd>
              <dd>Facilities and Equipment Management</dd>
              <dd>Computer Purchasing</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Web Services</dt>
              <dd>General Information</dd>
              <dd>E-commerce</dd>
              <dd>Requesting Service</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xl">Multimedia Services</dt>
              <dd>Digital Content Creation</dd>
              <dd>Multimedia Engineering</dd>
            </div>
          </div>
        </dl>
      </section>

      <section className="bg space-y-16 bg-gray-100 px-16 py-16 2xl:container">
        <h2 className="text-3xl">About M.I.T.S.</h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-12">
          <div className="col-span-2 row-span-2 flex flex-col justify-between gap-12">
            <h3 className="text-pretty text-2xl !leading-[1.1] md:text-3xl lg:text-4xl xl:text-5xl">
              Driving Technological Advancement Across Campus: Enhancing
              Education, Administrative Efficiency, and Community Engagement
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
          <div className="col-span-1 row-span-2 bg-gray-300"></div>
        </div>

        <Button>Meet M.I.T.S. Leadership</Button>
      </section>

      <section className="flex gap-8 px-16 py-16 2xl:container">
        <h2 className="flex-1 text-3xl">Frequently Asked Questions</h2>
        <dl className="flex-1 space-y-8">
          <div className="space-y-2">
            <dt className="text-xl">General (1)</dt>
            <dd className="">Who do I call if I have an issue?</dd>
          </div>

          <div className="space-y-2">
            <dt className="text-xl">Managed Printing Services (14)</dt>
            <dd className="">What are Managed Print Services (MPS)?</dd>
            <dd className="">What are The UWIs goals in adopting MPS?</dd>
            <dd className="">
              Wasn&apos;t the campus in a previous MPS agreement?
            </dd>
            <dd className="">Who is the new provider?</dd>
            <dd className="">
              What does the new arrangement mean for my department?
            </dd>
            <dd className="">What does the new arrangement mean for me?</dd>
            <dd className="">
              But my job function requires me to print high volumes, what do I
              do?
            </dd>
            <dd className="">Can you explain how the quota system works?</dd>
            <dd className="">
              What are the default policies in place for printing?
            </dd>
            <dd className="">How do I check my quota?</dd>
            <dd className="">
              I have a personal printer, how does this affect me?
            </dd>
            <dd className="">
              My department owns a printer, how does this impact us?
            </dd>
            <dd className="">How will toner be delivered?</dd>
            <dd className="">How do I report a problem with a printer?</dd>
          </div>

          <div className="space-y-2">
            <dt className="text-xl">PeopleSoft (2)</dt>
            <dd className="">How can I get training for PeopleSoft?</dd>
            <dd className="">How do I get access to PeopleSoft?</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
