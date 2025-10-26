import { useEffect } from "react";

export const Navbar = ({ menuOpen, setmenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        {/* div containing logo and hamburger */}
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <a href="#home" className="font-mono text-3xl font-bold text-white">
            <span className="text-blue-500 text-5xl">A</span>nkur
          </a>

          {/* Hamburger item (Mobile Menu)*/}

          {/* onClick={(prev) => setmenuOpen(!prev)}  // Wrong - prev is the event, not the state
           */}
          {!menuOpen && (
            <div
              className="w-8 h-6 relative cursor-pointer z-40 md:hidden"
              onClick={() => setmenuOpen(!menuOpen)}
            >
              &#9776;
            </div>
          )}

          {/* Desktop navbar */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};