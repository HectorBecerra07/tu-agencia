import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Section } from "./HomePage";
import { ArrowRight } from "lucide-react";

export default function Cotizacion() {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get("plan");

    return (
        <Section id="cotizacion" title="Finalizar Cotización" kicker={`Plan: ${plan}`}>
            <Card className="rounded-2xl bg-white/90 backdrop-blur border-gray-200 shadow-sm">
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                        Completa tus datos
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Estás a un paso de comenzar a crecer con Aura Marketing.
                    </p>

                    <form
                        className="mt-6 grid gap-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const subject = `Cotización para el Plan: ${plan}`;
                            const body = "Hola, me gustaría solicitar una cotización para el plan y discutir mis necesidades. \n\nGracias.";
                            window.location.href = `mailto:auramarketingstore@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                        <Textarea
                            placeholder="Cuéntanos un poco sobre tu proyecto (opcional)"
                            className="rounded-2xl bg-white border-gray-200"
                        />
                        <Button
                            size="lg"
                            className="rounded-2xl bg-primary text-primary-foreground"
                            type="submit"
                        >
                            Solicitar Cotización ahora
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Section>
    )
}