import { useState, useEffect, useRef, useCallback } from 'react';
import './BackToTop.css';

export function BackToTop({ hasBack, onBack }) {
  const [showTop, setShowTop] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('back-btn-position');
    return saved ? JSON.parse(saved) : { x: null, y: null };
  });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  useEffect(() => {
    const toggleVisible = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const savePosition = useCallback((x, y) => {
    const newPos = { x, y };
    setPosition(newPos);
    localStorage.setItem('back-btn-position', JSON.stringify(newPos));
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      initialX: position.x ?? (window.innerWidth - 70),
      initialY: position.y ?? (window.innerHeight - 150)
    };
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - dragRef.current.startX;
    const deltaY = clientY - dragRef.current.startY;

    const newX = Math.max(0, Math.min(window.innerWidth - 50, dragRef.current.initialX - deltaX));
    const newY = Math.max(0, Math.min(window.innerHeight - 150, dragRef.current.initialY - deltaY));

    savePosition(newX, newY);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!hasBack && !showTop) return null;

  const rightPos = position.x !== null ? position.x : 16;
  const bottomPos = position.y !== null ? position.y : 100;

  return (
    <div className="mobile-nav-buttons">
      {hasBack && (
        <button
          className={`mobile-nav-btn mobile-nav-btn--back ${isDragging ? 'dragging' : ''}`}
          style={{ right: rightPos, bottom: bottomPos }}
          onClick={onBack}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDrag}
          onTouchEnd={handleDragEnd}
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {showTop && (
        <button
          className="mobile-nav-btn mobile-nav-btn--top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}
