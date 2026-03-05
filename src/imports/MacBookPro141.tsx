import clsx from "clsx";
import svgPaths from "./svg-p8grj7qg24";
import imgRectangle6 from "figma:asset/50a5063ad13c96722dfbf3373de9778b1b837a1a.png";
import imgRectangle7 from "figma:asset/5926406014832b6931387aaf9ba5a65969b48e11.png";
import imgRectangle8 from "figma:asset/9850fc794dc6d17adfe68a19c8940c8f45c0c6af.png";
import imgRectangle9 from "figma:asset/71ba2f1ac2f03d752b2149e4afaafc6c6d068d82.png";

function SecurityWidget({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#121212] relative rounded-[6px] shrink-0 w-[200px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper10Props = {
  additionalClassNames?: string;
};

function Wrapper10({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper10Props>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-100%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        {children}
      </svg>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[10px] items-center p-[9px] relative">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[9px] h-full items-center px-[8px] relative">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("h-[42px] relative", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#1d1d20] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[222px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, children, additionalClassNames = "" }: React.PropsWithChildren<Text6Props>) {
  return (
    <div className={clsx("-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[20px] py-[18px] top-0", additionalClassNames)}>
      <Title>{children}</Title>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text, children }: React.PropsWithChildren<Text5Props>) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          {children}
        </svg>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type LinkProps = {
  additionalClassNames?: string;
};

function Link({ children, additionalClassNames = "" }: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("h-[36px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">{children}</div>
    </Wrapper5>
  );
}
type BtnSmProps = {
  additionalClassNames?: string;
};

function BtnSm({ children, additionalClassNames = "" }: React.PropsWithChildren<BtnSmProps>) {
  return (
    <div className={clsx("h-[36px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper6>{children}</Wrapper6>
    </div>
  );
}

function Vector1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          {children}
        </svg>
      </div>
    </div>
  );
}

function RoundedBtn({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#121212] relative rounded-[40px] shrink-0">
      <Wrapper7>{children}</Wrapper7>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text, children }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <RoundedBtn>{children}</RoundedBtn>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <Vector1>{children}</Vector1>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text, children }: React.PropsWithChildren<Text3Props>) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <BtnSm additionalClassNames="bg-[#121212]">{children}</BtnSm>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-end not-italic relative shrink-0 whitespace-nowrap">
        <p className="leading-[18px] relative shrink-0 text-[18px] text-white">{"50"}</p>
        <p className="leading-[12px] relative shrink-0 text-[#bababa] text-[10px]">{"/219 assets"}</p>
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Btn sm">
        <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[9px] items-center justify-center px-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Up">
              <div className="absolute inset-[27.08%]" data-name="Vector">
                <div className="absolute inset-[-5.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1667 10.1667">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <Wrapper5 additionalClassNames="shrink-0">
      <div className="content-stretch flex gap-[8px] h-full items-center p-[8px] relative">
        <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
          <div aria-hidden="true" className="absolute border border-[#aa68ff] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <Wrapper8>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check">
              <Vector />
            </div>
          </Wrapper8>
        </div>
      </div>
    </Wrapper5>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper2>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <div className="bg-[#121212] flex-[1_0_0] h-[42px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
          <div className="h-0 relative shrink-0 w-[616px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 1">
                <path d="M0 0.5H616" id="Vector 1" stroke="var(--stroke-0, #1D1D20)" strokeDasharray="6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <Text3 text={text}>
      <Calendar />
    </Text3>
  );
}

function InfoCircle() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <Vector1>
        <path d={svgPaths.p18961b00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
      </Vector1>
      <div className="absolute inset-[33.33%_47.92%]" data-name="Vector">
        <div className="absolute inset-[-7.5%_-60%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.83333 7.66667">
            <path d={svgPaths.p3f464a00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper6>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">{text}</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-10%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
              <path d="M0.5 0.5L5.5 5.5L10.5 0.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper6>
  );
}

function Calendar() {
  return (
    <Wrapper1>
      <path d={svgPaths.p2280b400} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
    </Wrapper1>
  );
}

