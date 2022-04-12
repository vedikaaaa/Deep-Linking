import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function goto(url, fallback) {
  var script = document.createElement('script'); 

  script.onload = function() { 
      document.location = url;
      // window.open(url);
  } 
  script.onerror = function() { 
      document.location = fallback;
      // window.open(fallback);
  } 
  script.setAttribute('src', url); 

  document.getElementsByTagName('head')[0].appendChild(script);

}

function clickButton  () {
  if (isAndroid) {
    // const url =
    //   "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

    // window.open();
    goto("intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end","intent://office.com/#Intent;scheme=https;package=com.microsoft.office.officehubrow;end");
  } else if (isIOS) {
    // window.location.replace("instagram://");

    // setTimeout(() => {
    //   window.open(
    //     "https://apps.apple.com/us/app/instagram/id389801252"
    //   );
    // }, 10000);
    goto('https://teams.microsoft.com/l/chat/0/0?users=Email','instagram://');
    
  } else {
    // goto("msteams://","ms-word://");
    goto("www.msteams.com","www.ms-word.com");
  }
};

const App = () => {
  // useEffect(() => {
  //   if (isAndroid) {
  //     const url =
  //       "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

  //     window.location.replace(url);
  //   } else if (isIOS) {
  //     window.location.replace("instagram://");

  //     setTimeout(() => {
  //       window.location.replace(
  //         "https://apps.apple.com/us/app/instagram/id389801252"
  //       );
  //     }, 10000);
  //   } else {
  //     window.location.replace("https://instagram.com");
  //   }
  // }, []);

  return (
    <div className="App">
      <div>
        If you have not been automatically redirected, click on the following link:
      </div>
      <div><button  
      onClick={clickButton}>
          Open in App
        </button></div>
      
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
};

export default App;
