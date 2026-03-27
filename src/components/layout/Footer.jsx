import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";

const usefulLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services/residential-solar" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Disclaimer" },
  { label: "Certifications" },
  { label: "Return Policy" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Services", to: "/services/residential-solar" },
  { label: "Commercial solar" },
  { label: "Residential Solar", to: "/services/residential-solar" },
  { label: "Industrial Solar", to: "/services/industrial-solar" },
];

const presenceText = [
  "Solar Panel Installation In Anand",
  "Best Solar EPC Company In Ahmedabad",
  "Solar Solutions Gandhinagar Gujarat",
  "Solar Power Systems Vadodara",
  "Affordable Solar Setup Panchmahal",
  "Rural Solar EPC Contractor Gujarat",
  "Chhota Udaipur Solar Panel Setup",
  "Best Rooftop Solar Indore",
  "Solar System Provider Ujjain",
  "Solar Panel Installation Bhopal",
  "Solar Company In Jalgaon",
  "Solar Energy Dhule",
  "Solar Installation Company Nagpur",
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0a8f96] via-[#0b6f8f] to-[#1b3f79] text-white">
      <div className="mx-auto max-w-[1260px] px-4 pb-6 pt-6 sm:px-6 md:px-10 md:pb-8 md:pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_1.25fr_0.9fr] md:items-start md:gap-8">
          <div className="flex items-start justify-center md:justify-start">
            <Link
              to="/"
              aria-label="Vedanta Solar home"
              className="block h-[86px] w-[190px] overflow-hidden sm:h-[94px] sm:w-[220px] md:h-[108px] md:w-[250px]"
            >
              <img
                src={logo}
                alt="Vedanta Solar"
                className="h-full w-full object-cover object-center brightness-0 invert"
              />
            </Link>
          </div>

          <div>
            <h3 className="text-center text-[1.45rem] font-bold leading-none sm:text-[1.6rem] md:text-left md:text-[2.1rem]">
              Useful Links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9rem] font-medium text-white/95 sm:grid-cols-3 sm:gap-x-6 sm:text-[0.96rem] md:text-[1rem]">
              {usefulLinks.map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to} className="text-center transition hover:text-white/75 md:text-left">
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.label} className="text-center md:text-left">
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-center text-[1.45rem] font-bold leading-none sm:text-[1.6rem] md:text-left md:text-[2.1rem]">
              Our Services
            </h3>
            <div className="mt-4 space-y-1.5 text-center text-[0.95rem] font-medium text-white/95 sm:text-[1rem] md:text-left">
              {serviceLinks.map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to} className="block transition hover:text-white/75">
                    {item.label}
                  </Link>
                ) : (
                  <p key={item.label}>{item.label}</p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-3 text-center md:mt-4">
          <h4 className="text-[1.35rem] font-bold leading-none sm:text-[1.55rem] md:text-[1.9rem]">
            Our Presence Is Here.
          </h4>
          <div className="mx-auto mt-3 flex max-w-[1120px] flex-wrap justify-center text-[0.66rem] leading-6 text-white/90 sm:mt-4 sm:text-[0.72rem] sm:leading-7">
            {presenceText.map((text, index) => (
              <span key={text} className="inline-flex items-center text-center">
                {index > 0 && <span className="mx-1.5 text-white/70 sm:mx-2">&bull;</span>}
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-white/60" />

        <div className="mt-4 flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <SocialIcon href="https://www.instagram.com/vedanta_solar/" label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/vedanta-solar2011/" label="LinkedIn">
              <FaLinkedinIn />
            </SocialIcon>
          </div>
          <p className="text-[0.84rem] text-white/85 sm:text-[0.95rem]">
            Copyright @2026, All Rights Reserved. Design By{" "}
            <a
              href="https://technomantra.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#f4a300] transition hover:text-[#ffb400]"
            >
              Technomantra India
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-[1rem] text-white transition hover:bg-white/10 sm:h-10 sm:w-10 sm:text-[1.2rem]"
    >
      {children}
    </a>
  );
}
