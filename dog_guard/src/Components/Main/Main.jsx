import React from "react";
import "./../../App.css";
import MainBlock1 from "./MainBlock1/MainBlock1";
import MainBlock2 from "./MainBlock2/MainBlock2";
import MainBlock3 from "./MainBlock3/MainBlock3";

export default function Main(props) {
  return (
    <main>
      <MainBlock1 />
      <MainBlock2 />
      <MainBlock3 />
    </main>
  );
}
