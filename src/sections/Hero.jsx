import logo from "../assets/Logo.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex items-center px-8">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-10 items-center">

        {/* ESQUERDA */}
        <div className="flex flex-col gap-6">

          <h1 className="text-5xl font-bold leading-tight">
            Alimentando o mundo hoje.
            <br />
            Preservando o amanhã.
          </h1>

          <div className="flex gap-4 mt-4">
            
            <button className="bg-[#AA0106] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              NOS CONHEÇA
            </button>

            <button className="border border-[#AA0106] text-[#AA0106] px-6 py-3 rounded-full font-medium hover:bg-[#AA0106] hover:text-white transition">
              SISTEMA INTEGRADO DE GESTÃO (SIG)
            </button>

          </div>

        </div>

        {/* DIREITA */}
        <div className="relative flex items-center justify-center">

          {/* LOGO / ESPAÇO INTERATIVO */}
          <div className="w-72 h-72 rounded-full border border-gray-300 flex items-center justify-center text-center text-gray-500">
            LOGO DIVINA CARNE
          </div>

          {/* SELO */}
          <div className="absolute bottom-0 right-0 bg-green-600 text-white px-4 py-2 rounded-full text-sm shadow-md">
            Green Quality
          </div>

        </div>

      </div>

    </section>
  );
}