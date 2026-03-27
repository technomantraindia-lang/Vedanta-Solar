import apartmentImg from "../../assets/home/services3.png";
import industrialImg from "../../assets/home/services1.jpg";
import residentialImg from "../../assets/home/services2.png";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    description:
      "Start your home's energy future today! Save money and stay clean with solar power.",
    image: residentialImg,
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar",
    description:
      "Start your industrial energy transformation today! Reduce electricity costs and boost efficiency with high performance industrial solar installation.",
    image: industrialImg,
  },
  {
    slug: "apartment-solar",
    title: "Apartment Solar",
    description:
      "Start your industrial energy transformation today! Reduce electricity costs and boost efficiency with high performance industrial solar panel installation.",
    image: apartmentImg,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#f3f4f6] py-14 md:py-16">
      <div className="mx-auto max-w-[1500px] px-5">
        <h2 className="mt-2 text-center text-[2rem] font-extrabold leading-none text-[#1f3f74] md:mt-3 md:text-[2.8rem] lg:text-[4rem]">
          Choose The Services
        </h2>

        <div className="mx-auto mt-8 grid max-w-[1250px] gap-8 md:mt-10 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-md bg-[#ebebed] p-3">
              <img
                src={service.image}
                alt={service.title}
                className="h-[210px] w-full object-cover"
              />

              <h3 className="mt-3 text-[1.02rem] font-bold text-[#1f3f74] md:text-[1.15rem]">{service.title}</h3>
              <p className="mt-2 min-h-[68px] text-[0.8rem] leading-[1.35] text-[#666b74] md:text-[0.82rem]">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-[#d8d8db] py-2 text-[0.78rem] font-medium text-black transition hover:bg-[#018f96] hover:text-black"
              >
                <span>Read More</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
