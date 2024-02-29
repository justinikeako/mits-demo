import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { Button } from "./button";
import { Icon } from "./icon";

export function Header() {
  return (
    <header className="contents">
      <div className="relative z-[51]  bg-white/90 ring-1 ring-black/5">
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 2xl:container sm:px-8 md:px-12 lg:h-24 lg:px-16">
          <Image
            src="/uwi-logo.svg"
            alt="The University of the West Indies Mona Jamaica"
            width={423}
            height={64}
            className="h-12 w-auto"
          />

          <p>Other Campuses</p>
        </div>
      </div>

      <nav className="sticky top-0 z-50 h-16 bg-white/90 ring-1 ring-black/5 backdrop-blur">
        <div className="flex h-full items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
          <ul className="flex flex-1 gap-8 max-lg:hidden">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/news">News &amp; events</NavLink>
            <NavLink href="#services">Our Services</NavLink>
            <NavLink href="#about">About M.I.T.S</NavLink>
            <NavLink href="/policies">Policies</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>

          <Button color="amber" className="z-10 max-lg:hidden">
            <span className="size-2 rounded-full bg-current before:block before:size-full before:animate-ping before:rounded-full before:bg-amber-50/75" />
            <span className="leading-cap">Live Support</span>
            <Icon name="support_agent" />
          </Button>

          <Image
            width="138"
            height="80"
            src="/mits-logo.svg"
            alt="Mona Information Technology Services"
            className="h-5 w-auto lg:hidden"
          />

          <Button intent="tertiary" iconOnly className="z-10 lg:hidden">
            <Icon name="menu" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
function NavLink(props: React.PropsWithChildren<LinkProps>) {
  return (
    <li className="contents">
      <Link {...props} className="-mx-2 -my-1 text-nowrap px-2 py-1" />
    </li>
  );
}
