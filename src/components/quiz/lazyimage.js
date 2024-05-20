import { useState, useEffect, useRef } from "react";
import "./lazyimage.css"
const LazyImage = ({ src, alt, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      onClick={onClick}
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className="quiz-image"
    />
  );
};
export default LazyImage;
