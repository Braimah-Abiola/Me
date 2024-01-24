import localFont from "next/font/local";

const clashGrotesk = localFont({
  src: [{ path: "../../../assets/fonts/clash-grotesk.ttf" }],
  variable: "--font-clashGrotesk",
});

export { clashGrotesk };
