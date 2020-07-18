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
      <circle fill="#39246D" cx="9" cy="9" r="4" />
      <circle fill="#39246D" cx="19" cy="19" r="3" />
      <circle fill="#39246D" cx="14.5" cy="14.5" r="1.5" />
      <circle fill="#F74D71" cx="8.5" cy="19.5" r="2.5" />
      <circle fill="#F74D71" cx="20" cy="9" r="3" />
    </g>
  </svg>
);
