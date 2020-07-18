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
      <path d="M14 23a9 9 0 0 0 0-18" fill="#39246D" />
      <path d="M14 23a9 9 0 0 1 0-18" fill="#F48AB9" />
      <path d="M14 23a9 9 0 0 1-8.136-12.853L14 14v9z" fill="#F74D71" />
    </g>
  </svg>
);
