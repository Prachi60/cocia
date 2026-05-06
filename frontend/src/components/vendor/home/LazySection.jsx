import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, height = '200px', offset = '600px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: offset,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={sectionRef} style={{ minHeight: height }}>
      {isIntersecting ? children : null}
    </div>
  );
};

export default React.memo(LazySection);
