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
      <path fill="#F74D71" d="M5 18h4v4H5zM19 11h4v11h-4zM12 6h4v16h-4z" />
    </g>
  </svg>
);
