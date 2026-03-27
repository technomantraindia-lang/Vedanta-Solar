import { useEffect, useState } from "react";
import project4 from "../../assets/home/project4.jpg";
import project3 from "../../assets/home/project3.jpg";
import project2 from "../../assets/home/project2.jpg";
import project1 from "../../assets/home/project1.jpg";

const projects = [
  { image: project4, name: "Stellar Kitchen", kw: "150kW" },
  { image: project3, name: "Stellar Kitchen", kw: "150kW" },
  { image: project2, name: "Stellar Kitchen", kw: "150kW" },
  { image: project1, name: "Stellar Kitchen", kw: "150kW" },
];

export default function OurProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const highlightedIndex = hoveredIndex ?? activeIndex;

  useEffect(() => {
    if (hoveredIndex !== null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [hoveredIndex]);

  return (
    <section className="w-full border-b border-[#d7dbe1] bg-[#f3f4f6] py-12 md:py-16">
      <div className="mx-auto grid max-w-[1360px] items-center gap-9 px-5 md:grid-cols-[1.06fr_0.74fr] md:gap-12">
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, index) => {
            const isActive = highlightedIndex === index;
            const kwLabel = project.kw.replace(/\s+/g, "").toUpperCase();
            return (
              <div
                key={`${project.name}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative cursor-pointer overflow-hidden rounded-[10px] transition-all duration-500 ${
                  isActive
                    ? "shadow-[0_12px_30px_rgba(30,63,116,0.25)]"
                    : "shadow-[0_6px_16px_rgba(15,40,85,0.12)]"
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className={`h-[130px] w-full object-cover transition-all duration-700 md:h-[165px] lg:h-[188px] ${
                    isActive
                      ? "scale-[1.06] grayscale-0"
                      : "scale-100 grayscale group-hover:scale-[1.06] group-hover:grayscale-0"
                  }`}
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#193c72]/85 via-[#193c72]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-[10px] bg-[#1f3f74] px-2 pb-1 pt-1.5 md:px-3">
                    <p className="truncate text-left text-[0.86rem] font-extrabold tracking-[0.04em] text-white md:text-[1.05rem]">
                      {project.name.toUpperCase()}
                    </p>
                    <p
                      className="-mt-1 text-right text-[2.1rem] font-extrabold leading-[0.84] tracking-[0.02em] text-transparent md:text-[2.7rem]"
                      style={{ WebkitTextStroke: "1.35px #6e8dc2" }}
                    >
                      {kwLabel}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:max-w-[430px]">
          <h2 className="text-center text-[2rem] font-extrabold leading-none text-[#1f3f74] md:text-[2.7rem] lg:text-[3rem]">
            Our Projects
          </h2>
          <p className="mt-4 text-left text-[1rem] leading-[1.55] text-[#4b4f59] md:text-justify md:text-[1.06rem] lg:text-[1.12rem]">
            At Vedanta Solar, we specialize in delivering large-scale solar solutions for businesses,
            industries, and institutions. Our commercial and industrial (C&I) projects are designed to
            reduce energy costs, ensure long-term savings, and support sustainability goals
          </p>
        </div>
      </div>
    </section>
  );
}
