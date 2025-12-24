import img from "../../assets/hero.png"; 

export default function AboutHero() {
  return (
    <section className="relative h-[300px] md:h-[420px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={img}  // ✅ use curly braces to reference the imported variable
        alt="About Us"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white">
          Our Gallery
        </h1>

        <div className="mt-4 rounded-md bg-white px-5 py-2 text-sm font-medium shadow">
          <span className="text-gray-700">Home</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-amber-500">Our Gallery</span>
        </div>
      </div>
    </section>
  );
}
