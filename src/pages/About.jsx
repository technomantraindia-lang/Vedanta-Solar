import { useEffect, useRef, useState } from "react";
import { FiEye, FiTarget } from "react-icons/fi";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutSolarJourneySection from "../components/sections/AboutSolarJourneySection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HousingGuideSection from "../components/sections/HousingGuideSection";
import leaderOne from "../assets/about/jil-patel.png";
import leaderTwo from "../assets/about/pankil-ganghi.png";
import headerImage from "../assets/about/header1.png";

const timelineItems = [
  {
    year: "2016",
    text: "Successfully completed our first major rooftop solar project.",
    level: "top",
    align: "start",
  },
  {
    year: "2017",
    text: "Founded with a vision to deliver reliable and future-ready solar energy solutions.",
    level: "bottom",
    align: "start",
  },
  {
    year: "2018",
    text: "Extended services to Pune & Indore, becoming a multi-city EPC leader.",
    level: "top",
    align: "center",
  },
  {
    year: "2020",
    text: "Expanded presence in Vadodara & Ahmedabad, serving both residential and industrial clients.",
    level: "bottom",
    align: "center",
  },
  {
    year: "2021",
    text: "Partnered with tier-1 solar panel & inverter brands, ensuring unmatched performance reliability.",
    level: "top",
    align: "center",
  },
  {
    year: "2022",
    text: "Crossed 15 MW of solar installations with a proven on-time project completion record.",
    level: "bottom",
    align: "center",
  },
  {
    year: "2023",
    text: "Proud to be rated as a top-rated solar EPC company on Google, trusted by 1000+ happy customers.",
    level: "top",
    align: "center",
  },
  {
    year: "2024",
    text: "Recognized among the top 2 EPC companies in Myqel (Madhya Gujarat Vij Company Ltd.).",
    level: "bottom",
    align: "end",
  },
];

const leaders = [
  {
    name: "Jil Patel",
    role: "Director & Co-Founder",
    image: leaderOne,
  },
  {
    name: "Pankil Gandhi",
    role: "Director & Co-Founder",
    image: leaderTwo,
  },
];

