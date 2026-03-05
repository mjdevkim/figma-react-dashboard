import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useTheme } from "../../context/ThemeContext";
import type { Period, FilterState, DateRange } from "../../types";
import { PERIODS, DEFAULT_DATE_RANGE } from "../../constants/dashboard";
import {
  CalendarIcon,
  DownloadIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  ChevronDownIcon,
} from "./icons/DashboardIcons";

// ─── DashboardHeader ──────────────────────────────────────────────────────────

export function DashboardHeader() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className="flex items-center justify-between px-[24px] h-[64px] border-b shrink-0"
      style={{ borderColor: "var(--dash-border)" }}
    >
      {/* Title */}
      <h1
        className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[28px]"
        style={{ color: "var(--dash-text)" }}
      >
        Dashboard
      </h1>

      {/* Right actions */}
      <div className="flex items-center gap-[12px]">
        {/* Notifications */}
        <div className="relative cursor-pointer" aria-label="Notifications">
          <BellIcon />
          <span
            className="absolute -top-[2px] -right-[2px] size-[8px] bg-red-500 rounded-full"
            aria-label="Unread notifications"
          />
        </div>

        {/* Theme toggle */}
        <div
          role="group"
          aria-label="Theme switcher"
          className="rounded-[50px] flex items-center gap-[2px] p-[2px] border"
          style={{ borderColor: "var(--dash-border)", background: "var(--dash-bg)" }}
        >
          {/* Moon – active in dark mode */}
          <button
            aria-label="Switch to dark mode"
            aria-pressed={isDark}
            onClick={isDark ? undefined : toggleTheme}
            className="rounded-[40px] p-[9px] flex items-center justify-center transition-colors"
            style={{
              background: isDark ? "var(--dash-surface)" : "transparent",
              cursor:     isDark ? "default"             : "pointer",
            }}
          >
            <MoonIcon />
          </button>

          {/* Sun – active in light mode */}
          <button
            aria-label="Switch to light mode"
            aria-pressed={!isDark}
            onClick={!isDark ? undefined : toggleTheme}
            className="rounded-[40px] p-[9px] flex items-center justify-center transition-colors"
            style={{
              background: !isDark ? "var(--dash-surface)" : "transparent",
              cursor:     !isDark ? "default"              : "pointer",
            }}
          >
            <SunIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── DateRangePicker ──────────────────────────────────────────────────────────

interface DateRangePickerProps {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  const [open, setOpen] = useState(false);

