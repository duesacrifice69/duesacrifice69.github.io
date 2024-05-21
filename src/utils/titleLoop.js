import { useEffect } from "react";

export default function useTitleLoop() {
  let intervalId;
  let timeoutId;
  useEffect(() => {
    let len = 0;
    const titleText = document.title;
    let titleIncrease = true;
    intervalId = setInterval(() => {
      if (titleIncrease) {
        document.title = titleText.slice(0, len++);
        if (len == titleText.length) {
          timeoutId = setTimeout(() => {
            titleIncrease = false;
          }, 1000);
        }
      } else {
        document.title = titleText.slice(0, len--);
        if (len == 1) {
          titleIncrease = true;
        }
      }
    }, 500);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
}