function Reveal({ children, className = "", delay = 0, y = 24 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "opacity-0"
      }`}
      style={{
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-[#f4f4f4] text-slate-700">
        <section className="relative overflow-hidden">
          <img
            src={headerImage}
            alt="About Us Header"
            className="about-hero-image h-[400px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-24 pt-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-extrabold leading-none text-[#1e3765] md:text-[3rem]">
              About Us
            </h1>
            <p className="mt-3 text-2xl font-medium leading-tight text-[#068f90] md:text-[2rem]">
              10 Years of Experience in Solar & Renewable Energy
            </p>
            <p className="mx-auto mt-7 max-w-4xl text-base leading-[1.55] text-[#595959] md:text-[1.05rem]">
              Vedanta Solar is a regionally licensed and certified solar power contractor. We&apos;ve made it our mission to help our community make the smart switch to solar power for your home or business. Our talented team of installers, service technicians, project managers, sales staff, system designers and company management all focus on providing you with an exceptional experience. Come join the future of energy with us.
            </p>
          </Reveal>

          <Reveal className="relative mt-20 hidden lg:block" delay={120}>
            <div className="h-[330px]">
              <div className="about-timeline-line absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#b7b7b7]" />
              <div className="about-timeline-line-glow absolute left-0 right-0 top-1/2 h-px -translate-y-1/2" />
              <div className="about-timeline-line-glow about-timeline-line-glow-soft absolute left-0 right-0 top-1/2 h-px -translate-y-1/2" />
              <div className="grid h-full grid-cols-8 gap-2">
                {timelineItems.map((item, index) => (
                  <div key={item.year} className="about-timeline-item relative h-full">
                    <div
                      style={{ "--group-delay": `${index * 220}ms` }}
                      className={`about-timeline-group absolute inset-x-0 px-1 ${
                        item.level === "top"
                          ? "bottom-[58%] about-timeline-group-top"
                          : "top-[58%] about-timeline-group-bottom"
                      }`}
                    >
                      <div
                        style={{ animationDelay: `${index * 120 + 120}ms` }}
                        className="about-timeline-copy about-timeline-copy-static"
                      >
                        <p className="about-timeline-year text-[1.95rem] font-extrabold text-[#f3b300]">
                          {item.year}
                        </p>
                        <p className="about-timeline-text">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <span
                      className="about-timeline-dot absolute left-1/2 top-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a9a99] ring-[3px] ring-[#f4f4f4]"
                      style={{ animationDelay: `${index * 140}ms` }}
                    />
                    <span className="absolute left-1/2 top-1/2 h-[11px] w-[11px] translate-x-[6px] translate-y-[3px] rounded-full bg-black/15 blur-[1px]" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:hidden">
            {timelineItems.map((item, index) => (
              <Reveal
                key={item.year}
                delay={index * 80}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <p className="text-3xl font-extrabold leading-none text-[#f3b300]">
                    {item.year}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid overflow-hidden rounded-xl border border-[#e0e0e0] bg-[#f7f7f7] lg:grid-cols-2">
            <Reveal className="px-8 py-8 lg:border-r lg:border-[#d7d7d7]" delay={80}>
              <h2 className="flex items-center gap-3 text-[2.1rem] font-extrabold leading-none text-[#1e3765]">
                <FiEye className="text-[1.8rem] text-[#008b8f]" />
                Our Vision
              </h2>
              <p className="mt-4 max-w-[510px] text-[1.02rem] leading-[1.6] text-[#676767]">
                Our mission can be achieved through manufacturing of exceptionally best products at very cost effective way through best available R&amp;D personals and most customer centric policies.
              </p>
            </Reveal>
            <Reveal className="px-8 py-8" delay={160}>
              <h2 className="flex items-center gap-3 text-[2.1rem] font-extrabold leading-none text-[#1e3765]">
                <FiTarget className="text-[1.8rem] text-[#008b8f]" />
                Our Mission
              </h2>
              <p className="mt-4 max-w-[510px] text-[1.02rem] leading-[1.6] text-[#676767]">
                Our mission is to exceed our customers expectations in quality, delivery, and cost through continuous improvement and customer interaction.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16" delay={220} y={30}>
            <ExperienceSection className="relative left-1/2 !w-screen -translate-x-1/2" />
          </Reveal>

          <Reveal className="mt-6" delay={260} y={30}>
            <HousingGuideSection />
          </Reveal>

          <AboutSolarJourneySection />

          <div className="mt-20 grid items-start gap-6 lg:grid-cols-[1fr_1fr_1fr]">
            <Reveal className="text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-[#1e3765]">
                Leadership
                <br />
                That Inspires
              </h2>
              <p className="mt-4 text-[1rem] font-medium leading-[1.8] text-[#4d4d4d]">
                At Vedanta Solar, our team is more than just professionals - we are the driving force behind India&apos;s solar transformation. Blending visionary leadership with hands-on expertise, we turn complex challenges into reliable, future-ready solutions.
              </p>
              <p className="mt-4 text-[1rem] font-medium leading-[1.8] text-[#4d4d4d]">
                Every project we deliver carries the mark of our people - their innovation, precision, and relentless pursuit of excellence. With a perfect balance of experience and young energy, our team does not just follow industry standards - we set them.
              </p>
            </Reveal>

            {leaders.map((leader, index) => (
              <Reveal key={leader.name} className="text-center" delay={index * 120}>
                <div className="about-leader-card rounded-2xl p-3">
                  <div className="relative mx-auto h-[372px] w-[285px]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-contain object-bottom"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f4f4f4] via-[#f4f4f4]/85 to-transparent" />
                  </div>
                  <p className="mt-2 text-[1.5rem] font-extrabold leading-tight text-[#1e3765]">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-[0.9rem] font-medium uppercase tracking-wide text-[#7f8792]">
                    {leader.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
