"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import team1 from "../assets/blog-1.jpg";
import team2 from "../assets/blog-2.jpg";
import team3 from "../assets/blog-2.jpg";
import team4 from "../assets/blog-2.jpg";

const team = [
  {
    name: "Mr. Eyuel",
    role: "Protestant Clergy",
    img: team1,
  },
  {
    name: "D/n Abel Sisay",
    role: "Executive Officer",
    img: team2,
  },
  {
    name: "Zemen Asaye",
    role: "Executive Officer",
    img: team3,
  },
  {
    name: "Yosef Abera",
    role: "Lead Pastor",
    img: team4,
  },
];

export default function TeamMembers() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? team.length - 1 : index - 1);

  const next = () =>
    setIndex(index === team.length - 1 ? 0 : index + 1);

  return (
    <div className="w-full py-14">
      
      {/* Header */}
      <div className="flex justify-between items-start px-10">
        <div>
          <p className="text-[#F7D407] font-semibold">
            — Church Officers
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1732A7]">
            Get Acquainted with Our <br />
            Exceptional Clergy Team
          </h1>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#F7D407] text-[#1732A7] rounded-full flex 
            justify-center items-center hover:bg-[#F7D407] hover:text-black transition"
          >
            <ChevronLeft size={18}/>
          </button>

          <button
            onClick={next}
            className="w-10 h-10 border border-[#F7D407] text-[#1732A7] rounded-full flex 
            justify-center items-center hover:bg-[#F7D407] hover:text-black transition"
          >
            <ChevronRight size={18}/>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 px-10">
        {team.map((person, i) => (
          <div key={i} className="text-center">
            
            <div className="w-full h-80 rounded-[60px] overflow-hidden shadow-md">
              <img
                src={person.img}
                className="w-full h-full object-cover"
                alt={person.name}
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#1732A7]">
              {person.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {person.role}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {team.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              index === i
                ? "bg-[#F7D407]"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
