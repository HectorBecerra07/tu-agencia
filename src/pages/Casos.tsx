import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Section } from "./HomePage";
import {
    ArrowRight,
  } from "lucide-react";

type PortfolioItem = {
    title: string;
    tag: string;
    image: string;
    bullets: string[];
    metrics: { label: string; value: string }[];
  };
  
  const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
    <Card className="rounded-2xl overflow-hidden bg-white/90 backdrop-blur border-gray-200 shadow-sm hover:shadow-md transition">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="h-52 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/40" />
          <div className="absolute left-4 top-4">
            <Badge className="rounded-full bg-white/90 text-gray-800 border border-gray-200">
              {item.tag}
            </Badge>
          </div>
        </div>
  
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
  
          <div className="grid grid-cols-3 gap-3">
            {item.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-gray-200 bg-white p-3"
              >
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className="font-semibold text-gray-800">{m.value}</div>
              </div>
            ))}
          </div>
  
          <Button variant="outline" className="rounded-2xl w-full" disabled>
            Ver caso (Próximamente)
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

export default function Casos() {
    const portfolio: PortfolioItem[] = [
        {
          title: "Campaña en Redes Sociales para App de Fitness",
          tag: "Meta Ads",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          bullets: [
            "Estrategia de contenido y creativos para Instagram y Facebook.",
            "Segmentación de audiencias y pruebas A/B.",
            "Incremento de descargas y engagement.",
          ],
          metrics: [
            { label: "Descargas", value: "+150%" },
            { label: "CPC", value: "-25%" },
            { label: "Engagement", value: "+50%" },
          ],
        },
        {
          title: "Desarrollo de E-commerce para Marca de Ropa",
          tag: "E-commerce",
          image: "https://images.unsplash.com/photo-1585161439911-a27f1375c87a",
          bullets: [
            "Diseño y desarrollo de tienda en Shopify.",
            "Integración de pasarelas de pago y envíos.",
            "Optimización de la velocidad de carga y UX.",
          ],
          metrics: [
            { label: "Ventas", value: "+200%" },
            { label: "Tasa de Conversión", value: "+3.5%" },
            { label: "Velocidad", value: "98/100" },
          ],
        },
        {
          title: "Branding y Web Corporativa para Consultora",
          tag: "Branding",
          image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
          bullets: [
            "Creación de identidad de marca (logo, colores, tipografía).",
            "Diseño y desarrollo de sitio web corporativo en Webflow.",
            "Creación de plantillas para redes sociales.",
          ],
          metrics: [
            { label: "Tiempo", value: "3 sem" },
            { label: "Reconocimiento", value: "+75%" },
            { label: "Consistencia", value: "100%" },
          ],
        },
        {
            title: "Diseño de App Móvil para Startup de Delivery",
            tag: "Diseño UX/UI",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
            bullets: [
              "Investigación de usuarios y definición de flujos.",
              "Diseño de interfaces y prototipado en Figma.",
              "Pruebas de usabilidad con usuarios reales.",
            ],
            metrics: [
              { label: "Satisfacción", value: "4.8/5" },
              { label: "Tiempo de Tarea", value: "-30%" },
              { label: "Adopción", value: "+40%" },
            ],
          },
      ];

    return (
        <Section id="casos" title="Casos y resultados" kicker="Portafolio">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
                <PortfolioCard key={p.title} item={p} />
            ))}
            </div>
        </Section>
    )
}