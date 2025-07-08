export default function HighStakesApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-diamond text-2xl text-purple-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-purple-500">HIGH STAKES</h1>
            <p className="text-gray-400">Card-based Strategy Games</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-purple-500 font-semibold">Theme:</span> Card-based Strategy Games</div>
              <div><span className="text-purple-500 font-semibold">Grades:</span> 10-12</div>
              <div><span className="text-purple-500 font-semibold">Type:</span> Solo Event</div>
              <div><span className="text-purple-500 font-semibold">Team Size:</span> 2 participants per school (individual participation)</div>
              <div><span className="text-purple-500 font-semibold">Equipment:</span> Event will be conducted at the school computer lab</div>
              <div><span className="text-purple-500 font-semibold">Registration Limit:</span> 7 teams in total; first-come, first-serve basis</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Prerequisites</h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-semibold text-purple-500">Card Games</div>
                <div className="text-gray-400">Basic familiarity with card games</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Strategy Skills</div>
                <div className="text-gray-400">Ability to predict and strategize under pressure</div>
              </div>
              <div className="border-l-4 border-cyber-green pl-4">
                <div className="font-semibold text-cyber-green">Programming</div>
                <div className="text-gray-400">Basic familiarity with Java and Python</div>
              </div>
            </div>
          </div>
        </div>

        {/* What is HIGH STAKES */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is HIGH STAKES?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Step into the exhilarating world of High Stakes! A thrilling multi-round strategy-based event that blends timeless classics 
              with smart risk-taking. Participants will battle it out through various card related chance games. With credits at stake and 
              eliminations at every turn, only the sharpest minds will survive till the end. The leaderboard is your lifeline-stay on top 
              or get knocked out!
            </p>
          </div>
        </div>

        {/* Event Heads */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Heads</h3>
          <div className="space-y-3">
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-purple-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-purple-500">Anshuman Kesavan</div>
                  <div className="text-sm text-gray-400">anshuman.s.kesavan@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-purple-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-500">Tejaas Muthukumar</div>
                    <div className="text-sm text-gray-400">tejaas08@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-purple-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-500">Goutham Ramanathan</div>
                    <div className="text-sm text-gray-400">gouthamramanathan1234@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}