export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur z-50 px-8 py-4 flex justify-between items-center">

      <a href="#inicio" className="font-bold">
        Divina Carne
      </a>

      <div className="flex gap-6 text-sm">

        <a href="#sobre">Sobre nós</a>
        <a href="#mvv">Missão</a>
        <a href="#mvv">Visão</a>
        <a href="#mvv">Valores</a>
        <a href="#sig">SIG</a>

      </div>

      <a
        href="#contato"
        className="border px-4 py-2 rounded-full text-[#AA0106] border-[#AA0106]"
      >
        Seja cliente
      </a>

    </nav>
  );
}