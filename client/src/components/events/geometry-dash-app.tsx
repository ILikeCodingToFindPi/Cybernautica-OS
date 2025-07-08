
export default function GeometryDashApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-robot text-2xl text-yellow-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">GEOMETRY DASH</h1>
            <p className="text-gray-400">Robotics & Arduino</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-yellow-500 font-semibold">Theme:</span> Robotics & Arduino</div>
              <div><span className="text-yellow-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-yellow-500 font-semibold">Type:</span> Team (3 members)</div>
              <div><span className="text-yellow-500 font-semibold">Prize:</span> $8,500</div>
              <div><span className="text-yellow-500 font-semibold">Format:</span> Build and compete</div>
              <div><span className="text-yellow-500 font-semibold">Duration:</span> 5 hours</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge</h3>
            <p className="text-gray-300 text-sm mb-4">
              Build and program robots to navigate obstacle courses
            </p>
            <div className="text-xs text-gray-400">
              Materials provided, but teams can bring additional components
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Skills Required</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-microchip text-yellow-500"></i>
                <span>Arduino programming</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-satellite text-yellow-500"></i>
                <span>Sensor integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-cogs text-yellow-500"></i>
                <span>Mechanical design</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-puzzle-piece text-yellow-500"></i>
                <span>Problem-solving</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-bolt text-yellow-500"></i>
                <span>Electronics knowledge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Components Provided */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Components Provided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-microchip text-yellow-500"></i>
                <span>Arduino boards</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-satellite text-yellow-500"></i>
                <span>Sensors (ultrasonic, light, touch)</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-cog text-yellow-500"></i>
                <span>Motors and servos</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-cube text-yellow-500"></i>
                <span>Structural materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-tools text-yellow-500"></i>
                <span>Basic tools</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Types */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-yellow-500">Line following</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-yellow-500">Obstacle avoidance</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-yellow-500">Object pickup and placement</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Maze navigation</div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Speed challenges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-500 rounded-lg text-sm">
              C++ (Arduino IDE)
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-500 rounded-lg text-sm">
              Python (for advanced features)
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 text-cyan-500 rounded-lg text-sm">
              Block-based programming available
            </span>
          </div>
        </div>

        {/* Team Roles */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Team Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-code text-yellow-500"></i>
              </div>
              <div className="font-semibold text-yellow-500">Programmer</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-drafting-compass text-yellow-500"></i>
              </div>
              <div className="font-semibold text-yellow-500">Hardware Designer</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-chess text-yellow-500"></i>
              </div>
              <div className="font-semibold text-yellow-500">Strategist/Tester</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
