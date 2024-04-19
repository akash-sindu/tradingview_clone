import Navbar from "../components/navbar";
import UsStocks from "../components/usStocks";
import MarketSummary from "../components/marketSummary";
import { useRef } from "react";
import WorldStocks from "../components/worldStocks";
import ETFs from "../components/etfs";
import Crypto from "../components/crypto";
import Forex from "../components/forex";
import Futures from "../components/futures";
import Bonds from "../components/bonds";

function LandingPage() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const section8Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Market summary",
      headerRef: section1Ref,
      headerID: "marketSummary",
    },
    {
      headerTitle: "US stocks",
      headerRef: section2Ref,
      headerID: "usStocks",
    },
    {
      headerTitle: "World stocks",
      headerRef: section3Ref,
      headerID: "worldStocks",
    },
    {
      headerTitle: "ETFs",
      headerRef: section4Ref,
      headerID: "etfsSection",
    },
    {
      headerTitle: "Crypto",
      headerRef: section5Ref,
      headerID: "cryptSection",
    },
    {
      headerTitle: "Forex and currencies",
      headerRef: section6Ref,
      headerID: "foxeCurrencies",
    },
    {
      headerTitle: "Futures and commodities",
      headerRef: section7Ref,
      headerID: "futuresCommodities",
    },
    {
      headerTitle: "Bonds",
      headerRef: section8Ref,
      headerID: "bondsSection",
    },
  ];
  return (
    <>
      <Navbar header={navHeader} />
      <MarketSummary innerRef={section1Ref} />
      <UsStocks innerRef={section2Ref} />
      <WorldStocks innerRef={section3Ref} />
      <ETFs innerRef={section4Ref} />
      <Crypto innerRef={section5Ref} />
      <Forex innerRef={section6Ref} />
      <Futures innerRef={section7Ref} />
      <Bonds innerRef={section8Ref} />
    </>
  );
}

export default LandingPage;
