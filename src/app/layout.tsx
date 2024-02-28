import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { cn } from "~/lib/utils";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mona Information Technology Services",
  description:
    "Driving Technological Advancement Across Campus: Enhancing Education, Administrative Efficiency, and Community Engagement",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, "mx-auto max-w-screen-md px-6")}>
        <header>
          <div className="container mx-auto flex items-center justify-between py-6">
            <Link href="/" className="text-2xl font-semibold no-underline">
              Next.js for Drupal
            </Link>
            <Link
              href="https://next-drupal.org/docs"
              target="_blank"
              rel="external"
              className="hover:text-blue-600"
            >
              Read the docs
            </Link>
          </div>
        </header>

        <main className="container mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
