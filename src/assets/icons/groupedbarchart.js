import React from "react";
export default ({ offset: { top, left } }) => (
  <svg
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", top, left }}
  >
    <g fill-rule="nonzero" fill="none">
      <path fill="#F48AB9" d="M5 18h4v4H5z" />
      <path fill="#39246D" d="M19 11h4v11h-4z" />
      <path fill="#F74D71" d="M12 6h4v16h-4z" />
    </g>
  </svg>
);
