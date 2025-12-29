import { useEffect, useRef, useState } from 'react';
import './customcursor.scss';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Smooth follow effect usando requestAnimationFrame
    const animate = () => {
      // Easing para el círculo exterior (más lento)
      const delay = 0.15;
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // El punto interno sigue directamente
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' ||
                         target.tagName === 'BUTTON' ||
                         target.closest('a') ||
                         target.closest('button') ||
                         target.style.cursor === 'pointer' ||
                         window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setIsHidden(false);
    };

    // Iniciar animación
    animate();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  // No mostrar en dispositivos móviles
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsHidden(isTouchDevice);
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isHidden ? 'hidden' : ''} ${isPointer ? 'pointer' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline ${isHidden ? 'hidden' : ''} ${isPointer ? 'pointer' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
