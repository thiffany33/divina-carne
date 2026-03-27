import logo from "../assets/Logo.png";
import selo from "../assets/GreenQuality.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex items-center px-8">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-10 items-center">

        {/* ESQUERDA */}
        <div className="flex flex-col gap-6">

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              Alimentando o mundo hoje.
            </h1>

            <h1 className="text-5xl font-bold leading-tight mt-2">
              Preservando o amanhã.
            </h1>
          </div>

          <div className="flex gap-4 mt-6">
            
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

          {/* LOGO GRANDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={logo}
              alt="Divina Carne"
              className="w-[420px] object-contain"
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* SELO MENOR */}
          <img
            src={selo}
            alt="Green Quality"
            className="absolute bottom-2 right-6 w-16 opacity-90"
          />

        </div>

      </div>

    </section>
  );
}