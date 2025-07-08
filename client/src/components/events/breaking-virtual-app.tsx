
export default function BreakingVirtualApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-vr-cardboard text-2xl text-purple-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-purple-500">BREAKING VIRTUAL</h1>
            <p className="text-gray-400">VR + Real-world Puzzles</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-purple-500 font-semibold">Theme:</span> VR + Real-world Puzzles</div>
              <div><span className="text-purple-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-purple-500 font-semibold">Type:</span> Team (4 members)</div>
              <div><span className="text-purple-500 font-semibold">Prize:</span> $9,000</div>
              <div><span className="text-purple-500 font-semibold">Format:</span> Progressive challenges</div>
              <div><span className="text-purple-500 font-semibold">Duration:</span> 3 hours</div>
              <div><span className="text-purple-500 font-semibold">Team formation deadline:</span> July 11, 2025</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Components</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <i className="fas fa-vr-cardboard text-purple-500"></i>
                <span>Virtual Reality escape rooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-puzzle-piece text-purple-500"></i>
                <span>Physical puzzle solving</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-layer-group text-purple-500"></i>
                <span>Mixed reality challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-users text-purple-500"></i>
                <span>Collaborative problem solving</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Skills Required</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-cube text-purple-500"></i>
                <span>Spatial reasoning</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-comments text-purple-500"></i>
                <span>Teamwork and communication</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-sync-alt text-purple-500"></i>
                <span>Adaptability to VR environments</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-lightbulb text-purple-500"></i>
                <span>Logical thinking</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-hand-paper text-purple-500"></i>
                <span>Physical dexterity</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Equipment Provided */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Equipment Provided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-headset text-purple-500"></i>
                <span>VR headsets and controllers</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-puzzle-piece text-purple-500"></i>
                <span>Physical puzzle components</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-desktop text-purple-500"></i>
                <span>Mixed reality interfaces</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-tools text-purple-500"></i>
                <span>Collaboration tools</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Types */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-semibold text-purple-500">3D maze navigation</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-semibold text-purple-500">Object manipulation in VR</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-semibold text-purple-500">Pattern recognition across realities</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Time-based challenges</div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Coordination between virtual and physical spaces</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Roles */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Team Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-headset text-purple-500"></i>
                <span>VR Navigator</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-puzzle-piece text-purple-500"></i>
                <span>Physical Puzzle Solver</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-broadcast-tower text-purple-500"></i>
                <span>Coordinator/Communication</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-chart-line text-purple-500"></i>
                <span>Strategy/Analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
