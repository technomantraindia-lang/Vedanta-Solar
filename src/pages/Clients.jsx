import { useEffect, useRef, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import clientImage from "../assets/client/client.png";
import partner1 from "../assets/client/image1.png";
import partner2 from "../assets/client/image2.png";
import partner3 from "../assets/client/image3.png";
import logoEnphase from "../assets/home/logo-enphase.png";
import logoStartup from "../assets/home/logo-startup.png";
import logoSolaredge from "../assets/home/logo-solaredge.png";
import logoSun from "../assets/home/logo-sun.png";
import logoWaaree from "../assets/home/logo-waaree.jpg";

export default function Clients() {
  const [partnersVisible, setPartnersVisible] = useState(false);
  const partnersRef = useRef(null);

  useEffect(() => {
    const node = partnersRef.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPartnersVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPartnersVisible(true);
        observer.unobserve(node);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const partnerLogos = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: logoEnphase, alt: "Enphase" },
    { src: logoStartup, alt: "Startup India" },
    { src: logoSolaredge, alt: "SolarEdge" },
    { src: logoSun, alt: "Sun" },
    { src: logoWaaree, alt: "Waaree" },
  ];

  const scrollingLogos = [...partnerLogos, ...partnerLogos];

  return (
    <>
      <Header />

      <main className="clients-main bg-[#f4f4f4] text-slate-700">
        <section className="relative mx-auto max-w-[1240px] overflow-hidden px-6 pb-24 pt-56">
          <div aria-hidden className="clients-orb clients-orb-left" />
          <div aria-hidden className="clients-orb clients-orb-right" />

          <div className="text-center clients-hero-in">
            <h1 className="text-4xl font-extrabold leading-none text-[#1e3765] md:text-[3rem]">
              Our Clients
            </h1>
            <p
              className="mt-6 text-[1.1rem] leading-[1.8] text-[#4d4d4d] clients-copy-in"
              style={{ animationDelay: "90ms" }}
            >
              Our clients are the true measure of our success. Over the years,
              Vedanta Solar has empowered hundreds of industries, businesses,
              and homes across India to transition to clean, reliable solar
              energy.
            </p>
            <p
              className="mt-4 text-[1rem] leading-[1.8] text-[#4d4d4d] clients-copy-in"
              style={{ animationDelay: "160ms" }}
            >
              From manufacturing units and hotels to schools, hospitals, and
              corporate offices, we've built lasting partnerships grounded in
              trust, quality, and results. Every project we deliver stands as
              proof of our commitment to excellence and innovation.
            </p>
            <p
              className="mt-4 text-[1rem] leading-[1.8] text-[#4d4d4d] clients-copy-in"
              style={{ animationDelay: "230ms" }}
            >
              With 100+ dedicated professionals, 7+ years of experience, and a
              strong presence across 8+ cities, Vedanta Solar has become one of
              India's most trusted names in solar EPC solutions. Our
              achievements are not just in numbers - they are in the
              satisfaction, savings, and smiles of every client we serve.
            </p>
            <p
              className="mt-4 text-[1rem] leading-[1.8] text-[#4d4d4d] clients-copy-in"
              style={{ animationDelay: "300ms" }}
            >
              We take pride in being chosen by some of the most respected
              brands and organisations in the country. As we continue to grow,
              our mission remains the same: create a future powered by trust,
              technology, and the sun.
            </p>
          </div>

          <div
            className="mt-12 text-center clients-showcase-in"
            style={{ animationDelay: "220ms" }}
          >
            <h2 className="text-2xl font-extrabold text-[#1e3765]">
              Our Clients
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="clients-showcase-frame">
                <img
                  src={clientImage}
                  alt="Our Clients"
                  className="h-auto w-full max-w-[800px] object-contain clients-showcase-image"
                />
              </div>
            </div>
          </div>

          <div
            ref={partnersRef}
            className={`mt-16 text-center clients-partners-reveal ${partnersVisible ? "is-visible" : ""}`}
          >
            <h2 className="text-2xl font-extrabold text-[#1e3765]">
              Partners We Have
            </h2>
            <p className="mt-2 text-[1rem] text-[#4d4d4d]">
              Our Global Partners
            </p>

            <div className="clients-logo-marquee mt-8">
              <div className={`clients-logo-track ${partnersVisible ? "is-visible" : ""}`}>
                {scrollingLogos.map((partner, index) => (
                  <div
                    key={`${partner.alt}-${index}`}
                    className="clients-partner-card clients-partner-reveal is-visible"
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="h-12 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
