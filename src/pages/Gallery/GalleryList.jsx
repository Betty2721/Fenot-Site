import { useState } from "react";
import masonaryImage1 from "../../assets/masonry-portfolio-1.jpg";
import masonaryImage2 from "../../assets/masonry-portfolio-2.jpg";
import masonaryImage3 from "../../assets/masonry-portfolio-3.jpg";
import masonaryImage4 from "../../assets/masonry-portfolio-4.jpg";
import masonaryImage5 from "../../assets/masonry-portfolio-5.jpg";
import masonaryImage6 from "../../assets/masonry-portfolio-6.jpg";
import masonaryImage7 from "../../assets/masonry-portfolio-7.jpg";
import masonaryImage8 from "../../assets/masonry-portfolio-8.jpg";
import masonaryImage9 from "../../assets/masonry-portfolio-9.jpg";

const filters = [
  { label: "ሁሉም", value: "*" },
  { label: "ወጣት", value: "wetat" },
  { label: "ህጻናት", value: "hitsanat" },
  { label: "ዓርብ ፍቅር ቀን", value: "love" },
];

const galleryItems = [
  { img: masonaryImage1, title: "Title", cat: "wetat" },
  { img: masonaryImage2, title: "Title", cat: "hitsanat" },
  { img: masonaryImage3, title: "Title", cat: "love" },
  { img: masonaryImage4, title: "Title", cat: "wetat" },
  { img: masonaryImage5, title: "Title", cat: "hitsanat" },
  { img: masonaryImage6, title: "Title", cat: "love" },
  { img: masonaryImage7, title: "Title", cat: "wetat" },
  { img: masonaryImage8, title: "Title", cat: "hitsanat" },
  { img: masonaryImage9, title: "Title", cat: "love" },
];

export default function GalleryListPage() {
  const [filter, setFilter] = useState("*");
  const [previewImg, setPreviewImg] = useState(null);

  const filteredItems = filter === "*" ? galleryItems : galleryItems.filter((item) => item.cat === filter);

  return (
    <>
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Collection of Images</h2>
          <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container mx-auto flex justify-center gap-4 mb-10">
          {filters.map((f) => (
            <button key={f.value} onClick={() => setFilter(f.value)} className={`px-4 py-2 rounded-full border text-sm ${filter === f.value ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow cursor-pointer" onClick={() => setPreviewImg(item.img)}>
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white px-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm">View full image</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {previewImg && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1000] animate-fade" onClick={() => setPreviewImg(null)}>
          <img src={previewImg} alt="preview" className="max-w-[90%] max-h-[90%] object-contain animate-zoom" />
        </div>
      )}
    </>
  );
}
