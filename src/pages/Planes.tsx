import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Section } from "./HomePage";
import {
    ArrowRight,
    Check,
  } from "lucide-react";
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
      className={`rounded-2xl bg-white/90 backdrop-blur border ${
        highlight ? "border-primary/40 shadow-lg" : "border-gray-200 shadow-sm"
      }`}
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
          {items.map((it) => (
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

export default function Planes() {
    return (
        <Section id="planes" title="Planes flexibles" kicker="Paquetes">
            <div className="grid gap-5 md:grid-cols-3">
            <PricingCard
                name="Starter"
                price="$4,999"
                desc="Para comenzar con base sólida."
                items={[
                "1 landing de conversión",
                "Setup GA4 + eventos",
                "1 canal Ads (Meta o Google)",
                "Optimización semanal",
                "Soporte por WhatsApp",
                ]}
                cta="Quiero Starter"
                link="/checkout?plan=starter"
            />
            <PricingCard
                name="Growth"
                price="$9,999"
                desc="Para escalar resultados."
                items={[
                "Landing + mejoras UX",
                "2 canales Ads (Meta + Google)",
                "Creativos mensuales (8 piezas)",
                "Dashboards + reportes",
                "Optimización 2x/semana",
                ]}
                cta="Quiero Growth"
                highlight
                link="/checkout?plan=growth"
            />
            <PricingCard
                name="Scale"
                price="Custom"
                desc="Para equipos en expansión."
                items={[
                "Web completa / ecommerce",
                "Estrategia full-funnel",
                "Creativos ilimitados (acuerdo)",
                "Experimentación A/B continua",
                "Soporte prioritario",
                ]}
                cta="Hablar con Aura"
                link="/contacto?plan=scale"
            />
            </div>
        </Section>
    )
}