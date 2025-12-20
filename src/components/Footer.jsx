import React from "react";
import logo from "../assets/logo-white.png";
import imageBackground from "../assets/hero4.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16"
     style={{ backgroundImage: `url(${imageBackground})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
        }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-20 h-auto object-contain" />
          </div>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            አቬኒክስ መንፈሳዊ እድገትን፣ ማህበረሰባዊ አገልግሎትን እና የእምነት ጉዞን
            ለመደገፍ የተቋቋመ ድርጅት ነው።
          </p>

          <div className="flex gap-4 text-gray-400 text-lg">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">ፈጣን አገናኞች</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>መነሻ</li>
            <li>ስለ እኛ</li>
            <li>አገልግሎቶች</li>
            <li>ብሎግ</li>
            <li>ያግኙን</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">አገልግሎቶች</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>የድጋፍ ቡድኖች</li>
            <li>ልዩ ዝግጅቶች</li>
            <li>የመስመር ላይ አገልግሎቶች</li>
            <li>መንፈሳዊ እንክብካቤ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">አድራሻ</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>📞 +251 989 345 012</li>
            <li>✉️ finote1619@gmail.com</li>
            <li>📍 Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 Finote Tsidk. All Rights Reserved.</p>

          <div className="flex gap-6">
            <span>Terms and Conditions</span>
            <span>Support</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
