"use client";

import { useState } from "react";

/* ───────── Icons (inline SVG components) ───────── */

function IconChart() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function IconTrend() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/* ───────── Navbar ───────── */

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Producto", href: "#producto" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">
          CajaPyG
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-text-light hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
            Agenda una demo
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-text-light hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="block text-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
            Agenda una demo
          </a>
        </div>
      )}
    </nav>
  );
}

/* ───────── Hero ───────── */

function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-6">
            Para pymes colombianas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Controla la caja, el PyG y tu facturación mensual{" "}
            <span className="text-primary">en un solo lugar</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-light leading-relaxed max-w-xl">
            CajaPyG le da a tu empresa una vista clara de cuánto gana, cuánto puede gastar y qué debe cobrar, en minutos y sin enredos contables.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              Agenda una demo
            </a>
            <a href="#planes" className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3.5 text-base font-semibold hover:bg-primary/5 transition-colors">
              Ver planes
            </a>
          </div>
          <p className="mt-4 text-sm text-text-light">
            Sin tarjeta de crédito · Onboarding asistido disponible
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Problem / Solution ───────── */

function ProblemSolution() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            <span className="text-sm font-bold uppercase tracking-wider text-red-500">El problema</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
              Excel, WhatsApp y archivos sueltos no escalan
            </h2>
            <ul className="mt-6 space-y-4 text-text-light">
              {[
                "No sabes cuánto efectivo tienes disponible hoy",
                "Cobrar facturas vencidas es un proceso manual",
                "El PyG mensual lo armas a fin de mes con urgencia",
                "Cada persona maneja su propia versión de la información",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Solution */}
          <div className="bg-primary rounded-2xl p-8 text-white">
            <span className="text-sm font-bold uppercase tracking-wider text-secondary">La solución</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
              CajaPyG: tu control financiero en minutos
            </h2>
            <ul className="mt-6 space-y-4 text-white/90">
              {[
                "Dashboard en tiempo real de caja y utilidad",
                "Facturación mensual con seguimiento automático",
                "Proyección de flujo a 30 días",
                "Alertas antes de que los problemas aparezcan",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 text-secondary">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Benefits ───────── */

const benefits = [
  {
    title: "Deja el Excel atrás",
    desc: "Importa tu información o empieza de cero. Sin fórmulas rotas ni versiones perdidas.",
  },
  {
    title: "No necesitas ser contador",
    desc: "Diseñado para dueños y administradores, no para expertos financieros. Todo en lenguaje simple.",
  },
  {
    title: "Hecho para pymes colombianas",
    desc: "Pensado para las necesidades reales de pequeñas empresas en Colombia: facturación, caja y PyG.",
  },
  {
    title: "Decisiones en minutos",
    desc: "Visualiza cuánto puedes gastar, qué debes cobrar y cómo viene tu flujo de caja este mes.",
  },
];

function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Beneficios</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">¿Por qué CajaPyG?</h2>
        <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
          Porque mereces saber cómo va tu negocio sin depender de archivos dispersos ni esperar al cierre contable.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-left p-6 rounded-xl border border-border hover:shadow-lg transition-shadow bg-bg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <IconCheck />
              </div>
              <h3 className="font-bold text-lg">{b.title}</h3>
              <p className="mt-2 text-text-light text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */

const features = [
  {
    icon: <IconChart />,
    title: "Dashboard de caja y PyG mensual",
    desc: "Visualiza ingresos, gastos y utilidad del mes en un panel simple y claro. Sin esperar al cierre contable.",
  },
  {
    icon: <IconBolt />,
    title: "Registro rápido de ingresos y gastos",
    desc: "Agrega movimientos en segundos. Categoriza, filtra y mantén tu información al día sin complicaciones.",
  },
  {
    icon: <IconDocument />,
    title: "Facturación mensual con PDF",
    desc: "Genera facturas en PDF, envíalas y lleva control de estado: pagada o pendiente. Todo en un solo lugar.",
  },
  {
    icon: <IconTrend />,
    title: "Proyección de flujo a 30 días",
    desc: "Anticipa cuánto efectivo tendrás disponible el próximo mes basándote en tus datos reales.",
  },
  {
    icon: <IconBell />,
    title: "Alertas por vencimientos y caja crítica",
    desc: "Recibe notificaciones cuando una factura está por vencer o tu caja baja de un nivel seguro.",
  },
];

function Features() {
  return (
    <section id="producto" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Producto</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Todo lo que necesitas para controlar tus finanzas</h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
            Funcionalidades diseñadas para la operación real de tu pyme. Sin módulos innecesarios.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-3 text-text-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── How it works ───────── */

const steps = [
  {
    num: "1",
    title: "Registra o importa tus datos",
    desc: "Sube tu Excel actual o empieza a registrar ingresos y gastos desde cero. El onboarding te guía paso a paso.",
  },
  {
    num: "2",
    title: "Visualiza tu caja y utilidad",
    desc: "Accede a tu dashboard con la vista mensual de caja, PyG y estado de facturación. Todo actualizado en tiempo real.",
  },
  {
    num: "3",
    title: "Cobra y anticipa tu flujo",
    desc: "Envía facturas, haz seguimiento de pagos pendientes y proyecta tu flujo de caja a 30 días.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Cómo funciona</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">Empieza en 3 simples pasos</h2>
        <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
          No necesitas experiencia contable ni configuraciones complicadas.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative p-8">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto">
                {s.num}
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-text-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Pricing ───────── */

const plans = [
  {
    name: "Base",
    price: "19",
    desc: "Para emprendedores y negocios que inician su control financiero.",
    features: [
      "Dashboard de caja y PyG",
      "Registro de ingresos y gastos",
      "Hasta 20 facturas/mes",
      "Proyección de flujo básica",
      "Soporte por correo",
    ],
    highlighted: false,
  },
  {
    name: "Crecimiento",
    price: "35",
    desc: "Para pymes que necesitan visibilidad completa y facturación activa.",
    features: [
      "Todo lo del plan Base",
      "Facturas ilimitadas con PDF",
      "Proyección avanzada a 30 días",
      "Alertas por vencimientos",
      "Alertas de caja crítica",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Equipo",
    price: "49",
    desc: "Para equipos que comparten la operación financiera del negocio.",
    features: [
      "Todo lo del plan Crecimiento",
      "Hasta 5 usuarios",
      "Roles y permisos",
      "Historial de actividad",
      "Exportación de reportes",
      "Soporte dedicado",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="planes" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Planes y precios</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">El plan perfecto para tu negocio</h2>
        <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
          Sin contratos largos. Cancela cuando quieras. Todos los planes incluyen actualizaciones.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 text-left ${
                p.highlighted
                  ? "bg-primary text-white ring-4 ring-primary/20 scale-105"
                  : "bg-white border border-border"
              }`}
            >
              {p.highlighted && (
                <span className="inline-block rounded-full bg-secondary text-text text-xs font-bold px-3 py-1 mb-4">
                  Más popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlighted ? "text-white/80" : "text-text-light"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">USD ${p.price}</span>
                <span className={`text-sm ${p.highlighted ? "text-white/70" : "text-text-light"}`}>/mes</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-5 h-5 shrink-0 ${p.highlighted ? "text-secondary" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  p.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Agenda una demo
              </a>
            </div>
          ))}
        </div>
        {/* Onboarding add-on */}
        <div className="mt-10 inline-flex items-center gap-3 bg-secondary/10 rounded-full px-6 py-3">
          <span className="text-secondary font-bold text-lg">+</span>
          <span className="text-sm font-medium">
            Onboarding asistido disponible por <strong>USD $49</strong> (pago único)
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */

const faqs = [
  {
    q: "¿Cuánto tiempo toma implementar CajaPyG?",
    a: "La mayoría de nuestros clientes están operando en menos de una hora. Si vienes de Excel, puedes importar tus datos existentes y empezar de inmediato. Con el onboarding asistido, un especialista te guía en todo el proceso.",
  },
  {
    q: "¿Necesito conocimientos contables para usar la plataforma?",
    a: "No. CajaPyG está diseñado para dueños y administradores de negocio, no para contadores. Usamos lenguaje simple y flujos guiados para que puedas controlar tu caja y PyG sin enredos técnicos.",
  },
  {
    q: "¿CajaPyG reemplaza a mi contador?",
    a: "No. CajaPyG complementa el trabajo de tu contador dándote visibilidad diaria de tu caja y utilidad. Tu contador sigue encargándose de la contabilidad formal y los impuestos.",
  },
  {
    q: "¿La facturación de CajaPyG cumple con la normativa colombiana?",
    a: "CajaPyG genera facturas para control interno y cobro. Para facturación electrónica según DIAN, te recomendamos integrarlo con tu proveedor autorizado. Estamos trabajando en la integración directa.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen?",
    a: "Todos los planes incluyen soporte por correo electrónico. Los planes Crecimiento y Equipo tienen soporte prioritario con tiempos de respuesta más cortos. Además, contamos con guías y tutoriales en la plataforma.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí, puedes subir o bajar de plan cuando lo necesites. Los cambios se aplican en tu próximo ciclo de facturación. No hay penalidades ni contratos de permanencia.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Preguntas frecuentes</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-bg transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span>{f.q}</span>
                <IconChevron open={openIdx === i} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-text-light leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Demo CTA / Contact Form ───────── */

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Listo para dejar el Excel?
              </h2>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Agenda una demo personalizada y te mostramos cómo CajaPyG puede simplificar el control financiero de tu negocio.
              </p>
              <ul className="mt-6 space-y-3 text-white/90">
                {["Demo de 20 minutos", "Personalizada a tu negocio", "Sin compromiso"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 text-text">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">¡Listo!</h3>
                  <p className="mt-2 text-text-light">
                    Recibimos tu solicitud. Te contactaremos pronto para agendar tu demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-2">Agenda tu demo</h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="+00 000 000 0000"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary py-3 text-white font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Agendar demo gratuita
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-white">CajaPyG</span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Control financiero simple para pymes colombianas. Caja, PyG y facturación en un solo lugar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Producto</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#producto" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} CajaPyG. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────── Main Page ───────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
