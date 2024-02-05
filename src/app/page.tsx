"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/about";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/nav";
import Preloader from "./components/preloader";
import Slider from "./components/slider";
import SliderTransparent from "./components/slider_transparent";
import Clients from "./components/clients";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Slider />
      <SliderTransparent />
      <Clients />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
