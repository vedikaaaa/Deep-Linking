import { useEffect, useState } from "react";
// import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import "./App.css";

export default function App() {
    var flag = true;
  const [pdfSupport, _] = useState(() => navigator.pdfViewerEnabled);
  const [pdfSupport1,__] = useState(() => ('PDF Viewer' in navigator.plugins));
  const [pdfSupport2,___] = useState(() => ('Chrome PDF Viewer' in navigator.plugins));
  const [pdfSupport3,____] = useState(() => ('Chromium PDF Viewer' in navigator.plugins));
  const [pdfSupport4,_____] = useState(() => ('Microsoft Edge PDF Viewer' in navigator.plugins));
  const [pdfSupport5,______] = useState(() => ('WebKit built-in PDF' in navigator.plugins));

  return (
    <div className="App">
      <h1>PDF View Support - pdfViewerEnabled</h1>
     
      <h2>{pdfSupport ? "Supported" : "Not Supported"}</h2>
      <h1>navigator.plugins - PDF Viewer</h1>
      <h2>{pdfSupport1?"true":"false"}</h2>
      <h1>navigator.plugins - Chrome PDF Viewer</h1>
      <h2>{pdfSupport2?"true":"false"}</h2>
      <h1>navigator.plugins - Chromium PDF Viewer</h1>
      <h2>{pdfSupport3?"true":"false"}</h2>
      <h1>navigator.plugins - Microsoft Edge PDF Viewer</h1>
      <h2>{pdfSupport4?"true":"false"}</h2>
      <h1>navigator.plugins - WebKit built-in PDF</h1>
      <h2>{pdfSupport5?"true":"false"}</h2>
      {/* <h2>{Object.entries(navigator.plugins).map(item => {})}</h2>
      <h2>{Object.entries(pdfSupportt).map(item => {})}</h2> */}
    </div>
  );
}
if ('PDF Viewer' in navigator.plugins) {
    // browser supports inline viewing of PDF files.
  }
// Object.entries(navigator.plugins).map(item => {
//     console.log(item)
//   })