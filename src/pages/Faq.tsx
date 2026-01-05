import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./HomePage";
import {
    ChevronDown,
  } from "lucide-react";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-5 transition hover:bg-gray-50"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="font-semibold text-gray-800">{q}</div>
          <ChevronDown
            className={`h-5 w-5 text-primary transition ${
              open ? "rotate-180" : ""
            }`}
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

export default function Faq() {
    return (
        <Section id="faq" title="Preguntas frecuentes" kicker="FAQ">
            <div className="grid gap-4 md:grid-cols-2">
            <FAQItem
                q="¿Trabajan con cualquier tipo de negocio?"
                a="Sí. Recomendamos una llamada breve para entender tu oferta y validar que podamos ayudarte a lograr objetivos reales."
            />
            <FAQItem
                q="¿Cuánto tarda una landing o sitio?"
                a="Una landing suele tomar 7–14 días. Un sitio más grande depende del alcance, pero lo planeamos con entregas parciales."
            />
            <FAQItem
                q="¿Manejan el presupuesto publicitario?"
                a="Nosotros administramos campañas y optimización. El gasto publicitario se paga directo a Meta/Google desde tu cuenta."
            />
            <FAQItem
                q="¿Cómo reportan resultados?"
                a="Con dashboards y reportes claros: leads/ventas, CPA/CPL, ROAS, tasas de conversión y recomendaciones de mejora."
            />
            </div>
        </Section>
    )
}