export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto flex justify-between">

        <div>
          <h3 className="font-bold mb-2">Divina Carne</h3>
          <p className="text-sm opacity-70">
            Qualidade e sustentabilidade na produção alimentar.
          </p>
        </div>

        <div className="text-sm opacity-70">
          © 2026 Divina Carne | Desenvolvido por{" "}
          <a
            href="https://github.com/thiffany33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Thiffany Gonçalves
          </a>
        </div>

      </div>
    </footer>
  );
}