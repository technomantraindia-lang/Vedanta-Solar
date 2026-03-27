import { useEffect, useRef, useState } from "react";
import teamPhoto from "../../assets/about/term.png";
import step1Image from "../../assets/worksetp/step1.png";
import step2Image from "../../assets/worksetp/step2.png";
import step3Image from "../../assets/worksetp/step3.png";
import step4Image from "../../assets/worksetp/step4.png";

const solarJourneySteps = [
  {
    image: step1Image,
    title: "Free in-home consultation",
    description:
      "A SolarSquare consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.",
    side: "left",
  },
  {
    image: step2Image,
    title: "Personalised solar proposal & dedicated manager",
    description:
      "Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project.",
    side: "right",
  },
  {
    image: step3Image,
    title: "Paperwork and subsidy assistance",
    description:
      "End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.",
    side: "left",
  },
  {
    image: step4Image,
    title: "Step-by-step professional installation",
    description:
      "Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner.",
    side: "right",
  },
  {
    image: step3Image,
    title: "Connection to the grid",
    description:
      "We coordinate with the discom to connect your system to the power grid and install a new electricity meter.",
    side: "left",
  },
  {
    image: step4Image,
    title: "Power on your new system",
    description:
      "Switch on your system to enjoy reduced electricity bills and an energy-independent future!",
    side: "right",
  },
];

const companyStats = [
  { value: "10 +", label: "Years of Experience" },
  { value: "4,800 +", label: "Happy Clients" },
  { value: "5,000 +", label: "Projects Completed" },
  { value: "120 +", label: "Expert Engineers" },
];

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 24,
  scale = 0.98,
  threshold = 0.16,
  rootMargin = "0px",
  enabled = true,
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!enabled) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(node);
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform,filter] duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: visible
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        filter: visible ? "blur(0px)" : "blur(3px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutSolarJourneySection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-0 pb-10 md:pb-14">
      <div className="bg-white">
        <div className="mx-auto max-w-[1360px] px-6 pb-14 pt-20 md:px-10 md:pt-20 lg:px-14">
          <div className="text-center">
            <h2 className="text-[2rem] font-extrabold leading-tight text-[#1f3f74] md:text-[2.6rem]">
              The solar switch made simple
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[0.98rem] leading-[1.65] text-[#5d6778] md:text-[1.08rem]">
              Switching to solar can seem daunting, but we&apos;ve got you covered. Here&apos;s how the
              journey works with Vedanta Solar.
            </p>
          </div>

          <div className="relative mx-auto mt-14 hidden max-w-[1080px] lg:block">
            <div className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-gradient-to-b from-[#9bc0d8] via-[#008080] to-[#9bc0d8]" />
            <div className="space-y-7">
              {solarJourneySteps.map((step) => {
                const isLeft = step.side === "left";
                const itemDelay = 0;

                const content = (
                  <ScrollReveal
                    className={`max-w-[360px] ${isLeft ? "text-right" : "text-left"}`}
                    delay={itemDelay}
                    x={isLeft ? -56 : 56}
                    y={14}
                    scale={0.985}
                    threshold={0.2}
                    rootMargin="0px 0px -12% 0px"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className={`h-[64px] w-auto object-contain ${isLeft ? "ml-auto" : ""}`}
                    />
                    <p className="mt-3 text-[1rem] font-extrabold leading-[1.3] text-[#008080]">
                      {step.title}
                    </p>
                    <p className="mt-2 text-[0.92rem] leading-[1.65] text-[#667085]">
                      {step.description}
                    </p>
                  </ScrollReveal>
                );

                return (
                  <div key={step.title} className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                    <div className="justify-self-end">{isLeft ? content : null}</div>

                    <ScrollReveal
                      className="relative flex h-6 w-6 items-center justify-center"
                      delay={itemDelay + 40}
                      y={0}
                      scale={0.75}
                      threshold={0.2}
                      rootMargin="0px 0px -12% 0px"
                    >
                      <span className="h-3 w-3 rounded-full bg-[#008080] ring-[5px] ring-white" />
                    </ScrollReveal>

                    <div>{isLeft ? null : content}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:hidden">
            {solarJourneySteps.map((step, index) => {
              return (
                <ScrollReveal
                  key={step.title}
                  className="text-center"
                  delay={90 + (index * 70)}
                  y={20}
                  scale={0.98}
                >
                  <article>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="mx-auto h-[58px] w-auto object-contain"
                    />
                    <p className="mt-3 text-[1rem] font-extrabold leading-[1.3] text-[#008080]">
                      {step.title}
                    </p>
                    <p className="mt-3 text-[0.92rem] leading-[1.65] text-[#667085]">{step.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#d8dee7]">
          <div className="mx-auto max-w-[1360px] px-6 pt-14 md:px-10 lg:px-14">
            <h2 className="text-center text-[2rem] font-extrabold leading-none text-[#1f3f74] md:text-[2.6rem]">
              Who are We?
            </h2>
          </div>

          <div className="relative mt-8">
            <div className="absolute inset-x-0 bottom-0 top-[34%] bg-[#1f3f74]" />

            <div className="relative mx-auto max-w-[1360px] px-6 pb-12 md:px-10 md:pb-16 lg:px-14">
              <div className="mx-auto max-w-[680px]">
                <div className="rounded-[24px] border border-[#d7dbe1] bg-white p-4 shadow-[0_26px_50px_rgba(20,44,83,0.16)] md:p-5">
                  <div className="overflow-hidden rounded-[18px]">
                    <img
                      src={teamPhoto}
                      alt="Vedanta Solar team"
                      className="h-[190px] w-full object-cover object-center md:h-[270px]"
                    />
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-5 max-w-[860px] text-center text-[0.95rem] leading-[1.7] text-white md:text-[1rem]">
                We are a team of 120+ engineers, consultants, and innovators united by one vision:
                accelerating the adoption of solar energy with reliable, future-ready solutions.
              </p>

              <div className="mx-auto mt-8 grid max-w-[1080px] gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {companyStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[14px] bg-white px-5 py-4 text-center shadow-[0_16px_34px_rgba(11,31,66,0.18)]"
                  >
                    <p className="text-[1.25rem] font-extrabold leading-none text-[#1f3f74] md:text-[1.45rem]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-[1.4] text-[#4e5b74] md:text-[0.98rem]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
