"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const section1 = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Analytics",
    url: "/",
  },
  {
    name: "Sales",
    url: "/",
  },
  {
    name: "Product",
    url: "/",
  },
  {
    name: "Customer",
    url: "/",
  },
  {
    name: "Payout",
    url: "/",
  },
];
const section2 = [
  {
    name: "Profile",
    url: "/",
  },
  {
    name: "Inbox",
    url: "/",
    tag: "8",
  },
  {
    name: "Settings",
    url: "/",
  },
];

function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-white px-7 py-12 rounded-2xl overflow-y-scroll h-[95vh] fixed">
      <div className="flex flex-col justify-between">
        <div>
          <Image
            src={"/logo.png"}
            width={100}
            height={50}
            alt="Logo"
            className="mb-12 mx-auto"
          />
          <section className="mt-5">
            <span className="text-[10px] text-[#99B2C6] mb-2 block ml-6">
              Administrator
            </span>
            {section1.map((val, index) => (
              <LinkBtn {...val} key={index} />
            ))}
          </section>
          <section className="mt-12">
            <span className="text-[10px] text-[#99B2C6] mb-2 block  ml-6">
              Settings
            </span>
            {section2.map((val, index) => (
              <LinkBtn {...val} key={index} />
            ))}
          </section>
        </div>
        <div className="flex flex-col justify-center items-center mt-24">
          <div className="flex gap-2">
            <Image src={"/icons/darkMode.svg"} width={14} height={14} alt="" />
            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-5 rounded-3xl relative cursor-pointertransition ease-in-out delay-150 ${
                darkMode ? "bg-black" : "bg-[#99B2C6]"
              }`}
            >
              <div
                className={`h-[90%] aspect-square rounded-full bg-white m-[3%] ${
                  darkMode ? "float-right" : ""
                }`}
              ></div>
            </div>
            <Image
              src={"/icons/lightMode.svg"}
              width={14}
              height={14}
              alt=""
              className="mr-3"
            />
          </div>
          <span className="flex gap-1 text-[#99B2C6] text-[8px] mt-6">
            <Image src={"/icons/copyright.svg"} width={12} height={12} alt="" />
            Copyright Vision 2023{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const LinkBtn = ({ name, tag, url }) => {
  return (
    <Link
      href={url}
      className="group flex gap-2 justify-start items-center mb-8 py-2 px-6  rounded-3xl text-[#99B2C6] transition ease-in-out delay-50 hover:bg-black hover:text-white"
    >
      <Image
        src={`/icons/${name.toLowerCase()}.svg`}
        width={20}
        height={20}
        alt={`${name} icon`}
        // className="filter invert-20 sepia-75 saturate-1500 hue-rotate-180 brightness-125 contrast-75"
        className="group-hover:filter group-hover:invert-100 group-hover:brightness-200 group-hover:contrast-100"

        // style={{ fill: "white" }}
      />
      <span className=" text-sm">{name}</span>
      {tag && (
        <span className="bg-[#FA5757] text-white rounded-2xl w-7 flex justify-center items-center text-center text-[10px] ml-3">
          {tag}
        </span>
      )}
    </Link>
  );
};
