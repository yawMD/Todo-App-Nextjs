/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type Props = {
    name: string, image:string, time:string
};
export default function MealCard(props:Props){
    return(
   <Link href={"/store/1"} className="flex flex-col items-center mr-4 min-w-[250px] max-w-xs rounded-2xl bg-white shadow-lg">
      <img className="w-full h-36 rounded-2xl" src={props.image} alt={`${props.name} Food`} />
      <div className="p-4 flex flex-col justify-between w-full">
        <div className="font-normal text-lg">{props.name}</div>
        <div className="flex justify-between items-center pt-2 w-full">
          <span className="text-sm text-gray-400">{props.time}</span>
          <span className="rounded-full px-2 py-1 text-xs font-semibold flex justify-center items-center">
            4.7
          </span>
        </div>
      </div>
    </Link>
    );
}