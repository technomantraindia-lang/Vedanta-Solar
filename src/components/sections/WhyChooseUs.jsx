import { FiAward, FiBriefcase, FiShield, FiUsers } from "react-icons/fi";
import bgImage from "../../assets/service/background1.jpg";

const features = [
  {
    title: "Top Quality Panels",
    description: "We use only branded solar panels with warranty",
    icon: FiShield,
  },
  {
    title: "Experienced",
    description: "We have 10+ years of experience in solar installation.",
    icon: FiAward,
  },
  {
    title: "Professional Team",
    description: "Our team is the best in class and technological advance",
    icon: FiUsers,
  },
  {
    title: "Best Service",
    description: "We belive in providing best service with best product and support",
    icon: FiBriefcase,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f3f4f6] pb-14 pt-6">
      <div className="mx-auto max-w-[1500px] px-5">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[10px] bg-[#16346b] p-4 md:p-10">
          <div
            className="rounded-[24px] border border-white/20 bg-white/14 bg-cover bg-center p-0 backdrop-blur-sm"
            style={{
              backgroundImage: `linear-gradient(rgba(26,52,104,0.62), rgba(26,52,104,0.62)), url(${bgImage})`,
            }}
          >
            <div className="grid md:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;
                const showRight = index % 2 === 0;
                const showBottom = index < 2;

                return (
                  <div
                    key={item.title}
                    className={`flex min-h-[150px] flex-col items-center justify-center px-6 text-center text-white md:min-h-[170px] md:px-8 ${
                      showRight ? "md:border-r md:border-white/25" : ""
                    } ${showBottom ? "border-b border-white/25" : ""}`}
                  >
                    <Icon className="text-[1.6rem] text-white md:text-[2rem]" />
                    <h3 className="mt-3 text-[1.2rem] font-bold md:text-[1.75rem]">{item.title}</h3>
                    <p className="mt-2 max-w-[360px] text-[0.88rem] text-white/90 md:text-[1rem]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
