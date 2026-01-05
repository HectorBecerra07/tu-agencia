import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Section } from "./HomePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

type PricingCardProps = {
  name: string;
  price: string;
  desc: string;
  items: string[];
  cta: string;
  highlight?: boolean;
  link: string;
};

const PricingCard = ({
  name,
  price,
  desc,
  items,
  cta,
  highlight,
  link,
}: PricingCardProps) => (
  <Card
    className={`rounded-2xl bg-white/90 backdrop-blur border flex flex-col ${
      highlight ? "border-primary/40 shadow-lg" : "border-gray-200 shadow-sm"
    }`}
  >
    <CardContent className="p-6 flex flex-col flex-grow">
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
          {price !== "Custom" && (
            <div className="text-xs text-muted-foreground">MXN / mes</div>
          )}
        </div>
      </div>

      <Separator className="my-5 border-gray-200" />

      <ul className="space-y-3 flex-grow">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
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
          asChild
        >
          <Link to={link}>
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          *Precios más IVA. Podemos personalizar según objetivos y presupuesto.
        </p>
      </div>
    </CardContent>
  </Card>
);

const marketingPlans: PricingCardProps[] = [
  {
    name: "Starter",
    price: "$4,999",
    desc: "Para comenzar con base sólida en marketing digital.",
    items: [
      "1 landing de conversión",
      "Setup GA4 + eventos",
      "1 canal Ads (Meta o Google)",
      "Optimización semanal",
      "Soporte por WhatsApp",
    ],
    cta: "Cotizar Starter",
    link: "/cotizacion?plan=mkt-starter",
  },
  {
    name: "Growth",
    price: "$9,999",
    desc: "Para escalar resultados y ampliar tu alcance.",
    items: [
      "Landing + mejoras UX",
      "2 canales Ads (Meta + Google)",
      "Creativos mensuales (8 piezas)",
      "Dashboards + reportes",
      "Optimización 2x/semana",
    ],
    cta: "Cotizar Growth",
    highlight: true,
    link: "/cotizacion?plan=mkt-growth",
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Para equipos en expansión con necesidades complejas.",
    items: [
      "Estrategia full-funnel",
      "Creativos ilimitados (acuerdo)",
      "Experimentación A/B continua",
      "Soporte prioritario",
    ],
    cta: "Cotizar Scale",
    link: "/cotizacion?plan=mkt-scale",
  },
];

const webDevPlans: PricingCardProps[] = [
    {
      name: "Landing Page",
      price: "$7,500",
      desc: "Página única de alta conversión para tu producto o servicio.",
      items: [
        "Diseño profesional y responsivo",
        "Formulario de contacto/captura",
        "Optimización de velocidad",
        "Integración con Analytics",
      ],
      cta: "Cotizar Landing",
      link: "/cotizacion?plan=dev-landing",
    },
    {
      name: "Sitio Web Corporativo",
      price: "$15,000",
      desc: "Sitio multi-página para presentar tu empresa.",
      items: [
        "Hasta 5 páginas (Inicio, Nosotros, etc.)",
        "Diseño 100% personalizado",
        "CMS para autogestión de contenido",
        "Blog integrado",
        "SEO técnico inicial",
      ],
      cta: "Cotizar Sitio",
      highlight: true,
      link: "/cotizacion?plan=dev-sitio",
    },
    {
      name: "E-commerce",
      price: "$25,000",
      desc: "Tienda en línea completa para vender tus productos.",
      items: [
        "Catálogo de productos ilimitado",
        "Pasarelas de pago (Stripe, PayPal)",
        "Cálculo de envío",
        "Panel de administración de órdenes",
        "Diseño optimizado para ventas",
      ],
      cta: "Cotizar E-commerce",
      link: "/cotizacion?plan=dev-ecommerce",
    },
  ];

  const designPlans: PricingCardProps[] = [
    {
      name: "Branding Esencial",
      price: "$6,000",
      desc: "Creación de una identidad de marca sólida.",
      items: [
        "Diseño de logotipo (3 propuestas)",
        "Paleta de colores y tipografía",
        "Manual de marca básico",
        "Diseño de tarjeta de presentación",
      ],
      cta: "Cotizar Branding",
      link: "/cotizacion?plan=design-branding",
    },
    {
      name: "Diseño UI/UX App",
      price: "$18,000",
      desc: "Diseño de interfaz y experiencia para tu aplicación móvil o web.",
      items: [
        "Investigación y flujos de usuario",
        "Wireframes y prototipado interactivo",
        "Diseño de hasta 10 pantallas",
        "Sistema de diseño (componentes)",
      ],
      cta: "Cotizar UI/UX",
      highlight: true,
      link: "/cotizacion?plan=design-uiux",
    },
  ];
  
  const seoPlans: PricingCardProps[] = [
    {
      name: "SEO Local",
      price: "$3,500",
      desc: "Domina los resultados de búsqueda en tu área geográfica.",
      items: [
        "Optimización de Google Business Profile",
        "Búsqueda de palabras clave locales",
        "Creación de 2 artículos de blog/mes",
        "Monitoreo de ranking local",
      ],
      cta: "Cotizar SEO Local",
      link: "/cotizacion?plan=seo-local",
    },
  ];
  
  const customPlan: PricingCardProps[] = [
      {
          name: "Plan a tu Medida",
          price: "Custom",
          desc: "Construimos una solución específica para tus necesidades.",
          items: [
              "Combinación de servicios",
              "Consultoría estratégica",
              "Recursos dedicados",
              "Acuerdos de nivel de servicio (SLA)",
              "Integraciones personalizadas",
          ],
          cta: "Cotizar Plan Personalizado",
          link: "/cotizacion?plan=custom",
      }
  ]

export default function Planes() {
  return (
    <Section id="planes" title="Planes flexibles para cada necesidad" kicker="Paquetes">
      <Tabs defaultValue="marketing" className="w-full">
        <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="desarrollo">Desarrollo Web</TabsTrigger>
                <TabsTrigger value="diseno">Diseño</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="personalizado">Personalizados</TabsTrigger>
            </TabsList>
        </div>
        
        <TabsContent value="marketing">
          <div className="grid gap-5 md:grid-cols-3 mt-6">
            {marketingPlans.map(plan => <PricingCard key={plan.name} {...plan} />)}
          </div>
        </TabsContent>
        <TabsContent value="desarrollo">
            <div className="grid gap-5 md:grid-cols-3 mt-6">
                {webDevPlans.map(plan => <PricingCard key={plan.name} {...plan} />)}
            </div>
        </TabsContent>
        <TabsContent value="diseno">
            <div className="grid gap-5 md:grid-cols-2 mt-6">
                {designPlans.map(plan => <PricingCard key={plan.name} {...plan} />)}
            </div>
        </TabsContent>
        <TabsContent value="seo">
            <div className="grid gap-5 md:grid-cols-1 mt-6">
                {seoPlans.map(plan => <PricingCard key={plan.name} {...plan} />)}
            </div>
        </TabsContent>
        <TabsContent value="personalizado">
            <div className="grid gap-5 md:grid-cols-1 mt-6">
                {customPlan.map(plan => <PricingCard key={plan.name} {...plan} />)}
            </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
