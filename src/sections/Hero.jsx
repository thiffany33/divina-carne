import logo from "../assets/Logo.png";
import selo from "../assets/GreenQuality.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex items-center px-8">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.5fr] gap-10 items-center">

        {/* ESQUERDA */}
        <div className="flex flex-col gap-6">

          {/* TEXTO */}
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >

            <motion.h1
              className="text-5xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Alimentando o mundo hoje.
            </motion.h1>

            <motion.h1
              className="text-5xl font-bold leading-tight mt-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Preservando o amanhã.
            </motion.h1>

          </motion.div>

          {/* BOTÕES */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            
            <button className="bg-[#AA0106] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              NOS CONHEÇA
            </button>

            <button className="border border-[#AA0106] text-[#AA0106] px-6 py-3 rounded-full font-medium hover:bg-[#AA0106] hover:text-white transition">
              SISTEMA INTEGRADO DE GESTÃO (SIG)
            </button>

          </motion.div>

        </div>

        {/* DIREITA */}
        <div className="flex items-center justify-center gap-6">

          {/* LOGO (respiração) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={logo}
              alt="Divina Carne"
              className="w-[620px] object-contain"
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.03, 1] }}
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