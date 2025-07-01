import { useState, useCallback } from "react";

export interface Window {
  id: string;
  type: "terminal" | "arcade" | "app-center" | "file-manager" | "settings" | "codeundrum-app" | "hackademia-app" | "cyphranexus-app" | "high-stakes-app" | "breaking-virtual-app" | "geometry-dash-app" | "sonaria-app";
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
}

export function useWindowManager() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1000);

  const createWindow = useCallback((type: Window["type"], title: string) => {
    const newWindow: Window = {
      id: `${type}-${Date.now()}`,
      type,
      title,
      position: {
        x: Math.random() * 200 + 100,
        y: Math.random() * 100 + 100,
      },
      size: getDefaultSize(type),
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
    };

    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
    return newWindow.id;
  }, [nextZIndex]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(window => window.id !== id));
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(window => 
      window.id === id 
        ? { ...window, zIndex: nextZIndex, isMinimized: false }
        : window
    ));
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(window =>
      window.id === id ? { ...window, isMinimized: true } : window
    ));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(window =>
      window.id === id 
        ? { ...window, isMaximized: !window.isMaximized }
        : window
    ));
  }, []);

  const updateWindowPosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(window =>
      window.id === id ? { ...window, position } : window
    ));
  }, []);

  const updateWindowSize = useCallback((id: string, size: { width: number; height: number }) => {
    setWindows(prev => prev.map(window =>
      window.id === id ? { ...window, size } : window
    ));
  }, []);

  return {
    windows,
    createWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    maximizeWindow,
    updateWindowPosition,
    updateWindowSize,
  };
}

function getDefaultSize(type: Window["type"]): { width: number; height: number } {
  switch (type) {
    case "terminal":
      return { width: 800, height: 500 };
    case "arcade":
      return { width: 600, height: 700 };
    case "app-center":
      return { width: 900, height: 600 };
    case "file-manager":
      return { width: 700, height: 500 };
    case "settings":
      return { width: 900, height: 650 };
    case "codeundrum-app":
    case "hackademia-app":
    case "cyphranexus-app":
    case "high-stakes-app":
    case "breaking-virtual-app":
    case "geometry-dash-app":
    case "sonaria-app":
      return { width: 1000, height: 700 };
    default:
      return { width: 600, height: 400 };
  }
}
