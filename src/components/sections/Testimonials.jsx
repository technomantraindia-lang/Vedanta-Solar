import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import testimonial1 from "../../assets/testimonial/testimonial1.png";
import testimonial2 from "../../assets/testimonial/testimonial2.png";
import testimonial3 from "../../assets/testimonial/testimonial3.png";
import testimonial4 from "../../assets/testimonial/testimonial4.png";
import testimonial6 from "../../assets/testimonial/testimonial6.png";

const testimonials = [
  {
    name: "Sandeep Gupta",
    role: "Happy Client",
    text: "The whole process was very smooth and without any hassle. Team coordination and installation quality was excellent. I recommend approaching Vedanta for solar installations.",
    avatar: testimonial2,
  },
  {
    name: "Krupa Panchal",
    role: "Happy Client",
    text: "The Vedanta team was honest and simple to deal with. No big words, clear explanation and quick work. Everything was handled smoothly and I am really happy.",
  },
  {
    name: "More Aniket",
    role: "Happy Client",
    text: "From consultation to final installation their process was professional and punctual. Performance of the system is better than expected and support is responsive.",
    avatar: testimonial1,
  },
  {
    name: "Ravi Prakash Singh",
    role: "Happy Client",
    text: "Work completed on time and fully committed. Installation quality and structure support is solid. Very supportive team even in follow up after handover.",
    avatar: testimonial4,
  },
  {
    name: "Dhyang Sedhu",
    role: "Happy Client",
    text: "One of the best service for solar rooftop installation in Vadodara. Entire process was smooth with proper explanation and on-time work completion.",
  },
  {
    name: "Rameshwar Prasad",
    role: "Happy Client",
    text: "Vedanta team provides very clean installation quality and accurate guidance. Their post-installation support is quick and very helpful.",
    avatar: testimonial6,
  },
  {
    name: "Anil Nachhi",
    role: "Happy Client",
    text: "Our experience with solar setup from Vedanta has been excellent. Team was professional, transparent in communication and delivered quality work.",
  },
  {
    name: "Mah Kuntesh Patel",
    role: "Happy Client",
    text: "Installation done with proper safety and quality. Team behavior was polite and work was completed as committed. Good recommendation for rooftop solar.",
    avatar: testimonial3,
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const updateScrollState = () => {
      const maxLeft = slider.scrollWidth - slider.clientWidth;
      setCanScrollLeft(slider.scrollLeft > 4);
      setCanScrollRight(slider.scrollLeft < maxLeft - 4);
    };

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollCards = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const distance = Math.max(slider.clientWidth * 0.8, 260) * direction;
    slider.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#67afb1] to-[#6e87aa] py-12 md:py-14">
      <div className="mx-auto max-w-[1380px] px-5">
        <div className="text-center">
          <h2 className="text-[2.1rem] font-extrabold leading-none text-white md:text-[2.8rem] lg:text-[3.65rem]">
            What people say about us
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[1rem] leading-[1.5] text-white md:text-[1.25rem] lg:text-[1.6rem]">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>

        <div className="mt-4 flex justify-end gap-2 text-[#204075] md:gap-3">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            disabled={!canScrollLeft}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#204075] transition disabled:cursor-not-allowed disabled:opacity-35 md:h-9 md:w-9"
          >
            <HiArrowLeft className="text-[0.9rem] md:text-[1rem]" />
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            disabled={!canScrollRight}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#204075] transition disabled:cursor-not-allowed disabled:opacity-35 md:h-9 md:w-9"
          >
            <HiArrowRight className="text-[0.9rem] md:text-[1rem]" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:gap-5"
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="w-[84%] shrink-0 snap-start rounded-lg border border-white/80 bg-[#f7fbff] p-4 shadow-[0_8px_20px_rgba(21,55,96,0.18)] sm:w-[67%] md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <div className="flex items-center gap-3">
                {item.avatar ? (
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[#d5deee] bg-white">
                    <img
                      src={item.avatar}
                      alt={`${item.name} profile`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5deee] bg-[#1f3f74] text-sm font-semibold text-white">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex gap-1 text-[0.82rem] text-[#f2b400]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={`${item.name}-${index}`} />
                  ))}
                </div>
              </div>

              <p className="mt-3 min-h-[118px] text-[0.82rem] leading-[1.5] text-[#374151]">
                {item.text}
              </p>

              <p className="mt-3 text-[0.86rem] font-semibold text-[#1f3f74]">{item.name}</p>
              <p className="mt-1 text-[0.72rem] text-[#5f6674]">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
