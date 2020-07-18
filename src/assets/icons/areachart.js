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
        d="M10 4.398c3.314 0 4.906 8.602 8 8.602 3.094 0 3.69 3 7 3v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2c2.525 0 3.686-12.602 7-12.602z"
        fill="#F74D71"
        opacity=".8"
      />
      <path
        d="M10 19.398c3.314 0 4.906-3.398 8-3.398 3.094 0 3.69-7 7-7v10a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-7c2.525 0 3.686 7.398 7 7.398z"
        fill="#39246D"
        opacity=".8"
      />
    </g>
  </svg>
);
