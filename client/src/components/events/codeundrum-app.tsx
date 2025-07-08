export default function CodeundrumApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-cyber-green/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-code text-2xl text-cyber-green"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyber-green">CODEUNDRUM</h1>
            <p className="text-gray-400">Competitive Coding Challenge</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-cyber-green font-semibold">Theme:</span> Competitive Coding</div>
              <div><span className="text-cyber-green font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-cyber-green font-semibold">Type:</span> Solo Event</div>
              <div><span className="text-cyber-green font-semibold">Team Size:</span> 2 participants per school</div>
              <div><span className="text-cyber-green font-semibold">Equipment:</span> Computer systems provided</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Competition Rounds</h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-cyber-green pl-4">
                <div className="font-semibold text-cyber-green">Level 1: Cornered!</div>
                <div className="text-gray-400">Testing exception and error handling</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Level 2: Executed!</div>
                <div className="text-gray-400">Write codes based on problem statements at an advanced level from scratch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Languages */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Supported Languages</h3>
          <div className="flex flex-wrap gap-3">
            {["Python", "Java", "C", "C++"].map((lang) => (
              <span key={lang} className="px-3 py-1 bg-cyber-green/20 border border-cyber-green text-cyber-green rounded-lg text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge Description */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is CODEUNDRUM?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Codeundrum is an exciting, individual, competitive coding competition designed to challenge students' programming skills. 
              This event is crafted to explore several facets of a coder's abilities - a true "code conundrum".
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-cyber-green mb-3">Prerequisites</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-code text-cyber-cyan"></i>
                    <span>Fundamental to intermediate level programming concepts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-code text-cyber-cyan"></i>
                    <span>At least one programming language (Python, Java, C or C++)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-code text-cyber-cyan"></i>
                    <span>Error handling knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-cyber-green mb-3">Event Head</h4>
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyber-green/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-cyber-green"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-green">Netra Karthigeyan</div>
                    <div className="text-sm text-gray-400">netrakarthigeyan@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Info */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Registration Information</h3>
          <div className="space-y-3 text-sm">
            <div><span className="text-cyber-green font-semibold">Registration:</span> Now Open</div>
            <div><span className="text-cyber-green font-semibold">Format:</span> Online Judge System</div>
            <div><span className="text-cyber-green font-semibold">Duration:</span> 3 hours per round</div>
            <div><span className="text-cyber-green font-semibold">Platform:</span> HackerRank/CodeChef style interface</div>
          </div>
        </div>
      </div>
    </div>
  );
}