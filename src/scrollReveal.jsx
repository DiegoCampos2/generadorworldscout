import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else if (options.resetOnExit) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -10% 0px',
      ...options
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export function ScrollReveal({ children, delay = 0, className = '', style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${inView ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function StickyImageSwitcher({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers = [];
    sections.forEach((sec, idx) => {
      if (!sec.ref?.current) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveIndex(idx);
      }, {
        threshold: 0.5,
        rootMargin: '-30% 0px -30% 0px'
      });
      observer.observe(sec.ref.current);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [sections]);

  return (
    <div className="sticky-image-container">
      {sections.map((sec, idx) => (
        <div
          key={idx}
          className={`sticky-image ${activeIndex === idx ? 'sticky-image--active' : ''}`}
        >
          {sec.images.map((img, i) => (
            <img key={i} src={img} alt={sec.alt || ''} />
          ))}
        </div>
      ))}
    </div>
  );
}
