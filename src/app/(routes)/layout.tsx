import "../globals.css";

import Navbar from "../components/nav";
import { clashDisplay, clashGrotesk } from "../lib/customFonts";
import { cn, constructMetadata } from "../lib/utils";
import { Analytics } from "@vercel/analytics/react";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-[#0D0D0D] scroll-smooth select-none",
          `${clashGrotesk.variable} ${clashDisplay.variable}`
        )}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
