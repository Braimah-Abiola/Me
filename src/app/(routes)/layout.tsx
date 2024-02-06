import type { Metadata } from "next";
import "../globals.css";

import { clashGrotesk, clashDisplay } from "../lib/customFonts";
import { cn } from "../lib/utils";
import Navbar from "../components/nav";

export const metadata: Metadata = {
  title: "Arete - Creative Developer",
  description: "",
};

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
