
export default function HighStakesApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-cards text-2xl text-red-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-500">HIGH STAKES</h1>
            <p className="text-gray-400">Strategy Card Games</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-red-500 font-semibold">Theme:</span> Strategy Card Games</div>
              <div><span className="text-red-500 font-semibold">Grades:</span> 10-12</div>
              <div><span className="text-red-500 font-semibold">Type:</span> Solo</div>
              <div><span className="text-red-500 font-semibold">Prize:</span> $5,000</div>
              <div><span className="text-red-500 font-semibold">Format:</span> Tournament style</div>
              <div><span className="text-red-500 font-semibold">Duration:</span> 4 hours</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Game Types</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <i className="fas fa-spade text-red-500"></i>
                <span>Poker variants</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-heart text-red-500"></i>
                <span>Blackjack strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-diamond text-red-500"></i>
                <span>Custom card games</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-club text-red-500"></i>
                <span>Probability-based challenges</span>
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
                <i className="fas fa-percentage text-red-500"></i>
                <span>Mathematical probability</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-balance-scale text-red-500"></i>
                <span>Risk assessment</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-chess text-red-500"></i>
                <span>Strategic thinking</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-clock text-red-500"></i>
                <span>Decision making under pressure</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-mask text-red-500"></i>
                <span>Bluffing and psychology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Structure */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Structure</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-500">Multiple rounds of different card games</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-500">Elimination-style tournament</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-500">Final table with top performers</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-500">Real-time strategy adjustments</div>
            </div>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Judging Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-trophy text-yellow-500"></i>
                <span>Consistency across games</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-brain text-yellow-500"></i>
                <span>Strategic decision making</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-sync text-yellow-500"></i>
                <span>Adaptability to new game rules</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-calculator text-yellow-500"></i>
                <span>Mathematical accuracy</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-yellow-500"></i>
                <span>Risk management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration Info */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Registration Information</h3>
          <div className="space-y-3 text-sm">
            <div><span className="text-red-500 font-semibold">Registration:</span> Open</div>
            <div><span className="text-red-500 font-semibold">Experience Required:</span> None - rules will be explained</div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3 mt-4">
              <p className="text-yellow-500 text-sm font-semibold">
                No prior card game experience required - rules will be explained
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
