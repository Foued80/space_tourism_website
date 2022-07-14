import React from "react";
import { useEffect } from "react";

export default function imgsrc() {
  let imgsource = "/assets/home/";
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  return;
}
