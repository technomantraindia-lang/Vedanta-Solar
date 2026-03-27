import { useState } from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import contactImage from "../assets/contact/image1.png";
import contactImage2 from "../assets/contact/image2.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        acceptTerms: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const locations = [
    {
      city: "Gujarat - Ahmedabad",
      address:
        "Shop no 15, Second Floor, Radhey Complex Hathjari Circle, Sardar Patel Ring Rd, Ahmedabad, Gujarat 382445",
    },
    {
      city: "Maharashtra - Pune",
      address:
        "D-III Block, Aishwaryan One 2nd Floor, S-8, Plot No 71, Kabithnagar Road, near Pimpin, Chinchwad Pune, Maharashtra 411019",
    },
    {
      city: "Madhya Pradesh - Indore",
      address: "213, 2nd Floor, MS-1A, New Siyaganj, Mall Godowt Road Indore (M.P.)",
    },
  ];

  const faqs = [
    {
      question: "What is VEDANTA SOLAR?",
      answer:
        "Vedanta Solar offers expert solar panel installation for homes, housing societies, and commercial buildings. Since 2015, we have been leading the way in residential and commercial solar energy solutions-supporting India's Har Ghar Solar mission and helping thousands save on electricity bills every month. Founded by experienced solar professionals, Vedanta Solar is one of India's most trusted names in renewable energy. Our mission is simple: deliver clean, affordable, and efficient solar rooftop systems to every home, society, and commercial building.",
    },
    {
      question: "What is a solar rooftop system?",
      answer: (
        <p>
          A rooftop solar system converts sunlight into clean electricity using top-quality components.
          <br />
          At Vedanta Solar, we provide reliable solar energy systems for homes and businesses that include:
          <br />- High-efficiency solar panels with PV cells
          <br />- Smart solar inverter
          <br />- Durable mounting structures
          <br />- Safe AC and DC cables
          <br />- AC/DC combiner boxes
          <br />- Earthing cables and lightning protection
          <br />- Secure MC4 connectors
          <br />
          Our complete solar power installation helps reduce electricity bills and support a sustainable future.
        </p>
      ),
    },
    {
      question: "How does a solar rooftop system work?",
      answer:
        "Vedanta Solar's rooftop solar system uses the photovoltaic effect to convert sunlight into electricity through high-efficiency PV cells. The generated DC power is converted into AC power using a solar inverter, making it usable for homes and businesses. Through a net metering system, excess electricity is sent to the grid, while additional power is imported when needed, ensuring continuous energy supply and savings on electricity bills.",
    },
    {
      question: "How to apply for a solar rooftop subsidy?",
      answer: (
        <p>
          Under the DBT (Direct Benefit Transfer) solar subsidy scheme, getting a rooftop solar installation is now simpler and more rewarding. Follow these easy steps to claim your solar panel subsidy in India:
          <br />1. Visit the National Portal for Rooftop Solar and download the Sandes app.
          <br />2. Register as a customer on the app. A DISCOM official will visit to check the site's feasibility.
          <br />3. After receiving the No Objection Certificate (NOC), select Vedanta Solar as your installation partner.
          <br />4. Discuss the project, sign the agreement, and make the payment.
          <br />5. Vedanta Solar will begin installation and submit a work completion report.
          <br />6. We will apply for your net meter installation.
          <br />7. Once your system is commissioned, you will receive a commissioning certificate.
          <br />8. Upload your bank details and a cancelled cheque on the National Portal.
          <br />9. Within 30 days, the subsidy amount will be directly credited to your bank account.
          <br />
          With Vedanta Solar, you can easily switch to clean energy while enjoying government benefits and saving on electricity bills.
        </p>
      ),
    },
    {
      question: "What is the price of a solar system in India without a subsidy?",
      answer:
        "If you are planning to install solar for homes or housing societies, the solar panel price reference can help you estimate your expected budget range before subsidy.",
    },
    {
      question: "Why should I go solar?",
      answer:
        "Vedanta Solar helps you save on electricity bills while protecting the environment with clean, green energy. Our rooftop solar systems are a smart investment that reduce your carbon footprint and fight climate change.",
    },
    {
      question: "Is solar power safe?",
      answer:
        "Vedanta Solar provides the same reliable electricity as your utility provider, just cleaner and greener. Our solar electricity for home is a safe, renewable energy source with zero toxic emissions.",
    },
    {
      question: "What do I need to install a rooftop solar system?",
      answer:
        "All you need is suitable empty space on your roof and access to your rooftop. Fill the project enquiry form on our website and our team will guide your requirement, design, installation, and maintenance.",
    },
    {
      question: "Why install an on-grid solar system?",
      answer:
        "An on-grid solar system helps you save on electricity bills by using solar power during the day and exporting extra energy to the grid via net metering. It is cost-effective, battery-free, and ideal for homes and businesses.",
    },
    {
      question: "What is net metering?",
      answer:
        "With net metering, you earn credits by exporting excess solar power to the grid. A bi-directional meter tracks usage and export so you pay only for net consumed power.",
    },
  ];

  return (
    <>
      <Header />

      <section className="w-full bg-white pb-16 pt-44 md:pb-20 md:pt-56">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center contact-hero-in md:mb-16">
            <h1 className="mb-4 text-3xl font-extrabold text-[#1a2b4b] sm:text-4xl md:text-5xl">
              Let's talk, we're here
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-500 md:text-lg">
              We're here to help, so contact us with any questions or feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative contact-image-in">
              <img
                src={contactImage}
                alt="Solar professionals working"
                className="h-[360px] w-full rounded-[1.4rem] object-cover shadow-xl sm:h-[440px] md:h-[600px] md:rounded-[2rem]"
              />
            </div>

            <div className="contact-form-in lg:pl-8">
              <h2 className="mb-4 text-3xl font-bold text-[#1a2b4b] md:text-4xl">Contact us</h2>
              <p className="mb-8 leading-relaxed text-slate-500">
                Share your requirement and our team will help you with the right solar solution.
              </p>

              {submitted ? (
                <div className="contact-success-in rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <HiCheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold text-[#1a2b4b]">Thank You!</h3>
                  <p className="text-slate-600">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="contact-field-in space-y-2" style={{ animationDelay: "80ms" }}>
                    <label className="block text-base font-bold text-[#1a2b4b] md:text-lg">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#1a2b4b] placeholder-slate-300 transition-all duration-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="contact-field-in space-y-2" style={{ animationDelay: "150ms" }}>
                    <label className="block text-base font-bold text-[#1a2b4b] md:text-lg">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#1a2b4b] placeholder-slate-300 transition-all duration-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="contact-field-in space-y-2" style={{ animationDelay: "220ms" }}>
                    <label className="block text-base font-bold text-[#1a2b4b] md:text-lg">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type your message..."
                      rows="6"
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#1a2b4b] placeholder-slate-300 transition-all duration-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="contact-field-in flex items-center space-x-3" style={{ animationDelay: "290ms" }}>
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      id="terms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      className="h-6 w-6 cursor-pointer rounded-md border-slate-300 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="terms" className="cursor-pointer select-none text-sm text-slate-600">
                      I accept the{" "}
                      <a href="#" className="font-semibold underline decoration-slate-300 transition-colors hover:decoration-teal-500">
                        Terms
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{ animationDelay: "350ms" }}
                    className="contact-field-in contact-submit-glow vedanta-pill-btn vedanta-pill-btn--wide px-3 py-3.5 text-[0.95rem] font-normal disabled:cursor-not-allowed disabled:opacity-70 md:text-[1rem]"
                  >
                    <span className="vedanta-pill-btn__icon" aria-hidden="true">
                      <HiArrowRight />
                    </span>
                    <span className="vedanta-pill-btn__label">{loading ? "Sending..." : "Send"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section-in w-full bg-white py-14 md:py-20" style={{ animationDelay: "120ms" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="contact-section-title mb-10 text-center text-3xl font-bold text-slate-900 md:mb-16 md:text-4xl">
            Expanding Across These Cities
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {locations.map((location, index) => (
              <div
                key={index}
                style={{ animationDelay: `${120 + index * 90}ms` }}
                className="contact-city-in flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-teal-600">{location.city}</h3>
                <p className="max-w-[250px] text-sm leading-relaxed text-slate-600">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section-in w-full bg-white py-14 md:py-20" style={{ animationDelay: "180ms" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="contact-section-title mb-10 text-3xl font-bold text-slate-900 md:mb-12 md:text-5xl">
            Common Questions
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
            <div className="contact-faq-list-in space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${100 + (index % 5) * 70}ms` }}
                  className={`contact-faq-item group w-full cursor-pointer overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 ${
                    openIndex === index ? "border-teal-500 shadow-md" : "border-slate-300 hover:border-slate-400"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div
                    className={`flex w-full select-none items-center justify-between px-6 py-4 text-base font-bold transition-all duration-300 ${
                      openIndex === index ? "bg-teal-50/50 text-teal-600" : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-slate-600">{openIndex === index ? "-" : "+"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="contact-answer-in whitespace-pre-line border-t-2 border-slate-100 bg-white px-6 py-4 text-sm text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-side-image-in hidden lg:block">
              <img
                src={contactImage2}
                alt="Solar technicians working on installation"
                className="h-auto w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
