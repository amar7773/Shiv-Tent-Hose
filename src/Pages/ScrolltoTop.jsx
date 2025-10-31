import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scroll
    });
  }, [pathname]);

  return null;
}

export default ScrolltoTop;
