import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24 12a1 1 0 0 1-1 1H13v10a1 1 0 0 1-2 0V13H1a1 1 0 0 1 0-2h10V1a1 1 0 0 1 2 0v10h10a1 1 0 0 1 1 1"
    />
  </svg>
);
export default SvgPlus;
