import Image from "next/image";
import Card from "./mainCard";

const cardsInfo = [
  {
    icon: "dollar",
    title: "Total Sales",
    price: "$ 23.577.22",
    period: "Per Day",
  },
  {
    icon: "eye",
    title: "Total Visitor",
    price: "57.711",
    period: "View/Per Day",
  },
];
function DashboardOverview() {
  return (
    <div className="bg-black rounded-xl px-8 py-12 relative">
      <span className="text-white text-sm mb-3 block ml-6">
        Dashboard Overview
      </span>
      <p className="text-white text-3xl font-bold ml-6">Hello Stevens 👋</p>
      <Image
        src={"/elements/ball.png"}
        width={200}
        height={200}
        alt=""
        className="absolute right-3 top-3 z-0"
      />
      <div className="flex gap-5 w-full mt-12 justify-center">
        {cardsInfo.map((val, index) => (
          <div className="flex-1 z-10" key={index}>
            <Card {...val} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
