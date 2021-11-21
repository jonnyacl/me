import { useCallback, useEffect, useState } from "react";

function useScrollScale(onScroll: Function | null = null) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [currScrollY, setCurrScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const listener = useCallback(
    (e) => {
      setIsScrollingDown(e.target.scrollingElement.scrollTop > currScrollY);
      if (currScrollY) {
        setPrevScrollY(currScrollY);
      }
      setCurrScrollY(e.target.scrollingElement.scrollTop);
      setHasScrolled(true);
      onScroll && onScroll();
    },
    [onScroll, currScrollY]
  );
  useEffect(() => {
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [listener]);

  return { hasScrolled, currScrollY, isScrollingDown, prevScrollY };
}

export default useScrollScale;
