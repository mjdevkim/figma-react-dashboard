/**
 * Dashboard constants
 *
 * All magic strings, magic numbers and static datasets live here.
 * Import what you need — tree-shaking will discard the rest.
 */

import type { Period, BarData, Integration, Asset } from "../types";

import imgRectangle6 from "figma:asset/50a5063ad13c96722dfbf3373de9778b1b837a1a.png";
import imgRectangle7 from "figma:asset/5926406014832b6931387aaf9ba5a65969b48e11.png";
import imgRectangle8 from "figma:asset/9850fc794dc6d17adfe68a19c8940c8f45c0c6af.png";
import imgRectangle9 from "figma:asset/71ba2f1ac2f03d752b2149e4afaafc6c6d068d82.png";

// ─── Brand ────────────────────────────────────────────────────────────────────

/** Primary brand colour used for highlights, active states, and the logo tile. */
export const BRAND_BLUE = "#0f62fe";

/** Lighter brand accent used in chart gradients and secondary highlights. */
export const BRAND_BLUE_LIGHT = "#64b7e2";

// ─── Filter bar ───────────────────────────────────────────────────────────────

export const PERIODS: Period[] = [
  "Daily",
  "Weekly",
  "Monthly",
  "Quarterly",
  "Yearly",
];

/** Default date range shown on first render — last 8 days ending today. */
export const DEFAULT_DATE_RANGE = {
  from: new Date(2026, 1, 24), // Feb 24 2026
  to:   new Date(2026, 2,  4), // Mar  4 2026 (today)
};

// ─── Growth revenue chart ─────────────────────────────────────────────────────

export const MAX_CHART_VALUE = 6_000;

export const Y_LABELS = ["6k", "5k", "4k", "3k", "2k", "1k"] as const;

export const CHART_DATA: BarData[] = [
  { day: "Mon",  online: 3800, shop: 4900 },
  { day: "Tue",  online: 2200, shop: 5600 },
  { day: "Wed",  online: 2300, shop: 1300 },
  { day: "Thur", online: 4200, shop: 1100 },
  { day: "Fri",  online: 3800, shop: 3100 },
  { day: "Sat",  online: 6000, shop: 4300 },
  { day: "Sun",  online: 4500, shop: 4800 },
];

export const CHART_LEGEND = [
  { color: BRAND_BLUE,       label: "Online" },
  { color: BRAND_BLUE_LIGHT, label: "Shop"   },
] as const;

// ─── Integrations table ───────────────────────────────────────────────────────

export const INTEGRATIONS: Integration[] = [
  { id: "zapier",    logo: imgRectangle6, name: "Zapier",    type: "CRM",        rate: "$4,589.90", usage: "High",   signal: "Good"      },
  { id: "paystack",  logo: imgRectangle7, name: "Paystack",  type: "E-commerce", rate: "$315.56",   usage: "Low",    signal: "Excellent" },
  { id: "paypal",    logo: imgRectangle8, name: "PayPal",    type: "CRM",        rate: "$1,234.56", usage: "Medium", signal: "Moderate"  },
  { id: "tangerine", logo: imgRectangle9, name: "Tangerine", type: "Gateway",    rate: "$678.23",   usage: "Low",    signal: "Good"      },
];

export const INTEGRATION_COLUMNS = [
  "Account",
  "Type",
  "Rate",
  "Usage",
  "Signal",
] as const;

// ─── Secured assets ───────────────────────────────────────────────────────────

export const ASSETS: Asset[] = [
  { id: "a1", description: "Ensures all users have passwords that is fully secure", secured: 50,  total: 219 },
  { id: "a2", description: "Ensures all users have passwords that is fully secure", secured: 120, total: 219 },
  { id: "a3", description: "Ensures all users have passwords that is fully secure", secured: 89,  total: 219 },
  { id: "a4", description: "Ensures all users have passwords that is fully secure", secured: 200, total: 219 },
];
