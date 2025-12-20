import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./home/Hero";
import About from "./home/About";
import ProgramsCarousel from "./home/Programs";
import Counter from "./home/Counter";
import TeamMembers from "./home/TeamMembers";
import NewsLetter from "./home/NewsLetter";
import Footer from "../components/Footer";
import Gallery from "./home/Gallery";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <ProgramsCarousel />
      <Counter />
      <Gallery />
      <TeamMembers />
      <NewsLetter />
    </div>
  );
}
