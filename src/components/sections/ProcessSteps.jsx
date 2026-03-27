import { FaArrowRight } from "react-icons/fa";
import step1Gif from "../../assets/home/step1.gif";
import step2Gif from "../../assets/home/step2.gif";
import step4Gif from "../../assets/home/step4.gif";
import step3Gif from "../../assets/home/step3.gif";

const steps = [
  {
    title: "Make Appointment",
    description:
      "First, we come to see the site on inspection, we see Visibility on site, and try to understand your need and expectation.",
    gif: step1Gif,
  },
  {
    title: "Quotation",
    description:
      "After the Site visit we then provide you the quotation that suite your need and with all necessary details",
    gif: step2Gif,
  },
  {
    title: "Subsidy Application",
    description:
      "Once you approve the quotation we then start with applying the Government Subsidy scheme.",
    gif: step4Gif,
  },
  {
    title: "Execution Project",
    description:
      "It normally takes only 15 days to get us an electricity meter and another process and then we start the installation.",
    gif: step3Gif,
  },
];

export default function ProcessSteps() {
  return (
    <section className="w-full border-b border-[#d8dce3] bg-[#f3f4f6] py-14 md:py-16">
      <div className="mx-auto max-w-[1500px] px-5">
        <h2 className="text-center text-[2rem] font-extrabold leading-none text-[#1f3f74] md:text-[2.7rem] lg:text-[3.5rem]">
          We Complete Every Step Carefully
        </h2>

        <div className="mx-auto mt-8 grid max-w-[1280px] gap-8 md:mt-10 md:grid-cols-4">
          {steps.map((step, index) => {
            return (
              <div key={step.title} className="relative h-full text-center">
                <div className="flex h-full min-h-[205px] flex-col rounded-md bg-[#ebebed] px-4 py-6 md:min-h-[230px]">
                  <img
                    src={step.gif}
                    alt={step.title}
                    className="mx-auto h-10 w-10 object-contain md:h-12 md:w-12"
                  />
                  <h3 className="mt-4 text-[1.05rem] font-bold text-[#008c94] md:text-[1.55rem]">{step.title}</h3>
                  <p className="mt-2 text-[0.74rem] leading-[1.35] text-[#747a82] md:text-[0.77rem]">
                    {step.description}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <FaArrowRight className="absolute -right-[18px] top-1/2 hidden -translate-y-1/2 text-[0.9rem] text-[#1f3f74] md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
