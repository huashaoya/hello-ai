import { useState, useEffect, useRef, useCallback } from 'react';
import './BackToTop.css';

export function BackToTop({ hasBack, onBack }) {
  const [showTop, setShowTop] = useState(false);
  const [backPosition, setBackPosition] = useState(() => {
    const saved = localStorage.getItem('back-btn-position');
    return saved ? JSON.parse(saved) : { x: null, y: null };
  });
  const [topPosition, setTopPosition] = useState(() => {
    const saved = localStorage.getItem('top-btn-position');
    return saved ? JSON.parse(saved) : { x: null, y: null };
  });
  const [isDragging, setIsDragging] = useState(null);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  useEffect(() => {
    const toggleVisible = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const saveBackPosition = useCallback((x, y) => {
    const newPos = { x, y };
    setBackPosition(newPos);
    localStorage.setItem('back-btn-position', JSON.stringify(newPos));
  }, []);

  const saveTopPosition = useCallback((x, y) => {
    const newPos = { x, y };
    setTopPosition(newPos);
    localStorage.setItem('top-btn-position', JSON.stringify(newPos));
  }, []);

  const handleDragStart = (e, btn) => {
    setIsDragging(btn);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    const pos = btn === 'back' ? backPosition : topPosition;
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      initialX: pos.x ?? (btn === 'back' ? 16 : 70),
      initialY: pos.y ?? (btn === 'back' ? 100 : 100)
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

    if (isDragging === 'back') {
      saveBackPosition(newX, newY);
    } else {
      saveTopPosition(newX, newY);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(null);
  };

  const scrollToTop = () => {
    if (isDragging) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!hasBack && !showTop) return null;

  const backRight = backPosition.x !== null ? backPosition.x : 16;
  const backBottom = backPosition.y !== null ? backPosition.y : 100;
  const topRight = topPosition.x !== null ? topPosition.x : 70;
  const topBottom = topPosition.y !== null ? topPosition.y : 100;

  return (
    <div
      className="mobile-nav-buttons"
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
    >
      {hasBack && (
        <button
          className={`mobile-nav-btn mobile-nav-btn--back ${isDragging === 'back' ? 'dragging' : ''}`}
          style={{ right: backRight, bottom: backBottom }}
          onClick={isDragging ? undefined : onBack}
          onMouseDown={(e) => handleDragStart(e, 'back')}
          onTouchStart={(e) => handleDragStart(e, 'back')}
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {showTop && (
        <button
          className={`mobile-nav-btn mobile-nav-btn--top ${isDragging === 'top' ? 'dragging' : ''}`}
          style={{ right: topRight, bottom: topBottom }}
          onClick={isDragging ? undefined : scrollToTop}
          onMouseDown={(e) => handleDragStart(e, 'top')}
          onTouchStart={(e) => handleDragStart(e, 'top')}
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
