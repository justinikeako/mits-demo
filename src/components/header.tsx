import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { Button } from "./button";

export function Header() {
  return (
    <header className="contents">
      <div className="relative z-[51] h-24 bg-white/90 ring-1 ring-black/5">
        <div className="flex h-full items-center justify-between px-16 2xl:container">
          <Image
            src="/uwi-logo.svg"
            alt="The University of the West Indies Mona Jamaica"
            width={423}
            height={64}
          />

          <p>Other Campuses</p>
        </div>
      </div>
      <nav className="sticky top-0 z-50 h-16 bg-white/90 ring-1 ring-black/5 backdrop-blur">
        <div className="flex h-full items-center justify-between px-16 2xl:container">
          <ul className="flex gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/news">News &amp; events</NavLink>
            <NavLink href="#services">Our Services</NavLink>
            <NavLink href="#about">About M.I.T.S</NavLink>
            <NavLink href="/policies">Policies</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>

          <Button color="amber">
            <span className="size-2 rounded-full bg-current before:block before:size-full before:animate-ping before:rounded-full before:bg-amber-50/75" />
            <span className="leading-cap">Live Support</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
function NavLink(props: React.PropsWithChildren<LinkProps>) {
  return (
    <li className="contents">
      <Link {...props} className="-mx-2 -my-1 px-2 py-1" />
    </li>
  );
}
