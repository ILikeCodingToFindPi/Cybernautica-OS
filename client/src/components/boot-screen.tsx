import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "Initializing quantum processors...",
  "Loading neural network drivers...",
  "Mounting /dev/hack...",
  "Starting cybersecurity modules...",
  "Establishing encrypted connections...",
  "Loading AI assistant protocols...",
  "Initializing holographic display...",
  "Quantum encryption enabled...",
  "System ready for operation..."
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [bootTime, setBootTime] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootTime(prev => {
        const newTime = prev + 0.1;
        
        // Add new log every 0.5 seconds
        if (currentLogIndex < bootLogs.length && newTime >= (currentLogIndex + 1) * 0.5) {
          setDisplayedLogs(prev => [...prev, bootLogs[currentLogIndex]]);
          setCurrentLogIndex(prev => prev + 1);
        }
        
        // Complete boot after 5 seconds
        if (newTime >= 5.0) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
        
        return newTime;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentLogIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-start p-8 font-mono text-cyber-green">
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <span className="text-cyber-cyan">[</span>
          <span className="text-white">{bootTime.toFixed(6)}</span>
          <span className="text-cyber-cyan">]</span>
          <span className="text-cyber-green">CYBERNAUTICA OS v2.1.0 booting...</span>
        </div>
        <div className="space-y-1">
          {displayedLogs.map((log, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-cyber-cyan">[</span>
              <span className="text-white">{((index + 1) * 0.5).toFixed(6)}</span>
              <span className="text-cyber-cyan">]</span>
              <span className="text-cyber-green">{log}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="text-2xl font-display neon-text text-cyber-cyan">
            <div>╔═══════════════════════════════════════╗</div>
            <div>║        CYBERNAUTICA OS v2.1.0        ║</div>
            <div>║     Advanced Hacking Environment     ║</div>
            <div>╚═══════════════════════════════════════╝</div>
          </div>
        </div>
      </div>
    </div>
  );
}
