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

          {/* CARD 1 */}
          <div className="h-[300px] bg-gray-100 rounded-2xl flex items-end p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Bovinos</h3>
          </div>

          {/* CARD 2 */}
          <div className="h-[300px] bg-gray-100 rounded-2xl flex items-end p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Suínos</h3>
          </div>

          {/* CARD 3 */}
          <div className="h-[300px] bg-gray-100 rounded-2xl flex items-end p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Aves</h3>
          </div>

        </div>

      </div>

    </section>
  );
}