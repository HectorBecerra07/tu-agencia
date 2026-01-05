

import { Section } from "./HomePage";
import { Check } from "lucide-react";

const ServiceCategory = ({ title, image, children }: { title: string, image: string, children: React.ReactNode }) => (
    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
            <img src={image} alt={title} className="rounded-2xl shadow-lg" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    </div>
);

const ServiceItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
        <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
            <Check className="h-4 w-4" />
        </div>
        <p className="text-muted-foreground leading-relaxed">{children}</p>
    </div>
);

export default function Servicios() {
    return (
        <Section
            id="servicios"
            title="Nuestros Servicios"
            kicker="Soluciones para cada necesidad"
        >
            <ServiceCategory title="Diseño Gráfico y Branding" image="https://images.unsplash.com/photo-1600132806373-16b713833115">
                <ServiceItem>
                    <strong>Diseño de Logos y Branding:</strong> Creamos la identidad visual de tu marca, desde el logo hasta la paleta de colores y tipografía.
                </ServiceItem>
                <ServiceItem>
                    <strong>Diseño de Banners y Anuncios:</strong> Diseñamos creatividades para tus campañas publicitarias que capturan la atención y convierten.
                </ServiceItem>
                <ServiceItem>
                    <strong>Contenido para Redes Sociales:</strong> Producimos gráficos atractivos y consistentes para tus perfiles en redes sociales.
                </ServiceItem>
                <ServiceItem>
                    <strong>Suite de Adobe:</strong> Expertos en Photoshop, Illustrator, InDesign y más para materializar cualquier idea.
                </ServiceItem>
            </ServiceCategory>

            <ServiceCategory title="Marketing Digital y SEO" image="https://images.unsplash.com/photo-1551288049-bebda4e38f71">
                <ServiceItem>
                    <strong>Gestión de Campañas (Meta & Google Ads):</strong> Planificamos, ejecutamos y optimizamos tus campañas para maximizar el retorno de inversión.
                </ServiceItem>
                <ServiceItem>
                    <strong>Optimización para Motores de Búsqueda (SEO):</strong> Mejoramos tu ranking en Google para que más clientes te encuentren de forma orgánica.
                </ServiceItem>
                <ServiceItem>
                    <strong>Marketing de Contenidos:</strong> Creamos contenido de valor que atrae, educa y convierte a tu audiencia.
                </ServiceItem>
                 <ServiceItem>
                    <strong>Analítica Web:</strong> Configuramos y analizamos datos para tomar decisiones informadas y estratégicas.
                </ServiceItem>
            </ServiceCategory>

            <ServiceCategory title="Desarrollo Web y Software" image="https://images.unsplash.com/photo-1542831371-29b0f74f9713">
                <ServiceItem>
                    <strong>Desarrollo de E-commerce:</strong> Creamos tiendas online robustas y fáciles de gestionar para que vendas tus productos 24/7.
                </ServiceItem>
                <ServiceItem>
                    <strong>Landing Pages de Alta Conversión:</strong> Diseñamos y desarrollamos páginas de aterrizaje enfocadas en un solo objetivo: convertir visitantes en clientes.
                </ServiceItem>
                <ServiceItem>
                    <strong>Sistemas de Venta y Software a Medida:</strong> Desarrollamos soluciones de software personalizadas para optimizar tus procesos de negocio.
                </ServiceItem>
                <ServiceItem>
                    <strong>Mantenimiento y Soporte Web:</strong> Nos aseguramos de que tu sitio web esté siempre actualizado, seguro y funcionando a la perfección.
                </ServiceItem>
            </ServiceCategory>
        </Section>
    )
}