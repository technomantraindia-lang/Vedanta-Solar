import aboutImage from "../../assets/home/services3.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export default function About() {
  return (
    <section id="home-about-us" className="w-full scroll-mt-36 border-t border-[#3b78b5] bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-7 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 lg:px-14 xl:px-16">
        <div className="max-w-[760px]">
          <h2 className="text-[2.1rem] font-bold leading-none text-[#213f74] md:text-[3rem] lg:text-[4rem]">About Us</h2>
          <p className="mt-3 text-[1rem] font-semibold text-[#078f93] md:whitespace-nowrap md:text-[1.18rem] lg:text-[1.45rem]">
            10 Years of Experience in Solar & Renewable Energy
          </p>

          <p className="mt-6 text-[0.9rem] leading-[1.75] text-[#61656e] md:text-[1rem] lg:text-[1.15rem]">
            Vedanta Solar is a regionally licensed and certified solar power contractor.
            We have made it our mission to help our community make the smart switch to
            solar power for your home or business. Our talented team of installers,
            service technicians, project managers, sales staff, system designers and
            company management all focus on providing you with an exceptional experience.
            Come join the future of energy with us.
          </p>

          <Link
            to="/about"
            className="vedanta-pill-btn mt-8 px-3 py-2.5 text-[0.95rem]"
          >
            <span className="vedanta-pill-btn__icon" aria-hidden="true">
              <HiArrowRight />
            </span>
            <span className="vedanta-pill-btn__label flex items-center">
              <span>More About Us</span>
            </span>
          </Link>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <span className="absolute -left-3 bottom-4 h-[84px] w-[84px] bg-[#1f3f74] md:-left-5 md:bottom-6 md:h-[138px] md:w-[138px]" />
          <span className="absolute -right-3 top-0 h-[72px] w-[72px] bg-[#05979d] md:-right-5 md:h-[110px] md:w-[110px]" />

          <img
            src={aboutImage}
            alt="Rooftop solar"
            className="relative z-10 h-[240px] w-full max-w-[330px] border border-[#d6dbe5] object-cover shadow-lg md:h-[330px] md:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
