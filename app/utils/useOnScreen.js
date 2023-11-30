import { useState, useEffect } from "react";

const useOnScreen = (ref, options) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return visible;
};

export default useOnScreen;
