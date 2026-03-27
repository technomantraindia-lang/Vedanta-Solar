import logoDgvcl from "../../assets/home/logo-dgvcl.png";
import logoGuvnl from "../../assets/home/logo-guvnl.png";
import logoMgvcl from "../../assets/home/logo-mgvcl.png";
import logoPgvcl from "../../assets/home/logo-pgvcl.png";
import logoUgvcl from "../../assets/home/logo-ugvcl.jpg";
import logoIso from "../../assets/home/logo-iso.jpg";
import logoIec from "../../assets/home/logo-iec.png";
import logoGermi from "../../assets/home/logo-germi.png";
import logoNise from "../../assets/home/logo-nise.jpg";
import logoMsme from "../../assets/home/logo-msme.png";
import logoIndia from "../../assets/home/logo-india.jpg";
import logoNsic from "../../assets/home/logo-nsic.png";
import logoStartup from "../../assets/home/logo-startup.png";

const utilityCerts = [
  { src: logoDgvcl, alt: "DGVCL" },
  { src: logoGuvnl, alt: "GUVNL" },
  { src: logoMgvcl, alt: "MGVCL" },
  { src: logoPgvcl, alt: "PGVCL" },
  { src: logoUgvcl, alt: "UGVCL" },
];

const majorCerts = [
  { src: logoIso, alt: "ISO" },
  { src: logoIec, alt: "IEC" },
  { src: logoGermi, alt: "GERMI" },
  { src: logoNise, alt: "NISE" },
  { src: logoMsme, alt: "MSME" },
];

const initiativeCerts = [
  { src: logoIndia, alt: "Make in India" },
  { src: logoNsic, alt: "NSIC" },
  { src: logoStartup, alt: "Startup India" },
];

export default function CertificationsCarousel() {
  return (
    <section className="relative z-10 w-full bg-[#f3f4f6] px-4 pb-14 pt-2 md:px-5 md:pb-16 md:pt-4">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-[#bdcde4] bg-gradient-to-br from-[#fbfdff] via-[#f2f6fb] to-[#edf3fb] px-4 py-8 shadow-[0_14px_34px_rgba(31,63,116,0.1)] md:px-10 md:py-12">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#c7d5eb] bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#2f5689]">
            Verified & Approved
          </span>
          <h2 className="mt-4 text-center text-[2rem] font-extrabold leading-none text-[#1f3f74] md:text-[2.8rem] lg:text-[3.6rem]">
            Professional Certifications
          </h2>
        </div>

        <div className="mt-8 text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#4d6183] md:mt-10">
          Utility Licenses
        </div>
        <div className="mx-auto mt-4 grid max-w-[980px] grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {utilityCerts.map((item, index) => (
            <div
              key={item.alt}
              className={`group flex h-[96px] items-center justify-center rounded-2xl border border-[#d6e1ec] bg-gradient-to-br from-[#edf4f8] to-[#dce8ef] p-3 shadow-[0_8px_22px_rgba(31,63,116,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(31,63,116,0.14)] md:h-[122px] ${
                utilityCerts.length % 2 !== 0 && index === utilityCerts.length - 1
                  ? "col-span-2 mx-auto w-full max-w-[170px] md:col-span-1 md:max-w-none"
                  : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        <div className="mt-9 text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#4d6183]">
          National Standards
        </div>
        <div className="mx-auto mt-4 grid max-w-[980px] grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {majorCerts.map((item, index) => (
            <div
              key={item.alt}
              className={`group flex h-[92px] items-center justify-center rounded-2xl border border-[#dce4f1] bg-white/95 p-2 shadow-[0_8px_22px_rgba(31,63,116,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(31,63,116,0.14)] md:h-[116px] md:p-3 ${
                majorCerts.length % 2 !== 0 && index === majorCerts.length - 1
                  ? "col-span-2 mx-auto w-full max-w-[170px] md:col-span-1 md:max-w-none"
                  : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#4d6183]">
          Government Initiatives
        </div>
        <div className="mx-auto mt-4 grid max-w-[760px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {initiativeCerts.map((item) => (
            <div
              key={item.alt}
              className="group flex h-[76px] items-center justify-center rounded-2xl border border-[#dce4f1] bg-white/95 p-2 shadow-[0_8px_22px_rgba(31,63,116,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(31,63,116,0.14)] md:h-[96px] md:p-3"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
