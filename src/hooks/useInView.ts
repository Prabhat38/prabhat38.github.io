import { useEffect, useState, type RefObject } from 'react';

export function useInView(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0.2 }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}
