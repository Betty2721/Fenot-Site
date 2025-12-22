import React from "react";
import newletterbg from "../../assets/Newsletter-bg.jpg";

import { FaYoutube, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";



export default function NewsLetter() {
  return (
    <section
      className="w-full py-24 px-4 text-center text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
          url(${newletterbg})
        `,
      }}
    >
      
<div className="max-w-3xl mx-auto">
  <span
    className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
    style={{ backgroundColor: "#F7D407", color: "#1732A7" }}
  >
    የማህበራዊ ትዕዛዞቻችን
  </span>

  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    በማህበራዊ ገፆቻችን ይተባበሩ
  </h2>

  <p className="text-gray-200 mb-8 leading-relaxed text-sm md:text-base">
    ዜና፣ መልዕክት፣ እና መንፈሳዊ ንባብ ለመቀበል በሚከተሉት ማህበራዊ ገፆቻችን ይተባበሩ።
  </p>

  {/* Social Media Icons */}
  <div className="flex justify-center items-center gap-5 text-4xl">
    <a href="YOUR_TIKTOK_LINK" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
      <SiTiktok />
    </a>

    <a href="YOUR_TELEGRAM_LINK" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
      <FaTelegram />
    </a>

    <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
      <FaFacebook />
    </a>
     <a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
      <FaYoutube />
    </a>
     <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
      <FaInstagram />
    </a>
  </div>
</div>
    </section>
  );
}
