import { useRef, useCallback } from 'react';

/**
 * Hook para debounce de funciones - optimización de performance
 * @param {Function} callback - Función a debounce
 * @param {number} delay - Delay en ms
 * @returns {Function} - Función debounceda
 */
const useDebounce = (callback, delay = 300) => {
  const timeoutRef = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return { debouncedFunction, cleanup };
};

export default useDebounce;
