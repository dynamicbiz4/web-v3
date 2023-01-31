import Head from "next/head";
import { useEffect, useState } from "react";

import Hero from "../components/Home/Hero";
import RecentProjects from "../components/Home/RecentProjects";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Clients from "../components/Home/Clients";

export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main>
      <Hero />
      <About />
      {/* <Clients /> */}
      <Services />
      <RecentProjects />
      <Contact />
    </main>
  );
}
