import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  LuBadgePercent,
  LuBuilding2,
  LuCircleHelp,
  LuFactory,
  LuFileCheck,
  LuHouse,
  LuLeaf,
  LuShield,
  LuSunMedium,
  LuTrendingUp,
  LuWrench,
  LuZap,
} from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import brochurePdf from "../assets/VEDANTA SOLAR brochure.pdf";

const BILL_MIN = 1000;
const BILL_MAX = 50000;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CONSUMER_TYPES = [
  { id: "residential", label: "Residential", icon: LuHouse },
  { id: "commercial", label: "Commercial", icon: LuBuilding2 },
  { id: "industrial", label: "Industrial", icon: LuFactory },
];

const BENEFITS = [
  {
    icon: MdOutlineAttachMoney,
    title: "Reduce Electricity Bills",
    desc: "Drastically cut your monthly electricity costs by up to 90 percent and protect yourself from rising utility tariffs.",
    iconClass: "text-[#14b86a]",
    iconBg: "bg-[#e9fff3]",
    borderClass: "border-[#d8f6e4]",
  },
  {
    icon: LuZap,
    title: "Energy Independence",
    desc: "Generate your own clean energy and reduce the impact of grid fluctuations or power cuts on your daily routine.",
    iconClass: "text-[#ff8a1d]",
    iconBg: "bg-[#fff3e4]",
    borderClass: "border-[#ffe3c1]",
  },
  {
    icon: LuShield,
    title: "Reliable Backup Power",
    desc: "With the right battery setup, your essential appliances can keep running even when the neighborhood goes dark.",
    iconClass: "text-[#5b7cff]",
    iconBg: "bg-[#eef3ff]",
    borderClass: "border-[#dde6ff]",
  },
  {
    icon: LuTrendingUp,
    title: "Increase Property Value",
    desc: "Solar-ready homes and commercial spaces become more attractive assets with better long-term resale potential.",
    iconClass: "text-[#a855f7]",
    iconBg: "bg-[#f5eefe]",
    borderClass: "border-[#eadbff]",
  },
  {
    icon: LuBadgePercent,
    title: "Government Subsidies",
    desc: "Eligible residential installations can benefit from subsidy schemes that lower the upfront cost of going solar.",
    iconClass: "text-[#c59b00]",
    iconBg: "bg-[#fff8d9]",
    borderClass: "border-[#f6e7a6]",
  },
  {
    icon: LuLeaf,
    title: "Environment Friendly",
    desc: "A typical rooftop system reduces carbon emissions significantly and supports cleaner, more responsible power use.",
    iconClass: "text-[#4caf65]",
    iconBg: "bg-[#edf9ef]",
    borderClass: "border-[#d4efd9]",
  },
];

const SOLAR_STEPS = [
  {
    step: "1. Site Assessment",
    title: "We visit your property to check roof integrity and sun exposure for the right system design.",
    icon: LuHouse,
    iconClass: "text-[#5b7cff]",
    iconBg: "bg-[#eef3ff]",
    borderClass: "border-[#dde6ff]",
  },
  {
    step: "2. Permitting & Approvals",
    title: "We handle approvals, paperwork, and net metering applications so you do not have to chase them.",
    icon: LuFileCheck,
    iconClass: "text-[#a855f7]",
    iconBg: "bg-[#f5eefe]",
    borderClass: "border-[#eadbff]",
  },
  {
    step: "3. Professional Installation",
    title: "Our certified team installs your panels, wiring, and inverter safely with minimal downtime.",
    icon: LuWrench,
    iconClass: "text-[#ff8a1d]",
    iconBg: "bg-[#fff3e4]",
    borderClass: "border-[#ffe3c1]",
  },
  {
    step: "4. Grid Connection",
    title: "After final checks, we connect the system and your property starts generating free solar power.",
    icon: LuZap,
    iconClass: "text-[#4caf65]",
    iconBg: "bg-[#edf9ef]",
    borderClass: "border-[#d4efd9]",
  },
];

function formatAmount(value) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatRupee(value) {
  return `Rs.${formatAmount(value)}`;
}

function getMonthlyGeneration(totalGeneration) {
  const distribution = [0.08, 0.081, 0.107, 0.106, 0.11, 0.08, 0.064, 0.064, 0.077, 0.086, 0.076, 0.069];
  return distribution.map((factor) => totalGeneration * factor);
}

