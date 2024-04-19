import { createChart } from "lightweight-charts";
import { useRef, useEffect } from "react";
import candlestickData from "../data/candlestock_sample.json";
import { useSelector } from "react-redux";

function CreateCandlestickChart() {
  const chartContainerRef = useRef();

  const darkMode = useSelector((state) => state.darkMode.value);

  const chartOptions = {
    layout: {
      textColor: darkMode ? "white" : "#64748b",
      background: { type: "solid", color: darkMode ? "black" : "white" },
    },
    gridLineOptions: {
      visible: false,
    },
    height: 300,
  };

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chart.applyOptions({
      crosshair: {
        vertLine: {
          visible: false,
        },
        horzLine: {
          visible: false,
        },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      timeScale: {
        borderVisible: false,
        allowShiftVisibleRangeOnWhitespaceReplacement: true,
      },
      rightPriceScale: {
        borderVisible: false,
      },
    });
    chart.timeScale().fitContent();
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
      priceLineVisible: false,
      borderColor: "black",

      priceFormat: {
        minMove: 0.5,
      },
    });

    candlestickSeries.applyOptions({
      priceLineVisible: false,
    });
    candlestickSeries.setData(candlestickData);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  });

  return <div className="mt-5" ref={chartContainerRef}></div>;
}

export default CreateCandlestickChart;
