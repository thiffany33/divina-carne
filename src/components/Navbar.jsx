import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ESQUERDA */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#sobre" className="hover:text-red-700 transition">
            SOBRE NÓS
          </a>
          <a href="#missao" className="hover:text-red-700 transition">
            MISSÃO
          </a>
          <a href="#visao" className="hover:text-red-700 transition">
            VISÃO
          </a>
          <a href="#valores" className="hover:text-red-700 transition">
            VALORES
          </a>
          <a href="#sig" className="hover:text-red-700 transition">
            SIG
          </a>
        </div>

        {/* DIREITA */}
        <div>
          <button className="border border-red-700 text-red-700 px-4 py-2 rounded-full hover:bg-red-700 hover:text-white transition">
            SEJA CLIENTE
          </button>
        </div>

      </div>
    </nav>
  );
}