  const label =
    value?.from && value?.to
      ? `${format(value.from, "MMM d")} – ${format(value.to, "MMM d")}`
      : value?.from
        ? format(value.from, "MMM d")
        : "Select range";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Date range: ${label}`}
        className="h-[36px] flex items-center gap-[8px] px-[8px] rounded-l-[4px] transition-opacity hover:opacity-80"
        style={{ background: "var(--dash-bg)" }}
      >
        <CalendarIcon />
        <span
          className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap"
          style={{ color: "var(--dash-muted)" }}
        >
          {label}
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Calendar popover */}
          <div
            role="dialog"
            aria-label="Date range picker"
            className="absolute left-0 top-full mt-[6px] z-50 rounded-[8px] p-[12px] shadow-xl border"
            style={{
              background:   "var(--dash-surface)",
              borderColor:  "var(--dash-border)",
            }}
          >
            <DayPicker
              mode="range"
              selected={value}
              onSelect={(range) => {
                onChange(range);
                if (range?.from && range?.to) setOpen(false);
              }}
              numberOfMonths={1}
              classNames={{
                months:              "flex",
                month:               "w-full",
                caption:             "flex justify-center pt-1 relative items-center mb-3",
                caption_label:       "text-xs font-semibold",
                nav:                 "flex items-center gap-1",
                nav_button:          "size-6 flex items-center justify-center rounded hover:opacity-80 text-inherit",
                nav_button_previous: "absolute left-0",
                nav_button_next:     "absolute right-0",
                table:               "w-full border-collapse",
                head_row:            "flex",
                head_cell:           "w-8 text-center text-[10px] font-normal pb-1",
                row:                 "flex w-full mt-1",
                cell:                "relative w-8 h-8 text-center text-[11px] p-0",
                day:                 "w-8 h-8 flex items-center justify-center rounded text-[11px] cursor-pointer transition-colors",
                day_selected:        "bg-[#0f62fe] text-white hover:bg-[#0f62fe]",
                day_today:           "text-[#64b7e2] font-semibold",
                day_outside:         "opacity-30",
                day_disabled:        "opacity-20 cursor-default",
                day_range_middle:    "rounded-none bg-[#0f62fe]/20",
                day_range_start:     "rounded-l bg-[#0f62fe] text-white",
                day_range_end:       "rounded-r bg-[#0f62fe] text-white",
                day_hidden:          "invisible",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

// ─── PeriodDropdown ───────────────────────────────────────────────────────────

interface PeriodDropdownProps {
  value: Period;
  onChange: (p: Period) => void;
}

function PeriodDropdown({ value, onChange }: PeriodDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Period: ${value}`}
        className="h-[36px] flex items-center gap-[8px] px-[8px] transition-opacity hover:opacity-80"
        style={{ background: "var(--dash-bg)" }}
      >
        <span
          className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap"
          style={{ color: "var(--dash-muted)" }}
        >
          {value}
        </span>
        <ChevronDownIcon />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <ul
            role="listbox"
            aria-label="Select period"
            className="absolute left-0 top-full mt-[4px] z-50 rounded-[6px] overflow-hidden border shadow-lg min-w-[110px]"
            style={{
              background:  "var(--dash-surface)",
              borderColor: "var(--dash-border)",
            }}
          >
            {PERIODS.map((p) => (
              <li key={p} role="option" aria-selected={p === value}>
                <button
                  onClick={() => { onChange(p); setOpen(false); }}
                  className="w-full text-left px-[12px] py-[8px] transition-colors hover:opacity-80"
                  style={{
                    background:  p === value ? "var(--dash-border)" : "transparent",
                    color:       "var(--dash-text)",
                    fontSize:    12,
                    fontFamily:  "Inter, sans-serif",
                  }}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

// ─── DashboardFilterBar ───────────────────────────────────────────────────────

interface DashboardFilterBarProps {
  /**
   * Called whenever the date range or period changes.
   * Wire this to your data-fetching layer (e.g. React Query, SWR, RTK Query).
   *
   * @example
   * <DashboardFilterBar onFilterChange={({ dateRange, period }) => refetch({ dateRange, period })} />
   */
  onFilterChange?: (state: FilterState) => void;

  /**
   * Called when the user clicks "Download Report".
   * Implement PDF/CSV export logic here.
   */
  onDownload?: (state: FilterState) => void;
}

export function DashboardFilterBar({
  onFilterChange,
  onDownload,
}: DashboardFilterBarProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(DEFAULT_DATE_RANGE);
  const [period,    setPeriod]    = useState<Period>("Monthly");

  function handleDateChange(range: DateRange | undefined) {
    setDateRange(range);
    onFilterChange?.({ dateRange: range, period });
  }

  function handlePeriodChange(p: Period) {
    setPeriod(p);
    onFilterChange?.({ dateRange, period: p });
  }

  return (
    <div className="flex items-center justify-between px-[24px] py-[14px]">
      {/* Date range + period filter */}
      <div
        className="flex items-center rounded-[4px] border overflow-visible"
        style={{ borderColor: "var(--dash-border)" }}
      >
        <DateRangePicker value={dateRange} onChange={handleDateChange} />

        <div
          className="w-px self-stretch"
          style={{ background: "var(--dash-border)" }}
          aria-hidden="true"
        />

        <PeriodDropdown value={period} onChange={handlePeriodChange} />
      </div>

      {/* Download Report */}
      <button
        onClick={() => onDownload?.({ dateRange, period })}
        className="h-[36px] border rounded-[4px] flex items-center gap-[8px] px-[8px] cursor-pointer transition-opacity hover:opacity-80"
        style={{
          borderColor: "var(--dash-border)",
          background:  "var(--dash-bg)",
        }}
      >
        <DownloadIcon />
        <span
          className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap"
          style={{ color: "var(--dash-muted)" }}
        >
          Download Report
        </span>
      </button>
    </div>
  );
}