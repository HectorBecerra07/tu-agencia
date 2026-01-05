"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Target,
  Timer,
  Palette,
  Megaphone,
  Code,
} from "lucide-react";

export const Section = ({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-14 md:py-20 relative">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 space-y-2 text-center">
        {kicker ? (
          <div className="text-sm font-medium text-primary">{kicker}</div>
        ) : null}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-800">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default function HomePage() {
  const clientLogos = [
    { name: "Nova", src: "https://dummyimage.com/220x80/ffffff/111827&text=Nova" },
    { name: "Bravely", src: "https://dummyimage.com/220x80/ffffff/111827&text=Bravely" },
    { name: "Kora", src: "https://dummyimage.com/220x80/ffffff/111827&text=Kora" },
    { name: "Zenio", src: "https://dummyimage.com/220x80/ffffff/111827&text=Zenio" },
    { name: "Luma", src: "https://dummyimage.com/220x80/ffffff/111827&text=Luma" },
    { name: "Atria", src: "https://dummyimage.com/220x80/ffffff/111827&text=Atria" },
  ];

  return (
    <>
      {/* Hero */}
      <section id="inicio" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-gray-900">
                Transformamos ideas en 
                <span className="text-primary"> realidad digital</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Somos una agencia de marketing digital que fusiona creatividad y tecnología para llevar tu negocio al siguiente nivel. Ofrecemos soluciones integrales de diseño, marketing y desarrollo de software.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-2xl bg-primary text-primary-foreground"
                  asChild
                >
                  <Link to="/contacto">
                    Agenda una llamada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl"
                  asChild
                >
                  <Link to="/casos">Ver casos de éxito</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <Card className="rounded-3xl overflow-hidden border-gray-200 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                      alt="Aura Marketing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <Section
        id="servicios-overview"
        title="Nuestros Servicios"
        kicker="Lo que hacemos"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
              <Palette className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño y Creatividad</h3>
            <p className="text-muted-foreground leading-relaxed">
              Creamos identidades visuales impactantes: logos, banners y todo lo que necesites con la suite de Adobe.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
              <Megaphone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing Digital</h3>
            <p className="text-muted-foreground leading-relaxed">
              Impulsamos tu presencia online con SEO, campañas publicitarias en Meta y Google, y gestión de contenido.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Desarrollo de Software</h3>
            <p className="text-muted-foreground leading-relaxed">
              Construimos las herramientas que tu negocio necesita: desde landing pages y e-commerce hasta sistemas de venta a medida.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Client Logos */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-800">
              Marcas que confían en nosotros
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {clientLogos.map((c) => (
              <div
                key={c.name}
                className="h-16 rounded-2xl border border-gray-200 bg-white grid place-items-center overflow-hidden"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  className="h-full w-full object-contain p-3 opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}