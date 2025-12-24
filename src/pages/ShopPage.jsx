import Hero from "./shop/Hero";
import ShopHeaderSection from "./shop/Header";
import FeaturedCategories from "./shop/featuredCategories";



const ShopPage = () => {
  return (
    <div className="-mt-24 top-0 bg-white w-full">
      <Hero />
       <ShopHeaderSection />
      <FeaturedCategories />
    </div>
  );
}

export default ShopPage;
