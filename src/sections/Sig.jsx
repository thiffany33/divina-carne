export default function Sig() {
  return (
    <section id="sig" className="bg-[#420D07] text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Sistema Integrado de Gestão (SIG)
        </h2>

        <p className="text-white-600 mb-10">
          A Divina Carne implementa um Sistema Integrado de Gestão que garante qualidade,
          segurança alimentar, sustentabilidade e responsabilidade social em todas as etapas.
        </p>

        <div className="grid grid-cols-3 gap-6">

          {/* SGA */}
          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgCFlaJXB2HxRKVJWju5vqwbARNsTkSHiVUVA2H5SYhNjnA?e=5ZcRHy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl hover:shadow transition block"
          >
            <h3 className="font-semibold mb-2">SGA</h3>
            <p className="text-sm text-white-600">
              Sistema de Gestão Ambiental.
            </p>
          </a>

          {/* SGQ */}
          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgDUt4NSpQCuQb4puMr1dHApAWOM3ubwAbbeC221ZUhO5ts?e=KZVbPE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl hover:shadow transition block"
          >
            <h3 className="font-semibold mb-2">SGQ</h3>
            <p className="text-sm text-white-600">
              Sistema de Gestão da Qualidade.
            </p>
          </a>

          {/* SGSST */}
          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgCUpVFnwvPzQ7PgDha9gTgbAQ-qmXKcwWBQKJJXvVes3zs?e=drn9Ra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl hover:shadow transition block"
          >
            <h3 className="font-semibold mb-2">SGSST</h3>
            <p className="text-sm text-white-600">
              Segurança e Saúde no Trabalho.
            </p>
          </a>

          {/* SGSA */}
          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgARFxeNJU9aT6Q9RCjUiAXfAY0SHPIDWrpi9UlLxl_VEY8?e=FDt0gF"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl hover:shadow transition block"
          >
            <h3 className="font-semibold mb-2">SGSA</h3>
            <p className="text-sm text-white-600">
              Segurança Alimentar.
            </p>
          </a>

          {/* CÓDIGO DE ÉTICA */}
          <a
            href="https://formacaoiefp-my.sharepoint.com/:f:/g/personal/7704479_formacao_iefp_pt/IgBZILl2Y_7PSZXW_fR0KqNPAduACeA9U2PJ_wc_pn4QUb0?e=iR55vh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl hover:shadow transition block"
          >
            <h3 className="font-semibold mb-2">
              Código de Ética e Responsabilidade Social
            </h3>
            <p className="text-sm text-white-600">
              Compromisso com ética, transparência e sustentabilidade.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}