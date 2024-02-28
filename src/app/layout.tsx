import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
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
      <body className={cn(manrope.className, "text-base")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
