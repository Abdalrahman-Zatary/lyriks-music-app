import { useRef, useEffect, useState } from 'react';

const MarqueeText = ({ text, className = '', containerClass = '' }) => {
  const measureRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const check = () => {
      setIsOverflow(el.scrollWidth > el.parentElement?.clientWidth);
    };

    check();

    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [text]);

  return (
    <div className={`overflow-hidden ${containerClass}`}>
      {isOverflow ? (
        <div
          className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          <span className={`shrink-0 ${className}`}>{text}</span>
          <span className={`shrink-0 pl-16 ${className}`}>{text}</span>
        </div>
      ) : (
        <span
          ref={measureRef}
          className={`block whitespace-nowrap ${className}`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default MarqueeText;
