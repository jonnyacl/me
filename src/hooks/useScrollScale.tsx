import { useCallback, useEffect, useState } from "react";

function useScrollScale(onScroll: Function | null = null) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const listener = useCallback(
    (e) => {
      setScrollY(e.target.scrollingElement.scrollTop);
      setHasScrolled(true);
      onScroll && onScroll();
    },
    [onScroll]
  );
  useEffect(() => {
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [listener]);

  return { hasScrolled, scrollY };
}

export default useScrollScale;
