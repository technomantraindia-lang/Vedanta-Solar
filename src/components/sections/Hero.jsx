import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import heroImageOne from "../../assets/home/home1.jpg";
import heroImageTwo from "../../assets/home/home2.png";
import heroImageThree from "../../assets/home/home3.png";

const heroSlides = [
  {
    id: "clean-energy",
    image: heroImageOne,
    alt: "Solar rooftop system",
    imageClass: "object-cover object-center",
    overlayClass: "bg-[#0d2f4f]/48 md:bg-[#0d2f4f]/42",
  },
  {
    id: "stay-tension-free",
    image: heroImageTwo,
    alt: "Solar-powered family home",
    imageClass: "object-cover object-[center_30%]",
    overlayClass: "bg-gradient-to-r from-white/68 via-white/22 to-[#173056]/10",
  },
  {
    id: "trusted-solar",
    image: heroImageThree,
    alt: "Solar installation team",
    imageMode: "cutout",
    imageClass: "",
    imageStyle: {
      transform: "translateX(6%) scale(-1.42, 0.98)",
      transformOrigin: "center bottom",
      filter:
        "grayscale(1) brightness(0.95) contrast(0.95) drop-shadow(22px 18px 26px rgba(18,39,70,0.24)) drop-shadow(0 10px 20px rgba(18,39,70,0.16))",
      opacity: 0.82,
    },
    overlayClass: "bg-transparent",
  },
];

