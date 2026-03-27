import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    experience: "",
    message: "",
    resume: null,
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files?.[0] ?? null : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#f2f5f8] pb-24 pt-56">
        <div className="careers-glow careers-glow-left pointer-events-none absolute -left-24 top-40 h-56 w-56 rounded-full bg-[#008b8f]/10 blur-3xl" />
        <div className="careers-glow careers-glow-right pointer-events-none absolute -right-20 bottom-24 h-64 w-64 rounded-full bg-[#1e3765]/10 blur-3xl" />

        <section className="mx-auto w-full max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="careers-title-in text-4xl font-extrabold leading-none text-[#1e3765] md:text-[2.9rem]">
              Join With Us
            </h1>
            <p className="careers-title-in mt-2 text-[1.6rem] font-medium leading-none text-[#1e3765] md:text-[2.1rem]" style={{ animationDelay: "110ms" }}>
              Careers in solar energy
            </p>
            <p className="careers-title-in mx-auto mt-4 max-w-2xl text-[1rem] leading-7 text-[#5b6678] md:text-[1.05rem]" style={{ animationDelay: "200ms" }}>
              Build your future with a team that is shaping clean energy
              projects across India.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="careers-form-in mx-auto mt-12 w-full max-w-4xl rounded-[1.5rem] border border-[#d9e1e8] bg-white p-6 shadow-[0_15px_35px_rgba(12,42,72,0.08)] md:p-8"
          >
              <div className="careers-field-in" style={{ animationDelay: "260ms" }}>
                <label
                  htmlFor="name"
                  className="text-[1.05rem] font-semibold text-[#1e3765]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 h-12 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 text-[0.98rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                />
              </div>

              <div className="careers-field-in mt-5 grid grid-cols-1 gap-5 md:grid-cols-2" style={{ animationDelay: "320ms" }}>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[1.05rem] font-semibold text-[#1e3765]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 text-[0.98rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-[1.05rem] font-semibold text-[#1e3765]"
                  >
                    Phone No.
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 text-[0.98rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                  />
                </div>
              </div>

              <div className="careers-field-in mt-5 grid grid-cols-1 gap-5 md:grid-cols-2" style={{ animationDelay: "380ms" }}>
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="text-[1.05rem] font-semibold text-[#1e3765]"
                  >
                    Date Of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 text-[0.98rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                  />
                </div>

                <div>
                  <p className="text-[1.05rem] font-semibold text-[#1e3765]">
                    Gender
                  </p>
                  <div className="mt-3 flex items-center gap-6 text-[0.95rem] text-[#1e3765]">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[#0b8f92]"
                      />
                      Male
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[#0b8f92]"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="careers-field-in mt-5 grid grid-cols-1 gap-5 md:grid-cols-2" style={{ animationDelay: "440ms" }}>
                <div>
                  <label
                    htmlFor="experience"
                    className="text-[1.05rem] font-semibold text-[#1e3765]"
                  >
                    Your Experience
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 text-[0.98rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="text-[1.05rem] font-semibold text-[#1e3765]"
                  >
                    Upload Your Resume
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] p-2 text-[0.9rem] text-[#1e3765] file:mr-3 file:rounded-md file:border-0 file:bg-[#eaf0f6] file:px-3 file:py-2 file:text-[0.88rem] file:font-semibold file:text-[#1e3765]"
                  />
                </div>
              </div>

              <div className="careers-field-in mt-5" style={{ animationDelay: "500ms" }}>
                <label
                  htmlFor="message"
                  className="text-[1.05rem] font-semibold text-[#1e3765]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Select City"
                  className="mt-2 w-full rounded-lg border border-[#ced7df] bg-[#fbfdff] px-3 py-2 text-[0.95rem] text-[#1e3765] outline-none transition focus:border-[#0b8f92] focus:ring-2 focus:ring-[#0b8f92]/15"
                />
              </div>

              <button
                type="submit"
                className="careers-field-in vedanta-pill-btn vedanta-pill-btn--wide mt-6 px-3 py-3 text-[0.95rem] font-normal"
                style={{ animationDelay: "560ms" }}
              >
                <span className="vedanta-pill-btn__icon" aria-hidden="true">
                  <HiArrowRight />
                </span>
                <span className="vedanta-pill-btn__label">Send</span>
              </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
