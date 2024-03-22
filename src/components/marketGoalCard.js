import Image from "next/image";
import CircleProgressBar from "./circleProgressBar";

function MarketGoalCard() {
  return (
    <div className="bg-black rounded-xl p-6 relative justify-center h-full overflow-hidden">
      <Image
        src={"/icons/threeDots.svg"}
        width={30}
        height={10}
        alt=""
        className="absolute right-3 top-3 z-9"
      />
      <div className="z-10 w-fit flex flex-col justify-center items-center relative gap-2 mx-auto">
        <span className="text-white text-sm block mb-4">Marketing Goal</span>
        <CircleProgressBar progress={75} size={140} strokeWidth={30} />
        <span className="text-white text-1xl font-semibold block">
          $103.577
        </span>
        <span className="text-white text-[7px] block font-medium text-center">
          You reached $ 103.577 from $150.000
        </span>
        <button className="bg-white rounded-xl py-2 px-4 text-[10px] font-semibold mt-4">
          Show All Sales
        </button>
      </div>
      <Image
        src={"/elements/ring.png"}
        width={200}
        height={200}
        alt=""
        className="absolute left-0 bottom-0 z-1"
      />
    </div>
  );
}

export default MarketGoalCard;
