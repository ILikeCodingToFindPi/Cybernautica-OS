import { useEffect, useState } from "react";
import { useWindowManager } from "@/hooks/use-window-manager";
import Window from "@/components/window";
import Terminal from "@/components/terminal";
import Arcade from "@/components/arcade";
import AppCenter from "@/components/app-center";
import Settings from "@/components/settings";
import CodeundrumApp from "@/components/events/codeundrum-app";
import HackademiaApp from "@/components/events/hackademia-app";
import CyphranexusApp from "@/components/events/cyphranexus-app";
import HighStakesApp from "@/components/events/high-stakes-app";
import BreakingVirtualApp from "@/components/events/breaking-virtual-app";
import GeometryDashApp from "@/components/events/geometry-dash-app";
import SonariaApp from "@/components/events/sonaria-app";

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
    windowManager.createWindow("settings", "Settings Event Details)");
  };

  const renderWindowContent = (window: any) => {
    switch (window.type) {
      case "terminal":
        return <Terminal />;
      case "arcade":
        return <Arcade />;
      case "app-center":
        return <AppCenter />;
      case "settings":
        return <Settings />;
      case "codeundrum-app":
        return <CodeundrumApp />;
      case "hackademia-app":
        return <HackademiaApp />;
      case "cyphranexus-app":
        return <CyphranexusApp />;
      case "high-stakes-app":
        return <HighStakesApp />;
      case "breaking-virtual-app":
        return <BreakingVirtualApp />;
      case "geometry-dash-app":
        return <GeometryDashApp />;
      case "sonaria-app":
        return <SonariaApp />;
      case "file-manager":
        return (
          <div className="p-4 text-center">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-bold text-cyber-cyan mb-2">File Manager</h3>
            <p className="text-gray-400">File system browser coming soon...</p>
          </div>
        );
      default:
        return <div className="p-4">Coming soon...</div>;
    }
  };

  return (
    <div className="h-screen w-full relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 cyber-glass z-30 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/cybernautica-logo.png" 
              alt="Cybernautica Logo" 
              className="w-8 h-8 object-contain logo-header"
            />
            <div className="text-cyber-cyan font-display font-bold">CYBERNAUTICA</div>
            <img 
              src="/assets/school-logo.png" 
              alt="School Logo" 
              className="w-8 h-8 object-contain logo-header"
            />
          </div>
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
        <div className="absolute inset-0 cyber-wallpaper">
          {/* Main wallpaper layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900"></div>
          
          {/* Event logo backdrop */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <img 
              src="/assets/cybernautica-logo.png" 
              alt="Cybernautica Logo" 
              className="w-96 h-96 object-contain logo-backdrop"
            />
          </div>
          
          {/* Cybernautica themed wallpaper */}
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-gradient-to-br from-cyber-dark via-purple-900/30 to-cyber-dark" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 245, 255, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 75% 75%, rgba(255, 0, 128, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 30%),
                linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.05) 50%, transparent 70%)
              `
            }}></div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 opacity-30">
            <div className="particle-1 absolute w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" style={{
              top: '20%',
              left: '10%',
              animationDelay: '0s',
              animationDuration: '3s'
            }}></div>
            <div className="particle-2 absolute w-1 h-1 bg-cyber-pink rounded-full animate-pulse" style={{
              top: '60%',
              right: '15%',
              animationDelay: '1s',
              animationDuration: '4s'
            }}></div>
            <div className="particle-3 absolute w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse" style={{
              bottom: '30%',
              left: '70%',
              animationDelay: '2s',
              animationDuration: '5s'
            }}></div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cybernautica-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00F5FF" strokeWidth="0.5" opacity="0.6"/>
                  <circle cx="25" cy="25" r="1" fill="#00F5FF" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cybernautica-grid)" />
            </svg>
          </div>

          {/* Cybernautica logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src="/assets/cybernautica-logo.png" 
              alt="Cybernautica Logo" 
              className="w-80 h-80 object-contain opacity-10 select-none"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-element-1 absolute w-32 h-32 border border-cyber-cyan/10 rounded-full animate-spin" style={{
              top: '15%',
              right: '20%',
              animationDuration: '20s'
            }}></div>
            <div className="floating-element-2 absolute w-24 h-24 border border-cyber-pink/10 rounded-full animate-spin" style={{
              bottom: '25%',
              left: '15%',
              animationDuration: '25s',
              animationDirection: 'reverse'
            }}></div>
          </div>
        </div>
        
        {/* Desktop Icons */}
        <div className="absolute top-24 left-8 space-y-4 z-10">
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openTerminal}
          >
            <div className="w-12 h-12 bg-cyber-green/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-green/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-green/30">
              <i className="fas fa-terminal text-xl text-cyber-green"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">Terminal</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openArcade}
          >
            <div className="w-12 h-12 bg-cyber-pink/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-pink/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-pink/30">
              <i className="fas fa-gamepad text-xl text-cyber-pink"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">Arcade</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openAppCenter}
          >
            <div className="w-12 h-12 bg-cyber-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-cyan/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-cyan/30">
              <i className="fas fa-th text-xl text-cyber-cyan"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">App Center</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openFileManager}
          >
            <div className="w-12 h-12 bg-cyber-yellow/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-yellow/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-yellow/30">
              <i className="fas fa-folder text-xl text-cyber-yellow"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">Files</span>
          </div>
          
          <div 
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openSettings}
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/40 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/30">
              <i className="fas fa-cog text-xl text-purple-500"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">Settings</span>
          </div>

          {/* Installed Event Apps */}
          {windowManager.installedApps.map((app) => (
            <div 
              key={app.id}
              className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => windowManager.createWindow(app.type as any, `${app.name} - Event Details`)}
            >
              <div className={`w-12 h-12 bg-${app.color}/20 rounded-xl flex items-center justify-center group-hover:bg-${app.color}/40 transition-all group-hover:shadow-lg group-hover:shadow-${app.color}/30`}>
                <i className={`${app.icon} text-xl text-${app.color}`}></i>
              </div>
              <span className="text-xs mt-2 text-center font-medium">{app.name}</span>
            </div>
          ))}
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
