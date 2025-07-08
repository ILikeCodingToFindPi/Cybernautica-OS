
export default function GeometryDashApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-robot text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-yellow-500">GEOMETRY DASH</h1>
              <p className="text-gray-400">Robotics & Arduino</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-yellow-500">$8,500</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-500 mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-cyber-cyan">Team Size:</span> 3 members</div>
              <div><span className="text-cyber-cyan">Duration:</span> 5 hours</div>
              <div><span className="text-cyber-cyan">Format:</span> Build and compete</div>
              <div><span className="text-cyber-cyan">Materials:</span> Provided</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-500 mb-3">Team Roles</h3>
            <div className="space-y-2 text-sm">
              <div>• <span className="text-cyber-cyan">Programmer:</span> Arduino coding</div>
              <div>• <span className="text-cyber-cyan">Designer:</span> Hardware assembly</div>
              <div>• <span className="text-cyber-cyan">Tester:</span> Strategy and optimization</div>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Challenge Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Line Following", desc: "Program robots to follow marked paths" },
              { name: "Obstacle Avoidance", desc: "Navigate around dynamic obstacles" },
              { name: "Object Manipulation", desc: "Pick up and place objects precisely" },
              { name: "Maze Navigation", desc: "Solve complex maze challenges" }
            ].map((challenge) => (
              <div key={challenge.name} className="border border-yellow-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyber-cyan mb-2">{challenge.name}</h4>
                <p className="text-sm text-gray-300">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Components & Programming</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-cyber-cyan mb-2">Provided Components:</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• Arduino boards and shields</li>
              <li>• Ultrasonic, light, and touch sensors</li>
              <li>• Motors, servos, and wheels</li>
              <li>• Structural materials and connectors</li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-white transition-all">
              Register Team
            </button>
            <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all">
              Component List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
