import shopItem1 from "../../assets/shopItems/shopitem1.png";
// import shopItem2 from "../../assets/shopItems/shopitem2.png";
import shopItem7 from "../../assets/shopItems/shopitem7.png";



export default function ShopHeaderSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Banner */}
        <div className="lg:col-span-2 bg-[radial-gradient(circle,_theme(colors.amber.600)_0%,_theme(colors.amber.400)_100%)] rounded-lg p-6 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500 mb-2">ታላቅ ቅናሽ</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Get the Best <br /> Deal on ሱቅ ይምጡ
            </h1>
            <p className="text-gray-500 mb-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor.
            </p>
            <p className="text-xl font-semibold mb-4">
              ዋጋ: <span className="text-blue-600">$590.00</span>
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              ይግዙ
            </button>
          </div>

          <img
            src={shopItem7}
            alt="CCTV Camera"
            className="mt-6 md:mt-0 h-100"
          />
        </div>

        {/* Side Banners */}
        <div className="flex flex-col gap-6">
          
          {/* iPhone Banner */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Holy Bible</p>
              <h3 className="font-semibold text-lg">81 አሐዱ</h3>
              <p className="text-blue-600 font-bold">$1500.99</p>
            </div>
            <img
              src={shopItem1}
              className="mt-6 md:mt-0 h-50 "
              alt="iPhone"
            />
          </div>

          {/* Weekly Sale */}
          <div className="bg-slate-500 text-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">ታላቅ ቅናሽ!</h3>
            <p className="text-gray-300 mb-4">
              Saving up to 50% off all online store items this week.
            </p>
            <button className="bg-white text-gray-900 px-5 py-2 rounded hover:bg-gray-200 transition">
              ይግዙ / ይደውሉ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
