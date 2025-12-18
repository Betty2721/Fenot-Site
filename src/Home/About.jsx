import img1 from "../assets/hero.jpg";
import img2 from "../assets/hero.jpg";
import { Heart, Users, HandHeart, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES */}
        <div className="relative w-full h-[450px]">
          {/* Back Image */}
          <img
            src={img1}
            alt="church"
            className="w-72 h-96 object-cover rounded-br-[80px] absolute bottom-0 left-0 shadow-lg"
          />

          {/* Top Image */}
          <img
            src={img2}
            alt="church interior"
            className="w-80 h-96 object-cover rounded-bl-[80px] absolute top-0 left-24 shadow-xl border-4 border-white"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          {/* Small Title */}
          <p
            className="text-sm font-semibold tracking-wide"
            style={{ color: "#1732A7" }}
          >
            ስለ እኛ
          </p>

          {/* Main Title */}
          <h2 className="text-4xl font-bold leading-tight">
            እምነት፣ ተስፋ፣ ፍቅር  
            <span style={{ color: '#F7D407' }} className="block">
              በዕለታዊ ተግባር
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            እኛ የተባበሩ ቤተ ክርስቲያን ማህበር ነን፣ ለመስቀል እየተገዙ በመዛመድ፣
            በእምነት መዳገም፣ በአገልግሎት መስጠት እና በእርስ በርሳችን ተግባራዊ ፍቅር መኖር የምንላቸው።
          </p>

          <p className="text-gray-600 leading-relaxed">
            ቤተ ክርስቲያናችን ማንኛውም ሰው የመንፈሳዊ እረፍት፣ ድጋፍ እና የተስፋ ባህርይ ሊያገኝበት የሚችለው
            ተቀባይነት ያለው ቦታ ናት። በአንድነት የእምነታችንን ትርጉም በተግባር ለመኖር እንተጋለን።
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
            <Feature icon={<Heart size={20} color="#1732A7" />} text="የእግዚአብሔር ፍቅር መካፈል" />
            <Feature icon={<Sparkles size={20} color="#1732A7" />} text="መንፈሳዊ እድገት" />
            <Feature icon={<Users size={20} color="#1732A7" />} text="ማህበረሰብን መስራት" />
            <Feature icon={<HandHeart size={20} color="#1732A7" />} text="ጠንካራ ግንኙነት መገንባት" />
          </div>

          {/* BUTTON */}
          <button
            className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
            style={{ backgroundColor: "#1732A7", color: "#fff" }}
          >
            ተጨማሪ ለማወቅ
            <span
              className="inline-block w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#F7D407", color: "#000" }}
            >
              ➜
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <p className="font-medium text-gray-800">{text}</p>
    </div>
  );
}
