/**
 * Shared TypeScript types for the Wise dashboard.
 *
 * Keeping domain types in one place makes it easy to generate API contracts,
 * mock data, and keep component props in sync with backend payloads.
 */

import type { ReactNode } from "react";
import type { DateRange } from "react-day-picker";

// Re-export so consumers only need to import from "@/types"
export type { DateRange };

// ─── Theme ────────────────────────────────────────────────────────────────────

export type Theme = "dark" | "light";

// ─── Filter bar ───────────────────────────────────────────────────────────────

export type Period = "Daily" | "Weekly" | "Monthly" | "Quarterly" | "Yearly";

/** The full filter state emitted by <DashboardFilterBar onFilterChange={...} /> */
export interface FilterState {
  dateRange: DateRange | undefined;
  period: Period;
}

// ─── Stat cards ───────────────────────────────────────────────────────────────

export interface StatCardData {
  /** A React node — typically one of the DashboardIcons. */
  icon: ReactNode;
  title: string;
  /** Pre-formatted display value, e.g. "$403,120" */
  value: string;
}

// ─── Third-party integrations table ──────────────────────────────────────────

export interface Integration {
  id: string;
  /** URL of the integration's avatar/logo image. */
  logo: string;
  name: string;
  /** Category label, e.g. "CRM" | "E-commerce" | "Gateway" */
  type: string;
  /** Pre-formatted revenue string, e.g. "$4,589.90" */
  rate: string;
  usage: "High" | "Medium" | "Low";
  signal: "Excellent" | "Good" | "Moderate" | "Poor";
}

// ─── Secured assets ───────────────────────────────────────────────────────────

export interface Asset {
  id: string;
  description: string;
  secured: number;
  total: number;
}

// ─── Chart ────────────────────────────────────────────────────────────────────

export interface BarData {
  day: string;
  online: number;
  shop: number;
}
