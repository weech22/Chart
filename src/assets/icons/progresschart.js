import React from "react";
export default ({ offset: { top, left } }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", top, left }}
  >
    <g fill="none" fill-rule="evenodd">
      <circle stroke="#ECECEC" stroke-width="4" cx="14" cy="14" r="7" />
      <path
        d="M9.05 18.95a7 7 0 1 0 5.925-11.881"
        stroke="#F74D71"
        stroke-width="4"
        stroke-linecap="round"
      />
    </g>
  </svg>
);
