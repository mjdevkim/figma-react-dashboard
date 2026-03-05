/**
 * DashboardIcons
 *
 * Thin wrappers around lucide-react so the rest of the codebase stays
 * decoupled from the icon library. If we ever swap libraries, only this
 * file changes — no component imports break.
 *
 * Colour convention (matches CSS custom-properties):
 *   "primary" icons  → var(--dash-text)   active nav, stat cards, bell, theme toggle
 *   "muted"   icons  → var(--dash-muted)  search, toolbar helpers, chart labels
 *
 * Note: MynaUI Icons (used in the original Figma file) and Lucide share the
 * same visual language — clean outline strokes on a 24 px grid — so the
 * rendered result is visually indistinguishable.
 */

import {
  // Sidebar / nav
  Search,
  LayoutDashboard,
  CreditCard,
  Users,
  MessageSquare,
  ShoppingBag,
  FileText,
  ChartBar,
  Workflow,
  Settings,
  CircleHelp,
  // Header / toolbar
  Calendar,
  Info,
  SlidersHorizontal,
  RotateCcw,
  Download,
  // Theme toggle
  Moon,
  Sun,
  // Notification
  Bell,
  // Shared UI primitives
  ChevronDown,   // period dropdown + location date button
  Check,         // checkbox tick in ThirdPartyIntegration
  ArrowUpRight,  // AssetCard "view details" button
  // Card-header icons (widgets that previously used raw Figma SVG paths)
  Boxes,         // ThirdPartyIntegration header
  ShieldCheck,   // SecuredAssets header
} from "lucide-react";

// ─── Shared config ────────────────────────────────────────────────────────────

const ICON_SIZE       = 16;
const ICON_STROKE     = 1.5;
const COLOR_PRIMARY   = "var(--dash-text)";
const COLOR_MUTED     = "var(--dash-muted)";

// ─── Sidebar / nav icons ──────────────────────────────────────────────────────

export function SearchIcon()     { return <Search          size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED}   />; }
export function OverviewIcon()   { return <LayoutDashboard size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function PaymentsIcon()   { return <CreditCard      size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function UsersIcon()      { return <Users           size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function MessageIcon()    { return <MessageSquare   size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function BagIcon()        { return <ShoppingBag     size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function FileIcon()       { return <FileText        size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function AnalyticsIcon()  { return <ChartBar        size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function AutomationIcon() { return <Workflow        size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function CogIcon()        { return <Settings        size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function HelpIcon()       { return <CircleHelp      size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }

// ─── Header / toolbar icons ───────────────────────────────────────────────────

export function CalendarIcon()  { return <Calendar         size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
export function InfoCircleIcon(){ return <Info             size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
export function FilterIcon()    { return <SlidersHorizontal size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
export function RefreshIcon()   { return <RotateCcw        size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
export function DownloadIcon()  { return <Download         size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
export function ChevronDownIcon(){ return <ChevronDown     size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }

// ─── Theme toggle icons ───────────────────────────────────────────────────────

export function MoonIcon() { return <Moon size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }
export function SunIcon()  { return <Sun  size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }

// ─── Notification icon ────────────────────────────────────────────────────────

export function BellIcon() { return <Bell size={ICON_SIZE + 2} strokeWidth={ICON_STROKE} color={COLOR_PRIMARY} />; }

// ─── Shared UI primitive icons ────────────────────────────────────────────────

/** Checkmark tick — used inside the Checkbox in ThirdPartyIntegration. */
export function CheckIcon()        { return <Check        size={10}            strokeWidth={2.5}        color="white"         />; }
/** Northeast arrow — used in AssetCard "view details" buttons. */
export function ArrowUpRightIcon() { return <ArrowUpRight size={ICON_SIZE - 2} strokeWidth={ICON_STROKE} color={COLOR_MUTED}   />; }

// ─── Widget card-header icons ─────────────────────────────────────────────────

/** Header icon for the Third Party Integration widget. */
export function BoxesIcon()      { return <Boxes      size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }
/** Header icon for the Secured Assets widget. */
export function ShieldCheckIcon(){ return <ShieldCheck size={ICON_SIZE} strokeWidth={ICON_STROKE} color={COLOR_MUTED} />; }