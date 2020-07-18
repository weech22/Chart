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
      <path
        d="M2.978 16.567c3.306 0 2.885 4.154 7.362 4.154 4.476 0 2.22-13.41 7.605-13.41 5.384 0 2.903 10.897 7.024 10.897"
        stroke="#39246D"
      />
      <path
        d="M2.978 21.567c3.877 0 3.25-11.846 7.362-11.846 4.111 0 3.576 6.59 7.605 6.59 4.028 0 2.903-8.103 7.024-8.103"
        stroke="#F74D71"
      />
      <circle fill="#F74D71" cx="24.5" cy="8.5" r="1.5" />
      <circle fill="#39246D" cx="24.5" cy="18.5" r="1.5" />
    </g>
  </svg>
);
