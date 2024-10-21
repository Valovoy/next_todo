import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.611 4.125H3.486a.687.687 0 1 0 0 1.375h.688v12.375a1.375 1.375 0 0 0 1.375 1.375h11a1.375 1.375 0 0 0 1.375-1.375V5.5h.687a.688.688 0 1 0 0-1.375m-2.062 13.75h-11V5.5h11zM6.924 2.063a.687.687 0 0 1 .687-.688h6.875a.688.688 0 1 1 0 1.375H7.611a.687.687 0 0 1-.687-.687"
    />
  </svg>
);
export default SvgTrash;
