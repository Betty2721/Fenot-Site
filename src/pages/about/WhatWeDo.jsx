import React from "react";
import Image from "../../assets/hero.png"; // your uploaded image
import { Cross, HeartHandshake, BookOpen } from "lucide-react"; // adjust icons as needed

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F7D407] flex items-center justify-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#F7D407]" /> What We Do
        </p>

        <h2 className="mb-12 text-3xl font-extrabold md:text-4xl">
          Living Our <span className="text-[#1732A7]">Faith Together</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Feature
            icon={<Cross size={40} />}
            title="Worship Services"
            description="Experience spiritual growth and meaningful connection through heartfelt worship and fellowship. Everyone is welcome to join us."
          />

          <Feature
            icon={<HeartHandshake size={40} />}
            title="Community Outreach"
            description="Experience spiritual growth and meaningful connection through heartfelt worship and fellowship. Everyone is welcome to join us."
          />

          <Feature
            icon={<BookOpen size={40} />}
            title="Educational Programs"
            description="Experience spiritual growth and meaningful connection through heartfelt worship and fellowship. Everyone is welcome to join us."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7D407] text-[#1732A7]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#1732A7]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
