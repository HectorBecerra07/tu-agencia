import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import Servicios from "./pages/Servicios";
import Clientes from "./pages/Clientes";
import Casos from "./pages/Casos";
import Proceso from "./pages/Proceso";
import Planes from "./pages/Planes";
import Faq from "./pages/Faq";
import Contacto from "./pages/Contacto";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="casos" element={<Casos />} />
          <Route path="proceso" element={<Proceso />} />
          <Route path="planes" element={<Planes />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
