import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RegisterForm from "./pages/RegisterFormPage";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/register" element={<RegisterForm />} />
         <Route path="/shop" element={<ShopPage />} />
         <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
