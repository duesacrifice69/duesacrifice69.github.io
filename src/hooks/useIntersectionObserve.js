import { useEffect, useState } from "react";

export default function useIntersectionObserve({
  refs,
  rootMargin = "0px",
  threshold = 0,
}) {
  const [activeElement, setActiveElement] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //   console.log(entry);
          if (entry.isIntersecting) {
            setActiveElement(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    refs.forEach((ref) => {
      observer.observe(ref.current);
    });
  }, []);
  return activeElement;
}
