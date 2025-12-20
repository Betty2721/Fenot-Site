"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "../../assets/masonry-portfolio-1.jpg";
import portfolio2 from "../../assets/masonry-portfolio-2.jpg";
import portfolio3 from "../../assets/masonry-portfolio-5.jpg";

const programs = [
  {
    id: 1,
    title: "ልብሶች ማስታወቂያ እና መዝገብ",
    desc: "ይህ ፕሮግራም ተማሪዎችን ለመንገድ ይረዳል",
    author: "ተዘጋጀ በ ቢቲ ማርኬ",
    img: portfolio1,
  },
  {
    id: 2,
    title: "ትምህርት መስሪያ ቤት",
    desc: "ተማሪዎች እንዲያዳጉ ይረዳል",
    author: "ተዘጋጀ በ ቢቲ ማርኬ",
    img: portfolio2,
  },
  {
    id: 3,
    title: "ቴክኖሎጂ ፕሮግራሞች",
    desc: "ለዘመናዊ ዓለም ዝግጁ ያደርጋል",
    author: "ተዘጋጀ በ ቢቲ ማርኬ",
    img: portfolio3,
  },
];

export default function ProgramsCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prev = () => setIndex(index === 0 ? programs.length - 1 : index - 1);
  const next = () => setIndex(index === programs.length - 1 ? 0 : index + 1);

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <p className="font-semibold tracking-widest text-[#F7D407]">ፕሮግራሞቻችን</p>

      <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#1732A7]">መካከለኛ ፕሮግራሞችን ይመልከቱ</h1>

      <p className="text-gray-500 mt-2">በሚገባ ተመርጠው የተዘጋጀ ስራዎች እና ፕሮግራሞች</p>

      <div className="flex gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 border rounded-full flex items-center justify-center border-[#1732A7] text-[#1732A7] hover:bg-[#1732A7] hover:text-white transition">
          <ChevronLeft />
        </button>

        <button onClick={next} className="w-10 h-10 border rounded-full flex items-center justify-center border-[#1732A7] text-[#1732A7] hover:bg-[#1732A7] hover:text-white transition">
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6 md:px-20 w-full">
        {programs.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(`/blog/${item.id}`)}
            className={`rounded-xl overflow-hidden shadow-lg border cursor-pointer transform transition hover:scale-105 hover:shadow-2xl relative ${index === i ? "border-[#F7D407]" : "border-gray-200"}`}
          >
            <div className="h-64 w-full relative group">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold text-lg text-center px-2">
                {item.title}
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-[#1732A7]">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <p className="text-sm text-gray-400 mt-3">{item.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-6">
        {programs.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${index === i ? "bg-[#F7D407]" : "bg-gray-300"}`}></span>
        ))}
      </div>
    </div>
  );
}
