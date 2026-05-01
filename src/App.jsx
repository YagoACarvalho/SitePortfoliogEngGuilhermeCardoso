import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  Home,
  Landmark,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const whatsappLink =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20minha%20obra.";

const instagramLink = "https://www.instagram.com/eng.guilhermecardoso/";

const services = [
  {
    icon: FileCheck2,
    title: "Regularização de INSS de Obras",
    text: "Orientação para regularizar sua obra junto à Receita Federal, evitando pagamentos indevidos e problemas futuros.",
  },
  {
    icon: Calculator,
    title: "Economia Tributária",
    text: "Análise técnica para identificar possibilidades legais de redução no valor do INSS da obra.",
  },
  {
    icon: Landmark,
    title: "Construções pela CEF",
    text: "Apoio técnico para quem deseja construir com financiamento pela Caixa Econômica Federal.",
  },
  {
    icon: Hammer,
    title: "Reformas e Construções",
    text: "Planejamento, acompanhamento e execução com foco em segurança, qualidade e organização.",
  },
];

const questions = [
  {
    question: "Toda obra precisa pagar INSS?",
    answer:
      "Sim, obras de construção civil podem gerar obrigação de recolhimento de INSS. O valor depende da área construída, tipo da obra, documentação e enquadramento correto.",
  },
  {
    question: "Dá para reduzir o valor do INSS da obra?",
    answer:
      "Em muitos casos, sim. Com análise técnica e documentação correta, é possível evitar cobranças acima do necessário.",
  },
  {
    question: "O que acontece se eu não regularizar?",
    answer:
      "A falta de regularização pode dificultar averbação do imóvel, venda, financiamento e emissão de documentos importantes.",
  },
  {
    question: "Como funciona construção pela Caixa?",
    answer:
      "A construção pela CEF exige projeto, documentação, orçamento, análise técnica e acompanhamento das etapas da obra.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0f14]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400 text-black">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold">Guilherme Cardoso</p>
              <p className="text-xs text-white/55">Engenharia Civil</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#inss" className="hover:text-white">INSS de Obras</a>
            <a href="#cef" className="hover:text-white">Construções CEF</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-amber-400 md:flex"
          >
            <FaInstagram size={16} />
            Instagram
          </a>
        </div>
      </header>

      <section id="home" className="px-5 pt-32 pb-20 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
              <ShieldCheck size={16} className="text-amber-400" />
              Regularização, construção e orientação técnica
            </div>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Sua obra regularizada, segura e bem planejada.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Atuação em regularização de INSS de obras, economia tributária,
              construções pela Caixa Econômica Federal, reformas, construções e
              acompanhamento técnico.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 font-semibold text-black transition hover:bg-amber-300"
              >
                Falar com o engenheiro
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-semibold text-white/85 hover:bg-white/5"
              >
                Ver serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-400/30 to-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3">
              <img
                src="/guilherme.jpg"
                alt="Engenheiro Guilherme Cardoso"
                className="h-[560px] w-full rounded-[2rem] object-cover object-center"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/55">Engenharia Civil</p>
                <p className="mt-1 text-xl font-semibold">
                  Regularização de obras, construções e consultoria técnica.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Serviços
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Soluções para quem quer construir, reformar ou regularizar sem dor de cabeça.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-amber-400/40"
                >
                  <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/58">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="inss" className="bg-white px-5 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              INSS de Obras
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Regularizar sua obra pode evitar prejuízos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              O INSS de obra é uma etapa importante para quem construiu, reformou
              ou ampliou um imóvel. Com a orientação correta, é possível entender
              o valor devido, organizar a documentação e evitar cobranças
              desnecessárias.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Análise da área construída e tipo de obra",
                "Verificação da documentação disponível",
                "Orientação para regularização junto aos órgãos responsáveis",
                "Identificação de possíveis reduções legais no valor devido",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 text-amber-500" size={20} />
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {questions.map((item) => (
              <div key={item.question} className="rounded-[2rem] border border-black/10 bg-neutral-50 p-6">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cef" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Construção residencial"
              className="h-[520px] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Construções CEF
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Construção financiada precisa de planejamento técnico.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Para construir pela Caixa Econômica Federal, o cliente precisa
              seguir etapas técnicas, apresentar documentação adequada e garantir
              que a obra seja executada conforme o projeto e o cronograma aprovado.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                ["01", "Análise inicial", "Entendimento do terreno, objetivo da construção e viabilidade do projeto."],
                ["02", "Projeto e orçamento", "Organização das informações necessárias para aprovação e execução."],
                ["03", "Acompanhamento técnico", "Suporte durante as etapas para evitar erros, atrasos e retrabalho."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[60px_1fr]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-400 font-bold text-black">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-7 text-white/58">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-amber-400 p-8 text-black md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black/55">
                Contato
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Precisa regularizar, construir ou reformar?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                Entre em contato e receba orientação técnica para entender o melhor caminho para sua obra.
              </p>
            </div>

            <div id="contato" className="rounded-[2rem] bg-black p-6 text-white">
              <h3 className="text-2xl font-semibold">Fale com Guilherme Cardoso</h3>
              <p className="mt-3 leading-7 text-white/60">
                Tire suas dúvidas sobre INSS de obras, construções CEF, reformas e acompanhamento técnico.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-semibold text-black hover:bg-neutral-200"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>

                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 font-semibold text-white/85 hover:bg-white/10"
                >
                  <FaInstagram size={18} />
                  Ver Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 pt-4 text-center text-sm text-white/40">
        <p>© 2026 Guilherme Cardoso Engenharia Civil. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}