"use client";
import portfolio1 from "../../assets/masonry-portfolio-1.jpg";
import portfolio2 from "../../assets/masonry-portfolio-2.jpg";
import portfolio3 from "../../assets/masonry-portfolio-3.jpg";
import portfolio4 from "../../assets/masonry-portfolio-4.jpg";
import imageBackground from "../../assets/hero4.png";
import { Users, Handshake, Gift, UserCheck } from "lucide-react";

const stats = [
  { number: "260+", text: "Total Happy Children", icon: Users, img: portfolio1 },
  { number: "110+", text: "Total Our Volunteer", icon: UserCheck, img: portfolio2 },
  { number: "190+", text: "Our Products & Gifts", icon: Gift, img: portfolio3 },
  { number: "560+", text: "Worldwide Donor", icon: Handshake, img: portfolio4 },
];

export default function StatsSection() {
  return (
    <div className="w-full py-20 flex justify-center bg-[#0D164F]" style={{ backgroundImage: `url(${imageBackground})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="relative group w-64 h-64 rounded-full border border-gray-400 flex flex-col justify-center items-center overflow-hidden transition duration-500">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative z-10 text-center">
                <Icon className="mx-auto mb-3 text-white group-hover:text-[#F7D407]" size={32} />
                <h2 className="text-3xl font-bold text-white">{item.number}</h2>
                <p className="text-gray-300 text-sm mt-2">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
