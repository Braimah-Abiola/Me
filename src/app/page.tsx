"use client";

import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader";
import { useEffect, useState } from "react";

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
        {isLoading && <Preloader/>}
      </AnimatePresence>
    </main>
  );
}
