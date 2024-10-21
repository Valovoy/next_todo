import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 23 22"
    {...props}
  >
    <path
      fill="currentColor"
      d="m19.785 6.674-11 11a.69.69 0 0 1-.973 0L3 12.86a.688.688 0 1 1 .973-.972l4.326 4.326L18.812 5.701a.688.688 0 0 1 .973.973"
    />
  </svg>
);
export default SvgCheck;
