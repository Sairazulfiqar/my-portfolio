import React, { useEffect, useState } from "react";
import {FiArrowUpCircle} from "react-icons/fi";
import "../App.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top" className=" animate__animated animate__bounce animate__infinite">
        <FiArrowUpCircle/>
      </a>
    </div>
  ) : null;
};