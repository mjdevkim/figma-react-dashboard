/**
 * CardHeader + IconBadge
 *
 * Two focused primitives that are re-used across every dashboard widget card.
 *
 * ─── IconBadge ──────────────────────────────────────────────────────────────
 * The rounded-pill icon container that appears in card headers and stat cards.
 * Encapsulates the background, border, padding, and sizing in one place.
 *
 * ─── CardHeader ─────────────────────────────────────────────────────────────
 * The standard widget card header:
 *
 *   [ IconBadge ]  Title          [ ...actions ]
 *                  Subtitle (opt)
 *
 * Used by: GrowthRevenueChart, CustomerLocation,
 *          ThirdPartyIntegration, SecuredAssets.
 *
 * Props:
 *   icon      – ReactNode rendered inside the IconBadge
 *   title     – primary card title
 *   subtitle  – optional muted line below the title
 *   actions   – ReactNode(s) rendered on the right side (buttons, dropdowns…)
 *   bordered  – adds a bottom border, used by ThirdPartyIntegration
 */

import type { ReactNode } from "react";

// ─── IconBadge ────────────────────────────────────────────────────────────────

interface IconBadgeProps {
  children: ReactNode;
}

export function IconBadge({ children }: IconBadgeProps) {
  return (
    <div
      className="rounded-[40px] p-[9px] flex items-center justify-center border shrink-0"
      style={{ background: "var(--dash-surface)", borderColor: "var(--dash-border)" }}
    >
      {children}
    </div>
  );
}

// ─── CardHeader ───────────────────────────────────────────────────────────────

interface CardHeaderProps {
  icon: ReactNode;
  title: string;
  /** Optional muted subtitle rendered below the title. */
  subtitle?: string;
  /** Content rendered on the right side — buttons, dropdowns, etc. */
  actions?: ReactNode;
  /** Renders a bottom border. Used when the card body is a scrollable table. */
  bordered?: boolean;
}

export function CardHeader({
  icon,
  title,
  subtitle,
  actions,
  bordered = false,
}: CardHeaderProps) {
  // When a subtitle is present the left side is two lines tall, so we align
  // the right-side actions to the top. Without a subtitle everything is one
  // line and centre-alignment looks better.
  const alignment = subtitle ? "items-start" : "items-center";

  return (
    <div
      className={`flex ${alignment} justify-between px-[20px] py-[18px] shrink-0${bordered ? " border-b" : ""}`}
      style={bordered ? { borderColor: "var(--dash-border)" } : undefined}
    >
      {/* Left: icon + title + subtitle */}
      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-[12px] items-center">
          <IconBadge>{icon}</IconBadge>
          <p
            className="font-['Inter',sans-serif] font-medium leading-normal text-[16px] whitespace-nowrap"
            style={{ color: "var(--dash-text)" }}
          >
            {title}
          </p>
        </div>

        {subtitle && (
          <p
            className="font-['Inter',sans-serif] font-medium leading-normal text-[12px]"
            style={{ color: "var(--dash-muted)" }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right: actions slot */}
      {actions && (
        <div className="flex gap-[12px] items-center shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
