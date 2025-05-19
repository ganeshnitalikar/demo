import { useEffect, useRef } from "react";

const useFocusOnMount = (shouldFocus = true) => {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus && ref.current) {
      // Focus the element
      ref.current.focus();

      // Scroll the element into view
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [shouldFocus]);

  return ref;
};

export default useFocusOnMount;
