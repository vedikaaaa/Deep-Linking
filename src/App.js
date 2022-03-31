// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const App = () => {
  useEffect(() => {
    if (isAndroid) {
      const url =
        "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace("splitwise://");

      setTimeout(() => {
        // window.location.replace(
        //   "https://apps.apple.com/us/app/instagram/id389801252"
          
        // );
        window.location.replace(
          
          "https://apps.apple.com/in/app/splitwise/id458023433"
        );
      }, 10000);
    } else {
      window.location.replace("https://splitwise.com");
    }
  }, []);

  return (
    <div className="App">
      <div>
        If you have not been automatically redirected, click on the following link:
      </div>
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/splitwise/id458023433">
          Open iOS app
        </a>
      ) : (
        <a href="https://splitwise.com">Open Web app</a>
      )}
    </div>
  );
};

export default App;
