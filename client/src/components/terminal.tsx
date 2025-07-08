import { useState, useEffect, useRef } from "react";
import { processCommand } from "@/lib/terminal-commands";
import { ThemeContext } from "@/hooks/use-theme";

interface TerminalLine {
  type: "command" | "output";
  content: string;
  timestamp: number;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: "Welcome to CYBERNAUTICA Terminal v2.1.0\nType 'help' for available commands\n All important details are present here...navigate the filesystem to find them.",
      timestamp: Date.now(),
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("~");
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const handleInputSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const command = currentInput.trim();
      
      // Add command to history
      setLines(prev => [
        ...prev,
        {
          type: "command",
          content: `user@cybernautica:${currentDirectory}$ ${command}`,
          timestamp: Date.now(),
        },
      ]);

      // Process command
      const { output, newDirectory } = processCommand(command, currentDirectory);
      
      if (newDirectory !== undefined) {
        setCurrentDirectory(newDirectory);
      }

      if (output) {
        setLines(prev => [
          ...prev,
          {
            type: "output",
            content: output,
            timestamp: Date.now(),
          },
        ]);
      }

      setCurrentInput("");
    }
  };

  const handleSpecialCommands = (command: string) => {
    if (command === "clear") {
      setLines([]);
      return true;
    }
    return false;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Output */}
      <div
        ref={outputRef}
        className="flex-1 p-4 font-mono text-sm terminal-output overflow-auto"
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === "command" ? (
              <div className="text-cyber-cyan">{line.content}</div>
            ) : (
              <div
                className="text-cyber-green whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: line.content }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <div className="p-4 border-t border-cyber-green/30 flex items-center">
        <span className="text-cyber-cyan font-mono text-sm mr-2">
          user@cybernautica:{currentDirectory}$
        </span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleInputSubmit}
          className="flex-1 bg-transparent border-none outline-none text-cyber-green font-mono text-sm"
          autoFocus
        />
        <span className="text-cyber-green animate-pulse">█</span>
      </div>
    </div>
  );
}
