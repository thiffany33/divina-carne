export default function Contact() {
  return (
    <section id="contato" className="bg-white px-8 py-24">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Seja nosso cliente
        </h2>

        <p className="text-gray-600 mb-8">
          Preencha o formulário e entraremos em contacto.
        </p>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Nome"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Empresa"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Mensagem"
            rows="4"
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-[#AA0106] text-white py-3 rounded-lg hover:opacity-90"
          >
            Enviar
          </button>

          

        </form>

      </div>
    </section>
  );
}