import IndiaMap from "./IndiaMap";

const stats = [
  { value: "10 +", label: "Years of Experience" },
  { value: "4,800 +", label: "Happy Clients" },
  { value: "5,000 +", label: "Projects Completed" },
  { value: "120 +", label: "Expert Engineers" },
];

export default function ExperienceSection({ className = "" }) {
  return (
    <section className={`w-full bg-[#f3f4f6] py-12 md:py-14 ${className}`.trim()}>
      <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-6 sm:px-7 md:grid-cols-[1.08fr_0.92fr] md:gap-10 md:px-10 lg:px-14 xl:px-16">
        <div className="max-w-[980px]">
          <h2 className="max-w-[980px] text-[1.45rem] font-semibold leading-[1.22] text-[#213f74] md:text-[1.8rem] lg:text-[2.15rem]">
            <span className="block">We Complete 5000+ Residential</span>
            <span className="block">and Industrial Projects Across India Successfully</span>
          </h2>

          <h3 className="mt-4 text-[1.1rem] font-semibold text-[#078f93] md:text-[1.45rem] lg:text-[1.85rem]">
            10+ Years Experience
          </h3>
          <p className="mt-6 max-w-[770px] text-[0.95rem] leading-[1.8] text-[#61656e] md:text-[1.05rem] lg:text-[1.25rem]">
            Vedanta Solar has been delivering trusted solar solutions for
            residential, commercial, and industrial clients with a strong focus
            on quality, service, and long-term performance.
          </p>

          <div className="mt-9 grid max-w-[740px] grid-cols-2 gap-y-8 md:mt-10 md:gap-y-9">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-[1.45rem] font-bold leading-none text-[#213f74] md:text-[1.75rem] lg:text-[2rem]">
                  {item.value}
                </p>
                <p className="mt-2 text-[0.92rem] leading-[1.5] text-[#61656e] md:text-[1rem] lg:text-[1.12rem]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-1 md:pt-0 md:pl-4">
          <IndiaMap />
        </div>
      </div>
    </section>
  );
}
