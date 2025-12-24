import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-white.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Our Gallery", path: "/gallery" },
  // { name: "Events", path: "/events" },
  { name: "Shop Items", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    const activeEl = navRef.current[activeIndex];
    if (activeEl) {
      setUnderlineStyle({
        width: activeEl.offsetWidth,
        transform: `translateX(${activeEl.offsetLeft}px)`,
      });
    }
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 mt-4 px-4 md:px-12 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#102891] shadow-2xl shadow-blue-900"
            : "mx-12 lg:mx-24 rounded-xl shadow-2xl bg-white/25 backdrop-blur-2xl"
        }
      `}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 relative">

        {/* Logo */}
         <NavLink to="/">
        <div className="flex items-center gap-2  ">
        <img src={logo} alt="Logo" className="h-12" />
        <div className="flex-col md:block hidden">
        <h2 className=" text-sm text-white">ፍኖተ ጽድቅ</h2>
        <h2 className=" text-sm text-white">Finote Tsidk</h2>
        </div>
        </div>
         </NavLink>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium relative">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => (navRef.current[index] = el)}
              className="relative"
            >
              <NavLink
                to={item.path}
                className="hover:text-gray-300 transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Animated underline */}
          <span
            className="absolute -bottom-2 left-0 h-[2px] bg-white transition-all duration-300"
            style={underlineStyle}
          />
        </ul>

        {/* Button */}
        <NavLink
          to="/register"
          className="hidden md:block px-5 py-2 rounded-full text-black font-medium bg-amber-300"
        >
          Register
        </NavLink>

        {/* Mobile */}
        <NavLink
          to="/contact"
          className="md:hidden px-4 py-2 rounded-full text-white font-medium bg-[#1732A7]"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
