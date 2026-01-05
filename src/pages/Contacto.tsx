import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Section } from "./HomePage";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
  } from "lucide-react";

const WHATSAPP_NUMBER = "5215500000000";

export default function Contacto() {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get("plan");

    const getInitialMessage = () => {
        if (plan) {
            return `Estoy interesado en el plan ${plan}.`;
        }
        return "";
    }

    return (
        <Section id="contacto" title="Hablemos de tu proyecto" kicker="Contacto">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl bg-white/90 backdrop-blur border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                Cuéntanos qué necesitas
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Responde estas preguntas y te contactamos con una propuesta
                inicial.
              </p>

              <form
                className="mt-6 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "¡Listo! (Demo) Conecta este formulario a tu backend o servicio de email/CRM."
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
                  defaultValue={getInitialMessage()}
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

          <Card className="rounded-2xl bg-white/90 backdrop-blur border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800">Contacto directo</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Email</div>
                    <div className="font-medium">hola@auramarketing.com</div>
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

                <Separator className="my-2 border-gray-200" />

                <Button
                  className="rounded-2xl bg-primary text-primary-foreground"
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
                  type="button"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    )
}