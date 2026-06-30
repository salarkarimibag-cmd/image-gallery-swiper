import { useState, useRef, useEffect } from "react";
import { HiArrowLongRight, HiBars3, HiXMark } from "react-icons/hi2";
import foodImg from "../assets/images/photo-1547592180-85f173990554.jpg";

const navLinks = ["Menu", "Deals", "Categories", "Restaurants"];

const FoodieHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Menu");
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-[Vazirmatn]" dir="ltr">
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`flex items-center justify-between px-8 py-3 sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <h1 className="text-3xl font-bold text-rose-600 tracking-tight">
          Foodie
        </h1>

        {/* لینک‌های دسکتاپ */}
        <ul className="hidden md:flex gap-16 mr-40">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => setActiveLink(link)}
              className={`cursor-pointer transition-colors duration-200 text-2xl font-bold ${
                activeLink === link
                  ? "text-rose-600"
                  : "text-gray-600 hover:text-rose-600"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* دکمه همبرگری موبایل */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-700 text-3xl"
        >
          {isMenuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* منوی موبایل (نمایش شرطی) */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 py-4 bg-white shadow-md">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => {
                setActiveLink(link);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer text-lg font-semibold ${
                activeLink === link ? "text-rose-600" : "text-gray-600"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      )}

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 pt-8 pb-16 max-w-7xl mx-auto">
        {/* متن */}
        <div className="max-w-md">
          <div className="border-l-8 border-rose-600 pl-6 mb-8 min-h-[120px] flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Healthy Diet <br /> Everyday
            </h2>
            <p className="text-rose-500 text-xl mb-7 leading-normal py-3">
              Order today and receive your <br /> package tomorrow
            </p>
          </div>

          {/* دکمه‌ها */}
          <div className="flex gap-4 mb-16">
            <button className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-200">
              View Menu
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-rose-400 hover:text-rose-600 transition-all duration-300">
              Book a Table
            </button>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold text-gray-900 text-sm">Breakfast</p>
            <p className="text-gray-400 text-sm">9:00 am - 11:00 am</p>
            <div className="flex items-center mt-2 text-rose-500 transition-all duration-300">
              <HiArrowLongRight
                size={36}
                className="scale-x-150 group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* عکس غذا */}
        <div className="relative w-[650px] h-[650px] flex-shrink-0 mr-[-60px]">
          <img
            src={foodImg}
            alt="غذای سالم"
            className="relative z-10 w-full h-full object-cover rounded-2xl"
            style={{
              maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodieHero;
