import { useState } from "react";

import bovino from "../assets/animals/bovino.png";
import suino from "../assets/animals/suino.png";
import aves from "../assets/animals/aves.png";

export default function Animals() {
  const [open, setOpen] = useState(null);

  const items = [
    {
      id: "bovino",
      title: "Bovinos",
      img: bovino,
      desc: "Qualidade e rastreabilidade em cada etapa.",
      text: `Na Divina Carne, a produção de bovinos é conduzida com um rigor absoluto, desde a criação até à distribuição final. Garantimos o bem-estar animal através de práticas responsáveis, com ambientes controlados e alimentação adequada.
          Todo o processo é monitorizado de forma contínua, assegurando elevados padrões de qualidade e segurança alimentar. A rastreabilidade permite acompanhar cada lote com precisão, garantindo total transparência ao longo da cadeia produtiva.
          O resultado é um produto consistente, seguro e de excelência, que chega ao consumidor com confiança e qualidade garantida.`
    },
    {
      id: "suino",
      title: "Suínos",
      img: suino,
      desc: "Processos controlados para máxima segurança.",
      text: `A produção de suínos na Divina Carne assenta em processos eficientes, sustentáveis e altamente controlados. Priorizamos o bem-estar animal, assegurando condições adequadas de criação e acompanhamento técnico em todas as fases.
          Aplicamos rigorosos critérios de qualidade e higiene, garantindo a segurança alimentar desde a origem até ao produto final. Através de sistemas de rastreabilidade, cada etapa é registada, permitindo total controlo e transparência.
          Assim, asseguramos um produto fiável, com elevados padrões de qualidade, pronto para chegar ao consumidor com total segurança.`
    },
    {
      id: "aves",
      title: "Aves",
      img: aves,
      desc: "Bem-estar, qualidade e segurança do início ao fim.",
      text: `Na produção de aves, a Divina Carne segue práticas exigentes que garantem qualidade, segurança e respeito pelo bem-estar animal. As condições de criação são cuidadosamente controladas, promovendo um ambiente saudável e adequado.
        Todo o processo produtivo é acompanhado por sistemas rigorosos de controlo e rastreabilidade, assegurando que cada produto pode ser identificado desde a origem até ao consumidor final.
        Com foco na excelência e na segurança alimentar, entregamos produtos que refletem o nosso compromisso com qualidade, confiança e sustentabilidade.`
    }
  ];

  return (
    <section id="animais" className="bg-gray-50 px-8 py-24">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="mb-12">
          <p className="text-bold text-[#AA0106] uppercase tracking-widest mb-2">
            Produção com excelência
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Nossos animais
          </h2>

          <p className="text-gray-600 max-w-xl">
            Garantimos bem-estar animal, qualidade, rastreabilidade e segurança alimentar em todas as etapas da produção.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6 items-start">

          {items.map((item) => (

            <div key={item.id}>

              {/* CARD */}
              <div className="relative h-[260px] rounded-2xl overflow-hidden mb-4">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>

              </div>

              {/* ACCORDION */}
              <div className="border rounded-xl overflow-hidden">

                <button
                  onClick={() =>
                    setOpen((prev) =>
                      prev === item.id ? null : item.id
                    )
                  }
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span>Saber mais</span>
                  <span>{open === item.id ? "▲" : "▼"}</span>
                </button>

                {open === item.id && (
                  <div className="p-6 border-t">

                    <h3 className="font-bold text-lg mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>

                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}