
export default function SonariaApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-music text-2xl text-indigo-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indigo-500">SONARIA</h1>
            <p className="text-gray-400">Tech Music & Visual Art</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-indigo-500 font-semibold">Theme:</span> Tech Music & Visual Art</div>
              <div><span className="text-indigo-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-indigo-500 font-semibold">Type:</span> Team (6-8 members)</div>
              <div><span className="text-indigo-500 font-semibold">Prize:</span> $6,000</div>
              <div><span className="text-indigo-500 font-semibold">Format:</span> Create and perform</div>
              <div><span className="text-indigo-500 font-semibold">Duration:</span> 6 hours</div>
              <div><span className="text-indigo-500 font-semibold">Performances:</span> Final performances in the evening</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge</h3>
            <p className="text-gray-300 text-sm">
              Create multimedia performances combining technology, music, and visual art
            </p>
          </div>
        </div>

        {/* Skills Required */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Skills Required</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-music text-indigo-500"></i>
                <span>Music production</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-palette text-indigo-500"></i>
                <span>Visual arts/animation</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-code text-indigo-500"></i>
                <span>Programming (optional)</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-users text-indigo-500"></i>
                <span>Creative collaboration</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-theater-masks text-indigo-500"></i>
                <span>Performance skills</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Categories */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="font-semibold text-indigo-500">Digital music composition</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="font-semibold text-indigo-500">Visual art creation</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="font-semibold text-indigo-500">Interactive installations</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Live performance</div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-cyan-500">Technology integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Available */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Tools Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-headphones text-indigo-500"></i>
                <span>Digital Audio Workstations</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-paint-brush text-indigo-500"></i>
                <span>Graphics/Animation software</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-video text-indigo-500"></i>
                <span>Projection equipment</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-volume-up text-indigo-500"></i>
                <span>Sound systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-laptop-code text-indigo-500"></i>
                <span>Programming environments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Judging Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-lightbulb text-yellow-500"></i>
                <span>Creativity and originality</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-cogs text-yellow-500"></i>
                <span>Technical execution</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-award text-yellow-500"></i>
                <span>Artistic merit</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-users text-yellow-500"></i>
                <span>Collaboration quality</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-heart text-yellow-500"></i>
                <span>Audience engagement</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Composition */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Team Composition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-music text-indigo-500"></i>
                <span>Musicians/Composers</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-palette text-indigo-500"></i>
                <span>Visual Artists</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-laptop-code text-indigo-500"></i>
                <span>Technical/Programming support</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-theater-masks text-indigo-500"></i>
                <span>Performance coordinators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
