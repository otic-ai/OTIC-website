import React, { useRef, useEffect, useState } from 'react';


const FadeTransition = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Adjust the threshold value as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    return (
      <div ref={ref} className={`fade ${isVisible ? 'fade-enter' : 'fade-exit'}`}>
        {children}
      </div>
    );
  };
  
export default FadeTransition;