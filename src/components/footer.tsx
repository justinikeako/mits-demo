import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="space-y-16  px-6 pb-8 pt-12  2xl:container sm:px-8 md:px-12 lg:px-16">
        <nav className="flex flex-col justify-between gap-8 md:gap-24 lg:flex-row">
          <Image
            width="138"
            height="80"
            src="/mits-logo-ext.svg"
            alt="Mona Information Technology Services"
          />

          <dl className="flex flex-col flex-wrap gap-12 lg:flex-row">
            <div className="w-64 space-y-4">
              <dt className="font-bold">Hotspot Locations</dt>
              <div className="aspect-video bg-gray-300" />
            </div>

            <div className="max-w-64 space-y-4">
              <dt className="font-bold">M.I.T.S.</dt>
              <div className="space-y-1">
                <dd className="text-sm">News & Events</dd>
                <dd className="text-sm">Our Services</dd>
                <dd className="text-sm">About M.I.T.S.</dd>
                <dd className="text-sm">Policies</dd>
                <dd className="text-sm">FAQ</dd>
                <dd className="text-sm">Contact</dd>
                <dd className="text-sm">Live Support</dd>
                <dd className="text-sm">Quick Reference</dd>
                <dd className="text-sm">Join M.I.T.S</dd>
              </div>
            </div>

            <div className="max-w-64 space-y-4">
              <dt className="font-bold">Forms</dt>
              <div className="space-y-1">
                <dd className="text-sm">Software Requisition</dd>
                <dd className="text-sm">M.I.T.S. Service Request Form</dd>
                <dd className="text-sm">.jm Domain Registration</dd>
                <dd className="text-sm">Access Requests</dd>
              </div>
            </div>

            <div className="max-w-64 space-y-4">
              <dt className="font-bold">Contact Us</dt>
              <dd className="text-sm">
                Mona Information Technology Services
                <br />
                The University of the West Indies <br /> Mona, Jamaica
                <br />
                <br />
                Open 8 - 4 on Mon - Fri
                <br />
                <br />
                Tel: <Link href="tel:8769272148">(876) 927-2148</Link>
                <br />
                Fax: <Link href="tel:8769270997">(876) 927-0997</Link>
              </dd>
            </div>
          </dl>
        </nav>

        <div className="flex justify-between text-xs">
          <p>
            Mona Information Technology Services
            <br />
            The University of the West Indies
          </p>

          <div className="flex gap-1">
            <Link href="/disclamer">Disclamer</Link>

            <div className="block h-4 w-px bg-current" />
            <Link href="/privacy-statement">Privacy Statement</Link>
          </div>

          <p className="text-right">
            &copy; 2004 - 2024
            <br />
            <Link href="http://www.mona.uwi.edu">http://www.mona.uwi.edu</Link>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
