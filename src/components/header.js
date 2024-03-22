"use client";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between gap-3 h-11">
      <div className="flex-1 bg-white flex h-full justify-between p-2 rounded-xl">
        <input
          placeholder="Search"
          className="flex-1 outline-none focus:ring-transparent h-full text-gray-500 text-sm pl-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image
          src={"/icons/search.svg"}
          width={30}
          height={70}
          alt="User Image"
        />
      </div>
      <span className="h-full p-3 bg-white rounded-xl text-sm">
        15 May 2020 8:00 am
      </span>
      <span className="h-full p-3 bg-white rounded-xl text-sm flex justify-center align-middle">
        {" "}
        <Image
          src={"/icons/bell.svg"}
          width={15}
          height={15}
          alt="Notification Icon"
        />
      </span>
      <Image src={"/images/user.png"} width={40} height={40} alt="User Image" />
    </div>
  );
}

export default Header;

// "use client";
// import React, { useState, useEffect } from "react";

// const CircleProgressBar = ({ progress, radius, strokeWidth }) => {
//   const normalizedRadius = radius - strokeWidth * 2;
//   const circumference = normalizedRadius * 2 * Math.PI;
//   const [offset, setOffset] = useState(circumference);

//   useEffect(() => {
//     const progressOffset = ((100 - progress) / 100) * circumference;
//     setOffset(progressOffset);
//   }, [circumference, progress]);

//   return (
//     <div className="relative w-fit">
//       <span className="text-white text-3lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         {progress}%
//       </span>
//       <svg height={radius * 2} width={radius * 2}>
//         <circle
//           stroke="#4F4F4F"
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />
//         <circle
//           stroke="white"
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference + " " + circumference}
//           style={{
//             strokeDashoffset: offset,
//             transform: `rotate(-90deg) translate(-${
//               radius * 2
//             }px) rotate(180deg)`,
//           }}
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />
//       </svg>
//     </div>
//   );
// };

// export default CircleProgressBar;
