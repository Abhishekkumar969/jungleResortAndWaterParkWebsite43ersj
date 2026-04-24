import { useEffect } from 'react';


const useDisableInspect = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
      }

      // Prevent Zoom (Ctrl + +/-/0)
      if (
        (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) ||
        (e.ctrlKey && e.key === '0')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Debugger Trap
    // This will pause the execution if DevTools is open, making it hard to use the inspector.
    const debuggerInterval = setInterval(() => {
      // We use a function constructor to bypass some basic detection
      (function () {
        return false;
      }
      ['constructor']('debugger')
      ['call']());
    }, 1000);

    // Add listeners to the document
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(debuggerInterval);
    };
  }, []);
};

export default useDisableInspect;
