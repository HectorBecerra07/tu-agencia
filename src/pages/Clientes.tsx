import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Section } from "./HomePage";
import {
    ArrowRight,
  } from "lucide-react";
import { Link } from "react-router-dom";

export default function Clientes() {
    const clientLogos = [
        { name: "Nova", src: "https://dummyimage.com/220x80/ffffff/111827&text=Nova" },
        { name: "Bravely", src: "https://dummyimage.com/220x80/ffffff/111827&text=Bravely" },
        { name: "Kora", src: "https://dummyimage.com/220x80/ffffff/111827&text=Kora" },
        { name: "Zenio", src: "https://dummyimage.com/220x80/ffffff/111827&text=Zenio" },
        { name: "Luma", src: "https://dummyimage.com/220x80/ffffff/111827&text=Luma" },
        { name: "Atria", src: "https://dummyimage.com/220x80/ffffff/111827&text=Atria" },
      ];

    return (
        <Section id="clientes" title="Clientes" kicker="Confianza">
        <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">
                Empresas que han trabajado con Aura
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                Sustituye estos logos por los reales. Si no tienes aún, también
                podemos mostrar “industrias” o “partners”.
              </div>
            </div>
            <Button
              variant="outline"
              className="rounded-2xl"
              type="button"
              asChild
            >
              <Link to="/contacto">
                Quiero una propuesta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Separator className="my-6 border-gray-200" />

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
      </Section>
    )
}