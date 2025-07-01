import { useEffect, useRef, useState } from "react";

interface GameState {
  bird: { x: number; y: number; velocity: number };
  pipes: Array<{ x: number; height: number; scored?: boolean }>;
  score: number;
  isGameRunning: boolean;
  isGameOver: boolean;
}

export default function FlappyBitGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>({
    bird: { x: 50, y: 200, velocity: 0 },
    pipes: [],
    score: 0,
    isGameRunning: false,
    isGameOver: false,
  });

  const gameLoop = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const updateGame = () => {
      if (!gameState.isGameRunning || gameState.isGameOver) return;

      setGameState(prev => {
        const newState = { ...prev };
        
        // Update bird physics
        newState.bird.velocity += 0.6; // gravity
        newState.bird.y += newState.bird.velocity;
        
        // Update pipes
        newState.pipes = newState.pipes
          .map(pipe => ({ ...pipe, x: pipe.x - 3 }))
          .filter(pipe => pipe.x > -60);
        
        // Add new pipes
        if (newState.pipes.length === 0 || newState.pipes[newState.pipes.length - 1].x < 250) {
          newState.pipes.push({
            x: 400,
            height: Math.random() * 150 + 50,
            scored: false,
          });
        }
        
        // Check collisions
        const birdRect = { x: newState.bird.x, y: newState.bird.y, width: 20, height: 20 };
        
        // Ground and ceiling collision
        if (newState.bird.y <= 0 || newState.bird.y >= 330) {
          newState.isGameOver = true;
          newState.isGameRunning = false;
        }
        
        // Pipe collision with improved detection
        for (const pipe of newState.pipes) {
          const pipeGap = 120;
          const pipeTopRect = { x: pipe.x, y: 0, width: 50, height: pipe.height };
          const pipeBottomRect = { x: pipe.x, y: pipe.height + pipeGap, width: 50, height: 350 - pipe.height - pipeGap };
          
          // Check collision with top pipe
          if (birdRect.x < pipeTopRect.x + pipeTopRect.width &&
              birdRect.x + birdRect.width > pipeTopRect.x &&
              birdRect.y < pipeTopRect.y + pipeTopRect.height &&
              birdRect.y + birdRect.height > pipeTopRect.y) {
            newState.isGameOver = true;
            newState.isGameRunning = false;
            break;
          }
          
          // Check collision with bottom pipe
          if (birdRect.x < pipeBottomRect.x + pipeBottomRect.width &&
              birdRect.x + birdRect.width > pipeBottomRect.x &&
              birdRect.y < pipeBottomRect.y + pipeBottomRect.height &&
              birdRect.y + birdRect.height > pipeBottomRect.y) {
            newState.isGameOver = true;
            newState.isGameRunning = false;
            break;
          }
          
          // Score when passing pipe
          if (!pipe.scored && pipe.x + 50 < newState.bird.x) {
            pipe.scored = true;
            newState.score += 1;
          }
        }
        
        return newState;
      });
    };

    const render = () => {
      // Clear canvas with cyberpunk gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, 350);
      gradient.addColorStop(0, "#0A0A0F");
      gradient.addColorStop(0.5, "#1A0A2E");
      gradient.addColorStop(1, "#16213E");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 350);
      
      // Draw pipes with glow effect
      gameState.pipes.forEach(pipe => {
        const pipeGap = 120;
        
        // Pipe glow effect
        ctx.shadowColor = "#00F5FF";
        ctx.shadowBlur = 10;
        
        // Top pipe
        ctx.fillStyle = "#00F5FF";
        ctx.fillRect(pipe.x, 0, 50, pipe.height);
        
        // Top pipe cap
        ctx.fillStyle = "#0080FF";
        ctx.fillRect(pipe.x - 5, pipe.height - 20, 60, 20);
        
        // Bottom pipe
        ctx.fillStyle = "#00F5FF";
        ctx.fillRect(pipe.x, pipe.height + pipeGap, 50, 350 - pipe.height - pipeGap);
        
        // Bottom pipe cap
        ctx.fillStyle = "#0080FF";
        ctx.fillRect(pipe.x - 5, pipe.height + pipeGap, 60, 20);
        
        ctx.shadowBlur = 0;
      });
      
      // Draw bird with glow effect
      ctx.shadowColor = "#39FF14";
      ctx.shadowBlur = 8;
      ctx.fillStyle = "#39FF14";
      
      // Bird body (rounded rectangle)
      ctx.beginPath();
      ctx.roundRect(gameState.bird.x, gameState.bird.y, 20, 20, 5);
      ctx.fill();
      
      // Bird eye
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(gameState.bird.x + 15, gameState.bird.y + 8, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      
      // Draw score with glow
      ctx.shadowColor = "#00F5FF";
      ctx.shadowBlur = 5;
      ctx.fillStyle = "#00F5FF";
      ctx.font = "bold 20px JetBrains Mono";
      ctx.fillText(`SCORE: ${gameState.score}`, 10, 30);
      ctx.shadowBlur = 0;
      
      if (gameState.isGameOver) {
        // Game over overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, 400, 350);
        
        // Game over text with glow
        ctx.shadowColor = "#FF0080";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#FF0080";
        ctx.font = "bold 28px Orbitron";
        ctx.textAlign = "center";
        ctx.fillText("SYSTEM FAILURE", 200, 150);
        
        ctx.shadowColor = "#00F5FF";
        ctx.shadowBlur = 5;
        ctx.fillStyle = "#00F5FF";
        ctx.font = "bold 18px JetBrains Mono";
        ctx.fillText(`FINAL SCORE: ${gameState.score}`, 200, 180);
        
        ctx.fillStyle = "#39FF14";
        ctx.font = "16px JetBrains Mono";
        ctx.fillText("PRESS [SPACE] TO RESTART", 200, 220);
        
        ctx.textAlign = "left";
        ctx.shadowBlur = 0;
      }
    };

    const gameStep = () => {
      updateGame();
      render();
      gameLoop.current = requestAnimationFrame(gameStep);
    };

    if (gameState.isGameRunning) {
      gameLoop.current = requestAnimationFrame(gameStep);
    } else {
      render();
    }

    return () => {
      if (gameLoop.current) {
        cancelAnimationFrame(gameLoop.current);
      }
    };
  }, [gameState.isGameRunning, gameState.isGameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        
        if (gameState.isGameOver) {
          // Restart game
          setGameState({
            bird: { x: 50, y: 200, velocity: 0 },
            pipes: [],
            score: 0,
            isGameRunning: true,
            isGameOver: false,
          });
        } else if (gameState.isGameRunning) {
          // Jump
          setGameState(prev => ({
            ...prev,
            bird: { ...prev.bird, velocity: -8 },
          }));
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameState.isGameOver, gameState.isGameRunning]);

  const startGame = () => {
    setGameState({
      bird: { x: 50, y: 200, velocity: 0 },
      pipes: [],
      score: 0,
      isGameRunning: true,
      isGameOver: false,
    });
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <p className="text-gray-400 text-sm">
          Press SPACE to jump | Score: <span className="text-cyber-cyan">{gameState.score}</span>
        </p>
      </div>
      
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={350}
          className="game-canvas mx-auto"
        />
        
        {!gameState.isGameRunning && !gameState.isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <div className="text-cyber-cyan font-display text-xl mb-4">READY TO PLAY?</div>
              <button
                onClick={startGame}
                className="bg-cyber-pink px-6 py-2 rounded-lg font-semibold text-black hover:bg-white transition-all glow-hover"
              >
                START GAME
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-cyber-cyan/20 px-4 py-2 rounded-lg text-cyber-cyan border border-cyber-cyan/30 hover:bg-cyber-cyan/40 transition-all text-sm">
          High Scores
        </button>
        <button className="bg-cyber-green/20 px-4 py-2 rounded-lg text-cyber-green border border-cyber-green/30 hover:bg-cyber-green/40 transition-all text-sm">
          Controls
        </button>
      </div>
    </div>
  );
}
