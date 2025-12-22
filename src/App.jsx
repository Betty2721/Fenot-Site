import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
