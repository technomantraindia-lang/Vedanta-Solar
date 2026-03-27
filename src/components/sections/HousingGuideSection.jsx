import { HiArrowRight } from "react-icons/hi2";
import brochurePdf from "../../assets/VEDANTA SOLAR brochure.pdf";
import brochurePreview from "../../assets/about/about1.png";

const guidePoints = [
  "How much can your society save by going solar",
  "What's the right solar system size for your building or society",
  "Which solar technologies and equipment should you choose",
  "Government subsidy, net-metering & policy benefits",
  "Common myths about rooftop solar systems",
  "How Vedanta Solar helps societies install solar smoothly",
];

export default function HousingGuideSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#294e86] py-1 md:py-3">
      <div className="mx-auto max-w-[1580px] px-6 py-3 md:px-10 md:py-4 lg:px-14 lg:py-5">
        <div className="grid items-center gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
          <div className="max-w-[610px] sm:pl-4 md:pl-8 lg:pl-12">
            <h2 className="whitespace-nowrap text-[1.55rem] font-extrabold leading-[1.08] text-white md:text-[2.05rem] lg:text-[2.55rem]">
              A Guide To Going Solar
            </h2>

            <p className="mt-2 text-[0.95rem] font-medium leading-none text-[#008080] md:text-[1.25rem] lg:text-[1.55rem]">
              For Housing Societies
            </p>

            <p className="mt-4 max-w-[440px] font-['Poppins'] text-[0.92rem] leading-[1.7] text-white md:text-[1.02rem] lg:text-[1.12rem]">
              Learn everything your housing society needs to know before
              installing a rooftop solar system with{" "}
              <strong className="font-extrabold text-white">Vedanta Solar.</strong>
            </p>

            <ul className="mt-3 max-w-[560px] space-y-2 text-[0.82rem] leading-[1.4] text-white md:text-[0.9rem] lg:text-[0.95rem]">
              {guidePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-[#57ddd3]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={brochurePdf}
              target="_blank"
              rel="noreferrer"
              className="vedanta-pill-btn mt-4 px-3 py-2.5 text-[0.9rem]"
            >
              <span className="vedanta-pill-btn__icon">
                <HiArrowRight className="text-[0.92rem]" />
              </span>
              <span className="vedanta-pill-btn__label">Download for free</span>
            </a>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end lg:pr-4 xl:pr-8">
            <div className="about-guide-float relative z-10">
              <img
                src={brochurePreview}
                alt="Vedanta Solar brochure preview"
                className="relative z-10 w-full max-w-[560px] origin-center object-contain md:max-w-[700px] md:origin-right md:scale-x-[1.06] lg:max-w-[860px] lg:translate-x-4 lg:scale-x-[1.12] xl:translate-x-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
