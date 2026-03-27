import logoCathode from "../../assets/home/logo-cathode.png";
import logoAdani from "../../assets/home/logo-adani.png";
import logoRayzon from "../../assets/home/logo-rayzon.jpg";
import logoWaaree from "../../assets/home/logo-waaree.jpg";
import logoSolarEdge from "../../assets/home/logo-solaredge.png";
import logoSun from "../../assets/home/logo-sun.png";
import logoEnphase from "../../assets/home/logo-enphase.png";

const partnersTopRow = [
  { src: logoCathode, alt: "Cathode Power" },
  { src: logoAdani, alt: "Adani Solar" },
  { src: logoRayzon, alt: "Rayzon Solar" },
  { src: logoWaaree, alt: "Waaree" },
];

const partnersBottomRow = [
  { src: logoSolarEdge, alt: "SolarEdge" },
  { src: logoSun, alt: "Sunora Solar" },
  { src: logoEnphase, alt: "Enphase" },
];

export default function PartnersCarousel() {
  return (
    <section className="w-full bg-[#f3f4f6] px-4 pb-8 pt-4 md:px-5 md:pb-10 md:pt-8">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-[#d7deea] bg-gradient-to-br from-[#fbfdff] via-[#f2f6fb] to-[#edf3fb] px-4 py-8 shadow-[0_18px_48px_rgba(31,63,116,0.12)] md:px-10 md:py-12">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#c7d5eb] bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#2f5689]">
            Trusted Brands
          </span>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-none text-[#1f3f74] md:text-[2.8rem] lg:text-[3.6rem]">
            Our Global Partners
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[0.98rem] leading-[1.75] text-[#5e6f89] md:text-[1.05rem]">
            We collaborate with globally recognized manufacturers and technology providers to deliver reliable, high-performance solar systems.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[1140px] md:mt-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {partnersTopRow.map((item) => (
              <div
                key={item.alt}
                className="group flex h-[96px] items-center justify-center rounded-2xl border border-[#dce4f1] bg-white/95 px-4 shadow-[0_10px_28px_rgba(31,63,116,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#abc4ea] hover:shadow-[0_16px_36px_rgba(31,63,116,0.14)] md:h-[124px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[58px] w-auto max-w-[95%] object-contain transition duration-300 group-hover:scale-[1.04] md:max-h-[72px]"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-4 grid max-w-[940px] grid-cols-1 gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
            {partnersBottomRow.map((item) => (
              <div
                key={item.alt}
                className="group flex h-[92px] items-center justify-center rounded-2xl border border-[#dce4f1] bg-white/95 px-4 shadow-[0_10px_28px_rgba(31,63,116,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#abc4ea] hover:shadow-[0_16px_36px_rgba(31,63,116,0.14)] md:h-[118px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[56px] w-auto max-w-[95%] object-contain transition duration-300 group-hover:scale-[1.04] md:max-h-[68px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
