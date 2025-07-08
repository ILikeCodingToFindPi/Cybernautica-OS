
export default function CyphranexusApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-cyber-pink/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-lock text-2xl text-cyber-pink"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyber-pink">CYPHRANEXUS</h1>
            <p className="text-gray-400">Cryptography and Puzzle Solving</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-cyber-pink font-semibold">Theme:</span> Cryptography and Puzzle Solving</div>
              <div><span className="text-cyber-pink font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-cyber-pink font-semibold">Type:</span> Team (2 members, must include 1 Grade 12 student)</div>
              <div><span className="text-cyber-pink font-semibold">Registration Limit:</span> 8 teams in total; first-come, first-serve basis</div>
              <div><span className="text-cyber-pink font-semibold">Prerequisites:</span> Basic idea of a Book Cipher (Example: Beale Ciphers)</div>
              <div><span className="text-cyber-pink font-semibold">Event Date:</span> July 18, 2025</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Skills Required</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <i className="fas fa-book text-cyber-pink"></i>
                <span>Book ciphers and classical cryptography</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-route text-cyber-pink"></i>
                <span>Trail-following and clue interpretation</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-calculator text-cyber-pink"></i>
                <span>Mathematical puzzle solving</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-search text-cyber-pink"></i>
                <span>Pattern recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-history text-cyber-pink"></i>
                <span>Historical cipher knowledge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Types */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="border-l-4 border-cyber-pink pl-4">
                <div className="font-semibold text-cyber-pink">Caesar and Substitution ciphers</div>
              </div>
              <div className="border-l-4 border-cyber-pink pl-4">
                <div className="font-semibold text-cyber-pink">Beale Cipher-based riddles</div>
              </div>
              <div className="border-l-4 border-cyber-pink pl-4">
                <div className="font-semibold text-cyber-pink">Steganography challenges</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Hash function puzzles</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Digital signature verification</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Modern cryptographic protocols</div>
              </div>
            </div>
          </div>
        </div>

        {/* What is CYPHRANEXUS */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is CYPHRANEXUS?</h3>
          <div className="bg-cyber-pink/10 border border-cyber-pink/30 rounded-lg p-4">
            <h4 className="font-semibold text-cyber-pink mb-2">Find the Key, Follow the Trail, Decipher!</h4>
            <p className="text-gray-300 text-sm">
              Be ready to engage in mind-bending puzzles and to perceive meaningful connections between seemingly unrelated things. 
              Participants will use their expertise in technology and their problem-solving abilities to decrypt a powerful message, 
              all while racing against the clock. Are you up for the challenge?
            </p>
          </div>
        </div>

        {/* Event Heads */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Heads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyber-pink/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-cyber-pink"></i>
                </div>
                <div>
                  <div className="font-semibold text-cyber-pink">Aditya Kathait</div>
                  <div className="text-sm text-gray-400">kathaitaditya12@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyber-pink/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-cyber-pink"></i>
                </div>
                <div>
                  <div className="font-semibold text-cyber-pink">Riya Shivram</div>
                  <div className="text-sm text-gray-400">riya.shivram@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
