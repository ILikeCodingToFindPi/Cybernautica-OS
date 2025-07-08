
export default function BreakingVirtualApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-vr-cardboard text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-purple-500">BREAKING VIRTUAL</h1>
              <p className="text-gray-400">VR + Real-world Puzzles</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-500">$9,000</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-500 mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-cyber-cyan">Team Size:</span> 4 members</div>
              <div><span className="text-cyber-cyan">Duration:</span> 3 hours</div>
              <div><span className="text-cyber-cyan">Format:</span> Progressive challenges</div>
              <div><span className="text-cyber-cyan">Equipment:</span> Provided</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-500 mb-3">Team Roles</h3>
            <div className="space-y-2 text-sm">
              <div>• <span className="text-cyber-cyan">VR Navigator:</span> Virtual environment expert</div>
              <div>• <span className="text-cyber-cyan">Physical Solver:</span> Real-world puzzle handler</div>
              <div>• <span className="text-cyber-cyan">Coordinator:</span> Team communication</div>
              <div>• <span className="text-cyber-cyan">Strategist:</span> Analysis and planning</div>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "VR Escape Rooms", desc: "Navigate complex 3D virtual environments" },
              { name: "Physical Puzzles", desc: "Manipulate real-world objects and mechanisms" },
              { name: "Mixed Reality", desc: "Combine virtual and physical elements" },
              { name: "Team Coordination", desc: "Synchronize actions across realities" }
            ].map((challenge) => (
              <div key={challenge.name} className="border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyber-cyan mb-2">{challenge.name}</h4>
                <p className="text-sm text-gray-300">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Equipment & Setup</h3>
          <p className="text-gray-300 mb-4">
            All VR equipment, controllers, and physical puzzle components will be provided. 
            Teams will work through progressive challenges that require coordination between virtual and physical spaces.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg hover:bg-white transition-all">
              Form Team
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-black transition-all">
              View Challenges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
