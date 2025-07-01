import { useEffect, useState } from "react";
import { useWindowManager } from "@/hooks/use-window-manager";
import Window from "@/components/window";
import Terminal from "@/components/terminal";
import Arcade from "@/components/arcade";
import AppCenter from "@/components/app-center";

export default function Desktop() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const windowManager = useWindowManager();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openTerminal = () => {
    windowManager.createWindow("terminal", "Terminal");
  };

  const openArcade = () => {
    windowManager.createWindow("arcade", "CYBERNAUTICA ARCADE");
  };

  const openAppCenter = () => {
    windowManager.createWindow("app-center", "CYBERNAUTICA CENTRAL");
  };

  const openFileManager = () => {
    windowManager.createWindow("file-manager", "File Manager");
  };

  const openSettings = () => {
    windowManager.createWindow("settings", "Settings");
  };

  const renderWindowContent = (window: any) => {
    switch (window.type) {
      case "terminal":
        return <Terminal />;
      case "arcade":
        return <Arcade />;
      case "app-center":
        return <AppCenter />;
      default:
        return <div className="p-4">Coming soon...</div>;
    }
  };

  return (
    <div className="h-screen w-full relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 cyber-glass z-30 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-cyber-cyan font-display font-bold">CYBERNAUTICA</div>
          <div className="flex space-x-2">
            <button className="text-xs text-gray-400 hover:text-cyber-cyan transition-colors">
              Activities
            </button>
            <button className="text-xs text-gray-400 hover:text-cyber-cyan transition-colors">
              Applications
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="flex space-x-2">
            <i className="fas fa-wifi text-cyber-green"></i>
            <i className="fas fa-battery-three-quarters text-cyber-green"></i>
            <i className="fas fa-volume-up text-cyber-green"></i>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="pt-16 p-8 h-full relative">
        {/* Desktop Background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
             }}>
        </div>
        
        {/* Desktop Icons */}
        <div className="absolute top-24 left-8 space-y-6 z-10">
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            onClick={openTerminal}
          >
            <i className="fas fa-terminal text-3xl text-cyber-green"></i>
            <span className="text-xs mt-1 text-center">Terminal</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            onClick={openArcade}
          >
            <i className="fas fa-gamepad text-3xl text-cyber-pink"></i>
            <span className="text-xs mt-1 text-center">Arcade</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            onClick={openAppCenter}
          >
            <i className="fas fa-th text-3xl text-cyber-cyan"></i>
            <span className="text-xs mt-1 text-center">App Center</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            onClick={openFileManager}
          >
            <i className="fas fa-folder text-3xl text-cyber-yellow"></i>
            <span className="text-xs mt-1 text-center">Files</span>
          </div>
        </div>

        {/* Windows */}
        <div className="absolute inset-0 pt-16 pb-20">
          {windowManager.windows.map((window) => (
            <Window
              key={window.id}
              window={window}
              onClose={() => windowManager.closeWindow(window.id)}
              onFocus={() => windowManager.focusWindow(window.id)}
              onMinimize={() => windowManager.minimizeWindow(window.id)}
              onMaximize={() => windowManager.maximizeWindow(window.id)}
              onMove={(position) => windowManager.updateWindowPosition(window.id, position)}
              onResize={(size) => windowManager.updateWindowSize(window.id, size)}
            >
              {renderWindowContent(window)}
            </Window>
          ))}
        </div>
      </div>

      {/* Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 cyber-glass rounded-2xl px-6 py-3 z-30">
        <div className="flex space-x-4">
          <div 
            className="dock-icon w-12 h-12 bg-cyber-green/20 rounded-xl flex items-center justify-center hover:bg-cyber-green/40 transition-all cursor-pointer glow-hover"
            onClick={openTerminal}
          >
            <i className="fas fa-terminal text-cyber-green"></i>
          </div>
          
          <div 
            className="dock-icon w-12 h-12 bg-cyber-pink/20 rounded-xl flex items-center justify-center hover:bg-cyber-pink/40 transition-all cursor-pointer glow-hover"
            onClick={openArcade}
          >
            <i className="fas fa-gamepad text-cyber-pink"></i>
          </div>
          
          <div 
            className="dock-icon w-12 h-12 bg-cyber-cyan/20 rounded-xl flex items-center justify-center hover:bg-cyber-cyan/40 transition-all cursor-pointer glow-hover"
            onClick={openAppCenter}
          >
            <i className="fas fa-th text-cyber-cyan"></i>
          </div>
          
          <div 
            className="dock-icon w-12 h-12 bg-cyber-yellow/20 rounded-xl flex items-center justify-center hover:bg-cyber-yellow/40 transition-all cursor-pointer glow-hover"
            onClick={openFileManager}
          >
            <i className="fas fa-folder text-cyber-yellow"></i>
          </div>
          
          <div 
            className="dock-icon w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center hover:bg-purple-500/40 transition-all cursor-pointer glow-hover"
            onClick={openSettings}
          >
            <i className="fas fa-cog text-purple-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