function getCascadeStyle(visible, index, distance = 72, delayBase = 70, yOffset = 12, scale = 0.95) {
  const direction = index % 2 === 0 ? -distance : distance;

  return {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(${direction}px, ${yOffset}px, 0) scale(${scale})`,
    transition:
      "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delayBase + (index * 80)}ms`,
    willChange: "transform, opacity",
  };
}

function ScrollReveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 28,
  scale = 0.97,
  threshold = 0.16,
  rootMargin = "0px 0px -10% 0px",
  showImmediately = false,
}) {
  const [revealState, setRevealState] = useState({ visible: false, immediate: false });
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setRevealState({ visible: true, immediate: true });
      return undefined;
    }

    let observer;

    const isInViewport = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.96 && rect.bottom > 0;
    };

    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = undefined;
      }
    };

    // Above-the-fold content — show immediately without animation.
    if (isInViewport()) {
      setRevealState((prev) => {
        if (prev.visible && prev.immediate) return prev;
        return { visible: true, immediate: true };
      });
      return undefined;
    }

    // Below-the-fold — animate in when the element enters the viewport.
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealState((prev) => {
          if (prev.visible) return prev;
          return { visible: true, immediate: false };
        });
        cleanup();
      },
      { threshold, rootMargin }
    );
    observer.observe(node);

    return cleanup;
  }, [delay, rootMargin, showImmediately, threshold]);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: revealState.visible ? 1 : 0,
        transform: revealState.visible
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        filter: revealState.visible ? "blur(0px)" : "blur(3px)",
        transition: revealState.immediate
          ? "none"
          : "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms ease-out",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {typeof children === "function" ? children(revealState.visible) : children}
    </Component>
  );
}

function ComparisonTile({ tone, label, value, note }) {
  const toneStyles = {
    coral: "border-[#ffe0da] bg-[#fff7f4] text-[#f05a47]",
    green: "border-[#d9f6de] bg-[#f4fff6] text-[#16a34a]",
    blue: "border-[#c7ede9] bg-[#f0faf9] text-[#0e9384]",
  };

  return (
    <div className={`rounded-[16px] border p-4 ${toneStyles[tone]}`}>
      <p className="text-[0.68rem] font-medium text-[#8c95a3]">{label}</p>
      <p className="mt-2 text-[1.45rem] font-extrabold leading-none">{value}</p>
      <p className="mt-2 text-[0.72rem] font-medium text-[#9aa3af]">{note}</p>
    </div>
  );
}

function getLiftStyle(visible, index, delayBase = 50) {
  const xOffset = index % 2 === 0 ? -44 : 44;

  return {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(${xOffset}px, 18px, 0) scale(0.96)`,
    transition:
      "opacity 560ms cubic-bezier(0.16, 1, 0.3, 1), transform 720ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delayBase + (index * 70)}ms`,
    willChange: "transform, opacity",
  };
}

function ComparisonTileGrid({ items, visible }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      {items.map((item, idx) => (
        <div key={item.label} style={getCascadeStyle(visible, idx, 92, 40, 8, 0.94)}>
          <ComparisonTile {...item} />
        </div>
      ))}
    </div>
  );
}

