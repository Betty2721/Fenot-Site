import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./about/Hero";
import AboutSection from "./about/AboutSection";
import WhatWeDo from "./about/WhatWeDo";
import TeamMembers from "./about/TeamMembers";
import Footer from "../components/Footer";


export default function AboutPage() {
  return (
    <div className="-mt-24 top-0 w-full">
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <TeamMembers />
    </div>
  );
}
