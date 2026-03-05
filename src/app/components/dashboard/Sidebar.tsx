import { useState } from "react";
import { motion } from "motion/react";

import { WiseLogo } from "./WiseLogo";
import {
  SearchIcon,
  OverviewIcon,
  PaymentsIcon,
  UsersIcon,
  MessageIcon,
  BagIcon,
  FileIcon,
  AnalyticsIcon,
  AutomationIcon,
  CogIcon,
  HelpIcon,
} from "./icons/DashboardIcons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

const MAIN_NAV: NavItem[] = [
  { id: "overview",    icon: <OverviewIcon />,    label: "Overview"   },
  { id: "payments",    icon: <PaymentsIcon />,    label: "Payments"   },
  { id: "customers",   icon: <UsersIcon />,       label: "Customers"  },
  { id: "messages",    icon: <MessageIcon />,     label: "Messages",  badge: "40" },
  { id: "products",    icon: <BagIcon />,          label: "Products"  },
  { id: "invoices",    icon: <FileIcon />,         label: "Invoices"  },
  { id: "analytics",   icon: <AnalyticsIcon />,   label: "Analytics"  },
  { id: "automation",  icon: <AutomationIcon />,  label: "Automation" },
];

const BOTTOM_NAV: NavItem[] = [
  { id: "settings", icon: <CogIcon />,  label: "Settings" },
  { id: "help",     icon: <HelpIcon />, label: "Help"     },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface NavButtonProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ item, isActive, onClick }: NavButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
      aria-current={isActive ? "page" : undefined}
      className="relative flex h-[36px] w-full items-center justify-between rounded-[4px] px-[12px] cursor-pointer text-left transition-colors"
      style={{ background: isActive ? "var(--dash-surface)" : "transparent" }}
    >
      <div className="flex gap-[9px] items-center flex-1 min-w-0">
        {item.icon}
        <span
          className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] truncate"
          style={{ color: "var(--dash-text)" }}
        >
          {item.label}
        </span>
      </div>

      {item.badge && (
        <div
          className="rounded-[4px] size-[16px] flex items-center justify-center border shrink-0"
          style={{
            background: "var(--dash-surface)",
            borderColor: "var(--dash-border)",
          }}
        >
          <span
            className="font-['Inter',sans-serif] font-normal text-[8px] leading-[12px]"
            style={{ color: "var(--dash-text)" }}
          >
            {item.badge}
          </span>
        </div>
      )}
    </motion.button>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const slideIn = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("overview");

  return (
    <div
      className="flex flex-col h-full w-[286px] overflow-hidden shrink-0"
      style={{ background: "var(--dash-bg)" }}
    >
      {/* ── Logo + wordmark ───────────────────────────────────────────── */}
      <motion.div
        className="flex items-center gap-[10px] px-[23px] pt-[24px] pb-[16px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <WiseLogo size={28} />
        <p
          className="font-['Inter',sans-serif] font-extrabold leading-[28px] text-[22px]"
          style={{ color: "var(--dash-text)" }}
        >
          WISE
        </p>
      </motion.div>

      {/* ── Main nav ──────────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col gap-[14px] px-[23px] flex-1"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Search */}
        <motion.div variants={slideIn}>
          <div
            className="flex h-[36px] items-center px-[12px] rounded-[4px] w-full cursor-pointer"
            style={{ background: "var(--dash-surface)" }}
          >
            <div className="flex gap-[8px] items-center flex-1">
              <SearchIcon />
              <span
                className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px]"
                style={{ color: "var(--dash-muted)" }}
              >
                Search
              </span>
            </div>
          </div>
        </motion.div>

        {/* Nav items */}
        {MAIN_NAV.map((item) => (
          <motion.div key={item.id} variants={slideIn}>
            <NavButton
              item={item}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Bottom nav ────────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col gap-[14px] px-[23px] pb-[40px]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {BOTTOM_NAV.map((item) => (
          <motion.div key={item.id} variants={slideIn}>
            <NavButton
              item={item}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
