import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* ESQUERDA */}
        <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
          
          <a href="#sobre" className="hover:text-[#AA0106] transition">
            SOBRE NÓS
          </a>

          <a href="#missao" className="hover:text-[#AA0106] transition">
            MISSÃO
          </a>

          <a href="#visao" className="hover:text-[#AA0106] transition">
            VISÃO
          </a>

          <a href="#valores" className="hover:text-[#AA0106] transition">
            VALORES
          </a>

          <a href="#sig" className="hover:text-[#AA0106] transition">
            Sistema Integrado de Gestão (SIG)
          </a>

        </div>

        {/* DIREITA */}
        <div>
          <button className="px-5 py-2 border border-[#AA0106] text-[#AA0106] rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#AA0106] hover:text-white">
            SEJA CLIENTE
          </button>
        </div>

      </div>
    </nav>
  );
}