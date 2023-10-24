import React from "react";

export default function Menu(props: React.SVGAttributes<{}>) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g clip-path="url(#clip0_429_11066)">
          <path
            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_429_11066">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.000915527)"
            ></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}
