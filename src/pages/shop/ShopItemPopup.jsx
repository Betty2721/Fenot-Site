import React from "react";

export default function ShopItemPopup({ item, open, onClose }) {
  if (!open) return null; // Only render when open

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Side modal */}
      <div
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 translate-x-0 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="p-4 flex h-1/2 justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Items:</h3>
          <ul className="flex flex-wrap gap-2">
            {item.items.map((i, idx) => (
              <span
                key={idx}
                className="text-sm bg-slate-200 text-slate-800 px-3 py-1 rounded-full"
              >
                {i}
              </span>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="p-4 border-t flex gap-3">
          <a
            href="tel:+1234567890"
            className="flex-1 bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition"
          >
            Call
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="flex-1 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition"
          >
            Telegram
          </a>
        </div>
      </div>
    </>
  );
}
