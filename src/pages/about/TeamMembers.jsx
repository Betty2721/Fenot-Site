"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../../assets/person.jpg";
import team2 from "../../assets/person.jpg";
import team3 from "../../assets/person.jpg";
import team4 from "../../assets/person.jpg";

const team = [
  { name: "Mr. Eyuel", role: "Head", img: team1 },
  { name: "D/n Abel Sisay", role: "Assistant", img: team2 },
  { name: "Zemen Asaye", role: "Executive Officer", img: team3 },
  { name: "Yosef Abera", role: "Lead Team", img: team4 },
  { name: "Yosef Abera", role: "Lead Mezmur", img: team4 },
  { name: "Yosef Abera", role: "Lead Team", img: team4 },
  { name: "Yosef Abera", role: "Lead Mezmur", img: team4 },
  { name: "Yosef Abera", role: "Lead Team", img: team4 }
];

export default function TeamMembers() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-[#F7D407] font-semibold">— Church Officers</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1732A7]">Meet Our Leadership Team</h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={team1} className="w-32 h-32 rounded-full object-cover border-4 border-[#1732A7]" />
        <h2 className="mt-4 text-xl font-semibold text-[#1732A7]">Mr. Eyuel</h2>
        <p className="text-gray-500">Head</p>
        <div className="w-1 h-8 bg-gray-300 my-4"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        {[team2, team3, team4].map((img, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={img} className="w-24 h-24 rounded-full object-cover border-2 border-[#1732A7]" />
            <h3 className="mt-2 font-semibold text-[#1732A7]">
              {i === 0 && "Assistant"}
              {i === 1 && "Executive Officer"}
              {i === 2 && "Lead Team"}
            </h3>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center my-6">
        <div className="w-[300px] h-1 bg-gray-300"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {team.slice(3).map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={person.img} className="w-16 h-16 rounded-full object-cover border border-[#1732A7]" />
            <p className="text-sm font-medium text-[#1732A7]">{person.name}</p>
            <p className="text-gray-500 text-xs">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
