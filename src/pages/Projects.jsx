import { useEffect, useRef, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import residentialSolar1 from "../assets/service/residential-solar-1.jpg";
import residentialSolar2 from "../assets/service/residential-solar-2.jpg";
import residentialSolar3 from "../assets/service/residential-solar-3.jpg";
import residentialSolar4 from "../assets/service/residential-solar-4.jpg";
import residentialSolar5 from "../assets/service/residential-solar-5.jpg";
import residentialSolar6 from "../assets/service/residential-solar-6.jpg";
import residentialSolar7 from "../assets/service/residential-solar-7.jpg";
import residentialSolar8 from "../assets/service/residential-solar-8.jpg";
import residentialSolar9 from "../assets/service/residential-solar-9.jpg";
import residentialSolar11 from "../assets/service/residential-solar-11.jpg";
import residentialSolar12 from "../assets/service/residential-solar-12.jpg";
import residentialSolar13 from "../assets/service/residential-solar-13.jpg";
import industrialSolar1 from "../assets/service/industrial-solar-1.jpg";
import industrialSolar2 from "../assets/service/industrial-solar-2.jpg";
import industrialSolar3 from "../assets/service/industrial-solar-3.jpg";
import industrialSolar4 from "../assets/service/industrial-solar-4.jpg";
import industrialSolar5 from "../assets/service/industrial-solar-5.jpg";
import industrialSolar6 from "../assets/service/industrial-solar-6.jpg";
import industrialSolar7 from "../assets/service/industrial-solar-7.jpg";
import industrialSolar8 from "../assets/service/industrial-solar-8.jpg";
import industrialSolar9 from "../assets/service/industrial-solar-9.jpg";
import industrialSolar10 from "../assets/service/industrial-solar-10.jpg";
import industrialSolar12 from "../assets/service/industrial-solar-12.jpg";
import industrialSolar13 from "../assets/service/industrial-solar-13.jpg";
import apartmentSolar1 from "../assets/service/apartment-solar-1.png";
import apartmentSolar2 from "../assets/service/apartment-solar-2.png";
import apartmentSolar3 from "../assets/service/apartment-solar-3.png";
import apartmentSolar4 from "../assets/service/apartment-solar-4.png";
import apartmentSolar5 from "../assets/service/apartment-solar-5.png";
import apartmentSolar6 from "../assets/service/apartment-solar-6.jpg";
import apartmentSolar7 from "../assets/service/apartment-solar-7.png";
import apartmentSolar8 from "../assets/service/apartment-solar-8.jpg";
import apartmentSolar9 from "../assets/service/apartment-solar-9.jpg";
import apartmentSolar10 from "../assets/service/apartment-solar-10.jpg";
import apartmentSolar11 from "../assets/service/apartment-solar-11.jpg";
import apartmentSolar12 from "../assets/service/apartment-solar-12.jpg";

const projectSections = [
  {
    title: "Apartment Solar",
    subtitle: "Projects",
    projectName: "Vivanta Heights",
    totalKw: "32.7",
    images: [
      { src: apartmentSolar1, name: "apartment-solar-1.png" },
      { src: apartmentSolar2, name: "apartment-solar-2.png" },
      { src: apartmentSolar3, name: "apartment-solar-3.png" },
      { src: apartmentSolar4, name: "apartment-solar-4.png" },
      { src: apartmentSolar5, name: "apartment-solar-5.png" },
      { src: apartmentSolar6, name: "apartment-solar-6.jpg" },
      { src: apartmentSolar7, name: "apartment-solar-7.png" },
      { src: apartmentSolar8, name: "apartment-solar-8.jpg" },
      { src: apartmentSolar9, name: "apartment-solar-9.jpg" },
      { src: apartmentSolar10, name: "apartment-solar-10.jpg" },
      { src: apartmentSolar11, name: "apartment-solar-11.jpg" },
      { src: apartmentSolar12, name: "apartment-solar-12.jpg" },
    ],
  },
  {
    title: "Industrial Solar",
    subtitle: "Projects",
    projectName: "Vivanta Heights",
    totalKw: "32.7",
    images: [
      { src: industrialSolar1, name: "industrial-solar-1.jpg" },
      { src: industrialSolar2, name: "industrial-solar-2.jpg" },
      { src: industrialSolar3, name: "industrial-solar-3.jpg" },
      { src: industrialSolar4, name: "industrial-solar-4.jpg" },
      { src: industrialSolar5, name: "industrial-solar-5.jpg" },
      { src: industrialSolar6, name: "industrial-solar-6.jpg" },
      { src: industrialSolar7, name: "industrial-solar-7.jpg" },
      { src: industrialSolar8, name: "industrial-solar-8.jpg" },
      { src: industrialSolar9, name: "industrial-solar-9.jpg" },
      { src: industrialSolar10, name: "industrial-solar-10.jpg" },
      { src: industrialSolar12, name: "industrial-solar-12.jpg" },
      { src: industrialSolar13, name: "industrial-solar-13.jpg" },
    ],
  },
  {
    title: "Residential Solar",
    subtitle: "Projects",
    projectName: "Vivanta Heights",
    totalKw: "32.7",
    images: [
      { src: residentialSolar1, name: "residential-solar-1.jpg" },
      { src: residentialSolar2, name: "residential-solar-2.jpg" },
      { src: residentialSolar3, name: "residential-solar-3.jpg" },
      { src: residentialSolar4, name: "residential-solar-4.jpg" },
      { src: residentialSolar5, name: "residential-solar-5.jpg" },
      { src: residentialSolar6, name: "residential-solar-6.jpg" },
      { src: residentialSolar7, name: "residential-solar-7.jpg" },
      { src: residentialSolar8, name: "residential-solar-8.jpg" },
      { src: residentialSolar9, name: "residential-solar-9.jpg" },
      { src: residentialSolar11, name: "residential-solar-11.jpg" },
      { src: residentialSolar12, name: "residential-solar-12.jpg" },
      { src: residentialSolar13, name: "residential-solar-13.jpg" },
    ],
  },
];

function ProjectShowcaseRow({ section }) {
  const [centerIndex, setCenterIndex] = useState(0);
  /* ── Two-slot crossfade: keep two <img> elements, toggle which is visible ── */
  const [slots, setSlots] = useState([0, 0]);
  const [activeSlot, setActiveSlot] = useState(0);
  const thumbnailRefs = useRef([]);
  const imageCount = section.images.length;
  const FADE = 520; // ms

  const wrap = (i) => ((i % imageCount) + imageCount) % imageCount;

  const goTo = (next) => {
    const idx = wrap(next);
    if (idx === centerIndex) return;
    setCenterIndex(idx);
    const inactive = 1 - activeSlot;
    setSlots((prev) => {
      const copy = [...prev];
      copy[inactive] = idx;
      return copy;
    });
    setActiveSlot(inactive);
  };

  useEffect(() => {
    thumbnailRefs.current[centerIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [centerIndex]);

  const leftImage = section.images[wrap(centerIndex - 1)];
  const rightImage = section.images[wrap(centerIndex + 1)];

  /* Style for each crossfade slot */
  const slotStyle = (idx) => ({
    position: "absolute",
    inset: 0,
    opacity: activeSlot === idx ? 1 : 0,
    transform: activeSlot === idx ? "scale(1)" : "scale(1.045)",
    transition: `opacity ${FADE}ms cubic-bezier(0.4,0,0.2,1), transform ${FADE + 80}ms cubic-bezier(0.4,0,0.2,1)`,
    zIndex: activeSlot === idx ? 1 : 0,
    willChange: "opacity, transform",
  });

  /* Shared center-card content (gradient + text overlay) */
  const centerOverlay = (textSm) => (
    <>
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className={`absolute inset-x-0 z-[3] text-center text-white ${textSm ? "bottom-2.5 sm:bottom-4" : "bottom-4"}`}>
        <p className={`font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${textSm ? "text-[0.7rem] sm:text-[0.82rem]" : "text-[0.88rem]"}`}>
          Project Name:
        </p>
        <p className={`font-extrabold leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] ${textSm ? "text-[1.25rem] sm:text-[1.65rem]" : "text-[2.1rem]"}`}>
          {section.projectName}
        </p>
        <p className={`mt-1.5 inline-block rounded bg-white/90 px-2 font-bold text-[#1a2d5a] sm:mt-2 ${textSm ? "py-[1px] text-[0.68rem] sm:text-[0.78rem]" : "py-[2px] text-[0.86rem]"}`}>
          Total Kw: {section.totalKw}
        </p>
      </div>
    </>
  );

  return (
    <div className="project-row-in mt-4 sm:mt-7">
      <div className="project-carousel-shell rounded-[14px] bg-white p-3 sm:rounded-[22px] sm:p-4 md:p-6">
        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-black sm:text-[0.72rem]">
            Project Gallery
          </p>
        </div>

        {/* ── Desktop carousel ── */}
        <div className="hidden items-center justify-center gap-4 md:flex lg:gap-6">
          <button
            type="button"
            onClick={() => goTo(centerIndex - 1)}
            className="project-side-card relative overflow-hidden rounded-xl border border-[#c9d7ea]"
            aria-label={`Preview previous ${section.title} image`}
          >
            <img
              src={leftImage.src}
              alt={`${section.title} ${leftImage.name}`}
              className="project-side-image h-[250px] w-[260px] object-cover"
              style={{ transition: `opacity ${FADE}ms ease, transform ${FADE}ms ease` }}
            />
          </button>

          <button
            type="button"
            onClick={() => goTo(centerIndex - 1)}
            aria-label={`Show previous ${section.title} image`}
            className="project-nav-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#254378]/55 bg-white text-[#254378]"
          >
            <LuArrowLeft className="text-[1.1rem]" />
          </button>

          {/* Center card with crossfade */}
          <div className="project-center-card relative h-[320px] w-[360px] overflow-hidden rounded-xl bg-[#1a2d5a] shadow-md">
            <img src={section.images[slots[0]].src} alt={section.title} className="h-full w-full object-cover" style={slotStyle(0)} />
            <img src={section.images[slots[1]].src} alt={section.title} className="h-full w-full object-cover" style={slotStyle(1)} />
            {centerOverlay(false)}
          </div>

          <button
            type="button"
            onClick={() => goTo(centerIndex + 1)}
            aria-label={`Show next ${section.title} image`}
            className="project-nav-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#254378]/55 bg-white text-[#254378]"
          >
            <LuArrowRight className="text-[1.1rem]" />
          </button>

          <button
            type="button"
            onClick={() => goTo(centerIndex + 1)}
            className="project-side-card relative overflow-hidden rounded-xl border border-[#c9d7ea]"
            aria-label={`Preview next ${section.title} image`}
          >
            <img
              src={rightImage.src}
              alt={`${section.title} ${rightImage.name}`}
              className="project-side-image h-[250px] w-[260px] object-cover"
              style={{ transition: `opacity ${FADE}ms ease, transform ${FADE}ms ease` }}
            />
          </button>
        </div>

        {/* ── Mobile carousel ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:hidden">
          <button
            type="button"
            onClick={() => goTo(centerIndex - 1)}
            aria-label={`Show previous ${section.title} image`}
            className="project-nav-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#254378]/55 bg-white text-[#254378] sm:h-10 sm:w-10"
          >
            <LuArrowLeft className="text-[0.95rem] sm:text-[1.1rem]" />
          </button>

          <div className="project-center-card relative h-[220px] w-[calc(100%-5rem)] max-w-[360px] overflow-hidden rounded-xl bg-[#1a2d5a] shadow-md sm:h-[290px] sm:w-[calc(100%-6rem)]">
            <img src={section.images[slots[0]].src} alt={section.title} className="h-full w-full object-cover" style={slotStyle(0)} />
            <img src={section.images[slots[1]].src} alt={section.title} className="h-full w-full object-cover" style={slotStyle(1)} />
            {centerOverlay(true)}
          </div>

          <button
            type="button"
            onClick={() => goTo(centerIndex + 1)}
            aria-label={`Show next ${section.title} image`}
            className="project-nav-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#254378]/55 bg-white text-[#254378] sm:h-10 sm:w-10"
          >
            <LuArrowRight className="text-[0.95rem] sm:text-[1.1rem]" />
          </button>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-1.5 overflow-x-auto scroll-smooth px-1 pb-1 pr-2 sm:mt-4 sm:gap-2">
          {section.images.map((image, index) => (
            <button
              type="button"
              key={`${section.title}-${image.name}`}
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              onClick={() => goTo(index)}
              className={`relative h-[52px] w-[78px] shrink-0 snap-start overflow-hidden rounded-md border transition-all duration-300 sm:h-[74px] sm:w-[112px] sm:rounded-lg ${
                index === centerIndex
                  ? "border-[#1f3f74] ring-2 ring-[#1f3f74]/30 scale-[1.04]"
                  : "border-[#c8d5e7] hover:border-[#8aa2c4]"
              }`}
              aria-label={`Show image ${index + 1} for ${section.title}`}
            >
              <img
                src={image.src}
                alt={`${section.title} ${image.name}`}
                className={`h-full w-full object-cover transition-all duration-300 ${
                  index === centerIndex ? "scale-100 brightness-100" : "scale-[1.08] brightness-[0.85]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <Header />

      <main className="bg-[#f3f5f7] pb-6 pt-32 text-[#1e3765] sm:pb-10 sm:pt-40 md:pt-56">
        <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="project-hero-in text-[1.55rem] font-extrabold leading-tight sm:text-[2rem] md:text-[3rem]">
              Explore Our Projects
            </h1>
            <p className="project-hero-in mx-auto mt-2 max-w-3xl text-[0.85rem] leading-[1.45] text-[#7f8792] sm:mt-3 sm:text-[0.96rem] sm:leading-6" style={{ animationDelay: "120ms" }}>
              As alternative energy solutions providers we partner in
              fulfilling sustainability goals of our customers through guaranteed
              savings from solar. Below are few of our projects for commercial
              buildings, industrial facilities, medical institutions and
              educational institutions.
            </p>
          </div>

          <div className="mt-7 space-y-6 sm:mt-12 sm:space-y-9">
            {projectSections.map((section, index) => (
              <section
                key={section.title}
                className="project-section-in rounded-[16px] bg-white/65 p-3 backdrop-blur-[1px] sm:rounded-[24px] sm:p-4 md:p-6"
                style={{ animationDelay: `${180 + index * 140}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-[1.35rem] font-extrabold leading-none text-[#1f3a6d] sm:text-[1.7rem] md:text-[2rem]">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-[0.82rem] text-[#8f98a5] sm:text-[1rem]">{section.subtitle}</p>
                  </div>
                  <span className="rounded-full border border-[#c7d4e7] bg-[#f6f9ff] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#5c769d] sm:px-3 sm:py-1 sm:text-[0.74rem]">
                    Solar Portfolio
                  </span>
                </div>
                <ProjectShowcaseRow section={section} />
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
