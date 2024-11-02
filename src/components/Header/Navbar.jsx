import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const items = [
  { id: 1, title: "Достижении", link: "#achievements" },
  { id: 2, title: "Услуги", link: "#uslugi" },
  { id: 3, title: "Агентства", link: "#agency" },
  { id: 4, title: "Сервисы", link: "#services" },
  { id: 5, title: "Новости", link: "#news" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const section = document.querySelector(link);
    const navbarHeight = 70;

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-linear ${
        scrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="myContainer flex items-center justify-between lg:gap-4 p-4">
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="sm:text-3xl text-2xl absolute sm:top-3 top-2 cursor-pointer z-50"
          >
            {open ? null : <MdOutlineMenu />}
          </button>
        </div>
        <div className="logo">
          <a href="/" className="font-medium tracking-[10px] heading5">
            Creative
          </a>
        </div>
        <ul
          className={`lg:static fixed top-0 left-0 h-full lg:w-auto sm:w-1/3 w-3/5 flex lg:items-center lg:flex-row flex-col 
            lg:gap-10 gap-6 text-xl lg:bg-transparent bg-gray-900 lg:px-0 px-6 lg:py-0 py-10 transition-all duration-500 ease-in ${
              open
                ? "translate-x-0 text-white"
                : "-translate-x-full lg:translate-x-0"
            }`}
        >
          <li>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden lg:text-3xl text-2xl absolute top-6 right-6 cursor-pointer z-50"
            >
              <FaTimes />
            </button>
          </li>
          {items.map((item) => (
            <li key={item.id}>
              <span
                className="relative group cursor-pointer"
                onClick={(e) => handleLinkClick(e, item.link)}
              >
                <a href={item.link}>{item.title}</a>
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-[4px] lg:bg-red-600 transform scale-x-0 group-hover:scale-x-90 
                transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </span>
            </li>
          ))}
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="sm:hidden bg-transparent outline-none lg:px-4 px-2 lg:py-2 py-1 border border-current rounded-lg cursor-pointer "
          >
            Связаться с нами
          </button>
        </ul>
        <button
          onClick={() => {
            document
              .getElementById("form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`hidden sm:block outline-none lg:px-4 px-2 lg:py-2 py-1 border border-current rounded-lg cursor-pointer ${
            scrolled
              ? "hover:bg-primary hover:text-white transition-all duration-500"
              : "bg-transparent hover:bg-white hover:text-black text-white"
          }`}
        >
          Связаться с нами
        </button>
        <div className="sm:hidden"></div>
      </div>
    </nav>
  );
}

export default Navbar;
