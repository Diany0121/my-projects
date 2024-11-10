// import Image from "next/image";
import { Header } from "./component/Header";
import { AboutMe } from "./component/AboutMe";
import { Hero } from "./component/Hero";
import { Tech } from "./component/Tech";
import { Footer } from "./component/Footer";
import { Project } from "./component/Project";

import "./styles.css";

export default function Home() {
  return (
    <main className="">

      <Header />
      <Hero />
      <AboutMe />
      <Project />

      <Tech />

      <Footer />
      
    </main>
  );
}
