import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import logo from "../../assets/home/logo.png";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname.startsWith("/about");
  const isServicesActive = location.pathname.startsWith("/services");
  const isProjectsActive = location.pathname.startsWith("/projects");
  const isCareersActive = location.pathname.startsWith("/careers");
  const isCalculatorActive =
    location.pathname.startsWith("/calculator") ||
    location.pathname.startsWith("/calucater") ||
    location.pathname.startsWith("/calcuator") ||
    location.pathname.startsWith("/calculater");
  const isClientsActive = location.pathname.startsWith("/clients");

  return (
    <header className="absolute left-1/2 top-5 z-50 w-[88%] max-w-[1500px] -translate-x-1/2 sm:w-[90%] md:top-10 md:w-[94%] lg:w-[93%]">
      <div className="flex items-center justify-between rounded-[14px] bg-white px-4 py-2 shadow-lg sm:px-5 md:px-8 md:py-3 lg:px-10">
        <div className="flex items-center gap-2">
          <Link to="/" className="inline-flex items-center">
            <div className="h-11 w-28 overflow-hidden sm:h-12 sm:w-32 md:h-16 md:w-44 lg:h-[4.5rem] lg:w-52">
              <img
                src={logo}
                alt="Vedanta Solar"
                className="h-full w-full scale-[2.35] object-contain"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-center font-['Poppins'] text-[16px] font-medium leading-[24px] tracking-[0px] text-black lg:flex">
          <Link
            to="/"
            className={`transition ${isHomeActive ? "text-[#203f74]" : "hover:text-[#16a34a]"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition ${isAboutActive ? "text-[#203f74]" : "hover:text-[#16a34a]"}`}
          >
            About Us
          </Link>
          <div className="group relative after:absolute after:left-0 after:right-0 after:top-full after:h-3 after:content-['']">
            <button
              type="button"
              className={`flex items-center gap-1 text-center transition ${
                isServicesActive ? "text-[#203f74]" : "hover:text-[#16a34a]"
              }`}
            >
              Services
              <LuChevronDown className="text-base transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-[calc(100%+8px)] z-[60] w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                to="/services/residential-solar"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-900"
              >
                Residential Solar
              </Link>
              <Link
                to="/services/industrial-solar"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-900"
              >
                Industrial Solar
              </Link>
              <Link
                to="/services/apartment-solar"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-900"
              >
                Apartment Solar
              </Link>
            </div>
          </div>
          <Link
            to="/projects"
            className={`transition ${
              isProjectsActive ? "text-[#203f74]" : "hover:text-[#16a34a]"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/careers"
            className={`transition ${isCareersActive ? "text-[#203f74]" : "hover:text-[#16a34a]"}`}
          >
            Careers
          </Link>
          <Link
            to="/calculator"
            className={`transition ${
              isCalculatorActive ? "text-[#203f74]" : "hover:text-[#16a34a]"
            }`}
          >
            Calculators
          </Link>
          <Link
            to="/clients"
            className={`transition ${isClientsActive ? "text-[#203f74]" : "hover:text-[#16a34a]"}`}
          >
            Clientel
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:inline-flex">
            <button className="rounded-full bg-[#203f74] px-3 py-1.5 text-center font-['Poppins'] text-[0.86rem] font-medium text-white transition hover:bg-[#1a3562] md:px-5 md:py-2 md:text-[16px] md:leading-[24px]">
              Contact Us
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d3dcea] text-[#203f74] lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <LuX className="text-[1.2rem]" /> : <LuMenu className="text-[1.2rem]" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="mt-2 rounded-xl border border-[#d9e2ef] bg-white p-3 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1 text-[0.96rem] font-medium text-[#213f74]">
            <MobileNavLink to="/" isActive={isHomeActive}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" isActive={isAboutActive}>
              About Us
            </MobileNavLink>

            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                isServicesActive ? "bg-[#edf3ff] text-[#203f74]" : "hover:bg-[#f4f7fc]"
              }`}
            >
              <span>Services</span>
              <LuChevronDown
                className={`text-[1rem] transition ${isMobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMobileServicesOpen ? (
              <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-[#d9e3f0] pl-3 text-[0.9rem]">
                <MobileNavLink to="/services/residential-solar" isActive={location.pathname === "/services/residential-solar"}>
                  Residential Solar
                </MobileNavLink>
                <MobileNavLink to="/services/industrial-solar" isActive={location.pathname === "/services/industrial-solar"}>
                  Industrial Solar
                </MobileNavLink>
                <MobileNavLink to="/services/apartment-solar" isActive={location.pathname === "/services/apartment-solar"}>
                  Apartment Solar
                </MobileNavLink>
              </div>
            ) : null}

            <MobileNavLink to="/projects" isActive={isProjectsActive}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/careers" isActive={isCareersActive}>
              Careers
            </MobileNavLink>
            <MobileNavLink to="/calculator" isActive={isCalculatorActive}>
              Calculators
            </MobileNavLink>
            <MobileNavLink to="/clients" isActive={isClientsActive}>
              Clientel
            </MobileNavLink>

            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#203f74] px-4 py-2 text-[0.9rem] font-semibold text-white"
            >
            Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileNavLink({ to, isActive, children }) {
  return (
    <Link
      to={to}
      className={`rounded-lg px-3 py-2 transition ${
        isActive ? "bg-[#edf3ff] text-[#203f74]" : "text-[#274574] hover:bg-[#f4f7fc]"
      }`}
    >
      {children}
    </Link>
  );
}
