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
        d="M10 14.398c3.314 0 4.906 1.602 8 1.602 3.094 0 3.69-2 7-2v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1c2.525 0 3.686-3.602 7-3.602z"
        fill="#39246D"
      />
      <path
        d="M10 11.398c3.314 0 4.906-7.398 8-7.398 3.094 0 3.69 5 7 5v5c-2.956 0-3.331 3-7 3s-4.387-2-8-2c-3.613 0-4.019 3-7 3V8c2.525 0 3.686 3.398 7 3.398z"
        fill="#F74D71"
      />
    </g>
  </svg>
);
