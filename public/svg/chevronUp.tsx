import React from "react";

interface ChevronUpProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const ChevronUp: React.FC<ChevronUpProps> = ({
  fill = "#fff",
  width = 18,
  height = 18,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M24 22h-24l12-20z" />
    </svg>
  );
};
