import { Link, useParams } from "react-router-dom";
import {
  LuChartColumnBig,
  LuPencilRuler,
  LuPackageCheck,
  LuWrench,
  LuFileCheck2,
  LuSettings,
  LuDownload,
} from "react-icons/lu";
import { FiAward, FiBriefcase, FiShield, FiUsers } from "react-icons/fi";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SolarCTA from "../../components/sections/SolarCTA";
import brochurePdf from "../../assets/VEDANTA SOLAR brochure.pdf";
import brochurePreview from "../../assets/about/about1.png";
import residentialSolar1 from "../../assets/service/residential-solar-1.jpg";
import residentialSolar2 from "../../assets/service/residential-solar-2.jpg";
import residentialSolar3 from "../../assets/service/residential-solar-3.jpg";
import residentialSolar4 from "../../assets/service/residential-solar-4.jpg";
import residentialSolar5 from "../../assets/service/residential-solar-5.jpg";
import residentialSolar6 from "../../assets/service/residential-solar-6.jpg";
import residentialSolar7 from "../../assets/service/residential-solar-7.jpg";
import residentialSolar8 from "../../assets/service/residential-solar-8.jpg";
import residentialSolar9 from "../../assets/service/residential-solar-9.jpg";
import industrialSolar1 from "../../assets/service/industrial-solar-1.jpg";
import industrialSolar2 from "../../assets/service/industrial-solar-2.jpg";
import industrialSolar3 from "../../assets/service/industrial-solar-3.jpg";
import industrialSolar4 from "../../assets/service/industrial-solar-4.jpg";
import industrialSolar5 from "../../assets/service/industrial-solar-5.jpg";
import industrialSolar6 from "../../assets/service/industrial-solar-6.jpg";
import industrialSolar7 from "../../assets/service/industrial-solar-7.jpg";
import industrialSolar8 from "../../assets/service/industrial-solar-8.jpg";
import industrialSolar9 from "../../assets/service/industrial-solar-9.jpg";
import apartmentSolar1 from "../../assets/service/apartment-solar-1.png";
import apartmentSolar2 from "../../assets/service/apartment-solar-2.png";
import apartmentSolar3 from "../../assets/service/apartment-solar-3.png";
import apartmentSolar4 from "../../assets/service/apartment-solar-4.png";
import apartmentSolar5 from "../../assets/service/apartment-solar-5.png";
import apartmentSolar6 from "../../assets/service/apartment-solar-6.jpg";
import apartmentSolar7 from "../../assets/service/apartment-solar-7.png";
import apartmentSolar8 from "../../assets/service/apartment-solar-8.jpg";
import apartmentSolar9 from "../../assets/service/apartment-solar-9.jpg";
import serviceBackgroundImage from "../../assets/service/background1.jpg";

const buildProjects = (images, projectName, totalKw) =>
  images.map((image, index) => ({
    id: `${projectName}-${index + 1}`,
    image,
    projectName,
    totalKw,
  }));

const offerings = [
  {
    icon: LuChartColumnBig,
    title: "Assessment & Reports",
    description:
      "Comprehensive solar feasibility studies and detailed reports to ensure optimal energy solutions.",
  },
  {
    icon: LuPencilRuler,
    title: "Design & Engineering",
    description:
      "Our custom solar design and engineering tailored to maximise efficiency and performance.",
  },
  {
    icon: LuPackageCheck,
    title: "Procurement & Supply",
    description:
      "Reliable sourcing and supply of top-quality solar components for your project.",
  },
  {
    icon: LuWrench,
    title: "Installation & Commissioning",
    description:
      "Expert installation and commissioning services for seamless solar energy integration.",
  },
  {
    icon: LuFileCheck2,
    title: "Permits & Approvals",
    description:
      "End-to-end support in securing all necessary permits and approvals for your solar system.",
  },
  {
    icon: LuSettings,
    title: "Operations & Maintenance",
    description:
      "Reliable post-installation support to keep your solar system performing at its best.",
  },
];

