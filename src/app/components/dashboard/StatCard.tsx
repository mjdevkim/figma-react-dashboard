import type { ReactNode } from "react";
import { IconBadge } from "./CardHeader";
import { InfoCircleIcon } from "./icons/DashboardIcons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatCardProps {
  /** Icon rendered in the card header — typically a DashboardIcon component. */
  icon: ReactNode;
  title: string;
  /** Pre-formatted display value, e.g. "$403,120". */
  value: string;
  /** Optional descriptive label for screen readers. Defaults to `title`. */
  ariaLabel?: string;
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

export function StatCard({ icon, title, value, ariaLabel }: StatCardProps) {
  return (
    <article
      aria-label={ariaLabel ?? title}
      className="rounded-[8px] border flex-1 min-w-0 h-[130px] relative overflow-hidden"
      style={{ background: "var(--dash-surface)", borderColor: "var(--dash-border)" }}
    >
      <div className="flex flex-col gap-[14px] px-[20px] py-[18px] h-full">
        {/* Header row */}
        <div className="flex items-start justify-between w-full">
          <div className="flex gap-[12px] items-center">
            <IconBadge>{icon}</IconBadge>
            <p
              className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[18px] whitespace-nowrap"
              style={{ color: "var(--dash-text)", fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </p>
          </div>
          <InfoCircleIcon />
        </div>

        {/* Value */}
        <p
          className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[24px] w-full"
          style={{ color: "var(--dash-text)", fontVariationSettings: "'wdth' 100" }}
        >
          {value}
        </p>
      </div>
    </article>
  );
}