function SocialLinks() {
  return (
    <div className="relative z-20 hidden items-center gap-4 pb-2 text-white md:flex">
      <a
        href="https://www.instagram.com/vedanta_solar/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="pointer-events-auto text-[1.2rem] transition hover:text-[#e1306c] lg:text-[1.65rem]"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/vedanta-solar2011/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="pointer-events-auto text-[1.2rem] transition hover:text-[#0a66c2] lg:text-[1.65rem]"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}

function ConsultationCta({ dark = false, onGetStarted }) {
  const textClass = dark ? "text-[#203f74]" : "text-white";

  return (
    <div
      className={`max-w-[760px] ${textClass}`}
      style={
        dark
          ? {
              textShadow:
                "0 0 18px rgba(255,255,255,0.58), 0 2px 10px rgba(255,255,255,0.24)",
            }
          : undefined
      }
    >
      <p className="max-w-[700px] text-[0.78rem] font-light leading-[1.2] sm:text-[1rem] md:text-[1.6rem] lg:text-[2.15rem]">
        Schedule a FREE consultation
      </p>
      <div className="mt-0.5 flex flex-wrap items-center gap-1.5 sm:mt-1 sm:gap-3">
        <span className="text-[0.78rem] font-light leading-[1.2] sm:text-[1rem] md:text-[1.6rem] lg:text-[2.15rem]">
          with us today!
        </span>
        <button
          type="button"
          onClick={onGetStarted}
          className="vedanta-pill-btn vedanta-pill-btn--fixed-icon px-2.5 py-1 text-[0.82rem] font-normal sm:px-4 sm:py-2 sm:text-[1rem] md:text-[1.35rem] lg:text-[1.65rem]"
        >
          <span className="vedanta-pill-btn__icon" aria-hidden="true">
            &rarr;
          </span>
          <span className="vedanta-pill-btn__label">Get Started</span>
        </button>
      </div>
    </div>
  );
}

function EnergyHighlight({ active = false }) {
  return (
    <span className={`hero-energy-wrap ml-[0.16em] ${active ? "is-active" : ""}`}>
      <span className="hero-energy-text">Energy</span>
      <svg
        viewBox="0 0 280 160"
        aria-hidden="true"
        className="hero-energy-ring"
        preserveAspectRatio="none"
      >
        <path
          className="hero-energy-ring-path"
          d="M20 80 C20 10 260 10 260 80 C260 150 20 150 20 80 Z"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(slideTimer);
  }, []);

  const handleGetStartClick = () => {
    const aboutSection = document.getElementById("home-about-us");
    if (!aboutSection) {
      return;
    }
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-1.5 pb-3 pt-1.5 sm:px-2 sm:pb-4 sm:pt-2 md:px-3 md:pb-5 md:pt-5">
      <div className="relative mx-auto min-h-[420px] w-[99%] overflow-hidden rounded-[14px] border-2 border-white/95 sm:min-h-[500px] sm:w-[98%] sm:rounded-[18px] md:min-h-[690px]">
        <div
          className="flex h-full min-h-[420px] w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[500px] md:min-h-[690px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <article
              key={slide.id}
              className="relative min-h-[420px] min-w-full overflow-hidden sm:min-h-[500px] md:min-h-[690px]"
            >
              {slide.imageMode === "cutout" ? (
                <>
                  <div className="absolute inset-0 bg-[#efeff0]" />
                  <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-l from-[#223a63]/10 via-[#223a63]/4 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[56%] bg-gradient-to-t from-white/34 via-white/10 to-transparent" />
                  <div className="absolute bottom-[7%] right-[10%] h-[18%] w-[38%] rounded-full bg-[#1f3765]/16 blur-[46px]" />
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute bottom-0 right-0 z-[1] h-[75%] w-auto max-w-none object-contain object-bottom sm:right-[2%] sm:h-full"
                    style={slide.imageStyle}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.1)_42%,rgba(255,255,255,0.02)_72%)]" />
                </>
              ) : (
                <>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full ${slide.imageClass}`}
                    style={slide.imageStyle}
                  />
                  <div className={`absolute inset-0 ${slide.overlayClass}`} />
                </>
              )}

              <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1540px] flex-col px-3 pb-6 pt-[4.5rem] sm:min-h-[500px] sm:px-5 sm:pb-9 sm:pt-[4.5rem] md:min-h-[690px] md:px-8 md:pb-11 md:pt-20 lg:px-10 xl:px-12">
                {slide.id === "clean-energy" ? (
                  <>
                    <h1 className="mx-auto mt-4 max-w-[280px] text-center text-[1.28rem] font-light leading-[1.12] tracking-[0.01em] text-white sm:mt-10 sm:max-w-[560px] sm:text-[1.8rem] md:mt-20 md:max-w-[1050px] md:text-[3rem] lg:mt-24 lg:text-[3.9rem]">
                      <span>Power Your Home with Clean</span>
                      <br />
                      <span>
                        and Renewable {" "}
                        <EnergyHighlight active={currentSlide === 0} />
                      </span>
                    </h1>

                    <div className="mt-auto flex items-start justify-between gap-4 md:items-end md:gap-8">
                      <ConsultationCta onGetStarted={handleGetStartClick} />
                      <SocialLinks />
                    </div>
                  </>
                ) : null}

                {slide.id === "stay-tension-free" ? (
                  <>
                    <div className="flex-1 pt-1 sm:pt-4 md:pt-8 lg:pt-14">
                      <h2 className="mx-auto mt-1 max-w-[1050px] text-center text-[1.28rem] font-light leading-[1.12] tracking-[0.01em] text-[#203f74] sm:mt-3 sm:text-[1.8rem] md:mt-6 md:text-[3rem] lg:text-[3.9rem]">
                        Stay Tension Free
                      </h2>

                      <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-5 md:mt-10 md:space-y-7">
                        <div>
                          <p className="text-[1.15rem] font-extrabold leading-none text-white drop-shadow-[0_10px_24px_rgba(18,39,70,0.26)] sm:text-[1.35rem] md:text-[2.45rem] lg:text-[2.95rem]">
                            30 Years
                          </p>
                          <p className="mt-1 text-[0.85rem] font-light leading-none text-[#203f74] sm:text-[1rem] md:text-[1.7rem] lg:text-[2.1rem]">
                            Warranty
                          </p>
                        </div>

                        <div>
                          <p className="text-[1.15rem] font-extrabold leading-none text-white drop-shadow-[0_10px_24px_rgba(18,39,70,0.26)] sm:text-[1.35rem] md:text-[2.45rem] lg:text-[2.95rem]">
                            10 Years
                          </p>
                          <p className="mt-1 text-[0.85rem] font-light leading-none text-[#203f74] sm:text-[1rem] md:text-[1.7rem] lg:text-[2.1rem]">
                            Inverter Warranty
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-start justify-between gap-4 md:items-end md:gap-8">
                      <ConsultationCta dark onGetStarted={handleGetStartClick} />
                      <SocialLinks />
                    </div>
                  </>
                ) : null}

                {slide.id === "trusted-solar" ? (
                  <>
                    <div className="flex-1 pt-2 sm:pt-8 md:pt-14 lg:pt-24">
                      <h2 className="max-w-[1050px] text-[1.05rem] font-light leading-[1.15] tracking-[0.01em] text-black sm:text-[1.42rem] md:text-[2.2rem] lg:text-[2.85rem]">
                        Switch to Rooftop Solar
                        <br />
                        with <span className="font-bold text-[#078f93]">Vedanta Solar</span> -
                        Trusted
                        <br />
                        by <span className="font-bold text-[#078f93]">50,000+</span> Happy Customers.
                      </h2>

                      <div className="mt-4 inline-flex rounded-[1rem] border border-[#c9d7ea] bg-white/95 px-3 py-3 shadow-[0_20px_38px_rgba(18,39,70,0.14)] sm:mt-6 sm:rounded-[1.2rem] sm:px-4 sm:py-4 md:mt-8 md:px-5">
                        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                          <FcGoogle className="text-[2.2rem] sm:text-[3rem] md:text-[4rem]" />

                          <div>
                            <p className="text-[0.85rem] font-semibold text-[#203f74] sm:text-[1rem] md:text-[1.2rem]">
                              Google Rating
                            </p>
                            <div className="mt-0.5 flex items-center gap-1.5 sm:mt-1 sm:gap-2">
                              <span className="text-[1.25rem] font-extrabold leading-none text-[#f4a300] sm:text-[1.55rem] md:text-[2rem]">
                                5.0
                              </span>
                              <div className="flex items-center gap-0.5 text-[0.75rem] text-[#ffb400] sm:gap-1 sm:text-[1rem]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <FaStar key={`hero-star-${index}`} />
                                ))}
                              </div>
                            </div>
                            <p className="mt-0.5 text-[0.65rem] text-[#7a8598] sm:mt-1 sm:text-[0.72rem] md:text-[0.82rem]">
                              See all our reviews
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-start justify-between gap-4 md:items-end md:gap-8">
                      <ConsultationCta dark onGetStarted={handleGetStartClick} />
                      <SocialLinks />
                    </div>
                  </>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-4 sm:gap-2 md:bottom-6">
          {heroSlides.map((slide, index) => {
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Show banner ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
