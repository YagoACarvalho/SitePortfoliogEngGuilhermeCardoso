import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  Home,
  Landmark,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: FileCheck2,
    title: "Regularização de INSS de Obras",
    text: "Análise técnica e tributária para regularizar obras com segurança, clareza e possibilidade de economia.",
  },
  {
    icon: Calculator,
    title: "Economia Tributária",
    text: "Estratégias para evitar pagamentos indevidos e organizar a documentação da obra da forma correta.",
  },
  {
    icon: Landmark,
    title: "Construções pela CEF",
    text: "Acompanhamento e orientação para quem deseja construir com financiamento pela Caixa Econômica Federal.",
  },
  {
    icon: Hammer,
    title: "Reformas e Construções",
    text: "Planejamento, execução e acompanhamento de obras residenciais com visão técnica e prática.",
  },
  {
    icon: ClipboardCheck,
    title: "Projetos e Vistorias",
    text: "Avaliação de etapas da obra, compatibilização de soluções e apoio técnico na tomada de decisões.",
  },
  {
    icon: Home,
    title: "Financiamento Habitacional",
    text: "Conteúdo e orientação sobre Minha Casa Minha Vida, financiamento e caminhos para tirar o imóvel do papel.",
  },
];

const projects = [
  {
    tag: "Construção residencial",
    title: "Acompanhamento técnico de obra",
    description:
      "Vistorias por etapa, conferência de execução e orientação para decisões mais seguras durante a construção.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "Reforma",
    title: "Acabamento e execução",
    description:
      "Apoio técnico na escolha de soluções construtivas, acabamentos e organização da execução em campo.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "Regularização",
    title: "INSS de obra com economia",
    description:
      "Análise documental e técnica para regularizar a obra sem pagar além do necessário.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
];

const stats = [
  { number: "142+", label: "conteúdos publicados" },
  { number: "CEF", label: "especialista em construções" },
  { number: "INSS", label: "regularização de obras" },
  { number: "RJ", label: "atuação regional" },
];

export default function PortfolioEngGuilhermeCardoso() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white selection:bg-amber-400 selection:text-black">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400 text-black shadow-lg shadow-amber-400/20">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Guilherme Cardoso</p>
              <p className="text-xs text-white/55">Engenharia Civil</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="transition hover:text-white" href="#servicos">Serviços</a>
            <a className="transition hover:text-white" href="#projetos">Projetos</a>
            <a className="transition hover:text-white" href="#processo">Processo</a>
            <a className="transition hover:text-white" href="#contato">Contato</a>
          </nav>

          <a
            href="https://www.instagram.com/eng.guilhermecardoso/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-amber-400/60 hover:text-white md:flex"
          >
           <FaInstagram size={16} /> Instagram
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden px-5 pt-32 md:px-8 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute right-0 top-44 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
              <ShieldCheck size={16} className="text-amber-400" />
              Regularização, obras e financiamento com visão técnica
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-7xl">
              Engenharia civil para tirar sua obra do papel com mais segurança.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Regularização de INSS de obras com economia tributária, reformas, construções, projetos e orientação para construções pela Caixa Econômica Federal.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20falar%20sobre%20minha%20obra."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 font-semibold text-black shadow-xl shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Falar sobre minha obra
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/5"
              >
                Ver áreas de atuação
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-400/30 via-white/5 to-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=80"
                alt="Obra em andamento acompanhada por engenheiro civil"
                className="h-[540px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/55">Posicionamento</p>
                <p className="mt-1 text-xl font-semibold">Regularização + construção + orientação técnica</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-2xl font-semibold text-amber-300">{item.number}</p>
              <p className="mt-1 text-sm text-white/55">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Serviços</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Soluções para quem quer construir, reformar ou regularizar com segurança.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Um portfólio moderno não vende apenas serviço. Ele mostra clareza, confiança e resultado para o cliente tomar decisão.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl bg-amber-400/10 text-amber-300 transition group-hover:bg-amber-400 group-hover:text-black">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/58">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Áreas de atuação</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cases visuais para comunicar autoridade sem parecer genérico.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-50 shadow-sm">
                <div className="h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {project.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Processo</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Atendimento técnico, mas simples de entender.
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              A ideia do site é deixar claro que o cliente não precisa entender tudo de obra, imposto ou financiamento. Ele precisa de um engenheiro que organize o caminho.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["01", "Diagnóstico", "Entendimento da obra, objetivo do cliente e documentação disponível."],
              ["02", "Análise técnica", "Verificação dos caminhos possíveis para construção, reforma, regularização ou financiamento."],
              ["03", "Plano de ação", "Organização dos próximos passos com clareza sobre prazos, documentos e execução."],
              ["04", "Acompanhamento", "Suporte técnico para evitar erro, retrabalho e decisões caras durante o processo."],
            ].map(([step, title, text]) => (
              <div key={step} className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[72px_1fr]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-lg font-bold text-black">{step}</div>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-white/58">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="px-5 pb-10 md:px-8">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-amber-300 to-amber-500 p-8 text-black md:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black/55">Contato</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Quer construir, reformar ou regularizar sua obra?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                Fale com o Eng. Guilherme Cardoso e receba orientação técnica para entender o melhor caminho para o seu projeto.
              </p>
            </div>

            <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl shadow-black/20">
              <p className="text-sm text-white/50">Chamada principal</p>
              <h3 className="mt-2 text-2xl font-semibold">Clique e fale comigo</h3>
              <p className="mt-3 leading-7 text-white/60">
                Substitua o link abaixo pelo WhatsApp real do engenheiro antes de publicar.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Guilherme.%20Vim%20pelo%20site%20e%20quero%20orienta%C3%A7%C3%A3o%20sobre%20minha%20obra."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-semibold text-black transition hover:bg-neutral-200"
                >
                  <MessageCircle size={18} /> Chamar no WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/eng.guilhermecardoso/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 font-semibold text-white/85 transition hover:bg-white/10"
                >
                  <FaInstagram size={16} /> Ver Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 pt-4 text-center text-sm text-white/40 md:px-8">
        <p>© 2026 Guilherme Cardoso Engenharia Civil. Layout modelo para portfólio moderno.</p>
      </footer>
    </main>
  );
}
