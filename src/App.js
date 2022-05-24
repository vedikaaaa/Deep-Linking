import { useEffect, useState } from "react";
// import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import "./App.css";

export default function App() {
  const [pdfSupport, _] = useState(() => navigator.pdfViewerEnabled);
  const [pdfSupportt,__] = useState(() => Object.entries(navigator.plugins).map(item => {
    console.log(item)
  }));
  return (
    <div className="App">
      <h1>PDF View Support</h1>
      <h2>{pdfSupport ? "Supported" : "Not Supported"}</h2>
      <h2>{pdfSupportt}</h2>
    </div>
  );
}

// Object.entries(navigator.plugins).map(item => {
//     console.log(item)
//   })