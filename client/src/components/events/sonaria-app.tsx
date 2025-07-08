
export default function SonariaApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-music text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-indigo-500">SONARIA</h1>
              <p className="text-gray-400">Tech Music & Visual Art</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-500">$6,000</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-indigo-500 mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-cyber-cyan">Team Size:</span> 6-8 members</div>
              <div><span className="text-cyber-cyan">Duration:</span> 6 hours</div>
              <div><span className="text-cyber-cyan">Format:</span> Create and perform</div>
              <div><span className="text-cyber-cyan">Performance:</span> Evening showcase</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-4">
            <h3 className="text-lg font-semibold text-indigo-500 mb-3">Team Composition</h3>
            <div className="space-y-2 text-sm">
              <div>• <span className="text-cyber-cyan">Musicians:</span> Composers and performers</div>
              <div>• <span className="text-cyber-cyan">Visual Artists:</span> Graphics and animation</div>
              <div>• <span className="text-cyber-cyan">Technicians:</span> Programming support</div>
              <div>• <span className="text-cyber-cyan">Coordinators:</span> Performance management</div>
            </div>
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-indigo-500 mb-4">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Digital Music", desc: "Electronic composition and production" },
              { name: "Visual Art", desc: "Digital graphics and animation" },
              { name: "Interactive Installations", desc: "Technology-enhanced experiences" },
              { name: "Live Performance", desc: "Real-time multimedia shows" }
            ].map((category) => (
              <div key={category.name} className="border border-indigo-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyber-cyan mb-2">{category.name}</h4>
                <p className="text-sm text-gray-300">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-500 mb-4">Tools & Equipment</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-cyber-cyan mb-2">Available Tools:</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• Digital Audio Workstations (DAWs)</li>
              <li>• Graphics and animation software</li>
              <li>• Projection and sound systems</li>
              <li>• Programming environments</li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-indigo-500 text-black font-semibold rounded-lg hover:bg-white transition-all">
              Form Team
            </button>
            <button className="px-6 py-3 border border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-black transition-all">
              Software List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
