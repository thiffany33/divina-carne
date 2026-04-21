import { useState } from "react";

import bovino from "../assets/animals/bovino.png";
import suino from "../assets/animals/suino.png";
import aves from "../assets/animals/aves.png";

export default function Animals() {

  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen bg-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Produção com excelência
          </h2>

          <p className="text-gray-600 max-w-xl">
            Garantimos qualidade e sustentabilidade em toda a nossa cadeia produtiva.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6">

          {/* BOVINO */}
          <div
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              active === "bovino" ? "col-span-3 h-[500px]" : "h-[320px]"
            }`}
          >

            <img
              src={bovino}
              alt="Bovinos"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Bovinos</h3>

              <button
                onClick={() =>
                  setActive(active === "bovino" ? null : "bovino")
                }
                className="text-sm underline"
              >
                {active === "bovino" ? "Fechar" : "Saiba mais"}
              </button>
            </div>

            {active === "bovino" && (
              <div className="absolute inset-0 bg-white text-black p-10 overflow-auto">
                
                <h3 className="text-2xl font-bold mb-4">
                  Bovinos
                </h3>

                <p className="mb-4">
                  Loren ipsum dolor sit amet...
                </p>

                <div className="border p-4 rounded-lg">
                  Espaço para tabela de cortes e fornecedores
                </div>

              </div>
            )}

          </div>

          {/* SUÍNOS */}
          <div
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              active === "suino" ? "col-span-3 h-[500px]" : "h-[320px]"
            }`}
          >

            <img
              src={suino}
              alt="Suínos"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Suínos</h3>

              <button
                onClick={() =>
                  setActive(active === "suino" ? null : "suino")
                }
                className="text-sm underline"
              >
                {active === "suino" ? "Fechar" : "Saiba mais"}
              </button>
            </div>

            {active === "suino" && (
              <div className="absolute inset-0 bg-white text-black p-10 overflow-auto">
                
                <h3 className="text-2xl font-bold mb-4">
                  Suínos
                </h3>

                <p className="mb-4">
                  Loren ipsum dolor sit amet...
                </p>

                <div className="border p-4 rounded-lg">
                  Espaço para tabela de cortes e fornecedores
                </div>

              </div>
            )}

          </div>

          {/* AVES */}
          <div
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              active === "aves" ? "col-span-3 h-[500px]" : "h-[320px]"
            }`}
          >

            <img
              src={aves}
              alt="Aves"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Aves</h3>

              <button
                onClick={() =>
                  setActive(active === "aves" ? null : "aves")
                }
                className="text-sm underline"
              >
                {active === "aves" ? "Fechar" : "Saiba mais"}
              </button>
            </div>

            {active === "aves" && (
              <div className="absolute inset-0 bg-white text-black p-10 overflow-auto">
                
                <h3 className="text-2xl font-bold mb-4">
                  Aves
                </h3>

                <p className="mb-4">
                  Loren ipsum dolor sit amet...
                </p>

                <div className="border p-4 rounded-lg">
                  Espaço para tabela de cortes e fornecedores
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}