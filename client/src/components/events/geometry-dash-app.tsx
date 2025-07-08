export default function GeometryDashApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-microchip text-2xl text-yellow-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">GEOMETRY DASH</h1>
            <p className="text-gray-400">Arduino Programming & Robotics</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-yellow-500 font-semibold">Theme:</span> Arduino Programming & Robotics</div>
              <div><span className="text-yellow-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-yellow-500 font-semibold">Type:</span> Team Event</div>
              <div><span className="text-yellow-500 font-semibold">Team Size:</span> 3 members per team</div>
              <div><span className="text-yellow-500 font-semibold">Time Limit:</span> Ten-minute coding sprint</div>
              <div><span className="text-yellow-500 font-semibold">Registration Limit:</span> 1 team per school</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Prerequisites</h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-yellow-500">Python Fundamentals</div>
                <div className="text-gray-400">Variables, control flow (loops, if/else), and simple functions</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Arduino Knowledge</div>
                <div className="text-gray-400">Basic understanding of Arduino motor and sensor commands (reference sheet will be provided)</div>
              </div>
            </div>
          </div>
        </div>

        {/* What is GEOMETRY DASH */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is GEOMETRY DASH?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Geometry Dash challenges each team to transform pure Python logic into flawless motion. In a ten-minute coding sprint, 
              participants will program an Arduino line-tracing rover to replicate intricate geometric figures with speed and precision. 
              External references are prohibited; only algorithmic insight decides the outcome as judges score path fidelity, execution time, and efficiency. 
              The labyrinth-level patterns, which conclude the event push even seasoned programmers to the edge.
            </p>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-yellow-500">Task</div>
                <div className="text-gray-400 text-sm">Program an Arduino line-tracing rover to replicate intricate geometric figures</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Judging Criteria</div>
                <div className="text-gray-400 text-sm">Path fidelity, execution time, and efficiency</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyber-green pl-4">
                <div className="font-semibold text-cyber-green">Equipment</div>
                <div className="text-gray-400 text-sm">Additional hardware for building the bot, or uploading the code is not required</div>
              </div>
              <div className="border-l-4 border-cyber-pink pl-4">
                <div className="font-semibold text-cyber-pink">Challenge Level</div>
                <div className="text-gray-400 text-sm">Labyrinth-level patterns that push even seasoned programmers to the edge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Heads */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Heads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-yellow-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-yellow-500">Arjun Sinha</div>
                  <div className="text-sm text-gray-400">arjun@iqlect.com</div>
                </div>
              </div>
            </div>
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-yellow-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-yellow-500">Nihaar S</div>
                  <div className="text-sm text-gray-400">nihaars@hotmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}