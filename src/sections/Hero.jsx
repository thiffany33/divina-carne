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
        <div className="flex items-center justify-center gap-6">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="Divina Carne"
            className="w-[570px] object-contain"
          />
          {/* BRILHO */}
          <motion.div
            className="absolute top-0 left-[-100%] w-full h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            animate={{ left: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>
          {/* SELO */}
          <motion.img
            src={selo}
            alt="Green Quality"
            className="w-[110px] object-contain"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}