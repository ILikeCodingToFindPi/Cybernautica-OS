import { useEffect, useState } from "react";
import { useWindowManager } from "@/hooks/use-window-manager";
import Window from "@/components/window";
import Terminal from "@/components/terminal";
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
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const windowManager = useWindowManager();

  useEffect(() => {
    const targetDate = new Date("2025-07-18T10:00:00+05:30"); // 10:00 AM IST on July 25th, 2025

    const updateTimes = () => {
      setCurrentTime(new Date());

      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const openTerminal = () => {
    windowManager.createWindow("terminal", "Terminal");
  };

  const openAppCenter = () => {
    windowManager.createWindow("app-center", "CYBERNAUTICA CENTRAL");
  };

  const openFileManager = () => {
    windowManager.createWindow("file-manager", "File Manager");
  };

  const openSettings = () => {
    windowManager.createWindow("settings", "Settings (Event Details)");
  };

  const renderWindowContent = (window: any) => {
    switch (window.type) {
      case "terminal":
        return <Terminal />;
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
            <h3 className="text-xl font-bold text-cyber-cyan mb-2">
              File Manager
            </h3>
            <p className="text-gray-400">File system browser coming soon...</p>
          </div>
        );
      default:
        return <div className="p-4">Coming soon...</div>;
    }
  };

  return (
    <div
      className="h-screen w-full relative"
      style={{
        backgroundImage:
          'url("https://drive.google.com/thumbnail?id=12LT96_XXBbJsTOyhBRlrejkX0YeQXTRr")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 cyber-glass z-30 px-2 sm:px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1 sm:space-x-3">
            <div className="text-cyber-cyan font-display font-bold text-sm sm:text-base">
              CYBERNAUTICA
            </div>
          </div>
          <div className="hidden sm:flex space-x-2">
            <button className="text-xs text-gray-400 hover:text-cyber-cyan transition-colors">
              Activities
            </button>
            <button className="text-xs text-gray-400 hover:text-cyber-cyan transition-colors">
              Applications
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 text-cyber-cyan hover:text-cyber-pink transition-colors"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <i className={`fas ${showMobileMenu ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="text-xs sm:text-sm">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="flex space-x-1 sm:space-x-2">
            <i className="fas fa-wifi text-cyber-green"></i>
            <i className="fas fa-battery-three-quarters text-cyber-green"></i>
            <i className="fas fa-volume-up text-cyber-green"></i>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="pt-16 p-2 sm:p-8 h-full relative">
        {/* Countdown Display - Responsive */}
        <div className="countdown-widget absolute right-2 sm:right-8 top-16 bg-gray-800 bg-opacity-80 p-2 sm:p-4 rounded-lg shadow-lg z-10 max-w-xs sm:max-w-none">
          {timeLeft && (
            <div className="text-sm sm:text-2xl text-bold text-white">
              <span className="font-semibold block sm:inline">Event in: </span>
              <span className="block sm:inline">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </span>
            </div>
          )}
        </div>
        <div className="absolute right-2 sm:right-8 top-32 sm:top-36 bg-cyber-cyan/10 backdrop-blur-md border border-cyber-cyan/30 text-white text-xs sm:text-sm px-2 sm:px-4 py-2 rounded-lg shadow-lg z-10 max-w-xs">
          <div className="font-semibold text-cyber-cyan mb-1">📍 Venue</div>
          <div>NPSHSR Auditorium</div>
          <div className="mt-2 font-semibold text-cyber-cyan">📅 Date</div>
          <div>18th July 2025</div>
        </div>

        {/* Desktop Background */}
        <div className="absolute inset-0 cyber-wallpaper">
          {/* Main wallpaper layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900"></div>

          {/* Cybernautica logo backdrop - main wallpaper */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <img
              src="client/public/assets/cybernautica-logo.png"
              alt="Cybernautica Logo"
              className="w-screen h-screen object-contain logo-backdrop"
            />
          </div>

          {/* Cybernautica themed wallpaper */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="h-full w-full bg-gradient-to-br from-cyber-dark via-purple-900/30 to-cyber-dark"
              style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 245, 255, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 75% 75%, rgba(255, 0, 128, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 30%),
                linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.05) 50%, transparent 70%)
              `,
              }}
            ></div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="particle-1 absolute w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"
              style={{
                top: "20%",
                left: "10%",
                animationDelay: "0s",
                animationDuration: "3s",
              }}
            ></div>
            <div
              className="particle-2 absolute w-1 h-1 bg-cyber-pink rounded-full animate-pulse"
              style={{
                top: "60%",
                right: "15%",
                animationDelay: "1s",
                animationDuration: "4s",
              }}
            ></div>
            <div
              className="particle-3 absolute w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"
              style={{
                bottom: "30%",
                left: "70%",
                animationDelay: "2s",
                animationDuration: "5s",
              }}
            ></div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="cybernautica-grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#00F5FF"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />
                  <circle cx="25" cy="25" r="1" fill="#00F5FF" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cybernautica-grid)" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="floating-element-1 absolute w-32 h-32 border border-cyber-cyan/10 rounded-full animate-spin"
              style={{
                top: "15%",
                right: "20%",
                animationDuration: "20s",
              }}
            ></div>
            <div
              className="floating-element-2 absolute w-24 h-24 border border-cyber-pink/10 rounded-full animate-spin"
              style={{
                bottom: "25%",
                left: "15%",
                animationDuration: "25s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>
        </div>

        {/* Desktop Icons - System Apps - Mobile Responsive */}
        <div className="absolute top-20 sm:top-24 left-2 sm:left-8 grid grid-cols-4 sm:grid-cols-1 gap-2 sm:gap-4 z-10 sm:space-y-0">
          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openTerminal}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-cyber-green/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-green/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-green/30">
              <i className="fas fa-terminal text-lg sm:text-xl text-cyber-green"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">
              Terminal
            </span>
          </div>

          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openAppCenter}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-cyber-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-cyan/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-cyan/30">
              <i className="fas fa-th text-lg sm:text-xl text-cyber-cyan"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">
              App Center
            </span>
          </div>

          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openFileManager}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-cyber-yellow/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-yellow/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-yellow/30">
              <i className="fas fa-folder text-lg sm:text-xl text-cyber-yellow"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">Files</span>
          </div>

          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={openSettings}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/40 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/30">
              <i className="fas fa-cog text-lg sm:text-xl text-purple-500"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">
              Settings
            </span>
          </div>
        </div>

        {/* Event Apps Row - Mobile Responsive */}
        <div className="absolute top-48 sm:top-24 left-2 sm:left-32 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 z-10">
          {/* CODEUNDRUM */}
          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "codeundrum-app",
                "CODEUNDRUM - Event Details",
              )
            }
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-cyber-green/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-green/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-green/30">
              <i className="fas fa-code text-lg sm:text-xl text-cyber-green"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">
              CODEUNDRUM
            </span>
          </div>

          {/* HACKADEMIA */}
          <div
            className="desktop-icon flex flex-col items-center w-16 sm:w-20 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "hackademia-app",
                "HACKADEMIA - Event Details",
              )
            }
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-cyber-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-cyan/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-cyan/30">
              <i className="fas fa-robot text-lg sm:text-xl text-cyber-cyan"></i>
            </div>
            <span className="text-xs mt-1 sm:mt-2 text-center font-medium">
              HACKADEMIA
            </span>
          </div>

          {/* CYPHRANEXUS */}
          <div
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "cyphranexus-app",
                "CYPHRANEXUS - Event Details",
              )
            }
          >
            <div className="w-12 h-12 bg-cyber-pink/20 rounded-xl flex items-center justify-center group-hover:bg-cyber-pink/40 transition-all group-hover:shadow-lg group-hover:shadow-cyber-pink/30">
              <i className="fas fa-lock text-xl text-cyber-pink"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">
              CYPHRANEXUS
            </span>
          </div>

          {/* HIGH STAKES */}
          <div
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "high-stakes-app",
                "HIGH STAKES - Event Details",
              )
            }
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/40 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/30">
              <i className="fas fa-dice text-xl text-purple-500"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">
              HIGH STAKES
            </span>
          </div>

          {/* BREAKING VIRTUAL */}
          <div
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "breaking-virtual-app",
                "BREAKING VIRTUAL - Event Details",
              )
            }
          >
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/40 transition-all group-hover:shadow-lg group-hover:shadow-red-500/30">
              <i className="fas fa-vr-cardboard text-xl text-red-500"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">
              BREAKING VIRTUAL
            </span>
          </div>

          {/* GEOMETRY DASH */}
          <div
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "geometry-dash-app",
                "GEOMETRY DASH - Event Details",
              )
            }
          >
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/40 transition-all group-hover:shadow-lg group-hover:shadow-yellow-500/30">
              <i className="fas fa-microchip text-xl text-yellow-500"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">
              GEOMETRY DASH
            </span>
          </div>

          {/* SONARIA */}
          <div
            className="desktop-icon flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            onClick={() =>
              windowManager.createWindow(
                "sonaria-app",
                "SONARIA - Event Details",
              )
            }
          >
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/40 transition-all group-hover:shadow-lg group-hover:shadow-indigo-500/30">
              <i className="fas fa-music text-xl text-indigo-500"></i>
            </div>
            <span className="text-xs mt-2 text-center font-medium">
              SONARIA
            </span>
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
              onMove={(position) =>
                windowManager.updateWindowPosition(window.id, position)
              }
              onResize={(size) =>
                windowManager.updateWindowSize(window.id, size)
              }
            >
              {renderWindowContent(window)}
            </Window>
          ))}
        </div>
      </div>

      {/* Dock - Hidden on Mobile */}
      <div className="hidden sm:block fixed bottom-4 left-1/2 transform -translate-x-1/2 cyber-glass rounded-2xl px-6 py-3 z-30">
        <div className="flex space-x-4">
          <div
            className="dock-icon w-12 h-12 bg-cyber-green/20 rounded-xl flex items-center justify-center hover:bg-cyber-green/40 transition-all cursor-pointer glow-hover"
            onClick={openTerminal}
          >
            <i className="fas fa-terminal text-cyber-green"></i>
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

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 sm:hidden">
          <div className="cyber-glass m-4 mt-20 p-6 rounded-lg">
            <h3 className="text-cyber-cyan font-display text-lg mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  openTerminal();
                  setShowMobileMenu(false);
                }}
                className="flex flex-col items-center p-4 rounded-xl bg-cyber-green/20 hover:bg-cyber-green/40 transition-all"
              >
                <i className="fas fa-terminal text-2xl text-cyber-green mb-2"></i>
                <span className="text-sm">Terminal</span>
              </button>
              <button
                onClick={() => {
                  openAppCenter();
                  setShowMobileMenu(false);
                }}
                className="flex flex-col items-center p-4 rounded-xl bg-cyber-cyan/20 hover:bg-cyber-cyan/40 transition-all"
              >
                <i className="fas fa-th text-2xl text-cyber-cyan mb-2"></i>
                <span className="text-sm">App Center</span>
              </button>
              <button
                onClick={() => {
                  openSettings();
                  setShowMobileMenu(false);
                }}
                className="flex flex-col items-center p-4 rounded-xl bg-purple-500/20 hover:bg-purple-500/40 transition-all"
              >
                <i className="fas fa-cog text-2xl text-purple-500 mb-2"></i>
                <span className="text-sm">Settings</span>
              </button>
              <button
                onClick={() => {
                  openFileManager();
                  setShowMobileMenu(false);
                }}
                className="flex flex-col items-center p-4 rounded-xl bg-cyber-yellow/20 hover:bg-cyber-yellow/40 transition-all"
              >
                <i className="fas fa-folder text-2xl text-cyber-yellow mb-2"></i>
                <span className="text-sm">Files</span>
              </button>
            </div>
            <div className="mt-6">
              <h4 className="text-cyber-pink font-semibold mb-3">Events</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <button
                  onClick={() => {
                    windowManager.createWindow("codeundrum-app", "CODEUNDRUM - Event Details");
                    setShowMobileMenu(false);
                  }}
                  className="p-2 rounded bg-cyber-green/20 text-cyber-green"
                >
                  CODEUNDRUM
                </button>
                <button
                  onClick={() => {
                    windowManager.createWindow("hackademia-app", "HACKADEMIA - Event Details");
                    setShowMobileMenu(false);
                  }}
                  className="p-2 rounded bg-cyber-cyan/20 text-cyber-cyan"
                >
                  HACKADEMIA
                </button>
                <button
                  onClick={() => {
                    windowManager.createWindow("cyphranexus-app", "CYPHRANEXUS - Event Details");
                    setShowMobileMenu(false);
                  }}
                  className="p-2 rounded bg-cyber-pink/20 text-cyber-pink"
                >
                  CYPHRANEXUS
                </button>
                <button
                  onClick={() => {
                    windowManager.createWindow("high-stakes-app", "HIGH STAKES - Event Details");
                    setShowMobileMenu(false);
                  }}
                  className="p-2 rounded bg-purple-500/20 text-purple-500"
                >
                  HIGH STAKES
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}