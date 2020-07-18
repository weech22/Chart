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
      <path fill="#F74D71" d="M12 5h4v9h-4z" />
      <path
        d="M5 11h4v7H5v-7zm14 2h4v10h-4V13z"
        fill="#39246D"
        fill-rule="nonzero"
      />
    </g>
  </svg>
);
