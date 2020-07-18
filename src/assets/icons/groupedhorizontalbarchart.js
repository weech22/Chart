import React from "react";
export default ({ offset: { top, left } }) => (
  <svg
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg "
    style={{ position: "relative", top, left }}
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="#F48AB9" fill-rule="nonzero" d="M10 5v4H6V5z" />
      <path fill="#39246D" fill-rule="nonzero" d="M17 19v4H6v-4z" />
      <path fill="#F74D71" fill-rule="nonzero" d="M22 12v4H6v-4z" />
    </g>
  </svg>
);
