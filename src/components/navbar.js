import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../state/themeReducer";
import PropTypes from "prop-types";
/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

export default function Navbar({ header }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(window.scrollY, header, 0, header.length - 1);

      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [header]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const switchDarkAndLightMode = () => {
    dispatch(changeDarkMode());
  };

  const buttonStyle =
    "text-sm text-inherit dark:text-[#64748b] font-sans hover:bg-slate-100 dark:hover:bg-[#1e293b] hover:rounded-full   px-3 py-1";

  const buttonStyleFocussed =
    "text-sm  font-sans hover:bg-slate-100 dark:hover:bg-[#1e293b] hover:rounded-full outline-none text-[#1d4ed8]   px-3 py-1 dark:text-[#1d4ed8] text-[#1d4ed8]";

  return (
    <div className="sticky top-0 z-[20] bg-[#FFFFFF] dark:bg-[#000000] flex flex-col  justify-between w-full  h-[12vh]  border-b dark:border-b-[#475569] border-b-[#e2e8f0]">
      <div className="w-full px-5 items-center flex-row flex justify-between h-[7.5vh]">
        <h1 className="text-inherit dark:text-slate-50  text-base font-sans ">
          Navbar
        </h1>
        <div className="flex justify-between w-[40vw] ">
          <h1 className="text-inherit dark:text-slate-50 text-base">
            Accesories
          </h1>
          <h1 className="text-inherit dark:text-slate-50 text-base">Compare</h1>
          <h1 className="text-inherit dark:text-slate-50 text-base">Specs</h1>
          <h1 className="text-inherit dark:text-slate-50 text-base">Video</h1>
          <h1 className="text-inherit dark:text-slate-50 text-base">
            Downloads
          </h1>
          <h1 className="text-inherit dark:text-slate-50 text-base">FAQ</h1>
        </div>
        <button
          onClick={switchDarkAndLightMode}
          type="button"
          className="text-inherit dark:text-slate-50 border-none font-medium rounded-full"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="w-[85vw] px-[90px] items-center flex-row flex justify-between h-[7.5vh]">
        {/* {buttondata.map(buttonGenerate, this)} */}
        {header.map((header, index) => (
          <a
            key={index + header.headerID}
            className={
              activeIndex === index ? buttonStyleFocussed : buttonStyle
            }
            href={`#${header.headerID}`}
          >
            {header.headerTitle}
          </a>
        ))}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      headerTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
