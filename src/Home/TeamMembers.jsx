"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Eyuel",
    role: "Protestant Clergy",
    image: "/images/clergy1.jpg",
  },
  {
    name: "D/n Abel Sisay",
    role: "Executive Officer",
    image: "/images/clergy2.jpg",
  },
  {
    name: "Zemen Asaye",
    role: "Executive Officer",
    image: "/images/clergy3.jpg",
  },
  {
    name: "Yosef Abera",
    role: "Lead Pastor",
    image: "/images/clergy4.jpg",
  },
];

export default function TeamMembers() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % teamMembers.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-sm text-orange-500 font-medium mb-2">
              — Church Officers
            </p>
            <h2 className="text-4xl font-serif font-semibold leading-tight max-w-xl">
              Get Acquainted with Our Exceptional Clergy Team
            </h2>
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

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-[360px] rounded-[60px] overflow-hidden bg-black mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {teamMembers.map((_, index) => (
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
