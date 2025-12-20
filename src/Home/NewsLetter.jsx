import React from "react";
import newletterbg from "../assets/Newsletter-bg.jpg";

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
        {/* Badge */}
        <span
          className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
          style={{ backgroundColor: "#F7D407", color: "#1732A7" }}
        >
          የመልዕክት ምዝገባ
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          የቅርብ ጊዜ ዜናችንን ይከታተሉ
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-8 leading-relaxed text-sm md:text-base">
          ስለ መጪ ዝግጅቶቻችን፣ መንፈሳዊ መልዕክቶች እና አዳዲስ መረጃዎች በቀጥታ
          ለማግኘት የኢሜይል አድራሻዎን ያስገቡ።
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
                type="email"
                placeholder="ኢሜይል አድራሻዎ..."
                className="
                    w-full sm:w-80 h-12 px-4
                    rounded-full text-black outline-none
                    border border-gray-300
                    placeholder-white
                    focus:border-[#F7D407]
                    focus:ring-1 focus:ring-[#F7D407]
                    transition
                "
                />

          <button
            className="h-12 px-8 rounded-full font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: "#F7D407",
              color: "#1732A7",
            }}
          >
            ይመዝገቡ
          </button>
        </div>
      </div>
    </section>
  );
}

// 1732A7 - Use this blue - Primary
// F7D407 - Use this Yellow -Secondary.............