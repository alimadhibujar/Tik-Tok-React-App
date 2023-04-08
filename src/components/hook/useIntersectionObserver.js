import { useEffect, useState } from "react";
// https://blog.logrocket.com/build-custom-tiktok-autoplay-react-hook-intersection-observer/
const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = ref.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
