
import * as React from "react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "5215500000000";
const WHATSAPP_MESSAGE =
  "Hola Aura Marketing, quiero información sobre campañas y/o desarrollo web.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] group"
      aria-label="WhatsApp"
    >
      <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 backdrop-blur px-4 py-3 shadow-lg hover:shadow-xl transition">
        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="hidden sm:block leading-tight">
          <div className="text-sm font-semibold text-gray-900">
            WhatsApp
          </div>
          <div className="text-xs text-muted-foreground">
            Respuesta rápida
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Layout() {
  const nav = useMemo(
    () => [
      { label: "Servicios", id: "servicios", path: "/servicios" },
      { label: "Clientes", id: "clientes", path: "/clientes" },
      { label: "Casos", id: "casos", path: "/casos" },
      { label: "Proceso", id: "proceso", path: "/proceso" },
      { label: "Planes", id: "planes", path: "/planes" },
      { label: "FAQ", id: "faq", path: "/faq" },
      { label: "Contacto", id: "contacto", path: "/contacto" },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <WhatsAppFloat />

      <div className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[900px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

      <header
        className={`sticky top-0 z-50 border-b ${
          scrolled ? "bg-white/85 backdrop-blur" : "bg-white"
        } border-gray-200`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="h-9 w-9 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="font-semibold">Aura Marketing</div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Button
                key={n.id}
                variant="ghost"
                className={`rounded-2xl ${
                  activeSection === n.path ? "text-primary" : "text-gray-700"
                }`}
                asChild
              >
                <Link to={n.path}>{n.label}</Link>
              </Button>
            ))}
            <Button
              className="rounded-2xl bg-primary text-primary-foreground ml-2"
              asChild
            >
              <Link to="/contacto">
                Agenda una llamada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-2xl"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="mx-auto max-w-6xl px-4 py-4 grid gap-2">
                {nav.map((n) => (
                  <Button
                    key={n.id}
                    variant="ghost"
                    className="justify-start rounded-2xl"
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                    asChild
                  >
                    <Link to={n.path}>{n.label}</Link>
                  </Button>
                ))}
                <Button
                  className="rounded-2xl bg-primary text-primary-foreground"
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                  asChild
                >
                  <Link to="/contacto">
                    Agenda una llamada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-2xl border border-gray-200 bg-white shadow-sm grid place-items-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold">Aura Marketing</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Marketing y desarrollo web enfocado en performance.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="my-8 border-t border-gray-200" />
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aura Marketing. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
