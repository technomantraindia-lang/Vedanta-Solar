import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import ctaImage from "../../assets/home/saybye.jpg";

const cityOptions = ["Ahmedabad", "Pune", "Indore", "Vadodara", "Surat"];
const stateOptions = ["Gujarat", "Maharashtra", "Madhya Pradesh", "Rajasthan"];
const billOptions = [
  "Less than 1500",
  "1500 - 2500",
  "2500 - 4000",
  "4000 - 8000",
  "More than 8000",
];

export default function SolarCTA({ compact = false, fullBleed = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    monthlyBill: billOptions[1],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className={`w-full bg-white ${compact ? "py-3 md:py-4" : "py-6 md:py-8"} ${
        fullBleed ? "relative left-1/2 w-screen -translate-x-1/2" : ""
      }`}
    >
      <div
        className={`mx-auto px-6 sm:px-8 md:px-10 lg:px-12 ${
          compact ? "max-w-[1180px]" : "max-w-[1420px]"
        }`}
      >
        <div
          className={`grid items-start xl:grid-cols-[0.96fr_1.04fr] xl:items-stretch ${
            compact ? "gap-5 xl:gap-6" : "gap-8 xl:gap-10"
          }`}
        >
          <div className="overflow-hidden rounded-[14px] border border-[#d7dfe7] bg-[#eef2f6] shadow-[0_18px_42px_rgba(18,41,77,0.08)] xl:h-full">
            <img
              src={ctaImage}
              alt="Electricity savings consultation"
              className={`w-full object-cover object-center ${
                compact
                  ? "h-[160px] sm:h-[210px] lg:h-[260px] xl:h-full xl:min-h-[360px]"
                  : "h-[220px] sm:h-[290px] lg:h-[350px] xl:h-full xl:min-h-[520px]"
              }`}
            />
          </div>

          <div
            className={`flex h-full flex-col rounded-[18px] border border-[#dbe4eb] bg-white shadow-[0_18px_42px_rgba(18,41,77,0.08)] ${
              compact ? "px-4 py-3.5 sm:px-4 md:px-4 md:py-3.5" : "px-5 py-4 sm:px-6 md:px-6 md:py-5"
            }`}
          >
            <h2
              className={`text-center font-extrabold leading-tight text-[#078f93] ${
                compact ? "text-[1.28rem] md:text-[1.55rem]" : "text-[1.65rem] md:text-[2rem]"
              }`}
            >
              Say Bye To Electricity Bill
            </h2>

            <form onSubmit={handleSubmit} className={compact ? "mt-2.5" : "mt-4"}>
              <div>
                <label
                  htmlFor="home-cta-name"
                  className={`font-semibold text-[#1f3f74] ${compact ? "text-[0.9rem]" : "text-[1rem]"}`}
                >
                  Name
                </label>
                <input
                  id="home-cta-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-lg border border-[#cfd7de] bg-white px-4 text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15 ${
                    compact ? "h-9 text-[0.9rem]" : "h-11 text-[0.98rem]"
                  }`}
                />
              </div>

              <div className={`grid gap-2.5 md:grid-cols-2 ${compact ? "mt-2" : "mt-3"}`}>
                <div>
                  <label
                    htmlFor="home-cta-email"
                    className={`font-semibold text-[#1f3f74] ${compact ? "text-[0.9rem]" : "text-[1rem]"}`}
                  >
                    Email
                  </label>
                  <input
                    id="home-cta-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-lg border border-[#cfd7de] bg-white px-4 text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15 ${
                      compact ? "h-9 text-[0.9rem]" : "h-11 text-[0.98rem]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="home-cta-phone"
                    className={`font-semibold text-[#1f3f74] ${compact ? "text-[0.9rem]" : "text-[1rem]"}`}
                  >
                    Phone No.
                  </label>
                  <input
                    id="home-cta-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-lg border border-[#cfd7de] bg-white px-4 text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15 ${
                      compact ? "h-9 text-[0.9rem]" : "h-11 text-[0.98rem]"
                    }`}
                  />
                </div>
              </div>

              <div className={`grid gap-2.5 md:grid-cols-2 ${compact ? "mt-2" : "mt-3"}`}>
                <div>
                  <label htmlFor="home-cta-city" className="sr-only">
                    City
                  </label>
                  <select
                    id="home-cta-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-[#cfd7de] bg-white px-4 text-[#5c6880] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15 ${
                      compact ? "h-9 text-[0.88rem]" : "h-11 text-[0.95rem]"
                    }`}
                  >
                    <option value="">Select City</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="home-cta-state" className="sr-only">
                    State
                  </label>
                  <select
                    id="home-cta-state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-[#cfd7de] bg-white px-4 text-[#5c6880] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15 ${
                      compact ? "h-9 text-[0.88rem]" : "h-11 text-[0.95rem]"
                    }`}
                  >
                    <option value="">Select State</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={compact ? "mt-3" : "mt-4"}>
                <p
                  className={`text-center font-bold leading-tight text-[#1f3f74] ${
                    compact ? "text-[0.92rem] md:text-[1.02rem]" : "text-[1rem] md:text-[1.22rem]"
                  }`}
                >
                  What is your average monthly bill?
                </p>

                <div className={`flex flex-wrap justify-center gap-1.5 ${compact ? "mt-2" : "mt-3"}`}>
                  {billOptions.map((option) => {
                    const isActive = formData.monthlyBill === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            monthlyBill: option,
                          }))
                        }
                        className={`rounded-md border font-medium transition ${
                          compact ? "px-2.5 py-1 text-[0.72rem] md:text-[0.78rem]" : "px-3 py-1.5 text-[0.82rem] md:text-[0.88rem]"
                        } ${
                          isActive
                            ? "border-[#078f93] bg-[#078f93] text-white"
                            : "border-[#d2d9e0] bg-white text-[#35517e] hover:border-[#078f93]/40 hover:text-[#1f3f74]"
                        }`}
                        aria-pressed={isActive}
                      >
                        {option === "Less than 1500" || option === "More than 8000"
                          ? `Rs. ${option}`
                          : `Rs. ${option.replace(" - ", " - Rs. ")}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className={`vedanta-pill-btn vedanta-pill-btn--wide font-normal ${
                  compact ? "mt-3 px-3 py-1.5 text-[0.86rem]" : "mt-4 px-3 py-2.5 text-[0.92rem]"
                }`}
              >
                <span className="vedanta-pill-btn__icon" aria-hidden="true">
                  <HiArrowRight className="text-[1rem]" />
                </span>
                <span className="vedanta-pill-btn__label">Send</span>
              </button>
            </form>

            <p
              className={`mt-auto text-center leading-[1.6] text-[#274574] ${
                compact ? "pt-2 text-[0.8rem] md:text-[0.86rem]" : "pt-3 text-[0.96rem] md:text-[1rem]"
              }`}
            >
              Cut Energy Costs  |  Increase Property Value
              <br />
              Eco-Friendly Power  |  Take Advantage of Incentives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
