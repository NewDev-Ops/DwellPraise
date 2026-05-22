"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              node.classList.add("visible");
            }, delay);
            observer.unobserve(node);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );

      observer.observe(node);
    },
    [delay]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("reveal");
    }
  }, []);

  return { ref, callback };
}