const processSteps = [
  {
    icon: LuChartColumnBig,
    title: "Consultation & Feasibility\nAssessment",
    description:
      "We begin by understanding your energy needs and conducting a thorough feasibility assessment of your site. This includes evaluating your rooftop's structural integrity, energy consumption patterns, and potential for solar energy generation. Our team of experts will provide you with a customized solar solution tailored to your specific requirements.",
  },
  {
    icon: LuPencilRuler,
    title: "Design, Engineering & Installation",
    description:
      "Once the feasibility is established, we proceed with the design and engineering phase. Our engineers create a brief plan, optimizing the layout for max efficiency performance. After finalizing the design, our skilled technicians handle the complete installation process, ensuring your solar system is set up to the highest standards of safety & quality.",
  },
  {
    icon: LuSettings,
    title: "Commissioning, Permits &\nMaintenance",
    description:
      "After installation, we take care of all necessary permits and approvals to get your system up and running. Once commissioned, we monitor the system's performance and offer ongoing maintenance services to ensure optimal operation. With regular inspections and support, we ensure your solar system continues to deliver reliable energy for years to come.",
  },
];

const valueCards = [
  {
    icon: FiShield,
    title: "Top Quality Panels",
    description: "We use only branded solar panels with warranty.",
  },
  {
    icon: FiUsers,
    title: "Professional Team",
    description: "Our team is the best in class and technologically advanced.",
  },
  {
    icon: FiAward,
    title: "Experienced",
    description: "We have 10+ years of experience in solar installation.",
  },
  {
    icon: FiBriefcase,
    title: "Best Service",
    description: "We believe in providing the best product support and service.",
  },
];

