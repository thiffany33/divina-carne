import bovino from "../assets/animals/bovino.png";
import suino from "../assets/animals/suino.png";
import aves from "../assets/animals/aves.png";

export default function Animals() {
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

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6">
          {/* BOVINO */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
            
            <img
              src={bovino}
              alt="Bovinos"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Bovinos</h3>
            </div>
          </div>

          {/* SUÍNOS */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
            
            <img
              src={suino}
              alt="Suínos"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Suínos</h3>
            </div>

          </div>
          {/* AVES */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
            
            <img
              src={aves}
              alt="Aves"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Aves</h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}