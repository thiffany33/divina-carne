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
          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex items-center justify-center"
>
  <motion.img
    src={logo}
    alt="Divina Carne"
    className="w-64 h-64 object-contain"
    whileHover={{ scale: 1.08 }}
    animate={{ scale: [1, 1.03, 1] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

          {/* SELO */}
          <<img
  src={selo}
  alt="Green Quality"
  className="absolute bottom-0 right-0 w-20"
/>

        </div>

      </div>

    </section>
  );
}