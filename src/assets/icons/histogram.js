import React from "react";
export default ({ offset: { top, left } }) => (
  <svg
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", top, left }}
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M4 24V9h5v5h5V9h5V4h5v20H4z" fill="#F74D71" />
    </g>
  </svg>
);
