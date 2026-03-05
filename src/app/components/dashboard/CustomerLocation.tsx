import svgPaths from "../../../imports/svg-p8grj7qg24";
import { CalendarIcon, ChevronDownIcon } from "./icons/DashboardIcons";
import { CardHeader } from "./CardHeader";

// ─── CustomerLocation ─────────────────────────────────────────────────────────
//
// The world map uses an equirectangular projection, viewBox "0 0 415.081 273.722".
// South Korea (KR) sits at ~126.97°E, 37.56°N → SVG coords ≈ (355, 80).
// We colour the KR path directly and overlay a pulsing SVG ring marker.
// The stray floating blue overlay paths from the original Figma import have
// been removed — they were in a different coordinate space and appeared in
// the wrong location.

export function CustomerLocation() {
  return (
    <div
      className="rounded-[8px] border overflow-hidden flex flex-col"
      style={{
        background: "var(--dash-surface)",
        borderColor: "var(--dash-border)",
        width: "100%",
        minHeight: "422px",
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <CardHeader
        icon={<CalendarIcon />}
        title="Customer Location"
        subtitle="Previous week result"
        actions={
          <button
            className="h-[36px] border rounded-[4px] flex items-center gap-[8px] px-[8px] hover:opacity-80 transition-opacity"
            style={{ background: "var(--dash-surface)", borderColor: "var(--dash-border)" }}
          >
            <span
              className="font-['Inter',sans-serif] font-normal text-[12px] leading-normal whitespace-nowrap"
              style={{ color: "var(--dash-muted)" }}
            >
              Mar 21 – Mar 24
            </span>
            <ChevronDownIcon />
          </button>
        }
      />

      {/* ── World Map ───────────────────────────────────────────────────── */}
      {/* The padding-bottom % trick maintains aspect ratio as width changes */}
      <div className="px-[20px] pb-[20px] flex-1">
        <div className="relative w-full" style={{ paddingBottom: "66%" }}>
          <div className="absolute inset-0">
            <svg
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 415.081 273.722"
            >
              <defs>
                {/* Soft glow behind the KR highlight */}
                <filter id="krGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <g id="Group">
                <path d={svgPaths.p250109f0} fill="var(--dash-map-fill)" id="AD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p34a76f00} fill="var(--dash-map-fill)" id="AE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1aee9d00} fill="var(--dash-map-fill)" id="AF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1c516b80} fill="var(--dash-map-fill)" id="AG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2321d080} fill="var(--dash-map-fill)" id="AI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3dddc500} fill="var(--dash-map-fill)" id="AL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33b29200} fill="var(--dash-map-fill)" id="AM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30ca8e00} fill="var(--dash-map-fill)" id="AO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p129ec880} fill="var(--dash-map-fill)" id="AR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p14148200} fill="var(--dash-map-fill)" id="AS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a3aa500} fill="var(--dash-map-fill)" id="AT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1eacba80} fill="var(--dash-map-fill)" id="AU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p26187800} fill="var(--dash-map-fill)" id="AW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35b6980}  fill="var(--dash-map-fill)" id="AX" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p17563d00} fill="var(--dash-map-fill)" id="AZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2e9dae00} fill="var(--dash-map-fill)" id="BA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2cc73400} fill="var(--dash-map-fill)" id="BB" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2d4bf200} fill="var(--dash-map-fill)" id="BD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1b75eb00} fill="var(--dash-map-fill)" id="BE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p111e1e00} fill="var(--dash-map-fill)" id="BF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p341c7500} fill="var(--dash-map-fill)" id="BG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3d9e4f0}  fill="var(--dash-map-fill)" id="BH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p51838c0}  fill="var(--dash-map-fill)" id="BI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2d81c7f0} fill="var(--dash-map-fill)" id="BJ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3aa0c980} fill="var(--dash-map-fill)" id="BL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30c1d030} fill="var(--dash-map-fill)" id="BN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2de12270} fill="var(--dash-map-fill)" id="BO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p93ae380}  fill="var(--dash-map-fill)" id="BM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35951b00} fill="var(--dash-map-fill)" id="BQ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p10413c00} fill="var(--dash-map-fill)" id="BR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1d8c94f0} fill="var(--dash-map-fill)" id="BS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1cc74500} fill="var(--dash-map-fill)" id="BT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p13a4900}  fill="var(--dash-map-fill)" id="BV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1e812d72} fill="var(--dash-map-fill)" id="BW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p38206100} fill="var(--dash-map-fill)" id="BY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2b0e8a00} fill="var(--dash-map-fill)" id="BZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1ececb00} fill="var(--dash-map-fill)" id="CA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2cf9c900} fill="var(--dash-map-fill)" id="CC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p13caaf00} fill="var(--dash-map-fill)" id="CD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3dfc8f00} fill="var(--dash-map-fill)" id="CF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1b8f8400} fill="var(--dash-map-fill)" id="CG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p32c84e00} fill="var(--dash-map-fill)" id="CH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p224be100} fill="var(--dash-map-fill)" id="CI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2bc21a00} fill="var(--dash-map-fill)" id="CK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2b3df100} fill="var(--dash-map-fill)" id="CL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pe098f80}  fill="var(--dash-map-fill)" id="CM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2d3ee280} fill="var(--dash-map-fill)" id="CN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p34dabd00} fill="var(--dash-map-fill)" id="CO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3356fc70} fill="var(--dash-map-fill)" id="CR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2f413680} fill="var(--dash-map-fill)" id="CU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3565ec80} fill="var(--dash-map-fill)" id="CV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p38110080} fill="var(--dash-map-fill)" id="CW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a173900} fill="var(--dash-map-fill)" id="CX" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1c869880} fill="var(--dash-map-fill)" id="CY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p21b21b00} fill="var(--dash-map-fill)" id="CZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2188e880} fill="var(--dash-map-fill)" id="DE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3e41f400} fill="var(--dash-map-fill)" id="DJ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1c211c00} fill="var(--dash-map-fill)" id="DK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pd34ee80}  fill="var(--dash-map-fill)" id="DM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p364b1c00} fill="var(--dash-map-fill)" id="DO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3b8f43f0} fill="var(--dash-map-fill)" id="DZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pcc873f0}  fill="var(--dash-map-fill)" id="EC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p4adb190}  fill="var(--dash-map-fill)" id="EG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3816e200} fill="var(--dash-map-fill)" id="EE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1eafa200} fill="var(--dash-map-fill)" id="EH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1103c900} fill="var(--dash-map-fill)" id="ER" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2644dd00} fill="var(--dash-map-fill)" id="ES" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p974300}   fill="var(--dash-map-fill)" id="ET" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3db28800} fill="var(--dash-map-fill)" id="FI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p36386300} fill="var(--dash-map-fill)" id="FJ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p31ee1b00} fill="var(--dash-map-fill)" id="FK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2fb0bc80} fill="var(--dash-map-fill)" id="FM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p216ae00}  fill="var(--dash-map-fill)" id="FO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p7443600}  fill="var(--dash-map-fill)" id="FR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p29962db0} fill="var(--dash-map-fill)" id="GA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p6904580}  fill="var(--dash-map-fill)" id="GB" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p5eb95f0}  fill="var(--dash-map-fill)" id="GE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pad44f00}  fill="var(--dash-map-fill)" id="GD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p375d0600} fill="var(--dash-map-fill)" id="GF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1e6dcb00} fill="var(--dash-map-fill)" id="GG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1290cd00} fill="var(--dash-map-fill)" id="GH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p182cc00}  fill="var(--dash-map-fill)" id="GI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p6dd4e40}  fill="var(--dash-map-fill)" id="GL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p554f600}  fill="var(--dash-map-fill)" id="GM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p27b99dc0} fill="var(--dash-map-fill)" id="GN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pfd6f300}  fill="var(--dash-map-fill)" id="GO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p32e2e300} fill="var(--dash-map-fill)" id="GP" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3e5bc100} fill="var(--dash-map-fill)" id="GQ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pbc25600}  fill="var(--dash-map-fill)" id="GR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p70e8600}  fill="var(--dash-map-fill)" id="GS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1ab763c0} fill="var(--dash-map-fill)" id="GT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2ec49500} fill="var(--dash-map-fill)" id="GU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30419400} fill="var(--dash-map-fill)" id="GW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p10e262c0} fill="var(--dash-map-fill)" id="GY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pb3a6640}  fill="var(--dash-map-fill)" id="HK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2141ed00} fill="var(--dash-map-fill)" id="HM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35964d80} fill="var(--dash-map-fill)" id="HN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2aa48000} fill="var(--dash-map-fill)" id="HR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p327d0200} fill="var(--dash-map-fill)" id="HT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3d7ac40}  fill="var(--dash-map-fill)" id="HU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p23594f00} fill="var(--dash-map-fill)" id="ID" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p66c2500}  fill="var(--dash-map-fill)" id="IE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p8b84f80}  fill="var(--dash-map-fill)" id="IL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2ed0f7f0} fill="var(--dash-map-fill)" id="IM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <g id="IN">
                  <path d={svgPaths.p23274c00} fill="var(--dash-map-fill)" />
                  <path d={svgPaths.pfff2a80}  stroke="var(--dash-map-border)" strokeWidth="0.5" />
                </g>
                <path d={svgPaths.p20836600} fill="var(--dash-map-fill)" id="IO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pf058600}  fill="var(--dash-map-fill)" id="IQ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1c61a800} fill="var(--dash-map-fill)" id="IR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p176e6400} fill="var(--dash-map-fill)" id="IS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33320b00} fill="var(--dash-map-fill)" id="IT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35f1800}  fill="var(--dash-map-fill)" id="JE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3aa8b7c0} fill="var(--dash-map-fill)" id="JM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p11181fb0} fill="var(--dash-map-fill)" id="JO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2c9e7800} fill="var(--dash-map-fill)" id="JP" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1548d480} fill="var(--dash-map-fill)" id="JU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p300ae480} fill="var(--dash-map-fill)" id="KE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33bcfe00} fill="var(--dash-map-fill)" id="KG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2292bf00} fill="var(--dash-map-fill)" id="KH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p38102900} fill="var(--dash-map-fill)" id="KI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35f9b600} fill="var(--dash-map-fill)" id="KM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pd0ad500}  fill="var(--dash-map-fill)" id="KN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p175d2c00} fill="var(--dash-map-fill)" id="KP" stroke="var(--dash-map-border)" strokeWidth="0.5" />

                {/* ── South Korea: highlighted in brand blue ─────────────── */}
                <path
                  d={svgPaths.p9486af0}
                  fill="#0f62fe"
                  id="KR"
                  stroke="#0f62fe"
                  strokeWidth="0.5"
                  filter="url(#krGlow)"
                />

                <path d={svgPaths.p3c29c800} fill="var(--dash-map-fill)" id="XK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3c9ac600} fill="var(--dash-map-fill)" id="KW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pa48df80}  fill="var(--dash-map-fill)" id="KY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1774e080} fill="var(--dash-map-fill)" id="KZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p35e51f00} fill="var(--dash-map-fill)" id="LA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1d123e00} fill="var(--dash-map-fill)" id="LB" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pb70c180}  fill="var(--dash-map-fill)" id="LC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3e572230} fill="var(--dash-map-fill)" id="LI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p24823f80} fill="var(--dash-map-fill)" id="LK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1eb40e00} fill="var(--dash-map-fill)" id="LR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2b8250}   fill="var(--dash-map-fill)" id="LS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pc138a00}  fill="var(--dash-map-fill)" id="LT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p22a48370} fill="var(--dash-map-fill)" id="LU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2762d800} fill="var(--dash-map-fill)" id="LV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p24c3dd80} fill="var(--dash-map-fill)" id="LY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p24678f00} fill="var(--dash-map-fill)" id="MA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p34dcab80} fill="var(--dash-map-fill)" id="MC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p11129b80} fill="var(--dash-map-fill)" id="MD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p13664000} fill="var(--dash-map-fill)" id="MG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3c780400} fill="var(--dash-map-fill)" id="ME" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p6d64d40}  fill="var(--dash-map-fill)" id="MF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1cf9f400} fill="var(--dash-map-fill)" id="MH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1010b600} fill="var(--dash-map-fill)" id="MK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p38c24880} fill="var(--dash-map-fill)" id="ML" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p24f6df80} fill="var(--dash-map-fill)" id="MO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1ecc7200} fill="var(--dash-map-fill)" id="MM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30e5bb00} fill="var(--dash-map-fill)" id="MN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2ec1c470} fill="var(--dash-map-fill)" id="MP" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pc401080}  fill="var(--dash-map-fill)" id="MQ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pae10100}  fill="var(--dash-map-fill)" id="MR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p23247240} fill="var(--dash-map-fill)" id="MS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2eb97c00} fill="var(--dash-map-fill)" id="MT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p19f9600}  fill="var(--dash-map-fill)" id="MU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3f2e2d00} fill="var(--dash-map-fill)" id="MV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p16e4f3a0} fill="var(--dash-map-fill)" id="MW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30bbb900} fill="var(--dash-map-fill)" id="MX" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p17447600} fill="var(--dash-map-fill)" id="MY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3306ad70} fill="var(--dash-map-fill)" id="MZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3fd89300} fill="var(--dash-map-fill)" id="NA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p37128240} fill="var(--dash-map-fill)" id="NC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2fb67d00} fill="var(--dash-map-fill)" id="NE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p30a88700} fill="var(--dash-map-fill)" id="NF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33848980} fill="var(--dash-map-fill)" id="NG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3e68a00}  fill="var(--dash-map-fill)" id="NI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p298e5272} fill="var(--dash-map-fill)" id="NL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2d07b180} fill="var(--dash-map-fill)" id="NO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p34243400} fill="var(--dash-map-fill)" id="NP" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1acd120}  fill="var(--dash-map-fill)" id="NR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2c298080} fill="var(--dash-map-fill)" id="NU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p172c6400} fill="var(--dash-map-fill)" id="NZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3ca02d80} fill="var(--dash-map-fill)" id="OM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3fdc5980} fill="var(--dash-map-fill)" id="PA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p15466e00} fill="var(--dash-map-fill)" id="PE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p32b63480} fill="var(--dash-map-fill)" id="PF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p70cf480}  fill="var(--dash-map-fill)" id="PG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a16c400} fill="var(--dash-map-fill)" id="PH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p20f8e400} fill="var(--dash-map-fill)" id="PK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33154200} fill="var(--dash-map-fill)" id="PL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p260f8500} fill="var(--dash-map-fill)" id="PM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p8f059c0}  fill="var(--dash-map-fill)" id="PN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p12dfef00} fill="var(--dash-map-fill)" id="PR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p58c3f00}  fill="var(--dash-map-fill)" id="PS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1771fb00} fill="var(--dash-map-fill)" id="PT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1529da80} fill="var(--dash-map-fill)" id="PW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3895db80} fill="var(--dash-map-fill)" id="PY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p4855400}  fill="var(--dash-map-fill)" id="QA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1de0ed00} fill="var(--dash-map-fill)" id="RE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p24fb6080} fill="var(--dash-map-fill)" id="RO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3c021800} fill="var(--dash-map-fill)" id="RS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2c27a470} fill="var(--dash-map-fill)" id="RU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p23580300} fill="var(--dash-map-fill)" id="RW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2bfc9b00} fill="var(--dash-map-fill)" id="SA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2865dbc0} fill="var(--dash-map-fill)" id="SB" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p33902c00} fill="var(--dash-map-fill)" id="SC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p17770f00} fill="var(--dash-map-fill)" id="SD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a101a80} fill="var(--dash-map-fill)" id="SE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a7bba00} fill="var(--dash-map-fill)" id="SG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p304406f0} fill="var(--dash-map-fill)" id="SH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3262d280} fill="var(--dash-map-fill)" id="SI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pba3dd00}  fill="var(--dash-map-fill)" id="SJ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p27ace900} fill="var(--dash-map-fill)" id="SK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p25507580} fill="var(--dash-map-fill)" id="SL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pe1dd80}   fill="var(--dash-map-fill)" id="SM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p4854480}  fill="var(--dash-map-fill)" id="SN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pe361c00}  fill="var(--dash-map-fill)" id="SO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2baa8100} fill="var(--dash-map-fill)" id="SR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3ef8efc0} fill="var(--dash-map-fill)" id="SS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2be8a080} fill="var(--dash-map-fill)" id="ST" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p289db080} fill="var(--dash-map-fill)" id="SV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p25566000} fill="var(--dash-map-fill)" id="SX" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3ffb6b80} fill="var(--dash-map-fill)" id="SY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pda98dc0}  fill="var(--dash-map-fill)" id="SZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p31088c80} fill="var(--dash-map-fill)" id="TC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p22541280} fill="var(--dash-map-fill)" id="TD" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p36e32180} fill="var(--dash-map-fill)" id="TF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p13113800} fill="var(--dash-map-fill)" id="TG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p382c7800} fill="var(--dash-map-fill)" id="TH" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p29fdaf00} fill="var(--dash-map-fill)" id="TJ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pb7222f0}  fill="var(--dash-map-fill)" id="TK" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3353ad00} fill="var(--dash-map-fill)" id="TL" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p14868ca0} fill="var(--dash-map-fill)" id="TM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p299a0800} fill="var(--dash-map-fill)" id="TN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p13414f00} fill="var(--dash-map-fill)" id="TO" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p497d380}  fill="var(--dash-map-fill)" id="TR" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2c8d7400} fill="var(--dash-map-fill)" id="TT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2373ff00} fill="var(--dash-map-fill)" id="TV" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2315be00} fill="var(--dash-map-fill)" id="TW" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2b843a00} fill="var(--dash-map-fill)" id="TZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p236d4000} fill="var(--dash-map-fill)" id="UA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p15c44000} fill="var(--dash-map-fill)" id="UG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p4b96500}  fill="var(--dash-map-fill)" id="US" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p8db3b00}  fill="var(--dash-map-fill)" id="UY" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p21736c00} fill="var(--dash-map-fill)" id="UZ" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3b2120b2} fill="var(--dash-map-fill)" id="VA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p39aa7c80} fill="var(--dash-map-fill)" id="VC" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p27ef7300} fill="var(--dash-map-fill)" id="VE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pcf6b000}  fill="var(--dash-map-fill)" id="VG" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1a44ad00} fill="var(--dash-map-fill)" id="VI" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p2bc95b00} fill="var(--dash-map-fill)" id="VN" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3a725400} fill="var(--dash-map-fill)" id="VU" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.pfd74c00}  fill="var(--dash-map-fill)" id="WF" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p185dc780} fill="var(--dash-map-fill)" id="WS" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p1d299200} fill="var(--dash-map-fill)" id="YE" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p32119f00} fill="var(--dash-map-fill)" id="YT" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p5bdef0}   fill="var(--dash-map-fill)" id="ZA" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p3b2b4600} fill="var(--dash-map-fill)" id="ZM" stroke="var(--dash-map-border)" strokeWidth="0.5" />
                <path d={svgPaths.p7927300}  fill="var(--dash-map-fill)" id="ZW" stroke="var(--dash-map-border)" strokeWidth="0.5" />

                {/*
                  ── Pulsing location marker over South Korea ─────────────
                  Geographic centre: 126.97°E, 37.56°N
                  SVG coords (equirectangular projection):
                    cx = (126.97+180)/360 × 415.081 ≈ 355
                    cy = (90−37.56)/180  × 273.722 ≈ 80
                */}
                <g id="KR-marker">
                  <circle cx="355" cy="80" r="3" fill="none" stroke="#0f62fe" strokeWidth="1.2" opacity="0.7">
                    <animate attributeName="r"       values="3;10;3"     dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7"  dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="355" cy="80" r="2.5" fill="#0f62fe" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}