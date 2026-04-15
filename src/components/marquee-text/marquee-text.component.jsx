import { useRef, useEffect, useState } from 'react';

const MarqueeText = ({ text, className = '', containerClass = '' }) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const el = measureRef.current;
    if (!el || !container) return;

    const check = () => {
      setIsOverflow(el.scrollWidth > container.clientWidth);
    };

    check();

    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [text]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${containerClass}`}>
      <span
        ref={measureRef}
        aria-hidden="true"
        className={`absolute invisible whitespace-nowrap pointer-events-none ${className}`}
      >
        {text}
      </span>

      {isOverflow ? (
        <div
          className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          <span className={`shrink-0 ${className}`}>{text}</span>
          <span className={`shrink-0 pl-16 ${className}`}>{text}</span>
        </div>
      ) : (
        <span className={`block whitespace-nowrap ${className}`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default MarqueeText;
