export default function StatsBar() {
  const stats = [
    { value: "50,000,000+", label: "KWH Electricity saved" },
    { value: "55,000,000+", label: "Target saving 2025" },
    { value: "95MT Monthly", label: "Co2 saved" },
    { value: "1,250 CR", label: "Money saved by clients" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#018f95] to-[#203f74] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-6 md:py-7">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {stats.map((item, index) => (
            <div key={item.value} className="relative text-center">
              <p className="text-[1.28rem] font-bold leading-none md:text-[1.8rem] lg:text-[2.25rem]">{item.value}</p>
              <p className="mt-2 text-[0.84rem] text-white/95 md:text-[0.98rem] lg:text-[1.18rem]">{item.label}</p>
              {index !== stats.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/45 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
