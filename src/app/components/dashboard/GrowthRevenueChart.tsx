import { motion } from "motion/react";

import { useResizeObserver } from "../../hooks/useResizeObserver";
import { FilterIcon, RefreshIcon, CalendarIcon } from "./icons/DashboardIcons";
import { MAX_CHART_VALUE, Y_LABELS, CHART_DATA, CHART_LEGEND } from "../../constants/dashboard";
import { CardHeader } from "./CardHeader";
import type { BarData } from "../../types";

// ─── Bar sub-component ────────────────────────────────────────────────────────

interface BarProps {
  value: number;
  containerHeight: number;
  gradient: string;
  /** Stagger the entrance animation by this many seconds. */
  animDelay?: number;
}

function Bar({ value, containerHeight, gradient, animDelay = 0 }: BarProps) {
  const targetHeight = Math.round((value / MAX_CHART_VALUE) * containerHeight);

  return (
    <motion.div
      className={`rounded-[4px] w-[18px] shrink-0 ${gradient}`}
      initial={{ height: 0 }}
      animate={{ height: targetHeight }}
      transition={{ duration: 0.55, ease: "easeOut", delay: animDelay }}
    />
  );
}

// ─── BarGroup sub-component ───────────────────────────────────────────────────

interface BarGroupProps {
  data: BarData;
  index: number;
  isLast: boolean;
  chartHeight: number;
}

function BarGroup({ data, index, isLast, chartHeight }: BarGroupProps) {
  const onlineGrad = isLast
    ? "bg-gradient-to-b from-[#222] from-[40%] to-[#1c1c1c]"
    : "bg-gradient-to-b from-[#0f62fe] from-[40%] to-[#91b7ff]";

  const shopGrad = isLast
    ? "bg-gradient-to-b from-[#222] from-[40%] to-[#1c1c1c]"
    : "bg-gradient-to-b from-[#64b7e2] from-[14%] to-[#add9ef]";

  return (
    <div className="flex gap-[2px] items-end">
      <Bar value={data.online} containerHeight={chartHeight} gradient={onlineGrad} animDelay={0.05 * index}         />
      <Bar value={data.shop}   containerHeight={chartHeight} gradient={shopGrad}   animDelay={0.05 * index + 0.025} />
    </div>
  );
}

// ─── GrowthRevenueChart ───────────────────────────────────────────────────────

export function GrowthRevenueChart() {
  const { ref: chartAreaRef, size } = useResizeObserver<HTMLDivElement>();

  return (
    <div
      className="rounded-[8px] border flex flex-col overflow-hidden"
      style={{
        background:  "var(--dash-surface)",
        borderColor: "var(--dash-border)",
        height:      "100%",
        minHeight:   422,
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <CardHeader
        icon={<CalendarIcon />}
        title="Growth Revenue Chart"
        subtitle="Previous week results"
        actions={
          <>
            <button
              className="h-[36px] border rounded-[4px] flex items-center gap-[8px] px-[8px] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                background:  "var(--dash-surface)",
                borderColor: "var(--dash-border)",
              }}
            >
              <FilterIcon />
              <span
                className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap"
                style={{ color: "var(--dash-muted)" }}
              >
                Filter
              </span>
            </button>
            <button
              aria-label="Refresh chart data"
              className="h-[36px] w-[36px] border rounded-[4px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                background:  "var(--dash-surface)",
                borderColor: "var(--dash-border)",
              }}
            >
              <RefreshIcon />
            </button>
          </>
        }
      />

      {/* ── Legend ──────────────────────────────────────────────────────── */}
      <div className="flex gap-[12px] items-center justify-end px-[20px] mb-[12px] shrink-0">
        {CHART_LEGEND.map(({ color, label }) => (
          <div key={label} className="flex gap-[4px] items-center">
            <div className="size-[10px] rounded-full" style={{ background: color }} />
            <span
              className="font-['Open_Sans',sans-serif] font-normal leading-[18px] text-[12px] whitespace-nowrap"
              style={{ color: "var(--dash-muted)", fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Chart body ──────────────────────────────────────────────────── */}
      {/*
        flex-1 → fills all remaining vertical space.
        useResizeObserver on `chartAreaRef` measures height in pixels
        so bars scale proportionally regardless of container size.
      */}
      <div className="flex px-[20px] gap-[16px] flex-1 min-h-0">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between self-stretch py-[1px] shrink-0">
          {Y_LABELS.map((label) => (
            <span
              key={label}
              className="font-['Open_Sans',sans-serif] font-normal leading-[18px] text-[12px] whitespace-nowrap"
              style={{ color: "var(--dash-muted)", fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Grid + bars */}
        <div ref={chartAreaRef} className="flex-1 relative min-h-0">
          {/* Horizontal dashed grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none" aria-hidden="true">
            {Y_LABELS.map((label) => (
              <div
                key={label}
                className="w-full border-t border-dashed"
                style={{ borderColor: "var(--dash-border)" }}
              />
            ))}
          </div>

          {/* Bars – aligned to the bottom */}
          <div className="absolute inset-0 flex items-end justify-around pb-[1px]">
            {CHART_DATA.map((d, i) => (
              <BarGroup
                key={d.day}
                data={d}
                index={i}
                isLast={i === CHART_DATA.length - 1}
                chartHeight={size.height || 180}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── X-axis labels ────────────────────────────────────────────────── */}
      <div className="flex justify-around px-[20px] pb-[16px] pl-[56px] shrink-0">
        {CHART_DATA.map((d) => (
          <span
            key={d.day}
            className="font-['Open_Sans',sans-serif] font-normal leading-[18px] text-[12px] text-center w-[38px]"
            style={{ color: "var(--dash-muted)", fontVariationSettings: "'wdth' 100" }}
          >
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}