import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { Button } from "./button";
import { Icon } from "./icon";

export function Header() {
  return (
    <header className="contents">
      <div className="relative z-[41] bg-white/90 ring-1 ring-black/5">
        <div className="flex min-h-20 flex-wrap items-center justify-between gap-x-4 px-6 2xl:container max-sm:py-4 sm:px-8 md:px-12 lg:px-16">
          <Image
            src="/uwi-logo.svg"
            alt="The University of the West Indies Mona Jamaica"
            width={423}
            height={64}
            className="h-16 w-auto"
          />

          <p>Other Campuses</p>
        </div>
      </div>

      <nav className="sticky top-0 z-40 h-16 bg-white/90 ring-1 ring-black/5 backdrop-blur">
        <div className="flex h-full items-center justify-between px-6 2xl:container sm:px-8 md:px-12 lg:px-16">
          <ul className="flex flex-1 gap-8">
            <Link href="/">
              <Image
                width="138"
                height="80"
                src="/mits-logo.svg"
                alt="Homepage"
                className="h-5 w-auto"
              />
            </Link>
            <NavLink href="/news">News &amp; events</NavLink>
            <NavLink href="#services">Our Services</NavLink>
            <NavLink href="#about">About M.I.T.S</NavLink>
            <NavLink href="/policies">Policies</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>

          <Button
            intent="secondary"
            color="amber"
            className="z-10 max-lg:hidden"
            asChild
          >
            <Link href="/chat">
              <span className="size-2 rounded-full bg-amber-600 before:block before:size-full before:animate-ping before:rounded-full before:bg-amber-600/75" />
              <span className="leading-cap">Live Support</span>
              <Icon name="support_agent" />
            </Link>
          </Button>

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
      <Link
        {...props}
        className="-mx-2 -my-1 text-nowrap px-2 py-1 max-lg:hidden"
      />
    </li>
  );
}
