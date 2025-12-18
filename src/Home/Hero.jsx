import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl text-white space-y-6">

        {/* Address */}
        <p className="text-lg opacity-90">
          በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን！
        </p>

        {/* Main Title */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          የአ/ጤ/አ/ብ/ካ/ቅ/ኪ/ም/
          <span className="block">ፍኖተ ጽድቅ ሰንበት ት/ቤት</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl opacity-90">
          ልጄ ሆይ ዛሬ ምን ተማርክ ?
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          {/* Primary Button */}
          <button
            className="px-6 py-3 rounded-full text-white font-medium"
            style={{ backgroundColor: "#1732A7" }} // primary blue
          >
            ስለ ሰ/ት/ቤቱ
          </button>

          {/* Secondary Button */}
          <button
            className="px-6 py-3 rounded-full font-medium"
            style={{
              backgroundColor: "#F7D407",
              color: "#000",
            }}
          >
            ለመመዝገብ
          </button>
        </div>

      </div>
    </section>
  );
}
