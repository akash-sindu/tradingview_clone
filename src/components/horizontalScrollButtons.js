import img from "../resources/images/apple-3383931_1280.png";
import { useState } from "react";
export default function HorizontalScrollButtons() {
  const [focused, setFocued] = useState("apple");

  function changeFocus(name) {
    setFocued(name);
  }

  const activeStateCss =
    "rounded-full w-[354px] h-[66px] flex flex-row pl-5 items-center dark:bg-[#1e293b] bg-slate-100";
  const normalStateCss =
    "rounded-full w-[354px] h-[66px] flex flex-row  pl-5 items-center dark:hover:bg-[#1e293b] hover:bg-slate-100";

  var stocknames = ["Apple", "Tesla", "Amazon"];
  return (
    <div className="mt-5 flex flex-row justify-between">
      {stocknames.map((name) => {
        const lowerCase = name.toLowerCase();
        return (
          <button
            id={lowerCase}
            key={lowerCase}
            className={focused === lowerCase ? activeStateCss : normalStateCss}
            onClick={() => {
              changeFocus(lowerCase);
            }}
          >
            <img alt="" className="rounded-full w-8 h-8" src={img} />
            <div className=" ml-2 flex flex-col justify-between">
              <div className="flex flex-row  items-center">
                <button className="text-inherit dark:text-[#64748b] text-lg  font-sans">
                  {name}
                </button>
                <button className="bg-none hover:bg-[#64748b] border-none rounded-full p-1 ml-2">
                  <div className="h-[4px] w-[12px] rounded-full bg-[#475569] hover: "></div>
                </button>
              </div>
              <div className="w-[160px] flex flex-row justify-between items-end">
                <div className="flex flex-row items-center ">
                  <p className="mr-1 text-inherit dark:text-[#64748b] text-lg  font-sans">
                    170.73
                  </p>
                  <p className="text-inherit dark:text-[#64748b] text-xs  font-sans">
                    USD
                  </p>
                </div>

                <p className="mr-1 text-[#1B9981] text-lg  font-sans">+1.02%</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
