
export default function HighStakesApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-cards text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-red-500">HIGH STAKES</h1>
              <p className="text-gray-400">Strategy Card Games</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-red-500">$5,000</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-500 mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-cyber-cyan">Type:</span> Solo</div>
              <div><span className="text-cyber-cyan">Grades:</span> 10-12</div>
              <div><span className="text-cyber-cyan">Duration:</span> 4 hours</div>
              <div><span className="text-cyber-cyan">Format:</span> Tournament style</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-500 mb-3">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {["Probability", "Risk Assessment", "Strategic Thinking", "Decision Making"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-red-500/20 rounded-full text-xs text-red-500">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Game Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Poker Variants", desc: "Texas Hold'em, Omaha, and custom variants" },
              { name: "Blackjack Strategy", desc: "Optimal play and card counting techniques" },
              { name: "Custom Card Games", desc: "Unique rules and strategic challenges" },
              { name: "Probability Challenges", desc: "Mathematical card game puzzles" }
            ].map((game) => (
              <div key={game.name} className="border border-red-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyber-cyan mb-2">{game.name}</h4>
                <p className="text-sm text-gray-300">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Tournament Structure</h3>
          <p className="text-gray-300 mb-4">
            Multiple rounds of different card games in elimination-style tournament format. 
            No prior experience required - all rules will be explained before each game.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-white transition-all">
              Register Now
            </button>
            <button className="px-6 py-3 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-black transition-all">
              Game Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