export default function CalculatorPage() {
  const [consumerType, setConsumerType] = useState("residential");
  const [monthlyBill, setMonthlyBill] = useState(BILL_MIN);
  const [tariffRate, setTariffRate] = useState(8);
  const [dailyGeneration, setDailyGeneration] = useState(4);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const nextProgress = Math.min(window.scrollY / 1800, 1);
      setScrollProgress(nextProgress);
      rafId = 0;
    };

    const handleScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const results = useMemo(() => {
    const safeTariff = Math.max(Number(tariffRate) || 0, 1);
    const safeDailyGeneration = Math.max(Number(dailyGeneration) || 0, 1);
    const safeBill = Math.max(Number(monthlyBill) || 0, BILL_MIN);
    const systemKw = Math.max(safeBill / (safeTariff * safeDailyGeneration * 30), 1);
    const recommendedSize = Math.max(systemKw * 1.2, 1.25);
    const roofArea = systemKw * 100;
    const annualGeneration = recommendedSize * safeDailyGeneration * 365;
    const annualSavings = annualGeneration * safeTariff;
    const monthlySavings = annualSavings / 12;
    const annualBill = safeBill * 12;
    const subsidyAmount = recommendedSize * 30000;
    const monthlyUnits = safeBill / Math.max(safeTariff + 3, 8);

    return {
      annualBill,
      annualBillAfterSolar: Math.max(annualBill - annualSavings, 0),
      annualGeneration,
      annualSavings,
      dailyAverage: annualGeneration / 365,
      lifetimeSavings: annualSavings * 25,
      monthlyGeneration: getMonthlyGeneration(annualGeneration),
      monthlySavings,
      monthlyUnits,
      recommendedSize,
      roofArea,
      savingsRatio: (annualSavings / annualBill) * 100,
      subsidyAmount,
      systemKw,
      zeroBillAmount: Math.max(safeBill - monthlySavings, 0),
    };
  }, [monthlyBill, tariffRate, dailyGeneration]);

  const estimateCards = useMemo(
    () => [
      { label: "Required Size (kW)", value: results.systemKw.toFixed(2) },
      { label: "Recommended (kW)", value: results.recommendedSize.toFixed(2) },
      { label: "Annual Savings", value: formatAmount(results.annualSavings) },
      { label: "Subsidy", value: formatAmount(results.subsidyAmount) },
    ],
    [results.annualSavings, results.recommendedSize, results.subsidyAmount, results.systemKw]
  );

  const monthlyComparison = useMemo(
    () => [
      { label: "Before Solar", value: formatRupee(monthlyBill), note: "Monthly Bill", tone: "coral" },
      { label: "After Solar", value: formatRupee(results.zeroBillAmount), note: "Monthly Bill", tone: "green" },
      { label: "Monthly Savings", value: formatRupee(results.monthlySavings), note: "You Save", tone: "blue" },
    ],
    [monthlyBill, results.monthlySavings, results.zeroBillAmount]
  );

  const annualComparison = useMemo(
    () => [
      { label: "Before Solar", value: formatRupee(results.annualBill), note: "Annual Bill", tone: "coral" },
      { label: "After Solar", value: formatRupee(results.annualBillAfterSolar), note: "Annual Bill", tone: "green" },
      { label: "Annual Savings", value: formatRupee(results.annualSavings), note: "You Save", tone: "blue" },
    ],
    [results.annualBill, results.annualBillAfterSolar, results.annualSavings]
  );

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#f5f6f8] pb-16 pt-36 text-[#1f2937] md:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[680px]">
          <div
            className="absolute -left-40 top-8 h-80 w-80 rounded-full bg-[#0e9384]/[0.10] blur-[100px]"
            style={{ transform: `translate3d(0, ${-84 * scrollProgress}px, 0) scale(${1 + (scrollProgress * 0.08)})` }}
          />
          <div
            className="absolute -right-32 top-60 h-72 w-72 rounded-full bg-[#1a2d5a]/[0.10] blur-[100px]"
            style={{ transform: `translate3d(0, ${-110 * scrollProgress}px, 0) scale(${1 + (scrollProgress * 0.1)})` }}
          />
        </div>

        <section className="relative z-[2] mx-auto max-w-[1210px] px-5 md:px-8">
          {/* ─── HERO TITLE ─── */}
          <ScrollReveal className="mx-auto max-w-[760px] text-center" y={24} scale={0.98} showImmediately>
            <h1 className="text-[1.6rem] font-extrabold tracking-[-0.03em] text-[#1a2d5a] sm:text-[2rem] md:text-[2.8rem]">
              Solar Power Calculator
            </h1>
            <p className="mt-3 text-[0.95rem] font-medium text-[#8a919d] md:text-[1.02rem]">
              Calculate your solar requirements, cost, and savings instantly with our easy solar calculator.
            </p>
          </ScrollReveal>

          {/* ─── CALCULATOR INPUTS (full width) ─── */}
          <ScrollReveal
            as="article"
            className="mt-12 rounded-[22px] border border-[#e7ebf0] bg-white p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)] md:p-8"
            y={28}
            showImmediately
          >
            {(visible) => (
              <>
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div style={getLiftStyle(visible, 0, 30)}>
                    <h2 className="text-[1.35rem] font-bold text-[#1f2a44]">Calculate Your Solar Needs</h2>
                    <p className="mt-1 text-[0.8rem] font-medium text-[#98a0ab]">
                      Fill in your details to get a personalized solar estimate
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2" style={getLiftStyle(visible, 1, 40)}>
                    {CONSUMER_TYPES.map((type, idx) => {
                      const Icon = type.icon;
                      const isActive = consumerType === type.id;

                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setConsumerType(type.id)}
                          style={getCascadeStyle(visible, idx, 36, 90, 10, 0.96)}
                          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8rem] font-semibold transition ${
                            isActive
                              ? "border-[#0e9384] bg-[#0e9384] text-white shadow-[0_6px_16px_rgba(14,147,132,0.20)]"
                              : "border-[#e6eaf0] bg-[#fbfcfd] text-[#718096] hover:border-[#d8dee8]"
                          }`}
                        >
                          <Icon className="text-[0.95rem]" />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-[16px] border border-[#edf1f5] bg-[#fbfcfd] p-4" style={getLiftStyle(visible, 2, 60)}>
                    <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-[#6c7887]">
                      <MdOutlineAttachMoney className="text-[1rem] text-[#667085]" />
                      Monthly Electricity Bill
                    </div>
                    <input
                      id="monthlyBill"
                      type="number"
                      min={BILL_MIN}
                      max={BILL_MAX}
                      value={monthlyBill}
                      onChange={(event) => setMonthlyBill(Number(event.target.value || BILL_MIN))}
                      className="mt-3 h-11 w-full rounded-[12px] border border-[#e4e9ef] bg-white px-4 text-[0.98rem] font-semibold text-[#1f2937] outline-none transition focus:border-[#0e9384]"
                    />
                    <input
                      type="range"
                      min={BILL_MIN}
                      max={BILL_MAX}
                      step={500}
                      value={monthlyBill}
                      onChange={(event) => setMonthlyBill(Number(event.target.value))}
                      className="calculator-range mt-3 w-full"
                    />
                  </div>

                  <div className="rounded-[16px] border border-[#edf1f5] bg-[#fbfcfd] p-4" style={getLiftStyle(visible, 3, 60)}>
                    <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-[#6c7887]">
                      <LuHouse className="text-[0.95rem] text-[#667085]" />
                      Monthly Units (kWh)
                    </div>
                    <input
                      type="text"
                      readOnly
                      value={`${results.monthlyUnits.toFixed(2)}`}
                      className="mt-3 h-11 w-full rounded-[12px] border border-[#e4e9ef] bg-white px-4 text-[0.98rem] font-semibold text-[#1f2937] outline-none"
                    />
                    <p className="mt-2 text-[0.72rem] font-medium text-[#a0a8b3]">Approx. based on your blended utility bill</p>
                  </div>

                  <div className="rounded-[16px] border border-[#edf1f5] bg-[#fbfcfd] p-4" style={getLiftStyle(visible, 4, 60)}>
                    <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-[#6c7887]">
                      <MdOutlineAttachMoney className="text-[1rem] text-[#667085]" />
                      Average Tariff Rate (kWh)
                    </div>
                    <input
                      id="tariffRate"
                      type="number"
                      step={0.5}
                      value={tariffRate}
                      onChange={(event) => setTariffRate(Number(event.target.value) || 8)}
                      className="mt-3 h-11 w-full rounded-[12px] border border-[#e4e9ef] bg-white px-4 text-[0.98rem] font-semibold text-[#1f2937] outline-none transition focus:border-[#0e9384]"
                    />
                    <p className="mt-2 text-[0.72rem] font-medium text-[#a0a8b3]">Minimum 8 per unit</p>
                  </div>

                  <div className="rounded-[16px] border border-[#edf1f5] bg-[#fbfcfd] p-4" style={getLiftStyle(visible, 5, 60)}>
                    <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-[#6c7887]">
                      <LuSunMedium className="text-[1rem] text-[#667085]" />
                      Daily Generation Unit
                    </div>
                    <input
                      id="dailyGen"
                      type="number"
                      step={0.5}
                      value={dailyGeneration}
                      onChange={(event) => setDailyGeneration(Number(event.target.value) || 4)}
                      className="mt-3 h-11 w-full rounded-[12px] border border-[#e4e9ef] bg-white px-4 text-[0.98rem] font-semibold text-[#1f2937] outline-none transition focus:border-[#0e9384]"
                    />
                    <p className="mt-2 text-[0.72rem] font-medium text-[#a0a8b3]">Typically 4.0 to 5.0 units in India</p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-[12px] border border-[#c7ede9] bg-[#edf8f7] px-4 py-3" style={getLiftStyle(visible, 6, 70)}>
                  <LuCircleHelp className="mt-0.5 shrink-0 text-[0.9rem] text-[#1a2d5a]" />
                  <p className="text-[0.74rem] font-medium text-[#4d7a74]">
                    Assumptions: Buyback rate Rs. 7.25/unit &middot; Cost benchmark Rs. 30,000/kW &middot; Generation based on your daily unit setting
                  </p>
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── ESTIMATE RESULTS BANNER (full width, teal) ─── */}
          <ScrollReveal
            as="article"
            className="mt-8 rounded-[22px] bg-[#0e9384] p-5 text-white shadow-[0_20px_32px_rgba(14,147,132,0.22)] md:p-8"
            y={28}
          >
            {(visible) => (
              <>
                <h2 className="text-[1.1rem] font-bold text-white/90">Your Solar Estimate</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {estimateCards.map((item, idx) => (
                    <div
                      key={item.label}
                      style={getCascadeStyle(visible, idx, 58, 60, 10, 0.95)}
                      className="rounded-[14px] bg-white/15 p-4 backdrop-blur-[1px]"
                    >
                      <p className="text-[1.8rem] font-extrabold leading-none md:text-[2rem]">{item.value}</p>
                      <p className="mt-2 text-[0.74rem] font-semibold text-white/85">{item.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── ENERGY GENERATION (full-width navy card) ─── */}
          <ScrollReveal
            as="article"
            className="mt-8 rounded-[22px] bg-[#1a2d5a] p-5 text-white shadow-[0_20px_32px_rgba(26,45,90,0.18)] md:p-8"
            y={28}
          >
            {(visible) => (
              <>
                <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-white/90" style={getCascadeStyle(visible, 0, 48, 40, 10, 0.96)}>
                  <LuZap className="text-[1rem]" />
                  Energy Generation Breakdown
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  <div style={getCascadeStyle(visible, 1, 48, 60, 10, 0.95)} className="rounded-[14px] bg-white/10 p-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/65">Annual Generation</p>
                    <p className="mt-2 text-[1.8rem] font-extrabold leading-none md:text-[2rem]">{formatAmount(results.annualGeneration)}</p>
                    <p className="mt-1 text-[0.74rem] font-semibold text-white/70">kWh / year</p>
                  </div>
                  <div style={getCascadeStyle(visible, 2, 48, 90, 10, 0.95)} className="rounded-[14px] bg-white/10 p-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/65">Roof Area Needed</p>
                    <p className="mt-2 text-[1.8rem] font-extrabold leading-none md:text-[2rem]">{formatAmount(results.roofArea)}</p>
                    <p className="mt-1 text-[0.74rem] font-semibold text-white/70">sq.ft</p>
                  </div>
                  <div style={getCascadeStyle(visible, 3, 48, 120, 10, 0.95)} className="rounded-[14px] bg-white/10 p-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/65">Monthly Avg</p>
                    <p className="mt-2 text-[1.8rem] font-extrabold leading-none md:text-[2rem]">{formatAmount(results.annualGeneration / 12)}</p>
                    <p className="mt-1 text-[0.74rem] font-semibold text-white/70">kWh / month</p>
                  </div>
                  <div style={getCascadeStyle(visible, 4, 48, 150, 10, 0.95)} className="rounded-[14px] bg-white/10 p-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/65">Daily Avg</p>
                    <p className="mt-2 text-[1.8rem] font-extrabold leading-none md:text-[2rem]">{formatAmount(results.dailyAverage)}</p>
                    <p className="mt-1 text-[0.74rem] font-semibold text-white/70">kWh / day</p>
                  </div>
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── COMPARISON + SAVINGS (2-column) ─── */}
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            {/* Before & After Comparison */}
            <ScrollReveal
              as="article"
              className="rounded-[22px] border border-[#e7ebf0] bg-white p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)] md:p-7"
              x={-40}
              y={20}
            >
              {(visible) => (
                <>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf8f7] text-[#0e9384]">
                      <LuTrendingUp className="text-[1rem]" />
                    </span>
                    <h2 className="text-[1.1rem] font-bold text-[#1f2a44]">Before &amp; After Solar</h2>
                  </div>

                  <div style={getCascadeStyle(visible, 0, 72, 50, 12, 0.95)} className="mt-4 rounded-[14px] border border-[#edf1f5] bg-[#fcfdff] p-3">
                    <h3 className="text-[0.82rem] font-bold text-[#1f2a44]">Monthly</h3>
                    <ComparisonTileGrid items={monthlyComparison} visible={visible} />
                  </div>

                  <div style={getCascadeStyle(visible, 1, 72, 100, 12, 0.95)} className="mt-3 rounded-[14px] border border-[#edf1f5] bg-[#fcfdff] p-3">
                    <h3 className="text-[0.82rem] font-bold text-[#1f2a44]">Annual</h3>
                    <ComparisonTileGrid items={annualComparison} visible={visible} />
                  </div>
                </>
              )}
            </ScrollReveal>

            {/* Savings Summary */}
            <ScrollReveal
              as="article"
              className="rounded-[22px] border border-[#e7ebf0] bg-white p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)] md:p-7"
              x={40}
              y={20}
            >
              {(visible) => (
                <>
                  <div style={getLiftStyle(visible, 0, 30)}>
                    <h2 className="text-[1.1rem] font-bold text-[#1f2a44]">Total Savings</h2>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-[16px] border border-[#c7ede9] bg-[#f0faf9] p-5" style={getLiftStyle(visible, 1, 50)}>
                      <p className="text-[2.2rem] font-extrabold leading-none text-[#0e9384] sm:text-[2.4rem]">
                        {results.savingsRatio.toFixed(1)}%
                      </p>
                      <p className="mt-2 text-[0.78rem] font-medium text-[#8a919d]">Reduction in electricity costs</p>
                    </div>
                    <div className="rounded-[16px] border border-[#edf1f5] bg-[#fcfdff] p-5" style={getLiftStyle(visible, 2, 70)}>
                      <p className="text-[2.2rem] font-extrabold leading-none text-[#1f2a44] sm:text-[2.4rem]">
                        {formatAmount(results.annualSavings)}
                      </p>
                      <p className="mt-2 text-[0.78rem] font-medium text-[#8a919d]">Annual savings (Rs.)</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[16px] border border-[#edf1f5] bg-[#fcfdff] p-5" style={getLiftStyle(visible, 3, 90)}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#b0b7c0]">Lifetime Savings (25 years)</p>
                        <p className="mt-2 text-[2rem] font-extrabold leading-none text-[#1f2a44]">
                          Rs.{formatAmount(results.lifetimeSavings)}
                        </p>
                      </div>
                      <div className="hidden rounded-[12px] bg-[#f0faf9] px-4 py-2 sm:block">
                        <p className="text-[0.72rem] font-semibold text-[#8a919d]">Monthly</p>
                        <p className="text-[1.1rem] font-extrabold text-[#0e9384]">Rs.{formatAmount(results.monthlySavings)}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[0.72rem] font-medium text-[#b0b7c0]">
                      Based on current tariff rates with minimal degradation
                    </p>
                  </div>
                </>
              )}
            </ScrollReveal>
          </div>

          {/* ─── MONTHLY GENERATION CHART (full width) ─── */}
          <ScrollReveal
            as="article"
            className="mt-8 rounded-[22px] border border-[#e7ebf0] bg-white p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)] md:p-7"
            y={28}
          >
            {(visible) => (
              <>
                <div className="flex items-center gap-2 text-[#0e9384]">
                  <LuTrendingUp className="text-[1rem]" />
                  <h2 className="text-[1.1rem] font-bold text-[#1f2a44]">Monthly Generation</h2>
                </div>

                <div className="mt-5 grid gap-x-8 gap-y-[10px] lg:grid-cols-2">
                  {MONTHS.map((month, idx) => {
                    const monthGen = results.monthlyGeneration[idx];
                    const percentage = (monthGen / Math.max(...results.monthlyGeneration)) * 100;

                    return (
                      <div
                        key={month}
                        style={getCascadeStyle(visible, idx, 54, 20, 6, 0.98)}
                        className="grid grid-cols-[38px_minmax(0,1fr)_84px] items-center gap-3"
                      >
                        <span className="text-[0.78rem] font-semibold text-[#727c89]">{month}</span>
                        <div className="h-[6px] overflow-hidden rounded-full bg-[#edf1f5]">
                          <div
                            className="h-full rounded-full bg-[#0e9384]"
                            style={{
                              width: visible ? `${percentage}%` : "0%",
                              transition: "width 850ms cubic-bezier(0.16, 1, 0.3, 1)",
                              transitionDelay: `${100 + (idx * 45)}ms`,
                            }}
                          />
                        </div>
                        <span className="text-right text-[0.78rem] font-medium text-[#96a0ad]">
                          {monthGen.toFixed(2)} kWh
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 border-t border-[#eef2f6] pt-3 text-center">
                  <p className="text-[0.8rem] font-semibold text-[#6c7887]">
                    Total: <span className="font-extrabold text-[#1f2a44]">{formatAmount(results.annualGeneration)} kWh/year</span>
                  </p>
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── BENEFITS (3-column grid) ─── */}
          <ScrollReveal as="section" className="mt-12" y={28}>
            {(visible) => (
              <>
                <div className="text-center" style={getLiftStyle(visible, 0, 20)}>
                  <h2 className="text-[1.85rem] font-extrabold tracking-[-0.03em] text-[#1f2a44]">
                    Benefits of Solar Power
                  </h2>
                  <p className="mt-1 text-[0.82rem] font-medium text-[#99a1ad]">
                    Why switching to solar is the smart choice
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {BENEFITS.map((benefit, idx) => {
                    const Icon = benefit.icon;

                    return (
                      <article
                        key={benefit.title}
                        style={getCascadeStyle(visible, idx, 64, 50, 10, 0.95)}
                        className={`rounded-[18px] border bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] ${benefit.borderClass}`}
                      >
                        <div className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${benefit.iconBg}`}>
                          <Icon className={`text-[1.2rem] ${benefit.iconClass}`} />
                        </div>
                        <h3 className="mt-3 text-[0.95rem] font-bold text-[#1f2a44]">{benefit.title}</h3>
                        <p className="mt-2 text-[0.78rem] font-medium leading-[1.65] text-[#7d8795]">{benefit.desc}</p>
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── SOLAR STEPS (horizontal timeline) ─── */}
          <ScrollReveal as="section" className="mt-12" y={28}>
            {(visible) => (
              <>
                <div className="text-center" style={getLiftStyle(visible, 0, 20)}>
                  <h2 className="text-[1.85rem] font-extrabold tracking-[-0.03em] text-[#1f2a44]">Your Path to Solar</h2>
                  <p className="mt-1 text-[0.82rem] font-medium text-[#99a1ad]">
                    Simple steps to energy independence
                  </p>
                </div>

                <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {SOLAR_STEPS.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.step}
                        style={getCascadeStyle(visible, idx, 64, 50, 10, 0.95)}
                        className={`relative rounded-[18px] border bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] ${item.borderClass}`}
                      >
                        <div className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${item.iconBg}`}>
                          <Icon className={`text-[1.2rem] ${item.iconClass}`} />
                        </div>
                        <h3 className="mt-3 text-[0.95rem] font-bold text-[#1f2a44]">{item.step}</h3>
                        <p className="mt-2 text-[0.78rem] font-medium leading-[1.65] text-[#7d8795]">{item.title}</p>
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </ScrollReveal>

          {/* ─── CTA BANNER (full width) ─── */}
          <ScrollReveal
            as="article"
            className="mt-12 overflow-hidden rounded-[22px] bg-[#1a2d5a] p-6 text-white shadow-[0_20px_32px_rgba(26,45,90,0.18)] md:p-10"
            y={28}
          >
            {(visible) => (
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                <div style={getLiftStyle(visible, 0, 30)}>
                  <h2 className="text-[1.5rem] font-extrabold md:text-[1.75rem]">Ready to Go Solar?</h2>
                  <p className="mt-2 max-w-[480px] text-[0.88rem] font-medium leading-relaxed text-white/80">
                    Get a detailed quote from our solar experts based on your specific requirements.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row" style={getLiftStyle(visible, 1, 60)}>
                  <a
                    href={brochurePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#0e9384] px-6 py-3 text-center text-[0.84rem] font-bold text-white transition hover:bg-[#0b7d71]"
                  >
                    Get Detailed Quote (PDF)
                  </a>
                  <button
                    type="button"
                    className="rounded-full border border-white/30 px-6 py-3 text-[0.84rem] font-bold text-white transition hover:bg-white/10"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
