"use client";
import { statusBgColor, statusTextColor } from "@/utils/constant";
import Image from "next/image";
import { useState } from "react";

const listData = [
  {
    id: 1,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Completed",
  },
  {
    id: 2,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Completed",
  },
  {
    id: 3,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Completed",
  },
  {
    id: 4,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Fail",
  },
  {
    id: 5,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Completed",
  },
  {
    id: 6,
    invoice: "#INV/21/22/AA",
    name: "Apple Iphone 14",
    date: "12/01/2023",
    price: "+$1100",
    status: "Hold",
  },
];
const headingList = [
  "Invoice No.",
  "Product Name",
  "Date",
  "Price",
  "Status",
  "Option",
];

function TransactionList() {
  const [selected, setSelected] = useState([]);

  const selectHandler = ({ id }) => {
    if (id) {
      if (!selected?.includes(id)) {
        setSelected((val) => [...val, id]);
      } else {
        setSelected(selected.filter((el) => el !== id));
      }
    } else {
      if (selected.length !== listData.length) {
        setSelected(() => listData.map((el) => el.id));
      } else {
        setSelected([]);
      }
    }
  };
  return (
    <div className="bg-white rounded-xl py-6 px-8 relative h-full overflow-y-scroll">
      <Image
        src={"/icons/threeDots.svg"}
        width={30}
        height={10}
        alt=""
        className="absolute right-5 top-5 z-9"
      />
      <span className="font-bold mb-5 block">Latest Transaction</span>
      <table className="text-left border-spacing-x-3 border-spacing-y-10 w-full table-auto  border-collapse">
        <thead className="border-collapse">
          <tr className="border-b-[1px] border-[#E6E6E6] leading-[50px]">
            <th>
              {" "}
              <input
                type="checkbox"
                checked={selected.length === listData.length}
                onChange={selectHandler}
              />
            </th>
            {headingList.map((val) => (
              <th className="text-[#99B2C6] font-medium" key={val}>
                {" "}
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listData.map((val) => (
            <tr
              className="border-b-[1px] border-[#E6E6E6]  leading-[50px]"
              key={val.id}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selected?.includes(val.id)}
                  onChange={() => selectHandler({ id: val.id })}
                />
              </td>
              <td className="text-[#747474] text-xs">{val.invoice}</td>
              <td className="text-[#747474] text-xs">{val.name}</td>
              <td className="text-[#747474] text-xs">{val.date}</td>
              <td
                className={`text-xs ${
                  statusTextColor[val?.status?.toLowerCase()]
                }`}
              >
                {val.price}
              </td>
              <td>
                <div
                  className={`px-3 py-2 text-center w-20 text-white rounded-lg text-xs ${
                    statusBgColor[val?.status?.toLowerCase()]
                  } `}
                >
                  {val.status}
                </div>
              </td>
              <td>
                <button className="px-3 py-2 text-center w-fit text-white rounded-lg bg-black text-xs mx-auto">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
