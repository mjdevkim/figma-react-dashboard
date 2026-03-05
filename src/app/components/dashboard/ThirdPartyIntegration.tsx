import { useState } from "react";

import type { Integration } from "../../types";
import { INTEGRATIONS, INTEGRATION_COLUMNS } from "../../constants/dashboard";
import { CardHeader } from "./CardHeader";
import { BoxesIcon, CheckIcon } from "./icons/DashboardIcons";

// ─── Checkbox ─────────────────────────────────────────────────────────────────

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
}

function Checkbox({ checked, onToggle, label = "Toggle row" }: CheckboxProps) {
  if (checked) {
    return (
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        aria-label={label}
        aria-pressed={true}
        className="relative rounded-[4px] shrink-0 size-[18px] border cursor-pointer flex items-center justify-center"
        style={{ background: "#9747ff", borderColor: "#aa68ff" }}
      >
        <CheckIcon />
      </button>
    );
  }

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      aria-label={label}
      aria-pressed={false}
      className="relative rounded-[4px] shrink-0 size-[18px] border cursor-pointer hover:border-[#9747ff] transition-colors"
      style={{ background: "white", borderColor: "#e6e6e6" }}
    />
  );
}

// ─── ThirdPartyIntegration ────────────────────────────────────────────────────

interface ThirdPartyIntegrationProps {
  /**
   * Called whenever the set of selected row IDs changes.
   * Use this to trigger bulk-action APIs (delete, export, etc.).
   *
   * @example
   * <ThirdPartyIntegration onSelectionChange={(ids) => console.log("selected:", ids)} />
   */
  onSelectionChange?: (ids: string[]) => void;
}

export function ThirdPartyIntegration({ onSelectionChange }: ThirdPartyIntegrationProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(["paystack", "tangerine"])
  );

  function toggleRow(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      onSelectionChange?.(Array.from(next));
      return next;
    });
  }

  function toggleAll() {
    setSelectedIds((prev) => {
      const next =
        prev.size === INTEGRATIONS.length
          ? new Set<string>()
          : new Set(INTEGRATIONS.map((i) => i.id));
      onSelectionChange?.(Array.from(next));
      return next;
    });
  }

  const allSelected = selectedIds.size === INTEGRATIONS.length;

  return (
    <div
      className="rounded-[8px] border overflow-hidden flex flex-col"
      style={{
        background:  "var(--dash-bg)",
        borderColor: "var(--dash-border)",
        height:      "100%",
        minHeight:   0,
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <CardHeader
        icon={<BoxesIcon />}
        title="Third Party Integration"
        bordered
        actions={
          <button
            className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap hover:opacity-70 transition-opacity"
            style={{ color: "var(--dash-muted)" }}
          >
            See all
          </button>
        }
      />

      {/* ── Table ───────────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto" role="table" aria-label="Third party integrations">
        {/* Header row */}
        <div
          className="flex items-center border-b sticky top-0 z-10"
          role="row"
          style={{ borderColor: "var(--dash-border)", background: "var(--dash-surface)" }}
        >
          <div className="h-[42px] flex items-center p-[8px] shrink-0" role="columnheader">
            <Checkbox
              checked={allSelected}
              onToggle={toggleAll}
              label={allSelected ? "Deselect all rows" : "Select all rows"}
            />
          </div>
          {INTEGRATION_COLUMNS.map((col) => (
            <div key={col} role="columnheader" className="flex-1 h-[42px] flex items-center p-[8px]">
              <span
                className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[12px] whitespace-nowrap"
                style={{ color: "var(--dash-muted)" }}
              >
                {col}
              </span>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {INTEGRATIONS.map((item: Integration) => {
          const checked = selectedIds.has(item.id);
          const cells   = [item.type, item.rate, item.usage, item.signal] as const;

          return (
            <div
              key={item.id}
              role="row"
              aria-selected={checked}
              onClick={() => toggleRow(item.id)}
              className="flex items-center border-b h-[42px] cursor-pointer transition-colors"
              style={{
                borderColor: "var(--dash-border)",
                background:  checked
                  ? "color-mix(in srgb, var(--dash-surface) 60%, transparent)"
                  : "transparent",
              }}
            >
              {/* Checkbox */}
              <div role="cell" className="h-[42px] flex items-center p-[8px] shrink-0">
                <Checkbox
                  checked={checked}
                  onToggle={() => toggleRow(item.id)}
                  label={`${checked ? "Deselect" : "Select"} ${item.name}`}
                />
              </div>

              {/* Name + logo */}
              <div role="cell" className="flex-1 h-[42px] flex items-center gap-[8px] p-[8px]">
                <img
                  alt={`${item.name} logo`}
                  src={item.logo}
                  className="shrink-0 size-[18px] object-cover rounded-[20px]"
                />
                <span
                  className="font-['Inter',sans-serif] font-medium text-[12px] leading-[12px] whitespace-nowrap"
                  style={{ color: "var(--dash-muted)" }}
                >
                  {item.name}
                </span>
              </div>

              {/* Remaining cells */}
              {cells.map((val) => (
                <div key={`${item.id}-${val}`} role="cell" className="flex-1 h-[42px] flex items-center p-[8px]">
                  <span
                    className="font-['Inter',sans-serif] font-medium text-[12px] leading-[12px] whitespace-nowrap"
                    style={{ color: "var(--dash-muted)" }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
