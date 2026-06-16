import { useEffect } from "react";

export function useClickOutside(ref, handler, isOpen) {
  useEffect(() => {
    if (!isOpen) return;

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("pointerdown", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, handler, isOpen]);
}

