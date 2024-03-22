"use client";
import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ progress, size = 200, strokeWidth = 15 }) => {
  const [offset, setOffset] = useState(0);
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);

  return (
    <div className="relative w-fit">
      <span className="text-white text-2xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {progress}%
      </span>
      <svg width={size} height={size}>
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="transparent"
          stroke="#4F4F4F"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="transparent"
          stroke="white"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
