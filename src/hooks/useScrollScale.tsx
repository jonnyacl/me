import { useEffect, useState } from 'react';

const useScrollScale = (onScroll?: () => void) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [scroll, setScroll] = useState({ current: 0, previous: 0 });
  useEffect(() => {
    const scroller = (e: Event) => {
      if (e instanceof Event && e.target) {
        const target = e.target as Document;
        if (target.scrollingElement) {
          setIsScrollingDown(
            target.scrollingElement.scrollTop > scroll.current
          );
          if (scroll.current) {
            setScroll({
              current: target.scrollingElement.scrollTop,
              previous: scroll.current,
            });
          }
          setHasScrolled(true);
          onScroll && onScroll();
        }
      }
    };
    document.addEventListener('scroll', scroller);
    return () => document.removeEventListener('scroll', scroller);
  }, [scroll, onScroll]);

  return { hasScrolled, scroll, isScrollingDown };
};

export default useScrollScale;
