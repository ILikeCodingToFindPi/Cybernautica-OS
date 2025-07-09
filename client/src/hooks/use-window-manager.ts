import { useState, useCallback, useEffect } from "react";

export interface Window {
  id: string;
  type: "terminal" | "app-center" | "file-manager" | "settings" | "codeundrum-app" | "hackademia-app" | "cyphranexus-app" | "high-stakes-app" | "breaking-virtual-app" | "geometry-dash-app" | "sonaria-app";
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
}

export interface InstalledApp {
  id: number;
  name: string;
  type: string;
  icon: string;
  color: string;
}

export function useWindowManager() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1000);
  const [installedApps, setInstalledApps] = useState<InstalledApp[]>([]);

  // Load installed apps from localStorage on mount
  useEffect(() => {
    const savedApps = localStorage.getItem('cybernautica-installed-apps');
    if (savedApps) {
      setInstalledApps(JSON.parse(savedApps));
    }
  }, []);

  // Save installed apps to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cybernautica-installed-apps', JSON.stringify(installedApps));
  }, [installedApps]);

  const addInstalledApp = useCallback((app: InstalledApp) => {
    setInstalledApps(prev => {
      // Check if app is already installed
      if (prev.find(installedApp => installedApp.id === app.id)) {
        return prev;
      }
      const newApps = [...prev, app];
      // Force immediate state update
      setTimeout(() => {
        setInstalledApps(current => [...current]);
      }, 0);
      return newApps;
    });
  }, []);

  const removeInstalledApp = useCallback((appId: number) => {
    setInstalledApps(prev => prev.filter(app => app.id !== appId));
  }, []);

  const createWindow = useCallback((type: Window["type"], title: string) => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const defaultSize = getDefaultSize(type);
    
    const newWindow: Window = {
      id: `${type}-${Date.now()}`,
      type,
      title,
      position: {
        x: isMobile ? 10 : Math.random() * 200 + 100,
        y: isMobile ? 80 : Math.random() * 100 + 100,
      },
      size: isMobile ? {
        width: Math.min(defaultSize.width, window.innerWidth - 20),
        height: Math.min(defaultSize.height, window.innerHeight - 120)
      } : defaultSize,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: isMobile ? true : false, // Auto-maximize on mobile
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
    installedApps,
    addInstalledApp,
    removeInstalledApp,
  };
}

function getDefaultSize(type: Window["type"]): { width: number; height: number } {
  const isMobile = window.innerWidth < 640;
  
  if (isMobile) {
    return {
      width: window.innerWidth - 20,
      height: window.innerHeight - 120
    };
  }
  
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