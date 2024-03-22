import Image from "next/image";

const listingData = [
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "black",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "purple",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "pink",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "blue",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "purple",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "pink",
  },
  {
    name: "Jack Sneyder",
    product: "Apple Iphone 14s",
    price: "+$1100",
    element: "blue",
  },
];
function SalesHistory() {
  return (
    <div className="bg-white rounded-xl p-4 relative max-h-full overflow-y-scroll">
      <Image
        src={"/icons/threeDots.svg"}
        width={30}
        height={10}
        alt=""
        className="absolute right-5 top-5 z-9"
      />
      <span className="font-bold mb-5 block">Sales History</span>
      <div>
        {listingData.map((val, index) => (
          <div className="flex justify-between items-center mb-6" key={index}>
            <Image
              src={`/elements/salesHistory/${val.element}.png`}
              width={60}
              height={30}
              alt=""
              className=""
            />
            <div className="flex flex-col mr-[12%]">
              <span>{val.name}</span>
              <span className="text-[#747474] text-xs">{val.product}</span>
            </div>
            <div className="h-fit px-3 py-2 text-center w-fit text-white rounded-lg bg-[#3FB8A9] text-sm">
              {val.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesHistory;
