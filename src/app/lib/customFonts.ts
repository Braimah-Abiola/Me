import localFont from "next/font/local";

const clashGrotesk = localFont({
  src: [{ path: "../../../assets/fonts/clash-grotesk.ttf" }],
  variable: "--font-clashGrotesk",
});

const clashDisplay = localFont({
  src: [{ path: "../../../assets/fonts/clash-display.ttf" }],
  variable: "--font-clashDisplay",
});

export { clashGrotesk, clashDisplay };
