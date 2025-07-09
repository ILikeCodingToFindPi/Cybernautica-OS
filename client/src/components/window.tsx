import { useRef, useEffect, useState } from "react";
import { Window as WindowType } from "@/hooks/use-window-manager";

interface WindowProps {
  window: WindowType;
  children: React.ReactNode;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onMove: (position: { x: number; y: number }) => void;
  onResize: (size: { width: number; height: number }) => void;
}

export default function Window({
  window,
  children,
  onClose,
  onFocus,
  onMinimize,
  onMaximize,
  onMove,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && windowRef.current) {
        const newPosition = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        };
        onMove(newPosition);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, onMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (headerRef.current?.contains(e.target as Node)) {
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsDragging(true);
        onFocus();
      }
    }
  };

  const getWindowColor = () => {
    switch (window.type) {
      case "terminal":
        return "border-cyber-green";
      case "app-center":
        return "border-cyber-cyan";
      default:
        return "border-cyber-cyan";
    }
  };

  const getIconColor = () => {
    switch (window.type) {
      case "terminal":
        return "text-cyber-green";
      case "app-center":
        return "text-cyber-cyan";
      default:
        return "text-cyber-cyan";
    }
  };

  if (window.isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`absolute cyber-glass rounded-lg window-shadow window-enter ${getWindowColor()} max-w-[95vw] max-h-[90vh] sm:max-w-none sm:max-h-none`}
      style={{
        left: window.position.x,
        top: window.position.y,
        width: window.isMaximized ? "100%" : window.size.width,
        height: window.isMaximized ? "calc(100% - 80px)" : window.size.height,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => onFocus()}
    >
      {/* Window Header */}
      <div
        ref={headerRef}
        className={`bg-cyber-slate rounded-t-lg px-4 py-2 flex justify-between items-center border-b ${getWindowColor()}/30 cursor-move`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyber-red rounded-full"></div>
          <div className="w-3 h-3 bg-cyber-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-cyber-green rounded-full"></div>
          <span className={`ml-4 text-sm font-mono ${getIconColor()}`}>
            {window.title}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onMinimize}
            className="text-gray-400 hover:text-cyber-yellow transition-colors"
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            onClick={onMaximize}
            className="text-gray-400 hover:text-cyber-green transition-colors"
          >
            <i className="fas fa-expand"></i>
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-cyber-red transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="bg-black/80 rounded-b-lg h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
