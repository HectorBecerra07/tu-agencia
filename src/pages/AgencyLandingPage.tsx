import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Brush,
  Megaphone,
  Sparkles,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";

const Section = ({ id, title, kicker, children }: any) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 md:mb-14 text-center">
        {kicker ? (
          <div className="mb-3 flex items-center justify-center gap-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>{kicker}</span>
          </div>
        ) : null}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-800">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ icon: Icon, children }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm"
  >
    <Icon className="h-4 w-4 text-primary" />
    <span>{children}</span>
  </motion.div>
);

const Feature = ({ icon: Icon, title, desc }: any) => (
  <Card className="rounded-2xl bg-white border-gray-200">
    <CardContent className="p-6">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-primary shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }: any) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-5">
    <div className="text-2xl font-semibold tracking-tight text-gray-800">
      {value}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const PricingCard = ({ name, price, desc, items, cta, highlight }: any) => (
  <Card
    className={`rounded-2xl ${
      highlight ? "border-primary/50 shadow-lg" : "border-gray-200"
    } bg-white`}
  >
    <CardContent className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            {highlight ? (
              <Badge className="rounded-full bg-primary text-primary-foreground">
                Más elegido
              </Badge>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold text-gray-800">{price}</div>
          <div className="text-xs text-muted-foreground">MXN / mes</div>
        </div>
      </div>

      <Separator className="my-5 border-gray-200" />

      <ul className="space-y-3">
        {items.map((it: string) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 text-primary" />
            <span className="text-muted-foreground leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          className={`w-full rounded-2xl ${
            highlight ? "bg-primary text-primary-foreground" : ""
          }`}
          size="lg"
        >
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          *Precios de referencia. Ajustamos el plan según objetivos, industria y
          alcance.
        </p>
      </div>
    </CardContent>
  </Card>
);

const FAQItem = ({ q, a }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left rounded-2xl border border-gray-200 bg-white p-5 transition hover:bg-gray-50"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="font-semibold text-gray-800">{q}</div>
        <ChevronDown
          className={`h-5 w-5 text-primary transition ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </button>
  );
};

const PortfolioCard = ({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) => (
  <Card className="rounded-2xl bg-white border-gray-200 overflow-hidden">
    <CardContent className="p-0">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </CardContent>
  </Card>
);

const ProcessStep = ({
  step,
  title,
  desc,
}: {
  step: number;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
      {step}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function AgencyLandingPage() {
  const nav = useMemo(
    () => [
      { label: "Servicios", id: "servicios" },
      { label: "Proceso", id: "proceso" },
      { label: "Portafolio", id: "portafolio" },
      { label: "Planes", id: "planes" },
      { label: "FAQ", id: "faq" },
      { label: "Contacto", id: "contacto" },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = nav.map((n) => document.getElementById(n.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToId("inicio")}
            className="flex items-center gap-2"
          >
            <div className="h-9 w-9 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Tu Agencia</div>
              <div className="text-xs text-muted-foreground">
                Marketing + Web + Branding
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {nav.map((n) => (
              <Button
                key={n.id}
                variant={activeSection === n.id ? "outline" : "ghost"}
                className="rounded-2xl"
                onClick={() => scrollToId(n.id)}
              >
                {n.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden md:inline-flex rounded-2xl bg-primary text-primary-foreground"
              onClick={() => scrollToId("contacto")}
            >
              Cotizar proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              className="md:hidden rounded-2xl"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-gray-200 bg-white/50 backdrop-blur"
            >
              <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
                {nav.map((n) => (
                  <Button
                    key={n.id}
                    variant={activeSection === n.id ? "outline" : "ghost"}
                    className="justify-start rounded-2xl"
                    onClick={() => {
                      setMobileOpen(false);
                      scrollToId(n.id);
                    }}
                  >
                    {n.label}
                  </Button>
                ))}
                <Button
                  className="rounded-2xl bg-primary text-primary-foreground"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToId("contacto");
                  }}
                >
                  Cotizar proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section id="inicio" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2">
                <Pill icon={ShieldCheck}>Estrategia + ejecución completa</Pill>
                <Pill icon={Gauge}>Enfoque en resultados</Pill>
                <Pill icon={Layers}>Equipo multidisciplinario</Pill>
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-gray-800">
                Marketing, desarrollo web y branding para empresas que quieren
                crecer.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Creamos presencia digital de principio a fin: campañas, sitios
                web a medida, automatizaciones, contenido y una línea visual
                profesional con tu diseñadora (logos y piezas).
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-2xl bg-primary text-primary-foreground"
                  onClick={() => scrollToId("contacto")}
                >
                  Agenda una llamada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl"
                  onClick={() => scrollToId("portafolio")}
                >
                  Ver ejemplos
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Stat value="+ROI" label="Estrategias orientadas a ventas" />
                <Stat value="Web" label="Velocidad, SEO y conversión" />
                <Stat value="Brand" label="Diseño coherente y memorable" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <Card className="rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="https://picsum.photos/seed/marketing/800/600"
                      alt="Marketing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/50" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Section
        id="servicios"
        title="Todo lo que tu empresa necesita para destacar"
        kicker="Propuestas claras, entregables concretos"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Feature
            icon={Megaphone}
            title="Marketing & Performance"
            desc="Auditoría, estrategia, ads (Meta/Google), funnel, email marketing, analítica, CRO y reportes accionables."
          />
          <Feature
            icon={Code2}
            title="Desarrollo Web Completo"
            desc="Landing pages, sitios corporativos, e-commerce, integraciones, automatizaciones, SEO técnico y optimización de velocidad."
          />
          <Feature
            icon={Brush}
            title="Branding & Diseño"
            desc="Con diseñadora dedicada: logo, identidad visual, brand book ligero, piezas para redes, presentaciones y plantillas."
          />
        </div>
      </Section>

      <Section id="proceso" title="Nuestro Proceso" kicker="Un camino claro hacia el éxito">
        <div className="grid gap-8 md:grid-cols-2">
          <ProcessStep
            step={1}
            title="Descubrimiento y Estrategia"
            desc="Analizamos tus objetivos, tu mercado y tu competencia para crear una estrategia a medida."
          />
          <ProcessStep
            step={2}
            title="Diseño y Desarrollo"
            desc="Creamos una experiencia de usuario atractiva y funcional, desde el diseño hasta la implementación."
          />
          <ProcessStep
            step={3}
            title="Lanzamiento y Optimización"
            desc="Lanzamos tu proyecto y medimos los resultados para optimizar continuamente el rendimiento."
          />
          <ProcessStep
            step={4}
            title="Crecimiento y Soporte"
            desc="Te acompañamos en el crecimiento de tu negocio, ofreciendo soporte y nuevas ideas."
          />
        </div>
      </Section>

      <Section id="portafolio" title="Nuestro Trabajo" kicker="Proyectos que nos enorgullecen">
        <div className="grid gap-5 md:grid-cols-3">
          <PortfolioCard
            image="https://picsum.photos/seed/portfolio1/800/600"
            title="Campaña de Marketing Digital"
            category="Marketing"
          />
          <PortfolioCard
            image="https://picsum.photos/seed/portfolio2/800/600"
            title="Sitio Web Corporativo"
            category="Desarrollo Web"
          />
          <PortfolioCard
            image="https://picsum.photos/seed/portfolio3/800/600"
            title="Identidad de Marca"
            category="Branding"
          />
        </div>
      </Section>

      <Section id="planes" title="Planes para empezar" kicker="Elige un punto de partida">
        <div className="grid gap-5 md:grid-cols-3">
          <PricingCard
            name="Starter"
            price="$9,900"
            desc="Para validar oferta y captar leads."
            items={[
              "Landing 1 página (secciones clave)",
              "SEO base + analítica",
              "1 campaña inicial (Meta o Google)",
              "Plantillas de diseño (5 piezas)",
              "Reporte quincenal",
            ]}
            cta="Empezar"
          />
          <PricingCard
            name="Growth"
            price="$18,900"
            desc="Escalar con sistema completo."
            items={[
              "Sitio multi-sección (hasta 6)",
              "Optimización de conversión (CRO) básica",
              "2–3 campañas + pruebas A/B",
              "Branding (logo + mini brand book)",
              "Reporte semanal + optimización",
            ]}
            cta="Quiero Growth"
            highlight
          />
          <PricingCard
            name="Scale"
            price="$34,900"
            desc="Para equipos que quieren velocidad y volumen."
            items={[
              "Sitio avanzado (blog / e-commerce / integraciones)",
              "Automatizaciones (CRM/email/WhatsApp)",
              "Gestión multi-campaña + creatividades",
              "Diseño mensual (12–20 piezas)",
              "Dashboard + reuniones semanales",
            ]}
            cta="Hablemos"
          />
        </div>
      </Section>

      <Section id="faq" title="Preguntas Frecuentes" kicker="Resolvemos tus dudas">
        <div className="grid gap-4 md:grid-cols-2">
          <FAQItem
            q="¿Cómo sé qué plan es el adecuado para mí?"
            a="Depende de tus objetivos y tu presupuesto. El plan Starter es ideal para empezar, mientras que el Growth y el Scale son para empresas que buscan crecer de manera más agresiva."
          />
          <FAQItem
            q="¿Puedo cambiar de plan más adelante?"
            a="¡Por supuesto! Puedes cambiar de plan en cualquier momento para adaptarte a las necesidades de tu negocio."
          />
          <FAQItem
            q="¿Qué tipo de soporte ofrecen?"
            a="Ofrecemos soporte por correo electrónico y WhatsApp, con reuniones semanales en los planes más avanzados."
          />
          <FAQItem
            q="¿Cuánto tiempo se tarda en ver resultados?"
            a="Los resultados varían según el plan y la industria, pero generalmente empezamos a ver resultados medibles en los primeros 30-60 días."
          />
        </div>
      </Section>

      <Section id="contacto" title="Hablemos de tu proyecto" kicker="Cotización rápida">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl bg-white border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                Cuéntanos qué necesitas
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Responde 3 preguntas y te contactamos con una propuesta inicial.
              </p>

              <form
                className="mt-6 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "¡Listo! (Demo) Conecta este formulario a tu backend o servicio de email."
                  );
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input
                    placeholder="Nombre"
                    required
                    className="rounded-2xl bg-white border-gray-200"
                  />
                  <Input
                    placeholder="Empresa"
                    className="rounded-2xl bg-white border-gray-200"
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  required
                  className="rounded-2xl bg-white border-gray-200"
                />
                <Input
                  placeholder="WhatsApp / Teléfono"
                  className="rounded-2xl bg-white border-gray-200"
                />
                <Textarea
                  placeholder="¿Qué buscas? (web, campañas, branding, todo)"
                  required
                  className="min-h-[120px] rounded-2xl bg-white border-gray-200"
                />
                <Button
                  size="lg"
                  className="rounded-2xl bg-primary text-primary-foreground"
                  type="submit"
                >
                  Enviar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-white border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800">Contacto directo</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Email</div>
                    <div className="font-medium">hola@tuagencia.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">WhatsApp</div>
                    <div className="font-medium">+52 55 0000 0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Ubicación</div>
                    <div className="font-medium">CDMX / Remoto</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold">Tu Agencia</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Soluciones completas en marketing, desarrollo web y diseño para
                marcas que quieren crecer.
              </p>
            </div>
          </div>
          <Separator className="my-8 border-gray-200" />
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tu Agencia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
