"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programs = [
  {
    title: "የእሁድ ስብከት ከቤተክርስቲያን",
    author: "ስብከት በ፡ ጃክሰን ወርስት",
    image: "/images/sermon1.jpg",
  },
  {
    title: "የክርስማስ መልእክት – የእግዚአብሔርን ፈቃድ በተሻለ መንገድ መከተል",
    author: "ስብከት በ፡ ጃክሰን ወርስት",
    image: "/images/sermon2.jpg",
  },
  {
    title: "የክርስማስ መልእክት – የእግዚአብሔርን ፈቃድ በተሻለ መንገድ መከተል",
    author: "ስብከት በ፡ ጃክሰን ወርስት",
    image: "/images/sermon3.jpg",
  },
];

export default function Programs() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % programs.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="w-full py-20 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-sm text-orange-500 font-medium mb-2">
              — ቅዱሳዊ ትምህርቶች
            </p>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              መንፈሳዊ ፕሮግራሞቻችንን ይመልከቱ
            </h2>
            <p className="text-gray-500 max-w-xl">
              ወደ መንፈሳዊ ጥልቀት የሚወስዱ አስተዋይ ስብከቶችን ያግኙ
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-white transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-2xl overflow-hidden group"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2 leading-snug">
                  {program.title}
                </h3>
                <p className="text-sm text-orange-300">
                  {program.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {programs.map((_, index) => (
            <span
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                active === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
