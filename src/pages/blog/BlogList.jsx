import React from "react";
import { FaChevronLeft, FaChevronRight, FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin, FaArrowUp } from "react-icons/fa";

const blogPosts = [
  { img: "/assets/img/blog/blog-1.jpg", category: "Politics", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "/assets/img/blog/blog-author.jpg", author: "Maria Doe", date: "Jan 1, 2022" },
  { img: "/assets/img/blog/blog-2.jpg", category: "Sports", title: "Nisi magni odit consequatur autem nulla dolorem", authorImg: "/assets/img/blog/blog-author-2.jpg", author: "Allisa Mayer", date: "Jun 5, 2022" },
  { img: "/assets/img/blog/blog-3.jpg", category: "Entertainment", title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta", authorImg: "/assets/img/blog/blog-author-3.jpg", author: "Mark Dower", date: "Jun 22, 2022" },
  { img: "/assets/img/blog/blog-4.jpg", category: "Sports", title: "Non rem rerum nam cum quo minus olor distincti", authorImg: "/assets/img/blog/blog-author-4.jpg", author: "Lisa Neymar", date: "Jun 30, 2022" },
  { img: "/assets/img/blog/blog-5.jpg", category: "Politics", title: "Accusamus quaerat aliquam qui debitis facilis consequatur", authorImg: "/assets/img/blog/blog-author-5.jpg", author: "Denis Peterson", date: "Jan 30, 2022" },
  { img: "/assets/img/blog/blog-6.jpg", category: "Entertainment", title: "Distinctio provident quibusdam numquam aperiam aut", authorImg: "/assets/img/blog/blog-author-6.jpg", author: "Mika Lendon", date: "Feb 14, 2022" }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="relative h-64 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/page-title-bg.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="mb-2">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
          <nav>
            <ol className="flex justify-center space-x-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li className="font-semibold">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-blue-600">{post.category}</p>
                <h2 className="text-lg font-bold my-2"><a href="/blog-details" className="hover:text-blue-500">{post.title}</a></h2>
                <div className="flex items-center mt-4">
                  <img src={post.authorImg} alt={post.author} className="w-10 h-10 rounded-full flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="flex justify-center">
          <ul className="flex space-x-2 items-center">
            <li><a href="#" className="p-2 border rounded"><FaChevronLeft /></a></li>
            {[1,2,3,4].map((page) => (
              <li key={page}><a href="#" className={`p-2 border rounded ${page === 2 ? "bg-blue-600 text-white" : ""}`}>{page}</a></li>
            ))}
            <li>...</li>
            <li><a href="#" className="p-2 border rounded">10</a></li>
            <li><a href="#" className="p-2 border rounded"><FaChevronRight /></a></li>
          </ul>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">KnightOne</h3>
          <p className="mb-4">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div className="flex justify-center space-x-4 mb-4 text-2xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaSkype /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <p className="text-sm">&copy; 2025 KnightOne. All Rights Reserved.</p>
          <p className="text-sm">Designed by <a href="https://bootstrapmade.com/" className="underline">BootstrapMade</a>, Distributed by <a href="https://themewagon.com" className="underline">ThemeWagon</a></p>
        </div>
      </footer>

      <a href="#" className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"><FaArrowUp size={24} /></a>
    </div>
  );
};

export default BlogPage;
