import Image from "next/image";

function Card({ icon, title, price, period }) {
  return (
    <div className="max-w-[330px] w-full m-auto">
      <div className="bg-gradient-to-t to-[#403D3D] from-black rounded-md shadow-md w-full px-4 py-2">
        <div className="bg-[#403D3D] rounded-full p-2 w-fit">
          <Image
            src={`/icons/${icon}.svg`}
            width={15}
            height={15}
            alt=""
            className="right-3 top-3"
          />
        </div>
        <div className="flex flex-col gap-1 items-end pb-3">
          <span className="text-[#B8B8B8] text-sm">{title}</span>
          <span className="text-white text-3xl font-bold">{price}</span>
          <span className="text-[#B8B8B8] text-sm">{period}</span>
        </div>
      </div>
      <div className="bg-[#626262] w-[80%] h-2 mx-auto rounded-b-lg" />
    </div>
  );
}

export default Card;
