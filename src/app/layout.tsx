import type { Metadata } from "next";
import "./globals.css";

import { clashGrotesk, clashDisplay } from "./lib/customFonts";
import { cn } from "./lib/utils";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "antialiased bg-[#0D0D0D]",
          `${clashGrotesk.variable} ${clashDisplay.variable}`
        )}
      >
        {children}
      </body>
    </html>
  );
}
