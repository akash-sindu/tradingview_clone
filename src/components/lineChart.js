import { createChart } from "lightweight-charts";
import { useRef, useEffect } from "react";
import candlestickData from "../data/candlestock_sample.json";
import { useSelector } from "react-redux";
var lineData = [];
candlestickData.map((val) => {
  lineData.push({ time: val["time"], value: val["close"] });
  return null;
});

export default function LineChart() {
  const lineChartContainerRef = useRef();
  const darkMode = useSelector((state) => state.darkMode.value);

  const chartOptions = {
    layout: {
      textColor: darkMode ? "white" : "#64748b",
      background: {
        type: "solid",
        color: darkMode ? "black" : "white",
        verticalGradient: "gradient",
      },
    },
    gridLineOptions: {
      visible: false,
    },
    height: 300,
  };

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: lineChartContainerRef.current.clientWidth });
    };

    const chart = createChart(lineChartContainerRef.current, chartOptions);
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
    const areaSeries = chart.addAreaSeries({
      color: "#0A2821",
      borderVisible: false,

      priceLineVisible: false,

      priceFormat: {
        minMove: 0.5,
      },
    });

    areaSeries.applyOptions({
      priceLineVisible: false,
    });

    areaSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.3, // leave some space for the legend
        bottom: 0.25,
      },
    });

    areaSeries.setData(lineData);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  });

  return <div className="mt-5" ref={lineChartContainerRef}></div>;
}
