export default function Sig() {
  return (
    <section
      id="sig"
      className="bg-[#420D07] text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Sistema Integrado de Gestão (SIG)
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* SIG PRINCIPAL */}

          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgDb-4nJAaCHTLJQU738aHBvAZpkd4kLeiww-fuvqguDz9M?e=BoGbTd"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-6 border rounded-xl hover:shadow transition block
              rounded-lg
              min-h-[450px]
              flex items-center justify-center
              hover:bg-white
              hover:text-[#420D07]
              transition duration-300
            "
          >
            <div className="text-center">
              <h3 className="text-7xl font-bold leading-tight">
                Sistema
                <br />
                Integrado
              </h3>

              <p className="mt-6 text-2xl">
                Clique para aceder ao SIG
              </p>
            </div>
          </a>

          {/* SUBSISTEMAS */}

          <div className="flex flex-col gap-6">

            <a
              href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgCFlaJXB2HxRKVJWju5vqwbASdgd8JBC1P8RSiShsjH67g?e=rOiZc5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-xl hover:shadow transition block"
            >
              Sistema de Gestão Ambiental (SGA)
            </a>

            <a
              href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgDUt4NSpQCuQb4puMr1dHApAb29iou0Fcq7DVOgQKo6Vw8?e=Go59Ij"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-xl hover:shadow transition block"
            >
              Sistema de Gestão de Qualidade (SGQ)
            </a>

            <a
              href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgARFxeNJU9aT6Q9RCjUiAXfAfh5lXki-iRCC2c49ptxCPo?e=ZcGpMa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-xl hover:shadow transition block"
            >
              Sistema de Gestão de Segurança Alimentar (SGSA)
            </a>

            <a
              href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgARFxeNJU9aT6Q9RCjUiAXfAfh5lXki-iRCC2c49ptxCPo?e=XLFo9K"
              target="_blank"
              rel="noopener noreferrer"
             className="p-6 border rounded-xl hover:shadow transition block"
            >
              Sistema de Gestão de Saúde e Segurança no Trabalho (SGSST)
            </a>

            <a
              href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgBZILl2Y_7PSZXW_fR0KqNPAbVWg4CYYWeqEtgb-OHSdDA?e=GLISSR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-xl hover:shadow transition block"
            >
              Responsabilidade Social
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}