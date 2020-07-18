import React from "react";
export default ({ offset: { top, left } }) => (
  <svg
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", top, left }}
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="#F74D71" d="M4 4h6v6H4z" />
      <path fill-opacity=".25" fill="#F74D71" d="M18 4h6v6h-6z" />
      <path fill-opacity=".75" fill="#F74D71" d="M4 18h6v6H4z" />
      <path fill-opacity=".5" fill="#F74D71" d="M4 11h6v6H4z" />
      <path fill-opacity=".25" fill="#F74D71" d="M18 18h6v6h-6z" />
      <path fill="#F74D71" d="M11 18h6v6h-6z" />
      <path fill-opacity=".75" fill="#F74D71" d="M11 11h6v6h-6z" />
      <path fill-opacity=".5" fill="#F74D71" d="M11 4h6v6h-6z" />
      <path fill="#F74D71" d="M18 11h6v6h-6z" />
    </g>
  </svg>
);
