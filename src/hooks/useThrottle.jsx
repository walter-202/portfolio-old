import { useRef, useCallback } from 'react';

/**
 * Hook para throttle de funciones - optimización de performance
 * @param {Function} callback - Función a throttlear
 * @param {number} delay - Delay en ms
 * @returns {Function} - Función throttleada
 */
const useThrottle = (callback, delay = 100) => {
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef(null);

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now();
      const timeSinceLastRun = now - lastRun.current;

      if (timeSinceLastRun >= delay) {
        callback(...args);
        lastRun.current = now;
      } else {
        // Clear previous timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Set new timeout to ensure last call is executed
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastRun.current = Date.now();
        }, delay - timeSinceLastRun);
      }
    },
    [callback, delay]
  );

  return throttledFunction;
};

export default useThrottle;