const services = [
  {
    slug: "residential-solar",
    eyebrow: "Our Projects",
    title: "Residential Solar Installation",
    description:
      "Start your home's energy future today!\nSave money and stay clean with solar power.",
    guide: {
      subtitle: "For Homeowners",
      description:
        "Learn everything your family needs to know before installing a rooftop solar system with Vedanta Solar.",
      points: [
        "How much can your home save by going solar",
        "What is the right solar system size for your roof",
        "Which panels, inverter and structure should you choose",
        "Government subsidy, net-metering and policy benefits",
        "Common myths about rooftop solar systems",
        "How Vedanta Solar handles installation smoothly",
      ],
    },
    projects: buildProjects(
      [
        residentialSolar1,
        residentialSolar2,
        residentialSolar3,
        residentialSolar4,
        residentialSolar5,
        residentialSolar6,
        residentialSolar7,
        residentialSolar8,
        residentialSolar9,
      ],
      "Vivanta Heights",
      "32.7"
    ),
  },
  {
    slug: "industrial-solar",
    eyebrow: "Our Projects",
    title: "Industrial Solar Installation",
    description:
      "Start your industrial energy transformation today!\nReduce electricity costs and boost efficiency with high-performance industrial solar panel installation.\nHarness renewable energy with trusted solar EPC services for factories, warehouses, and commercial buildings.",
    descriptionLines: [
      "Start your industrial energy transformation today!",
      "Reduce electricity costs and boost efficiency with high-performance industrial solar panel installation.",
      "Harness renewable energy with trusted solar EPC services for factories, warehouses, and commercial buildings.",
    ],
    highlight: {
      title: "Why Should Industries Go Solar?",
      subtitle: "Powering Industry. Saving Costs. Going Solar.",
    },
    guide: {
      subtitle: "For Industrial Facilities",
      description:
        "Get a practical guide to planning large-scale solar adoption for factories, warehouses and commercial buildings with Vedanta Solar.",
      points: [
        "How much can your plant save by going solar",
        "How to size a solar system for industrial loads",
        "Which EPC design factors affect long-term output",
        "Approvals, net-metering and DISCOM coordination",
        "Common concerns around downtime and maintenance",
        "How Vedanta Solar manages industrial execution smoothly",
      ],
    },
    projects: buildProjects(
      [
        industrialSolar1,
        industrialSolar2,
        industrialSolar3,
        industrialSolar4,
        industrialSolar5,
        industrialSolar6,
        industrialSolar7,
        industrialSolar8,
        industrialSolar9,
      ],
      "Vivanta Heights",
      "32.7"
    ),
  },
  {
    slug: "apartment-solar",
    eyebrow: "Our Projects",
    title: "Apartment Solar",
    description:
      "Start your home's energy future today!\nSave money and stay clean with solar power.",
    guide: {
      subtitle: "For Housing Societies",
      description:
        "Learn everything your housing society needs to know before installing a rooftop solar system with Vedanta Solar.",
      points: [
        "How much can your society save by going solar",
        "What's the right solar system size for your building or society",
        "Which solar technologies and equipment should you choose",
        "Government subsidy, net-metering & policy benefits",
        "Common myths about rooftop solar systems",
        "How Vedanta Solar helps societies install solar smoothly",
      ],
    },
    projects: buildProjects(
      [
        apartmentSolar1,
        apartmentSolar2,
        apartmentSolar3,
        apartmentSolar4,
        apartmentSolar5,
        apartmentSolar6,
        apartmentSolar7,
        apartmentSolar8,
        apartmentSolar9,
      ],
      "Vivanta Heights",
      "32.7"
    ),
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const currentService =
    services.find((service) => service.slug === slug) || services[0];
  const featuredProjects = currentService.projects.slice(0, 8);
  const moreProjectsImage =
    currentService.projects[8]?.image ?? currentService.projects[0]?.image;

  return (
    <>
      <Header />

      <main className="bg-[#f8f8f5] pt-56 text-[#1f3d74]">
        <section className="mx-auto max-w-[1260px] px-5 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="text-[0.82rem] font-semibold text-[#0a9191]">
              {currentService.eyebrow}
            </p>
            <h1 className="mt-1 text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[2.35rem]">
              {currentService.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[920px] whitespace-pre-line text-[0.98rem] font-medium leading-7 text-[#8b8c8c] md:text-[1.05rem]">
              {currentService.descriptionLines
                ? currentService.descriptionLines.map((line) => (
                    <span key={line} className="block md:whitespace-nowrap">
                      {line}
                    </span>
                  ))
                : currentService.description}
            </p>
          </div>

          {currentService.highlight ? (
            <div className="mx-auto mt-12 max-w-[760px] text-center">
              <h2 className="text-[1.8rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f3d74] md:text-[2.2rem]">
                {currentService.highlight.title}
              </h2>
              <p className="mt-3 text-[1rem] font-medium text-[#8b8c8c] md:text-[1.08rem]">
                {currentService.highlight.subtitle}
              </p>
            </div>
          ) : null}

          <div className={`${currentService.highlight ? "mt-8" : "mt-10"} grid gap-x-5 gap-y-7 md:grid-cols-2 xl:grid-cols-3`}>
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group transition duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden bg-[#dbe2e8] shadow-[0_8px_22px_rgba(16,40,78,0.08)]">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[235px]"
                  />
                </div>
                <div className="pt-3">
                  <h2 className="text-[1.2rem] font-extrabold leading-tight text-[#1f3d74]">
                    {project.projectName}
                  </h2>
                  <p className="mt-1 text-[0.96rem] font-semibold text-[#0a9191]">
                    Total Kw: {project.totalKw}
                  </p>
                </div>
              </article>
            ))}

            <Link
              to="/projects"
              className="group relative block min-h-[275px] overflow-hidden bg-[#dde4ea] shadow-[0_8px_22px_rgba(16,40,78,0.08)]"
              aria-label="See more projects"
            >
              <img
                src={moreProjectsImage}
                alt="More solar projects"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,247,243,0.18)_0%,rgba(247,247,243,0.66)_100%)]" />
              <div className="relative flex h-full items-center p-6 sm:p-8">
                <span className="max-w-[220px] text-[2.2rem] font-extrabold leading-[0.92] tracking-[-0.03em] text-[#1f3d74] sm:text-[2.7rem]">
                  See More Projects
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-20">
            <SolarCTA compact fullBleed />
          </div>

          <section className="mt-20">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-[1.78rem] font-bold leading-none text-[#1f3d74] md:text-[2.2rem]">
                Our Service Offerings
              </h2>

              <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {offerings.map((offering) => {
                  const Icon = offering.icon;

                  return (
                    <article
                      key={offering.title}
                      className="rounded-[20px] border border-[#e6ebf1] bg-white p-6 shadow-[0_12px_30px_rgba(15,39,77,0.05)] transition duration-300 hover:-translate-y-1"
                    >
                      <Icon className="text-[1.5rem] text-[#5d7094]" />
                      <h3 className="mt-4 text-[1.2rem] font-extrabold leading-tight text-[#1f3d74]">
                        {offering.title}
                      </h3>
                      <p className="mt-2 max-w-[300px] text-[0.96rem] leading-7 text-[#8a8d93]">
                        {offering.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mx-auto max-w-[1120px]">
              <h2 className="text-center text-[1.78rem] font-bold leading-none text-[#1f3d74] md:text-[2.2rem]">
                Our Work Process
              </h2>

              <div className="mt-8 overflow-hidden rounded-[10px] bg-[#27447a]">
                <div className="grid md:grid-cols-3">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    const borderClass =
                      index < processSteps.length - 1
                        ? "md:border-r md:border-white/15"
                        : "";

                    return (
                      <article
                        key={step.title}
                        className={`min-h-[280px] p-7 text-white md:p-8 ${borderClass}`}
                      >
                        <Icon className="text-[1.9rem] text-white" />
                        <h3 className="mt-5 max-w-[340px] whitespace-pre-line text-[1.05rem] font-medium leading-[1.2] tracking-[-0.01em] text-white md:text-[1.28rem]">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-[310px] text-[0.76rem] leading-[1.58] text-white/82 md:text-[0.8rem]">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden">
            <img
              src={serviceBackgroundImage}
              alt="Solar panel background"
              className="h-[620px] w-full object-cover grayscale sm:h-[520px] lg:h-[420px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,247,243,0.2)_0%,rgba(247,247,243,0.62)_100%)]" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-6 lg:px-8">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {valueCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <article
                        key={card.title}
                        className="rounded-[18px] border border-white/55 bg-white/78 p-6 text-[#1f3d74] shadow-[0_24px_40px_rgba(16,38,73,0.12)] backdrop-blur-[6px]"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f3d74]">
                          <Icon className="text-[1.4rem] text-white" />
                        </div>
                        <h3 className="mt-5 text-[1.2rem] font-extrabold leading-tight">
                          {card.title}
                        </h3>
                        <p className="mt-3 max-w-[220px] text-[0.96rem] leading-7 text-black">
                          {card.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-white py-1 md:py-3">
            <div className="mx-auto max-w-[1580px] px-6 py-3 md:px-10 md:py-4 lg:px-14 lg:py-5">
              <div className="grid items-center gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
                <div className="max-w-[610px] sm:pl-4 md:pl-8 lg:pl-12">
                  <h2 className="whitespace-nowrap text-[1.4rem] font-bold leading-[1.08] text-[#1f3d74] md:text-[1.9rem] lg:text-[2.3rem]">
                    A Guide To Going Solar
                  </h2>

                  <p className="mt-2 text-[0.95rem] font-medium leading-none text-[#008080] md:text-[1.25rem] lg:text-[1.55rem]">
                    {currentService.guide.subtitle}
                  </p>

                  <p className="mt-4 max-w-[440px] text-[0.92rem] leading-[1.7] text-[#445472] md:text-[1.02rem] lg:text-[1.12rem]">
                    {currentService.guide.description}
                  </p>

                  <ul className="mt-3 max-w-[560px] space-y-2 text-[0.82rem] leading-[1.4] text-[#50607d] md:text-[0.9rem] lg:text-[0.95rem]">
                    {currentService.guide.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-[#0a9191]" />
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
                      <LuDownload className="text-[0.92rem]" />
                    </span>
                    <span className="vedanta-pill-btn__label">Download for free</span>
                  </a>
                </div>

                <div className="relative flex items-center justify-center lg:justify-end lg:pr-4 xl:pr-8">
                  <div className="about-guide-float relative z-10 overflow-hidden">
                    <img
                      src={brochurePreview}
                      alt="Vedanta Solar guide preview"
                      className="relative z-10 w-[112%] max-w-none -translate-x-[4%] -translate-y-[1%] origin-center object-contain [clip-path:inset(7%_8%_9%_8%)] md:w-[114%] md:origin-right md:scale-x-[1.04] lg:w-[116%] lg:translate-x-3 lg:scale-x-[1.08] xl:translate-x-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}