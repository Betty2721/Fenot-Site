import shopItem1 from "../../assets/shopItems/shopitem1.png";
import shopItem2 from "../../assets/shopItems/shopitem2.png";
import shopItem3 from "../../assets/shopItems/shopitem3.png";
import shopItem4 from "../../assets/shopItems/shopitem4.png";
import shopItem5 from "../../assets/shopItems/shopitem5.png";
// import shopItem6 from "../../assets/shopItems/shopitem6.png";
import shopItem7 from "../../assets/shopItems/shopitem7.png";
import shopItem8 from "../../assets/shopItems/shopitem8.png";
import shopItem9 from "../../assets/shopItems/shopitem9.png";
import shopItem10 from "../../assets/shopItems/shopitem10.png";

import { useState } from "react";
import ShopItemPopup from "./ShopItemPopup"; 

const categories = [
  {
    title: "Books",
    image: shopItem1,
    items: ["Bible Study", "Story Books", "Educational", "Novels"],
  },
  {
    title: "Spiritual",
    image: shopItem2,
    items: ["Prayer Guides", "Hymns", "Meditation", "Devotionals"],
  },
  {
    title: "Books",
    image: shopItem3,
    items: ["Bible Study", "Story Books", "Educational", "Novels"],
  },
  {
    title: "Spiritual",
    image: shopItem4,
    items: ["Prayer Guides", "Hymns", "Meditation", "Devotionals"],
  },
  {
    title: "Books",
    image: shopItem5,
    items: ["Bible Study", "Story Books", "Educational", "Novels"],
  },
  {
    title: "Spiritual",
    image: shopItem7,
    items: ["Prayer Guides", "Hymns", "Meditation", "Devotionals"],
  },
  {
    title: "Books",
    image: shopItem8,
    items: ["Bible Study", "Story Books", "Educational", "Novels"],
  },
  {
    title: "Spiritual",
    image: shopItem9,
    items: ["Prayer Guides", "Hymns", "Meditation", "Devotionals"],
  },
  {
    title: "Books",
    image: shopItem10,
    items: ["Bible Study", "Story Books", "Educational", "Novels"],
  },
];

export default function FeaturedCategories() {
const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Shop Items</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto my-3"></div>
        <p className="text-gray-500 max-w-xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            onClick={() => setSelectedItem(cat)}
            key={index}
            className="bg-white rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-lg hover:bg-slate-100 transition"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="font-semibold text-xl">{cat.title}</h3>
              <ul className="text-sm text-gray-500 flex flex-wrap gap-2 mb-4">
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-200/25 border border-slate-300 text-slate-400 px-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </ul>
               <h2 className="text-blue-600 text-sm font-medium ">
                  View All
                </h2>
            </div>
            <img
              src={cat.image}
              alt={cat.title}
              className="w-24 h-32 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
   {/* Modal popup */}
   {selectedItem && (
  <ShopItemPopup
    item={selectedItem}
    open={!!selectedItem}
    onClose={() => setSelectedItem(null)}
  />
)}
    </>
    
  );
}
