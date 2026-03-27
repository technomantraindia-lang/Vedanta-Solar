import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServiceDetail from "./pages/services/ServiceDetail";
import Calculator from "./pages/CalculatorPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/calucater" element={<Navigate to="/calculator" replace />} />
        <Route path="/calcuator" element={<Navigate to="/calculator" replace />} />
        <Route path="/calculater" element={<Navigate to="/calculator" replace />} />
        <Route path="/carrer" element={<Careers />} />
        <Route
          path="/services"
          element={<Navigate to="/services/residential-solar" replace />}
        />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}
