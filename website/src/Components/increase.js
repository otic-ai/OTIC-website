import React, { useEffect, useRef, useState } from 'react';

const PercentageCounter = ({ maxCount }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCount(0); // Restart the count to zero
          let currentCount = 0;
          const interval = setInterval(() => {
            if (currentCount >= (maxCount-1)) {
              clearInterval(interval);
            }
            setCount((prevCount) => prevCount + 1);
            currentCount += 1;
          }, 10);
        }
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [maxCount]);

  return (
    <div ref={counterRef}>
      <h1 className='percentage'>{count}%</h1>
    </div>
  );
};

export default PercentageCounter;
