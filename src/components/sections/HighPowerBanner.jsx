import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ctaImage from "../../assets/home/high-power.jpg";

export default function HighPowerBanner() {
  return (
    <section className="w-full bg-[#f3f4f6] py-8 md:py-10">
      <div className="mx-auto max-w-[1420px] px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto overflow-hidden rounded-[14px]">
          <div className="relative isolate">
            <img
              src={ctaImage}
              alt="Calculator banner"
              className="h-[208px] w-full object-cover object-right md:h-[240px]"
            />
            <div className="absolute inset-0 bg-[#081b2e]/28" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#008080] to-[#1b3764] opacity-95 mix-blend-multiply" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="px-6 text-white md:px-16">
                <h2 className="max-w-[650px] text-[1.45rem] font-light leading-[1.02] tracking-[0.005em] text-white md:text-[3.1rem] lg:text-[3.5rem]">
                  High power bills
                  <br />
                  stressing you out?
                </h2>

                <Link
                  to="/calculator"
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#06939c] to-[#1f3f74] px-4 py-2 text-[0.82rem] font-medium text-white transition hover:brightness-110 md:mt-5 md:px-6 md:py-3 md:text-[1.02rem]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/85 text-[0.78rem] md:h-8 md:w-8 md:text-[1rem]">
                    <HiArrowRight />
                  </span>
                  Calculate Your Solar Savings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
