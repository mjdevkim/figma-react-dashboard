import type { Asset } from "../../types";
import { ASSETS } from "../../constants/dashboard";
import { CardHeader } from "./CardHeader";
import { ShieldCheckIcon, ArrowUpRightIcon } from "./icons/DashboardIcons";

// ─── AssetCard ────────────────────────────────────────────────────────────────

function AssetCard({ asset }: { asset: Asset }) {
  const pct = Math.round((asset.secured / asset.total) * 100);

  return (
    <div
      className="relative rounded-[6px] flex-1 min-w-0 border"
      style={{ background: "var(--dash-surface)", borderColor: "var(--dash-border)" }}
    >
      <div className="flex flex-col gap-[12px] items-start p-[12px] w-full">
        <p
          className="font-['Inter',sans-serif] font-normal leading-[18px] text-[10px] w-full"
          style={{ color: "var(--dash-muted)" }}
        >
          {asset.description}
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-end gap-[2px]">
            <span
              className="font-['Inter',sans-serif] font-normal leading-[18px] text-[18px]"
              style={{ color: "var(--dash-text)" }}
            >
              {asset.secured}
            </span>
            <span
              className="font-['Inter',sans-serif] font-normal leading-[12px] text-[10px]"
              style={{ color: "var(--dash-muted)" }}
            >
              /{asset.total} assets
            </span>
          </div>
          <button
            aria-label={`View details — ${pct}% secured`}
            className="relative rounded-[4px] shrink-0 size-[28px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity border"
            style={{ borderColor: "var(--dash-border)" }}
          >
            <ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SecuredAssets ────────────────────────────────────────────────────────────

export function SecuredAssets() {
  return (
    <div
      className="rounded-[8px] border overflow-hidden flex flex-col"
      style={{
        background:  "var(--dash-bg)",
        borderColor: "var(--dash-border)",
        width:       "100%",
        height:      "100%",
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <CardHeader
        icon={<ShieldCheckIcon />}
        title="Secured Assets"
        actions={
          <button
            className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap hover:opacity-70 transition-opacity"
            style={{ color: "var(--dash-muted)" }}
          >
            See all
          </button>
        }
      />

      {/* ── 2 × 2 asset card grid ─────────────────────────────────────── */}
      <div className="flex flex-col gap-[12px] px-[17px] pb-[17px] flex-1">
        <div className="flex gap-[12px] flex-1">
          <AssetCard asset={ASSETS[0]} />
          <AssetCard asset={ASSETS[1]} />
        </div>
        <div className="flex gap-[12px] flex-1">
          <AssetCard asset={ASSETS[2]} />
          <AssetCard asset={ASSETS[3]} />
        </div>
      </div>
    </div>
  );
}
