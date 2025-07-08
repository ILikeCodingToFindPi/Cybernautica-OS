
export default function CyphranexusApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyber-pink to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-lock text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cyber-pink">CYPHRANEXUS</h1>
              <p className="text-gray-400">Cryptography & Puzzle Solving</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyber-pink">$7,000</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyber-pink mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-cyber-cyan">Team Size:</span> 2 members (1 Grade 12)</div>
              <div><span className="text-cyber-cyan">Duration:</span> 4 hours</div>
              <div><span className="text-cyber-cyan">Format:</span> Puzzle solving</div>
              <div><span className="text-cyber-cyan">Deadline:</span> July 11, 2025</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyber-pink mb-3">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {["Cryptography", "Pattern Recognition", "Mathematical Puzzles", "Historical Ciphers"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyber-pink/20 rounded-full text-xs text-cyber-pink">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-cyber-pink mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-cyber-pink/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyber-cyan mb-2">Classical Ciphers</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Caesar and Substitution ciphers</li>
                <li>• Book ciphers</li>
                <li>• Vigenère ciphers</li>
                <li>• Transposition ciphers</li>
              </ul>
            </div>
            <div className="border border-cyber-pink/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyber-cyan mb-2">Modern Cryptography</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Hash function puzzles</li>
                <li>• Digital signatures</li>
                <li>• Steganography challenges</li>
                <li>• Cryptographic protocols</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-cyber-pink mb-4">Registration Information</h3>
          <p className="text-gray-300 mb-4">
            Teams will navigate through interconnected cryptographic puzzles, each revealing clues to the next challenge. 
            This event combines historical ciphers with modern cryptographic concepts.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-cyber-pink text-black font-semibold rounded-lg hover:bg-white transition-all">
              Register Team
            </button>
            <button className="px-6 py-3 border border-cyber-pink text-cyber-pink font-semibold rounded-lg hover:bg-cyber-pink hover:text-black transition-all">
              View Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
