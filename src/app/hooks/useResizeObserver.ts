import { useCallback, useEffect, useRef, useState } from "react";

export interface ElementSize {
  width: number;
  height: number;
}

/**
 * Observes an element's content-box dimensions and returns them reactively.
 * Attach the returned `ref` to the element you want to measure.
 */
export function useResizeObserver<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    const entry = entries[0];
    if (!entry) return;
    const { width, height } = entry.contentRect;
    setSize({ width, height });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Capture the initial size synchronously to avoid a flash.
    const { width, height } = el.getBoundingClientRect();
    setSize({ width, height });

    const observer = new ResizeObserver(handleResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleResize]);

  return { ref, size };
}
