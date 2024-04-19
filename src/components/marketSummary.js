import { useState } from "react";
import HorizontalScrollButtons from "./horizontalScrollButtons";
import CreateCandlestickChart from "./candlestickChart";
import LineChart from "./lineChart";

function MarketSummary({ innerRef }) {
  const [focused, setFocued] = useState("stocks");
  const [chartType, setChartType] = useState("line");

  function changeFocus(name) {
    setFocued(name);
  }

  var buttonNamesId = ["Stocks", "Crypto", "Forex"];
  var focuessedButtonStyle =
    "text-inherit dark:text-[#475569] border-none font-medium rounded-md dark:bg-[#1e293b] bg-slate-100 p-2 items-center";
  var normaButtonStyle =
    "text-inherit dark:text-[#475569] border-none font-medium rounded-md dark:hover:bg-[#1e293b] p-2 items-center hover:bg-slate-100";
  return (
    <section
      ref={innerRef}
      className=" h-[85vh] flex flex-col px-[100px] py-6 bg-[#FFFFFF]  dark:bg-[#000000] "
    >
      <button
        id="marketSummary"
        className="text-inherit dark:text-slate-50 text-[28px] inline-flex items-center dark:hover:text-[#1d4ed8] hover:text-[#1d4ed8]"
      >
        Market summary
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="flex flex-row justify-between w-[20vw] items-center mt-5">
        {buttonNamesId.map((name) => {
          const lowecaseConverted = name.toLowerCase();
          return (
            <button
              key={lowecaseConverted}
              id={lowecaseConverted}
              className={
                focused === lowecaseConverted
                  ? "rounded-md bg-slate-100 dark:bg-[#1e293b] text-[16px] text-inherit dark:text-[#64748b] font-sans hover:bg-slate-100 dark:hover:bg-[#1e293b] hover:rounded-md px-4 py-2"
                  : "text-[16px] text-inherit dark:text-[#64748b] font-sans hover:bg-slate-100 dark:hover:bg-[#1e293b] hover:rounded-md px-4 py-2"
              }
              onClick={() => {
                changeFocus(lowecaseConverted);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>

      <HorizontalScrollButtons />
      {chartType === "line" ? <LineChart /> : <CreateCandlestickChart />}

      <div className="rounded-lg bg-transparent border-solid border border-b-[#e2e8f0] dark:border-[#475569] flex flex-row h-[48px] w-[92px] justify-between p-1 mt-5 items-center">
        <button
          onClick={() => {
            setChartType("line");
          }}
          className={
            chartType === "line" ? focuessedButtonStyle : normaButtonStyle
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setChartType("candle");
          }}
          className={
            chartType === "candle" ? focuessedButtonStyle : normaButtonStyle
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default MarketSummary;
