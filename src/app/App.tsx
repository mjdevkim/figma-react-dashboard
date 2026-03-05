import { useRef } from "react";
import { motion } from "motion/react";

import { ThemeProvider } from "./context/ThemeContext";
import { MoonIcon, UsersIcon, BagIcon } from "./components/dashboard/icons/DashboardIcons";

// Dashboard components — imported from the barrel
import {
  Sidebar,
  DashboardHeader,
  DashboardFilterBar,
  StatCard,
  GrowthRevenueChart,
  CustomerLocation,
  ThirdPartyIntegration,
  SecuredAssets,
} from "./components/dashboard";

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeInUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

// ─── Stat card data ───────────────────────────────────────────────────────────
//
// In a real app, replace these with data fetched from your API
// (e.g. via React Query / SWR).

const STAT_CARDS = [
  { icon: <MoonIcon />,  title: "Total Revenue",   value: "$403,120" },
  { icon: <UsersIcon />, title: "Total Customers",  value: "33,920"   },
  { icon: <BagIcon />,   title: "Total Products",   value: "$43,620"  },
] as const;

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  // ThemeProvider applies / removes the `light-theme` class on this element.
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider rootRef={rootRef}>
      <div
        ref={rootRef}
        className="flex h-screen w-screen overflow-hidden"
        style={{ background: "var(--dash-bg)" }}
      >
        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <Sidebar />

        {/* ── Main content ────────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-1 min-w-0 border-l border-t rounded-tl-[24px] overflow-hidden"
          style={{ borderColor: "var(--dash-border)" }}
        >
          {/* Top header */}
          <DashboardHeader />

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto">
            {/* Filter bar
                Connect onFilterChange to your data-fetching layer, e.g.:
                onFilterChange={({ dateRange, period }) => setQueryParams({ dateRange, period })}
            */}
            <DashboardFilterBar
              onFilterChange={(state) => {
                // TODO: wire to your API / React Query refetch
                void state;
              }}
              onDownload={(state) => {
                // TODO: trigger PDF/CSV export
                void state;
              }}
            />

            {/* ── Stat Cards ────────────────────────────────────────── */}
            <motion.div
              className="flex gap-[20px] px-[24px] pb-[20px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {STAT_CARDS.map(({ icon, title, value }) => (
                <motion.div
                  key={title}
                  className="flex-1 min-w-0"
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <StatCard icon={icon} title={title} value={value} />
                </motion.div>
              ))}
            </motion.div>

            {/* ── Charts Row ────────────────────────────────────────── */}
            <motion.div
              className="flex gap-[20px] px-[24px] pb-[20px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                style={{ flex: "1.5 0 0", minWidth: 0 }}
                variants={fadeInUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <GrowthRevenueChart />
              </motion.div>
              <motion.div
                style={{ flex: "1 0 0", minWidth: 0 }}
                variants={fadeInUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <CustomerLocation />
              </motion.div>
            </motion.div>

            {/* ── Bottom Row ────────────────────────────────────────── */}
            <motion.div
              className="flex gap-[20px] px-[24px] pb-[24px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                style={{ flex: "1.5 0 0", minWidth: 0 }}
                variants={fadeInUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <ThirdPartyIntegration
                  onSelectionChange={(ids) => {
                    // TODO: wire to bulk-action API
                    void ids;
                  }}
                />
              </motion.div>
              <motion.div
                style={{ flex: "1 0 0", minWidth: 0 }}
                variants={fadeInUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <SecuredAssets />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
