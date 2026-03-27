import { useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/marquee";
import About from "../components/sections/About";
import StatsBar from "../components/sections/StatsBar";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ProcessSteps from "../components/sections/ProcessSteps";
import OurProjects from "../components/sections/OurProjects";
import ExperienceSection from "../components/sections/ExperienceSection";
import Testimonials from "../components/sections/Testimonials";
import HighPowerBanner from "../components/sections/HighPowerBanner";
import SolarCTA from "../components/sections/SolarCTA";
import PartnersCarousel from "../components/sections/PartnersCarousel";
import CertificationsCarousel from "../components/sections/CertificationsCarousel";
import Footer from "../components/layout/Footer";

export default function Home() {
  const homeRootRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const homeRoot = homeRootRef.current;
    const revealItems = document.querySelectorAll(
      ".home-reveal, .home-reveal-left, .home-reveal-right, .home-reveal-zoom"
    );

    if (prefersReduced.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      if (homeRoot) {
        homeRoot.style.setProperty("--home-scroll-progress", "0");
      }
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      );

      revealItems.forEach((item) => observer.observe(item));
      const detachObserver = () => observer.disconnect();

      let rafId = 0;
      const setScrollProgress = () => {
        rafId = 0;
        if (!homeRoot) {
          return;
        }

        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        homeRoot.style.setProperty("--home-scroll-progress", progress.toFixed(4));
      };

      const onScroll = () => {
        if (rafId) {
          return;
        }
        rafId = window.requestAnimationFrame(setScrollProgress);
      };

      setScrollProgress();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);

      return () => {
        detachObserver();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
      };
    }
  }, []);

  return (
    <div className="home-page" ref={homeRootRef}>
      <div aria-hidden className="home-ambient home-ambient-one" />
      <div aria-hidden className="home-ambient home-ambient-two" />
      <div aria-hidden className="home-ambient home-ambient-three" />
      <div aria-hidden className="home-ambient-line" />

      <div className="home-content">
        <Header />
        <div className="home-hero-shell">
          <div className="home-hero-in">
            <Hero />
          </div>
          <div aria-hidden className="home-hero-gloss" />
        </div>
        <div>
          <Marquee />
        </div>
        <div className="home-reveal-zoom" style={{ "--home-delay": "55ms" }}>
          <SolarCTA />
        </div>
        <div className="home-reveal-left" style={{ "--home-delay": "60ms" }}>
          <About />
        </div>
        <div className="home-reveal-right" style={{ "--home-delay": "80ms" }}>
          <StatsBar />
        </div>
        <div className="home-reveal-zoom" style={{ "--home-delay": "100ms" }}>
          <Services />
        </div>
        <div className="home-reveal-left" style={{ "--home-delay": "120ms" }}>
          <WhyChooseUs />
        </div>
        <div className="home-reveal-right" style={{ "--home-delay": "130ms" }}>
          <ProcessSteps />
        </div>
        <div className="home-reveal-zoom" style={{ "--home-delay": "150ms" }}>
          <OurProjects />
        </div>
        <div className="home-reveal-left" style={{ "--home-delay": "170ms" }}>
          <ExperienceSection />
        </div>
        <div className="home-reveal-right" style={{ "--home-delay": "190ms" }}>
          <Testimonials />
        </div>
        <div className="home-reveal-zoom" style={{ "--home-delay": "210ms" }}>
          <HighPowerBanner />
        </div>
        <div className="home-reveal-left" style={{ "--home-delay": "230ms" }}>
          <PartnersCarousel />
        </div>
        <div className="home-reveal-right" style={{ "--home-delay": "250ms" }}>
          <CertificationsCarousel />
        </div>
        <Footer />
      </div>
    </div>
  );
}
