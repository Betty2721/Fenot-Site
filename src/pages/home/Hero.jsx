import { useEffect, useState } from "react";
import hero1 from "../../assets/hero-bg.jpg";
import hero2 from "../../assets/hero.png";
import hero3 from "../../assets/Newsletter-bg.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-screen relative flex items-center justify-center text-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6 max-w-3xl text-white space-y-6">
        <p className="text-lg opacity-90">በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን！</p>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          የአ/ጤ/አ/ብ/ካ/ቅ/ኪ/ም/
          <span className="block">ፍኖተ ጽድቅ ሰንበት ት/ቤት</span>
        </h1>

        <p className="text-xl opacity-90">ልጄ ሆይ ዛሬ ምን ተማርክ ?</p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            className="px-6 py-3 rounded-full text-white font-medium"
            style={{ backgroundColor: "#1732A7" }}
          >
            ስለ ሰ/ት/ቤቱ
          </button>

          <button
            className="px-6 py-3 rounded-full font-medium"
            style={{ backgroundColor: "#F7D407", color: "#000" }}
          >
            ለመመዝገብ
          </button>
        </div>
      </div>
    </section>
  );
}
