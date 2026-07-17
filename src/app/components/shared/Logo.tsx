import svgPaths from "../../../imports/Logo/svg-db9c3hxlk";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[37.27px] relative w-[104px]"} data-name="Logo">
      <div className="absolute inset-[26.67%_0_16.19%_42.32%]" data-name="vector-name">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9863 21.2969">
          <g clipPath="url(#clip0_41_980)" id="vector-name">
            <path d={svgPaths.pa2ff300} fill="var(--fill-0, #ABFFAD)" id="Vector" />
            <path d={svgPaths.p290e2870} fill="var(--fill-0, #ABFFAD)" id="Vector_2" />
            <path d={svgPaths.p38b04200} fill="var(--fill-0, #ABFFAD)" id="Vector_3" />
          </g>
          <defs>
            <clipPath id="clip0_41_980">
              <rect fill="white" height="21.2969" width="59.9863" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[0_64.16%_0_0]" data-name="Point">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2696 37.2696">
          <g clipPath="url(#clip0_41_977)" id="Point">
            <path d={svgPaths.p2f3a5f00} fill="var(--fill-0, #ABFFAD)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_41_977">
              <rect fill="white" height="37.2696" width="37.2696" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
