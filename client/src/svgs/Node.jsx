const NodeIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 100 100"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Path_56"
            data-name="Path 56"
            d="M115.873,80.334,71.26,102.956a4.66,4.66,0,0,0-2.7,4.1v45.275a4.659,4.659,0,0,0,2.7,4.1l44.616,22.64a6.054,6.054,0,0,0,5.39,0l44.608-22.64a4.669,4.669,0,0,0,2.69-4.1V107.055a4.661,4.661,0,0,0-2.7-4.1l-44.6-22.622a6.082,6.082,0,0,0-5.4,0"
            transform="translate(-68.564 -79.702)"
            fill="#167e3c"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <path
            id="Path_58"
            data-name="Path 58"
            d="M68.933,155.186a5.33,5.33,0,0,0,1.616,1.225l38.937,19.436,6.486,3.222a6.217,6.217,0,0,0,3.161.619,6.4,6.4,0,0,0,1.077-.17l47.873-75.752a5.378,5.378,0,0,0-1.276-.875L137.087,88.058l-15.711-7.812a6.278,6.278,0,0,0-1.422-.493Zm0,0"
            transform="translate(-68.933 -79.753)"
            fill="#1eae53"
          />
        </clipPath>
        <clipPath id="clip-path-3">
          <path
            id="Path_60"
            data-name="Path 60"
            d="M117.073,79.723a6.2,6.2,0,0,0-2.2.607l-45.37,22.565,48.924,76.787a6.062,6.062,0,0,0,1.955-.581l45.5-22.648a4.838,4.838,0,0,0,2.657-3.235L118.666,79.8a6.6,6.6,0,0,0-1.112-.095l-.454.019"
            transform="translate(-69.505 -79.705)"
            fill="#32ff7e"
          />
        </clipPath>
      </defs>
      <g id="node-svgrepo-com" transform="translate(0 -0.001)">
        <g
          id="Group_10"
          data-name="Group 10"
          transform="translate(0 0.001)"
          clip-path="url(#clip-path)"
        >
          <path
            id="Path_55"
            data-name="Path 55"
            d="M243.712,120.669,118,66.535,53.544,182.054,179.252,236.19Zm0,0"
            transform="translate(-98.629 -101.256)"
            fill="#167e3c"
          />
        </g>
        <g
          id="Group_11"
          data-name="Group 11"
          transform="translate(0.369 0.052)"
          clip-path="url(#clip-path-2)"
        >
          <path
            id="Path_57"
            data-name="Path 57"
            d="M50.825,140.5l90.313,105.633,119.44-76.261L170.26,64.242Zm0,0"
            transform="translate(-106.126 -105.179)"
            fill="#1eae53"
          />
        </g>
        <g
          id="Group_12"
          data-name="Group 12"
          transform="translate(0.941 0.004)"
          clip-path="url(#clip-path-3)"
        >
          <path
            id="Path_59"
            data-name="Path 59"
            d="M69.5,79.705v99.979h99.017V79.705Zm0,0"
            transform="translate(-69.506 -79.705)"
            fill="#32ff7e"
          />
        </g>
      </g>
    </svg>
  );
};

export default NodeIcon;
