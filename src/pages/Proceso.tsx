import { Section } from "./HomePage";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
    Search,
    Target,
    Palette,
    Rocket,
    TrendingUp,
    ArrowRight
  } from "lucide-react";

const ProcessStep = ({
    step,
    title,
    desc,
    icon: Icon,
  }: {
    step: number;
    title: string;
    desc: string;
    icon: React.ElementType;
  }) => (
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/15 text-primary">
        <Icon className="h-7 w-7" />
      </div>
      <div className="space-y-1">
        <div className="text-xs font-semibold tracking-wide text-primary">
          PASO {step}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );

export default function Proceso() {
    return (
        <Section id="proceso" title="Nuestro Proceso Colaborativo" kicker="Cómo trabajamos">
            <div className="grid gap-12 md:grid-cols-1">
                <ProcessStep
                    step={1}
                    icon={Search}
                    title="1. Descubrimiento y Análisis"
                    desc="Todo gran proyecto comienza con una conversación. Nos sumergimos en tu negocio para entender tus objetivos, tu audiencia y tu competencia. Analizamos el mercado para identificar oportunidades clave."
                />
                <ProcessStep
                    step={2}
                    icon={Target}
                    title="2. Estrategia a Medida"
                    desc="Con los insights del análisis, diseñamos un plan de acción a medida. Definimos los KPIs, seleccionamos los canales más efectivos y creamos un roadmap claro para el éxito de tu proyecto."
                />
                <ProcessStep
                    step={3}
                    icon={Palette}
                    title="3. Diseño y Desarrollo"
                    desc="Aquí es donde la magia sucede. Nuestro equipo de diseño crea una experiencia de usuario atractiva y nuestro equipo de desarrollo la convierte en una realidad funcional, rápida y segura."
                />
                <ProcessStep
                    step={4}
                    icon={Rocket}
                    title="4. Lanzamiento y Marketing"
                    desc="Una vez que todo está perfecto, lanzamos tu proyecto al mundo. Activamos las campañas de marketing digital para generar tracción inicial y atraer a tus primeros clientes."
                />
                <ProcessStep
                    step={5}
                    icon={TrendingUp}
                    title="5. Optimización y Crecimiento"
                    desc="El lanzamiento es solo el comienzo. Monitoreamos constantemente los resultados, realizamos pruebas A/B y optimizamos cada aspecto del proyecto para asegurar un crecimiento sostenible y un ROI positivo."
                />
            </div>
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-800">
                    ¿Listo para empezar tu proyecto?
                </h3>
                <p className="mt-2 text-muted-foreground">
                    Hablemos de cómo podemos ayudarte a alcanzar tus objetivos.
                </p>
                <Button size="lg" className="mt-6 rounded-2xl" asChild>
                    <Link to="/contacto">
                        Agenda una llamada
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </Section>
    )
}