import React from "react"; 
import { Heart, Users, HandHeart, Church } from "lucide-react";
import img1 from "../../assets/masonry-portfolio-1.jpg"; 
import img2 from "../../assets/masonry-portfolio-2.jpg"; 

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Images */}
        <div className="relative flex items-center justify-center">
          <img
            src={img1}
            alt="Church Interior"
            className="w-3/4 rounded-bl-[80px] object-cover shadow-lg"
          />
          <img
            src={img2}
            alt="Church Hall"
            className="absolute -bottom-10 -left-6 w-2/3 rounded-tr-[80px] object-cover shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest" style={{ color: '#1732A7' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F7D407' }} />
            About Us
          </span>

          <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
            Faith, Hope, and Love in
            <span className="block" style={{ color: '#1732A7' }}> Action Every Day</span>
          </h2>

          <p className="mb-4 text-gray-600">
            We are a vibrant community of believers dedicated to worship, fellowship,
            and service. Our mission is to share God's love, grow in faith, and make a
            positive impact in the world through compassionate outreach.
          </p>

          <p className="mb-8 text-gray-600">
            Our church is a welcoming place where everyone can find support,
            inspiration, and a sense of belonging. Together, we strive to live out
            our faith and make a difference.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Feature icon={<Heart />} text="Share God's Love" />
            <Feature icon={<Church />} text="Foster Spiritual Growth" />
            <Feature icon={<HandHeart />} text="Serve Our Community" />
            <Feature icon={<Users />} text="Build Strong Relationships" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#F7D407', color: '#1732A7' }}>
        {icon}
      </div>
      <span className="font-semibold" style={{ color: '#1732A7' }}>{text}</span>
    </div>
  );
}
