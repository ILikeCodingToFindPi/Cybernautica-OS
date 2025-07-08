export default function HackademiaApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-cyber-cyan/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-brain text-2xl text-cyber-cyan"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyber-cyan">HACKADEMIA</h1>
            <p className="text-gray-400">AI for Education</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-cyber-cyan font-semibold">Theme:</span> AI for Education</div>
              <div><span className="text-cyber-cyan font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-cyber-cyan font-semibold">Type:</span> Team (2-3 members)</div>
              <div><span className="text-cyber-cyan font-semibold">Prize:</span> $8,000</div>
              <div><span className="text-cyber-cyan font-semibold">Tech Stack:</span> Any programming language</div>
              <div><span className="text-cyber-cyan font-semibold">Deployment:</span> via GitHub</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Goal</h3>
            <p className="text-gray-300 text-sm">
              Build educational AI tools like chatbot tutors. This event challenges students to create 
              innovative AI solutions for educational purposes.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Key Features to Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-robot text-cyber-cyan"></i>
                <span>AI-powered chatbot tutors</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-cyber-cyan"></i>
                <span>Automated grading systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-user-graduate text-cyber-cyan"></i>
                <span>Personalized learning assistants</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <i className="fas fa-book text-cyber-cyan"></i>
                <span>Educational content recommendation systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-calendar text-cyber-cyan"></i>
                <span>Study schedule optimization tools</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Overview</h3>
          <p className="text-gray-300 mb-4">
            Teams will develop AI-powered tools that can assist in learning, such as intelligent tutoring 
            systems, automated grading systems, or personalized learning assistants.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-cyber-cyan mb-3">Judging Criteria</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-lightbulb text-cyber-green"></i>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-cogs text-cyber-green"></i>
                  <span>Technical implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-graduation-cap text-cyber-green"></i>
                  <span>Educational impact</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-user text-cyber-green"></i>
                  <span>User experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-expand-arrows-alt text-cyber-green"></i>
                  <span>Scalability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Registration Info */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Registration Information</h3>
          <div className="space-y-3 text-sm">
            <div><span className="text-cyber-cyan font-semibold">Registration:</span> Open now!</div>
            <div><span className="text-cyber-cyan font-semibold">Deadline:</span> July 18, 2025</div>
            <div><span className="text-cyber-cyan font-semibold">Contact:</span> events@npshsr.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}