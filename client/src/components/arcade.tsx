import FlappyBitGame from "@/components/flappy-bit-game";

export default function Arcade() {
  return (
    <div className="h-full p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display text-cyber-pink neon-text">
          CYBERNAUTICA ARCADE
        </h2>
        <p className="text-gray-400 mt-2">Choose your digital destiny</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Flappy-Bit Game */}
        <div className="cyber-glass rounded-lg p-4 border border-cyber-pink/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-display text-cyber-pink">FLAPPY-BIT</h3>
            <p className="text-gray-400 text-sm">Navigate through the digital void</p>
          </div>
          <FlappyBitGame />
        </div>

        {/* Coming Soon Games */}
        <div className="cyber-glass rounded-lg p-4 border border-cyber-cyan/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-display text-cyber-cyan">HACK THE PLANET</h3>
            <p className="text-gray-400 text-sm">Break into the mainframe</p>
          </div>
          <div className="h-40 bg-black/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-lock text-4xl text-cyber-cyan mb-2"></i>
              <p className="text-cyber-cyan">COMING SOON</p>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-4 border border-cyber-green/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-display text-cyber-green">PING PONG TELNET</h3>
            <p className="text-gray-400 text-sm">Classic with a cyber twist</p>
          </div>
          <div className="h-40 bg-black/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-lock text-4xl text-cyber-green mb-2"></i>
              <p className="text-cyber-green">COMING SOON</p>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-4 border border-cyber-purple/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-display text-cyber-purple">NEURAL MAZE</h3>
            <p className="text-gray-400 text-sm">Navigate the AI's mind</p>
          </div>
          <div className="h-40 bg-black/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-lock text-4xl text-cyber-purple mb-2"></i>
              <p className="text-cyber-purple">COMING SOON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