function Bag() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-3.33%_-4.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6672 16">
            <path d={svgPaths.p38a1da00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[18.7%_12.5%_18.75%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.5097">
            <path d={svgPaths.p1a36ad00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type BadgeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText({ text, additionalClassNames = "" }: BadgeTextProps) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[16px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-white whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TableCellHelperProps = {
  showCheckbox: boolean;
  showImage: boolean;
  showTitle: boolean;
  label: string;
};

function TableCellHelper({ showCheckbox, showImage, showTitle, label }: TableCellHelperProps) {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center p-[8px] relative">
      {showCheckbox && <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[18px]" showIcon={false} />}
      {showImage && <CompanyLogo className="relative shrink-0 size-[18px]" />}
      {showTitle && <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{label}</p>}
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute bottom-1/4 left-[20.77%] right-[20.83%] top-1/4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6798 10">
        <path d={svgPaths.p1bc74b80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function ToggleButtonSunSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[9.38%_9.38%_9.36%_9.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.2533">
          <path d={svgPaths.p214b0500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute left-[11px] size-[16px]", additionalClassNames)}>
      <Wrapper9>
        <g filter="url(#filter0_f_1_2060)" id="Ellipse 1">
          <circle cx="24" cy="24" fill="url(#paint0_radial_1_2060)" fillOpacity="0.8" r="8" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_f_1_2060" width="48" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_2060" stdDeviation="8" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(24 24) rotate(90) scale(8)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2060" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D6D6D6" />
          </radialGradient>
        </defs>
      </Wrapper9>
    </div>
  );
}

function MoonSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2502 16.2499">
          <path d={svgPaths.p336dab80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper7>
      <MoonSolid />
      <Helper1 additionalClassNames="top-[-11px]" />
      <Helper1 additionalClassNames="top-[30px]" />
    </Wrapper7>
  );
}
type ToggleButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function ToggleButton({ className, property1 = "Default" }: ToggleButtonProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "bg-[#0a0a0a] relative rounded-[50px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center overflow-clip p-[2px] relative">
          {isDefault && (
            <div className="bg-[#121212] relative rounded-[40px] shrink-0" data-name="Rounded Btn">
              <Helper />
            </div>
          )}
          <button className="cursor-pointer relative rounded-[40px] shrink-0" data-name="Rounded Btn">
            <Wrapper7>
              {isDefault && <ToggleButtonSunSolid />}
              {isVariant2 && <MoonSolid />}
            </Wrapper7>
          </button>
          {isVariant2 && (
            <RoundedBtn>
              <ToggleButtonSunSolid />
              <Helper1 additionalClassNames="top-[-11px]" />
              <Helper1 additionalClassNames="top-[30px]" />
            </RoundedBtn>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}
type CompanyLogoProps = {
  className?: string;
  property1?: "Rectangle 6" | "Rectangle 7" | "Rectangle 8" | "Rectangle 9";
};

function CompanyLogo({ className, property1 = "Rectangle 6" }: CompanyLogoProps) {
  return (
    <div className={className || "relative size-[18px]"}>
      <div className="absolute inset-0 rounded-[20px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={property1 === "Rectangle 9" ? imgRectangle9 : property1 === "Rectangle 8" ? imgRectangle8 : property1 === "Rectangle 7" ? imgRectangle7 : imgRectangle6} />
      </div>
    </div>
  );
}
type CheckboxProps = {
  className?: string;
  property1?: "Default" | "filled";
  showIcon?: boolean;
};

function Checkbox({ className, property1 = "Default", showIcon = true }: CheckboxProps) {
  const isFilled = property1 === "filled";
  return (
    <div className={className || `relative rounded-[4px] size-[18px] ${isFilled ? "bg-[#9747ff]" : "bg-white"}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[5px] ${isFilled ? "border-[#aa68ff]" : "border-[#e6e6e6]"}`} />
      <Wrapper8>
        {property1 === "Default" && showIcon && (
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check">
            <Vector />
          </div>
        )}
        {isFilled && showIcon && (
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check">
            <Vector />
          </div>
        )}
      </Wrapper8>
    </div>
  );
}
type TableCellProps = {
  className?: string;
  label?: string;
  property1?: "Default" | "Variant2";
  showCheckbox?: boolean;
  showImage?: boolean;
  showTitle?: boolean;
};

function TableCell({ className, label = "Zapier", property1 = "Default", showCheckbox = true, showImage = true, showTitle = true }: TableCellProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[42px] relative ${isVariant2 ? "" : "bg-[#121212]"}`}>
      <div aria-hidden={isVariant2 ? "true" : undefined} className={isVariant2 ? "absolute border-[#1d1d20] border-b border-solid inset-0 pointer-events-none" : "flex flex-row items-center size-full"}>
        {property1 === "Default" && <TableCellHelper showCheckbox={showCheckbox} showImage={showImage} showTitle={showTitle} label={label} />}
      </div>
      {isVariant2 && (
        <div className="flex flex-row items-center size-full">
          <TableCellHelper showCheckbox={showCheckbox} showImage={showImage} showTitle={showTitle} label={label} />
        </div>
      )}
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="MacBook Pro 14' - 1">
      <div className="-translate-y-1/2 absolute bg-[#0a0a0a] h-[982px] left-0 overflow-clip top-1/2 w-[286px]" data-name="Sidebar">
        <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[23px] top-[75px] w-[240px]">
          <div className="bg-[#121212] content-stretch flex h-[36px] items-center justify-between px-[12px] relative rounded-[4px] shrink-0 w-[240px]" data-name="link">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search">
                <div className="absolute inset-[16.67%_16.78%_16.67%_16.67%]" data-name="Vector">
                  <div className="absolute inset-[-3.75%_-3.76%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3108 14.3333">
                      <path d={svgPaths.p3900480} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#bababa] text-[14px] whitespace-nowrap">Search</p>
            </div>
            <BadgeText text="2" additionalClassNames="bg-[#1d1d20]" />
          </div>
          <Link additionalClassNames="bg-[#121212] rounded-[4px] w-[240px]">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="line-chart">
                <Vector1>
                  <path d={svgPaths.p1e777700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </Vector1>
                <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
                  <div className="absolute inset-[-15%_-7.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66667 4.33333">
                      <path d={svgPaths.p3772ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="payments">
                <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-4.29%_-3.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12.6667">
                      <path d={svgPaths.p15239900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Payments</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <Users />
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="message">
                <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-3.33%_-3%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6667 16">
                      <path d={svgPaths.p2109a400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Messages</p>
            </div>
            <BadgeText text="40" additionalClassNames="bg-[#121212]" />
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <Bag />
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="file">
                <div className="absolute inset-[12.5%_21.88%]" data-name="Vector">
                  <div className="absolute inset-[-3.33%_-4.44%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 16">
                      <path d={svgPaths.p26c74050} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Invoice</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="analytics">
                <div className="absolute inset-[14.58%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-3.53%_-3.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.1667">
                      <path d={svgPaths.p18b41480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <Wrapper1>
                <path d={svgPaths.p30e78800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </Wrapper1>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Automation</p>
            </div>
          </Link>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[14px] items-start left-1/2 top-[872px] w-[240px]">
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="cog">
                <Vector1>
                  <path d={svgPaths.p2ed81700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </Vector1>
                <div className="absolute inset-[39.58%]" data-name="Vector">
                  <div className="absolute inset-[-12%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.16667 5.16667">
                      <path d={svgPaths.p27d300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
            </div>
          </Link>
          <Link additionalClassNames="w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="support">
                <Vector1>
                  <path d={svgPaths.p18961b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </Vector1>
                <div className="absolute inset-1/4" data-name="Vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                      <path d={svgPaths.p16b29a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Help</p>
            </div>
          </Link>
        </div>
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[28px] left-[23px] not-italic text-[22px] text-white top-[24px] whitespace-nowrap">WISE</p>
      </div>
      <div className="absolute bg-[#0a0a0a] border border-[#1d1d20] border-solid h-[982px] left-[286px] rounded-tl-[24px] rounded-tr-[24px] top-0 w-[1226px]" data-name="Dashboard Main">
        <div className="absolute content-stretch flex flex-col gap-[20px] h-[877px] items-start left-[-1px] top-[99px] w-[1202px]" data-name="Body">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
                <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <div className="bg-[#0a0a0a] h-[36px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Btn sm">
                    <Wrapper6>
                      <Calendar />
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Mar 21 - Mar 24</p>
                    </Wrapper6>
                  </div>
                  <div className="bg-[#0a0a0a] h-[36px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Btn sm">
                    <div aria-hidden="true" className="absolute border-[#1d1d20] border-l border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
                    <Text text="Monthly" />
                  </div>
                </div>
                <BtnSm additionalClassNames="bg-[#0a0a0a]">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="download">
                    <div className="absolute inset-[18.75%_16.67%_16.67%_16.67%]" data-name="Vector">
                      <div className="absolute inset-[-3.87%_-3.75%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 13.9167">
                          <path d={svgPaths.p1a8fb780} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Mar 21 - Mar 24</p>
                </BtnSm>
              </div>
            </div>
          </div>
          <Wrapper3>
            <Wrapper10 additionalClassNames="bg-[#121212] h-[130px] w-[372px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] h-[130px] items-start left-1/2 px-[20px] py-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-1/2 w-[372px]">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="bg-[#121212] relative rounded-[40px] shrink-0" data-name="Rounded Btn">
                      <Helper />
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Total Revenue
                    </p>
                  </div>
                  <InfoCircle />
                </div>
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  $403,120
                </p>
              </div>
            </Wrapper10>
            <Wrapper10 additionalClassNames="bg-[#121212] h-[130px] w-[372px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] h-[130px] items-start left-1/2 px-[20px] py-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-1/2 w-[372px]">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <Text4 text="Total Customers">
                    <Users />
                    <Helper1 additionalClassNames="top-[-11px]" />
                    <Helper1 additionalClassNames="top-[30px]" />
                  </Text4>
                  <InfoCircle />
                </div>
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  33,920
                </p>
              </div>
            </Wrapper10>
            <Wrapper10 additionalClassNames="bg-[#121212] h-[130px] w-[372px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] h-[130px] items-start left-1/2 px-[20px] py-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-1/2 w-[372px]">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <Text4 text="Total Products">
                    <Bag />
                    <Helper1 additionalClassNames="top-[-11px]" />
                    <Helper1 additionalClassNames="top-[30px]" />
                  </Text4>
                  <InfoCircle />
                </div>
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  $43,620
                </p>
              </div>
            </Wrapper10>
          </Wrapper3>
          <Wrapper3>
            <Wrapper10 additionalClassNames="bg-[#121212] h-[422px] w-[684px]">
              <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 px-[20px] py-[18px] top-0 w-[684px]">
                <Title>
                  <Text1 text="Growth Revenue Chart" />
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] w-full">Previous week results</p>
                </Title>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <BtnSm additionalClassNames="bg-[#121212]">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="filter">
                      <div className="absolute inset-[29.17%_18.75%]" data-name="Vector">
                        <div className="absolute inset-[-6%_-4%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9.33333">
                            <path d={svgPaths.p33aef080} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Filter</p>
                  </BtnSm>
                  <BtnSm additionalClassNames="bg-[#121212]">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="refresh-alt">
                      <div className="absolute inset-[12.5%_12.5%_53.75%_14.58%]" data-name="Vector">
                        <div className="absolute inset-[-7.41%_-3.43%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5835 7.75004">
                            <path d={svgPaths.p1a42ce00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[16.25%_14.58%_12.5%_12.5%]" data-name="Vector">
                        <div className="absolute inset-[-3.51%_-3.43%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5835 15.25">
                            <path d={svgPaths.p6a37540} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[65%_12.5%_16.25%_68.7%]" data-name="Vector">
                        <div className="absolute inset-[-13.33%_-13.3%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.75917 4.75">
                            <path d={svgPaths.pdcec2a0} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BtnSm>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[11px] top-[123px] w-[682px]">
                <Text2 text="6k" />
                <Text2 text="5k" />
                <Text2 text="4k" />
                <Text2 text="3k" />
                <Text2 text="2k" />
                <Text2 text="1k" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[91px] top-[179px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[135px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[172px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Mon
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[171px] top-[149px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[81px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[202px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Tue
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[250px] top-[271px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[80px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[45px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Wed
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[333px] top-[200px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[151px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[41px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Thur
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[410px] top-[216px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[135px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[111px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Fri
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[482px] top-[135px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#0f62fe] from-[40.041%] h-[216px] rounded-[4px] shrink-0 to-[#91b7ff] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#64b7e2] from-[13.663%] h-[156px] rounded-[4px] shrink-0 to-[#add9ef] to-[116.86%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Sat
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[558px] top-[179px] w-[38px]">
                <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#222] from-[40.041%] h-[163px] rounded-[4px] shrink-0 to-[#1c1c1c] to-[107.26%] w-[18px]" />
                  <div className="bg-gradient-to-b from-[#222] from-[40.041%] h-[172px] rounded-[4px] shrink-0 to-[#1c1c1c] to-[107.26%] w-[18px]" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#bababa] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Sun
                </p>
              </div>
              <div className="absolute content-stretch flex gap-[12px] items-center right-[20px] top-[62px]">
                <Text5 text="Online">
                  <circle cx="5" cy="5" fill="var(--fill-0, #0F62FE)" id="Ellipse 4" r="5" />
                </Text5>
                <Text5 text="Shop">
                  <circle cx="5" cy="5" fill="var(--fill-0, #64B7E2)" id="Ellipse 4" r="5" />
                </Text5>
              </div>
            </Wrapper10>
            <Wrapper10 additionalClassNames="bg-[#121212] h-[422px] w-[452px]">
              <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 px-[20px] py-[18px] top-0 w-[452px]">
                <Title>
                  <Text1 text="Customer Location" />
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#bababa] text-[12px] w-full">Previous week result</p>
                </Title>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="bg-[#121212] h-[36px] relative rounded-[4px] shrink-0" data-name="Btn sm">
                    <div aria-hidden="true" className="absolute border border-[#1d1d20] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <Text text="Mar 21 - Mar 24" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute h-[273px] left-[calc(50%+0.5px)] top-[102px] w-[415px]" data-name="World">
                <div className="absolute inset-[0_0.01%_0_0.11%]" data-name="Group">
                  <div className="absolute inset-[0_0_-0.17%_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415.081 273.722">
                      <g id="Group">
                        <path d={svgPaths.p250109f0} fill="var(--fill-0, #CCCCCC)" id="AD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p34a76f00} fill="var(--fill-0, #CCCCCC)" id="AE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1aee9d00} fill="var(--fill-0, #CCCCCC)" id="AF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1c516b80} fill="var(--fill-0, #CCCCCC)" id="AG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2321d080} fill="var(--fill-0, #CCCCCC)" id="AI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3dddc500} fill="var(--fill-0, #CCCCCC)" id="AL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33b29200} fill="var(--fill-0, #CCCCCC)" id="AM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30ca8e00} fill="var(--fill-0, #CCCCCC)" id="AO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p129ec880} fill="var(--fill-0, #CCCCCC)" id="AR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p14148200} fill="var(--fill-0, #CCCCCC)" id="AS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a3aa500} fill="var(--fill-0, #CCCCCC)" id="AT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1eacba80} fill="var(--fill-0, #CCCCCC)" id="AU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p26187800} fill="var(--fill-0, #CCCCCC)" id="AW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35b6980} fill="var(--fill-0, #CCCCCC)" id="AX" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p17563d00} fill="var(--fill-0, #CCCCCC)" id="AZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2e9dae00} fill="var(--fill-0, #CCCCCC)" id="BA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2cc73400} fill="var(--fill-0, #CCCCCC)" id="BB" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2d4bf200} fill="var(--fill-0, #CCCCCC)" id="BD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1b75eb00} fill="var(--fill-0, #CCCCCC)" id="BE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p111e1e00} fill="var(--fill-0, #CCCCCC)" id="BF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p341c7500} fill="var(--fill-0, #CCCCCC)" id="BG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3d9e4f0} fill="var(--fill-0, #CCCCCC)" id="BH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p51838c0} fill="var(--fill-0, #CCCCCC)" id="BI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2d81c7f0} fill="var(--fill-0, #CCCCCC)" id="BJ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3aa0c980} fill="var(--fill-0, #CCCCCC)" id="BL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30c1d030} fill="var(--fill-0, #CCCCCC)" id="BN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2de12270} fill="var(--fill-0, #CCCCCC)" id="BO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p93ae380} fill="var(--fill-0, #CCCCCC)" id="BM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35951b00} fill="var(--fill-0, #CCCCCC)" id="BQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p10413c00} fill="var(--fill-0, #CCCCCC)" id="BR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1d8c94f0} fill="var(--fill-0, #CCCCCC)" id="BS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1cc74500} fill="var(--fill-0, #CCCCCC)" id="BT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p13a4900} fill="var(--fill-0, #CCCCCC)" id="BV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1e812d72} fill="var(--fill-0, #CCCCCC)" id="BW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p38206100} fill="var(--fill-0, #CCCCCC)" id="BY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2b0e8a00} fill="var(--fill-0, #CCCCCC)" id="BZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1ececb00} fill="var(--fill-0, #CCCCCC)" id="CA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2cf9c900} fill="var(--fill-0, #CCCCCC)" id="CC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p13caaf00} fill="var(--fill-0, #CCCCCC)" id="CD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3dfc8f00} fill="var(--fill-0, #CCCCCC)" id="CF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1b8f8400} fill="var(--fill-0, #CCCCCC)" id="CG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p32c84e00} fill="var(--fill-0, #CCCCCC)" id="CH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p224be100} fill="var(--fill-0, #CCCCCC)" id="CI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2bc21a00} fill="var(--fill-0, #CCCCCC)" id="CK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2b3df100} fill="var(--fill-0, #CCCCCC)" id="CL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pe098f80} fill="var(--fill-0, #CCCCCC)" id="CM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2d3ee280} fill="var(--fill-0, #CCCCCC)" id="CN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p34dabd00} fill="var(--fill-0, #CCCCCC)" id="CO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3356fc70} fill="var(--fill-0, #CCCCCC)" id="CR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2f413680} fill="var(--fill-0, #CCCCCC)" id="CU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3565ec80} fill="var(--fill-0, #CCCCCC)" id="CV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p38110080} fill="var(--fill-0, #CCCCCC)" id="CW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a173900} fill="var(--fill-0, #CCCCCC)" id="CX" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1c869880} fill="var(--fill-0, #CCCCCC)" id="CY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p21b21b00} fill="var(--fill-0, #CCCCCC)" id="CZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2188e880} fill="var(--fill-0, #CCCCCC)" id="DE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3e41f400} fill="var(--fill-0, #CCCCCC)" id="DJ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1c211c00} fill="var(--fill-0, #CCCCCC)" id="DK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pd34ee80} fill="var(--fill-0, #CCCCCC)" id="DM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p364b1c00} fill="var(--fill-0, #CCCCCC)" id="DO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3b8f43f0} fill="var(--fill-0, #CCCCCC)" id="DZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pcc873f0} fill="var(--fill-0, #CCCCCC)" id="EC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p4adb190} fill="var(--fill-0, #CCCCCC)" id="EG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3816e200} fill="var(--fill-0, #CCCCCC)" id="EE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1eafa200} fill="var(--fill-0, #CCCCCC)" id="EH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1103c900} fill="var(--fill-0, #CCCCCC)" id="ER" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2644dd00} fill="var(--fill-0, #CCCCCC)" id="ES" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p974300} fill="var(--fill-0, #CCCCCC)" id="ET" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3db28800} fill="var(--fill-0, #CCCCCC)" id="FI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p36386300} fill="var(--fill-0, #CCCCCC)" id="FJ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p31ee1b00} fill="var(--fill-0, #CCCCCC)" id="FK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2fb0bc80} fill="var(--fill-0, #CCCCCC)" id="FM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p216ae00} fill="var(--fill-0, #CCCCCC)" id="FO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p7443600} fill="var(--fill-0, #CCCCCC)" id="FR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p29962db0} fill="var(--fill-0, #CCCCCC)" id="GA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p6904580} fill="var(--fill-0, #CCCCCC)" id="GB" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p5eb95f0} fill="var(--fill-0, #CCCCCC)" id="GE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pad44f00} fill="var(--fill-0, #CCCCCC)" id="GD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p375d0600} fill="var(--fill-0, #CCCCCC)" id="GF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1e6dcb00} fill="var(--fill-0, #CCCCCC)" id="GG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1290cd00} fill="var(--fill-0, #CCCCCC)" id="GH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p182cc00} fill="var(--fill-0, #CCCCCC)" id="GI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p6dd4e40} fill="var(--fill-0, #CCCCCC)" id="GL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p554f600} fill="var(--fill-0, #CCCCCC)" id="GM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p27b99dc0} fill="var(--fill-0, #CCCCCC)" id="GN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pfd6f300} fill="var(--fill-0, #CCCCCC)" id="GO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p32e2e300} fill="var(--fill-0, #CCCCCC)" id="GP" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3e5bc100} fill="var(--fill-0, #CCCCCC)" id="GQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pbc25600} fill="var(--fill-0, #CCCCCC)" id="GR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p70e8600} fill="var(--fill-0, #CCCCCC)" id="GS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1ab763c0} fill="var(--fill-0, #CCCCCC)" id="GT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2ec49500} fill="var(--fill-0, #CCCCCC)" id="GU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30419400} fill="var(--fill-0, #CCCCCC)" id="GW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p10e262c0} fill="var(--fill-0, #CCCCCC)" id="GY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pb3a6640} fill="var(--fill-0, #CCCCCC)" id="HK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2141ed00} fill="var(--fill-0, #CCCCCC)" id="HM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35964d80} fill="var(--fill-0, #CCCCCC)" id="HN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2aa48000} fill="var(--fill-0, #CCCCCC)" id="HR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p327d0200} fill="var(--fill-0, #CCCCCC)" id="HT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3d7ac40} fill="var(--fill-0, #CCCCCC)" id="HU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p23594f00} fill="var(--fill-0, #CCCCCC)" id="ID" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p66c2500} fill="var(--fill-0, #CCCCCC)" id="IE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p8b84f80} fill="var(--fill-0, #CCCCCC)" id="IL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2ed0f7f0} fill="var(--fill-0, #CCCCCC)" id="IM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <g id="IN">
                          <path d={svgPaths.p23274c00} fill="var(--fill-0, #CCCCCC)" />
                          <path d={svgPaths.pfff2a80} stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        </g>
                        <path d={svgPaths.p20836600} fill="var(--fill-0, #CCCCCC)" id="IO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pf058600} fill="var(--fill-0, #CCCCCC)" id="IQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1c61a800} fill="var(--fill-0, #CCCCCC)" id="IR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p176e6400} fill="var(--fill-0, #CCCCCC)" id="IS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33320b00} fill="var(--fill-0, #CCCCCC)" id="IT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35f1800} fill="var(--fill-0, #CCCCCC)" id="JE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3aa8b7c0} fill="var(--fill-0, #CCCCCC)" id="JM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p11181fb0} fill="var(--fill-0, #CCCCCC)" id="JO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2c9e7800} fill="var(--fill-0, #CCCCCC)" id="JP" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1548d480} fill="var(--fill-0, #CCCCCC)" id="JU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p300ae480} fill="var(--fill-0, #CCCCCC)" id="KE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33bcfe00} fill="var(--fill-0, #CCCCCC)" id="KG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2292bf00} fill="var(--fill-0, #CCCCCC)" id="KH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p38102900} fill="var(--fill-0, #CCCCCC)" id="KI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35f9b600} fill="var(--fill-0, #CCCCCC)" id="KM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pd0ad500} fill="var(--fill-0, #CCCCCC)" id="KN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p175d2c00} fill="var(--fill-0, #CCCCCC)" id="KP" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p9486af0} fill="var(--fill-0, #CCCCCC)" id="KR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3c29c800} fill="var(--fill-0, #CCCCCC)" id="XK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3c9ac600} fill="var(--fill-0, #CCCCCC)" id="KW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pa48df80} fill="var(--fill-0, #CCCCCC)" id="KY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1774e080} fill="var(--fill-0, #CCCCCC)" id="KZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p35e51f00} fill="var(--fill-0, #CCCCCC)" id="LA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1d123e00} fill="var(--fill-0, #CCCCCC)" id="LB" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pb70c180} fill="var(--fill-0, #CCCCCC)" id="LC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3e572230} fill="var(--fill-0, #CCCCCC)" id="LI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p24823f80} fill="var(--fill-0, #CCCCCC)" id="LK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1eb40e00} fill="var(--fill-0, #CCCCCC)" id="LR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2b8250} fill="var(--fill-0, #CCCCCC)" id="LS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pc138a00} fill="var(--fill-0, #CCCCCC)" id="LT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p22a48370} fill="var(--fill-0, #CCCCCC)" id="LU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2762d800} fill="var(--fill-0, #CCCCCC)" id="LV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p24c3dd80} fill="var(--fill-0, #CCCCCC)" id="LY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p24678f00} fill="var(--fill-0, #CCCCCC)" id="MA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p34dcab80} fill="var(--fill-0, #CCCCCC)" id="MC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p11129b80} fill="var(--fill-0, #CCCCCC)" id="MD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p13664000} fill="var(--fill-0, #CCCCCC)" id="MG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3c780400} fill="var(--fill-0, #CCCCCC)" id="ME" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p6d64d40} fill="var(--fill-0, #CCCCCC)" id="MF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1cf9f400} fill="var(--fill-0, #CCCCCC)" id="MH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1010b600} fill="var(--fill-0, #CCCCCC)" id="MK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p38c24880} fill="var(--fill-0, #CCCCCC)" id="ML" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p24f6df80} fill="var(--fill-0, #CCCCCC)" id="MO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1ecc7200} fill="var(--fill-0, #CCCCCC)" id="MM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30e5bb00} fill="var(--fill-0, #CCCCCC)" id="MN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2ec1c470} fill="var(--fill-0, #CCCCCC)" id="MP" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pc401080} fill="var(--fill-0, #CCCCCC)" id="MQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pae10100} fill="var(--fill-0, #CCCCCC)" id="MR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p23247240} fill="var(--fill-0, #CCCCCC)" id="MS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2eb97c00} fill="var(--fill-0, #CCCCCC)" id="MT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p19f9600} fill="var(--fill-0, #CCCCCC)" id="MU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3f2e2d00} fill="var(--fill-0, #CCCCCC)" id="MV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p16e4f3a0} fill="var(--fill-0, #CCCCCC)" id="MW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30bbb900} fill="var(--fill-0, #CCCCCC)" id="MX" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p17447600} fill="var(--fill-0, #CCCCCC)" id="MY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3306ad70} fill="var(--fill-0, #CCCCCC)" id="MZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3fd89300} fill="var(--fill-0, #CCCCCC)" id="NA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p37128240} fill="var(--fill-0, #CCCCCC)" id="NC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2fb67d00} fill="var(--fill-0, #CCCCCC)" id="NE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p30a88700} fill="var(--fill-0, #CCCCCC)" id="NF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33848980} fill="var(--fill-0, #CCCCCC)" id="NG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3e68a00} fill="var(--fill-0, #CCCCCC)" id="NI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p298e5272} fill="var(--fill-0, #CCCCCC)" id="NL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2d07b180} fill="var(--fill-0, #CCCCCC)" id="NO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p34243400} fill="var(--fill-0, #CCCCCC)" id="NP" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1acd120} fill="var(--fill-0, #CCCCCC)" id="NR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2c298080} fill="var(--fill-0, #CCCCCC)" id="NU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p172c6400} fill="var(--fill-0, #CCCCCC)" id="NZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3ca02d80} fill="var(--fill-0, #CCCCCC)" id="OM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3fdc5980} fill="var(--fill-0, #CCCCCC)" id="PA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p15466e00} fill="var(--fill-0, #CCCCCC)" id="PE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p32b63480} fill="var(--fill-0, #CCCCCC)" id="PF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p70cf480} fill="var(--fill-0, #CCCCCC)" id="PG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a16c400} fill="var(--fill-0, #CCCCCC)" id="PH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p20f8e400} fill="var(--fill-0, #CCCCCC)" id="PK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33154200} fill="var(--fill-0, #CCCCCC)" id="PL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p260f8500} fill="var(--fill-0, #CCCCCC)" id="PM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p8f059c0} fill="var(--fill-0, #CCCCCC)" id="PN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p12dfef00} fill="var(--fill-0, #CCCCCC)" id="PR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p58c3f00} fill="var(--fill-0, #CCCCCC)" id="PS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1771fb00} fill="var(--fill-0, #CCCCCC)" id="PT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1529da80} fill="var(--fill-0, #CCCCCC)" id="PW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3895db80} fill="var(--fill-0, #CCCCCC)" id="PY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p4855400} fill="var(--fill-0, #CCCCCC)" id="QA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1de0ed00} fill="var(--fill-0, #CCCCCC)" id="RE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p24fb6080} fill="var(--fill-0, #CCCCCC)" id="RO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3c021800} fill="var(--fill-0, #CCCCCC)" id="RS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2c27a470} fill="var(--fill-0, #CCCCCC)" id="RU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p23580300} fill="var(--fill-0, #CCCCCC)" id="RW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2bfc9b00} fill="var(--fill-0, #CCCCCC)" id="SA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2865dbc0} fill="var(--fill-0, #CCCCCC)" id="SB" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p33902c00} fill="var(--fill-0, #CCCCCC)" id="SC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p17770f00} fill="var(--fill-0, #CCCCCC)" id="SD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a101a80} fill="var(--fill-0, #CCCCCC)" id="SE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a7bba00} fill="var(--fill-0, #CCCCCC)" id="SG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p304406f0} fill="var(--fill-0, #CCCCCC)" id="SH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3262d280} fill="var(--fill-0, #CCCCCC)" id="SI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pba3dd00} fill="var(--fill-0, #CCCCCC)" id="SJ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p27ace900} fill="var(--fill-0, #CCCCCC)" id="SK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p25507580} fill="var(--fill-0, #CCCCCC)" id="SL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pe1dd80} fill="var(--fill-0, #CCCCCC)" id="SM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p4854480} fill="var(--fill-0, #CCCCCC)" id="SN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pe361c00} fill="var(--fill-0, #CCCCCC)" id="SO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2baa8100} fill="var(--fill-0, #CCCCCC)" id="SR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3ef8efc0} fill="var(--fill-0, #CCCCCC)" id="SS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2be8a080} fill="var(--fill-0, #CCCCCC)" id="ST" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p289db080} fill="var(--fill-0, #CCCCCC)" id="SV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p25566000} fill="var(--fill-0, #CCCCCC)" id="SX" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3ffb6b80} fill="var(--fill-0, #CCCCCC)" id="SY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pda98dc0} fill="var(--fill-0, #CCCCCC)" id="SZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p31088c80} fill="var(--fill-0, #CCCCCC)" id="TC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p22541280} fill="var(--fill-0, #CCCCCC)" id="TD" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p36e32180} fill="var(--fill-0, #CCCCCC)" id="TF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p13113800} fill="var(--fill-0, #CCCCCC)" id="TG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p382c7800} fill="var(--fill-0, #CCCCCC)" id="TH" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p29fdaf00} fill="var(--fill-0, #CCCCCC)" id="TJ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pb7222f0} fill="var(--fill-0, #CCCCCC)" id="TK" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3353ad00} fill="var(--fill-0, #CCCCCC)" id="TL" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p14868ca0} fill="var(--fill-0, #CCCCCC)" id="TM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p299a0800} fill="var(--fill-0, #CCCCCC)" id="TN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p13414f00} fill="var(--fill-0, #CCCCCC)" id="TO" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p497d380} fill="var(--fill-0, #CCCCCC)" id="TR" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2c8d7400} fill="var(--fill-0, #CCCCCC)" id="TT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2373ff00} fill="var(--fill-0, #CCCCCC)" id="TV" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2315be00} fill="var(--fill-0, #CCCCCC)" id="TW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2b843a00} fill="var(--fill-0, #CCCCCC)" id="TZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p236d4000} fill="var(--fill-0, #CCCCCC)" id="UA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p15c44000} fill="var(--fill-0, #CCCCCC)" id="UG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2375000} fill="var(--fill-0, #CCCCCC)" id="UM-DQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p28f1e00} fill="var(--fill-0, #CCCCCC)" id="UM-FQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3d311680} fill="var(--fill-0, #CCCCCC)" id="UM-HQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2cfb7530} fill="var(--fill-0, #CCCCCC)" id="UM-JQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p29f3d690} fill="var(--fill-0, #CCCCCC)" id="UM-MQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1c9b73f0} fill="var(--fill-0, #CCCCCC)" id="UM-WQ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p4b96500} fill="var(--fill-0, #CCCCCC)" id="US" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p8db3b00} fill="var(--fill-0, #CCCCCC)" id="UY" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p21736c00} fill="var(--fill-0, #CCCCCC)" id="UZ" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3b2120b2} fill="var(--fill-0, #CCCCCC)" id="VA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p39aa7c80} fill="var(--fill-0, #CCCCCC)" id="VC" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p27ef7300} fill="var(--fill-0, #CCCCCC)" id="VE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pcf6b000} fill="var(--fill-0, #CCCCCC)" id="VG" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1a44ad00} fill="var(--fill-0, #CCCCCC)" id="VI" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p2bc95b00} fill="var(--fill-0, #CCCCCC)" id="VN" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3a725400} fill="var(--fill-0, #CCCCCC)" id="VU" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.pfd74c00} fill="var(--fill-0, #CCCCCC)" id="WF" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p185dc780} fill="var(--fill-0, #CCCCCC)" id="WS" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p1d299200} fill="var(--fill-0, #CCCCCC)" id="YE" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p32119f00} fill="var(--fill-0, #CCCCCC)" id="YT" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p5bdef0} fill="var(--fill-0, #CCCCCC)" id="ZA" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p3b2b4600} fill="var(--fill-0, #CCCCCC)" id="ZM" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                        <path d={svgPaths.p7927300} fill="var(--fill-0, #CCCCCC)" id="ZW" stroke="var(--stroke-0, #1D1D20)" strokeWidth="0.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute left-[359px] size-[7px] top-[244px]" data-name="SouthKorea">
                <div className="absolute inset-[-5.06%_-9.11%_-4.44%_-5.53%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.02455 7.66526">
                    <g id="Group">
                      <path d={svgPaths.p12d9880} fill="var(--fill-0, #64B7E2)" id="KR-11" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p32cb5500} fill="var(--fill-0, #64B7E2)" id="KR-26" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p3eba0f80} fill="var(--fill-0, #64B7E2)" id="KR-27" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p32ec7a80} fill="var(--fill-0, #64B7E2)" id="KR-28" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p236ba100} fill="var(--fill-0, #64B7E2)" id="KR-29" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.pfed4a00} fill="var(--fill-0, #64B7E2)" id="KR-30" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p20f76500} fill="var(--fill-0, #64B7E2)" id="KR-31" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p373e0480} fill="var(--fill-0, #64B7E2)" id="KR-41" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p2f999a00} fill="var(--fill-0, #64B7E2)" id="KR-42" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p1fb22e00} fill="var(--fill-0, #64B7E2)" id="KR-43" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p3bfbbf00} fill="var(--fill-0, #64B7E2)" id="KR-44" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p9374600} fill="var(--fill-0, #64B7E2)" id="KR-45" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p27c68180} fill="var(--fill-0, #64B7E2)" id="KR-46" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p36a1a400} fill="var(--fill-0, #64B7E2)" id="KR-47" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p2541a600} fill="var(--fill-0, #64B7E2)" id="KR-48" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.p148e0480} fill="var(--fill-0, #64B7E2)" id="KR-49" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                      <path d={svgPaths.pcb99b80} fill="var(--fill-0, #64B7E2)" id="KR-50" stroke="var(--stroke-0, #64B7E2)" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </Wrapper10>
          </Wrapper3>
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-start px-[24px] relative w-full">
              <Wrapper10 additionalClassNames="bg-[#0a0a0a] h-[422px] w-[684px]">
                <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[72px] w-[684px]">
                  <Wrapper4>
                    <div className="bg-[#121212] content-stretch flex gap-[8px] h-[42px] items-center p-[8px] relative shrink-0" data-name="Table cell">
                      <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[18px]" showIcon={false} />
                    </div>
                    <TableCellText text="Account" />
                    <TableCellText text="Type" />
                    <TableCellText text="Rate" />
                    <TableCellText text="Usage" />
                    <TableCellText text="Signal" />
                  </Wrapper4>
                  <Wrapper4>
                    <TableCell className="h-[42px] relative shrink-0" property1="Variant2" showImage={false} showTitle={false} />
                    <Wrapper2>
                      <CompanyLogo className="relative shrink-0 size-[18px]" />
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Zapier</p>
                    </Wrapper2>
                    <TableCellText1 text="CRM" />
                    <TableCellText1 text="$4,589.90" />
                    <TableCellText1 text="High" />
                    <TableCellText1 text="Good" />
                  </Wrapper4>
                  <Wrapper4>
                    <TableCell1 />
                    <Wrapper2>
                      <CompanyLogo className="relative shrink-0 size-[18px]" property1="Rectangle 7" />
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Paystack</p>
                    </Wrapper2>
                    <TableCellText1 text="E-commerce" />
                    <TableCellText1 text="$315.56" />
                    <TableCellText1 text="Low" />
                    <TableCellText1 text="Excellent" />
                  </Wrapper4>
                  <Wrapper4>
                    <TableCell className="h-[42px] relative shrink-0" property1="Variant2" showImage={false} showTitle={false} />
                    <Wrapper2>
                      <CompanyLogo className="relative shrink-0 size-[18px]" property1="Rectangle 8" />
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">PayPal</p>
                    </Wrapper2>
                    <TableCellText1 text="CRM" />
                    <TableCellText1 text="$1,234.56" />
                    <TableCellText1 text="Medium" />
                    <TableCellText1 text="Moderate" />
                  </Wrapper4>
                  <Wrapper4>
                    <TableCell1 />
                    <Wrapper2>
                      <CompanyLogo className="relative shrink-0 size-[18px]" property1="Rectangle 9" />
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#bababa] text-[12px] whitespace-nowrap">Tangerine</p>
                    </Wrapper2>
                    <TableCellText1 text="Gateway" />
                    <TableCellText1 text="$678.23" />
                    <TableCellText1 text="Low" />
                    <TableCellText1 text="Good" />
                  </Wrapper4>
                </div>
                <Text6 text="See all" additionalClassNames="w-[684px]">
                  <Text3 text="Third Party Integration">
                    <Wrapper1>
                      <path d={svgPaths.p20c70a60} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                    </Wrapper1>
                  </Text3>
                </Text6>
              </Wrapper10>
              <Wrapper10 additionalClassNames="bg-[#0a0a0a] h-[422px] w-[452px]">
                <Text6 text="See all" additionalClassNames="w-[452px]">
                  <Text3 text="Secured Assets">
                    <Wrapper1>
                      <path d={svgPaths.p2fbdf300} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                    </Wrapper1>
                  </Text3>
                </Text6>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[17px] top-[74px] w-[418px]">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <SecurityWidget>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#bababa] text-[10px] w-full">Ensures all users have passwords that is fully secure</p>
                      <Wrapper>
                        <path d={svgPaths.p23d6f00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                      </Wrapper>
                    </SecurityWidget>
                    <SecurityWidget>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#bababa] text-[10px] w-full">Ensures all users have passwords that is fully secure</p>
                      <Wrapper>
                        <path d={svgPaths.p23d6f00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                      </Wrapper>
                    </SecurityWidget>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <SecurityWidget>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#bababa] text-[10px] w-full">Ensures all users have passwords that is fully secure</p>
                      <Wrapper>
                        <path d={svgPaths.p23d6f00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                      </Wrapper>
                    </SecurityWidget>
                    <SecurityWidget>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#bababa] text-[10px] w-full">Ensures all users have passwords that is fully secure</p>
                      <Wrapper>
                        <path d={svgPaths.p23d6f00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                      </Wrapper>
                    </SecurityWidget>
                  </div>
                </div>
              </Wrapper10>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1px] h-[982px] left-[calc(50%-12px)] pointer-events-none top-[-1px]">
          <div className="-translate-x-1/2 bg-[#0a0a0a] border-[#1d1d20] border-b border-solid h-[88px] overflow-clip pointer-events-auto sticky top-0 w-[1202px]" data-name="Header">
            <div className="-translate-x-1/2 absolute bottom-[10px] content-stretch flex items-center justify-between left-1/2 px-[24px] w-[1202px]">
              <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dashboard
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[38px]">
                  <div className="absolute bg-[#0a0a0a] content-stretch flex gap-[10px] items-center overflow-clip p-[9px] right-0 rounded-[40px] top-0" data-name="Rounded Btn">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="bell-solid">
                      <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.584 16.25">
                          <path d={svgPaths.p22110e00} fill="var(--fill-0, white)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute left-[11px] size-[16px] top-[-11px]">
                      <Wrapper9>
                        <g filter="url(#filter0_f_1_1772)" id="Ellipse 1">
                          <circle cx="24" cy="24" fill="url(#paint0_radial_1_1772)" fillOpacity="0.8" r="8" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_f_1_1772" width="48" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_1772" stdDeviation="8" />
                          </filter>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(24 24) rotate(90) scale(8)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1772" r="1">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#D6D6D6" />
                          </radialGradient>
                        </defs>
                      </Wrapper9>
                    </div>
                  </div>
                  <div className="absolute left-[27px] size-[7px] top-0">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                      <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CD1313)" id="Ellipse 3" r="3.5" />
                    </svg>
                  </div>
                </div>
                <ToggleButton className="bg-[#0a0a0a] relative rounded-[50px] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}