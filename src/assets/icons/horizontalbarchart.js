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
      <path fill="#39246D" d="M6 5h16v4H6zM6 19h12v4H6zM6 12h8v4H6z" />
    </g>
  </svg>
);
