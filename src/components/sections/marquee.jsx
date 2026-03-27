export default function Marquee() {
  const repeatCount = 3;

  const marqueeText = (
    <>
      Switch to solar energy & get subsidy up to
      <span className="subsidy-banner-highlight mx-2 font-bold text-[#1f3768]">78,000/-</span>
      on residential
    </>
  );

  return (
    <div className="w-full border-y border-[#98a8bf] bg-white py-4 md:py-5">
      <div className="home-marquee-mask px-5 md:px-8">
        <div className="home-marquee-track" style={{ animation: "homeMarqueeRightToLeft 20s linear infinite" }}>
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div
              key={`marquee-group-${groupIndex}`}
              className="home-marquee-group"
              aria-hidden={groupIndex === 1}
            >
              {Array.from({ length: repeatCount }).map((_, index) => (
                <p
                  key={`marquee-copy-${groupIndex}-${index}`}
                  className="home-marquee-item subsidy-banner-text text-[1.05rem] font-medium leading-tight tracking-normal text-[#2a4777] md:text-[1.8rem] lg:text-[2.8rem]"
                >
                  {marqueeText}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
