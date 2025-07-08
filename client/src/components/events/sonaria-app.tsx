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
            <p className="text-gray-400">Tech-Themed Music + Visual Art</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-indigo-500 font-semibold">Theme:</span> Tech-Themed Music + Visual Art</div>
              <div><span className="text-indigo-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-indigo-500 font-semibold">Type:</span> Team Event</div>
              <div><span className="text-indigo-500 font-semibold">Team Size:</span> 6-8 members per team</div>
              <div><span className="text-indigo-500 font-semibold">Roles:</span> 2 members for graphic design and the rest in singing</div>
              <div><span className="text-indigo-500 font-semibold">Registration Limit:</span> 8 teams in total; first-come, first-serve basis</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Prerequisites</h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="font-semibold text-indigo-500">Cyber Knowledge</div>
                <div className="text-gray-400">Basic knowledge about cyber safety</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Technical Knowledge</div>
                <div className="text-gray-400">Computer components and how software work</div>
              </div>
              <div className="border-l-4 border-cyber-green pl-4">
                <div className="font-semibold text-cyber-green">Vocal Skills</div>
                <div className="text-gray-400">Proficient in vocals (backing track will be provided)</div>
              </div>
            </div>
          </div>
        </div>

        {/* What is SONARIA */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is SONARIA?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Sonaria is a unique and electrifying event that fuses the worlds of technology, music, and design. Participants must bring both cyber knowledge 
              and musical flair to the stage. Each team is split into two groups: one group crafts a clever parody of a popular song, using cyber topics ranging 
              from cybersecurity to technology. The other group must transform the song into a visually striking poster.
            </p>
            <p>
              From firewalls to phishing, from coding to hacking, Sonaria is where the digital meets the dramatic, and tech talk turns into an unforgettable performance.
            </p>
          </div>
        </div>

        {/* Challenge Components */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Challenge Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="font-semibold text-indigo-500">Music Component</div>
                <div className="text-gray-400 text-sm">Craft a clever parody of a popular song using cyber topics</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Visual Component</div>
                <div className="text-gray-400 text-sm">Transform the song into a visually striking poster</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-cyber-green pl-4">
                <div className="font-semibold text-cyber-green">Tech Topics</div>
                <div className="text-gray-400 text-sm">Cybersecurity, firewalls, phishing, coding, hacking</div>
              </div>
              <div className="border-l-4 border-cyber-pink pl-4">
                <div className="font-semibold text-cyber-pink">Performance</div>
                <div className="text-gray-400 text-sm">Live performance combining digital and dramatic elements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Heads */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Heads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-indigo-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-indigo-500">Nishka Rao</div>
                  <div className="text-sm text-gray-400">nishkarao01@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-indigo-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-indigo-500">Nimisha Srivastava</div>
                  <div className="text-sm text-gray-400">nimishasrivastava220@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-indigo-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-indigo-500">Sumaira Shantanu</div>
                  <div className="text-sm text-gray-400">sumaira.shantanu@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}