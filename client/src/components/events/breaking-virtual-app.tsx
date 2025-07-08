export default function BreakingVirtualApp() {
  return (
    <div className="h-full p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-vr-cardboard text-2xl text-red-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-500">BREAKING VIRTUAL</h1>
            <p className="text-gray-400">Mystery Game with Tech Twist</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Information</h3>
            <div className="space-y-3 text-sm">
              <div><span className="text-red-500 font-semibold">Theme:</span> Mystery Game with Tech Twist</div>
              <div><span className="text-red-500 font-semibold">Grades:</span> 9-12</div>
              <div><span className="text-red-500 font-semibold">Type:</span> Team Event</div>
              <div><span className="text-red-500 font-semibold">Team Size:</span> 4 members per team</div>
              <div><span className="text-red-500 font-semibold">Equipment:</span> Usage of any devices except those given by organisers is not permitted</div>
              <div><span className="text-red-500 font-semibold">Registration Limit:</span> 1 team per school</div>
            </div>
          </div>

          <div className="cyber-glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Prerequisites</h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-red-500">Computer Knowledge</div>
                <div className="text-gray-400">Basic Computer knowledge</div>
              </div>
              <div className="border-l-4 border-cyber-cyan pl-4">
                <div className="font-semibold text-cyber-cyan">Command Prompt</div>
                <div className="text-gray-400">Proficiency in Command Prompt</div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Phases */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Game Phases</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-500 mb-2">Phase 1: USB Clue Solving</div>
              <div className="text-gray-400 text-sm">Dig through clues hidden on USB drives and inside a computer to figure out a secret code</div>
            </div>
            <div className="border-l-4 border-cyber-cyan pl-4">
              <div className="font-semibold text-cyber-cyan mb-2">Phase 2: Virtual World Challenge</div>
              <div className="text-gray-400 text-sm">Jump into a virtual world where one teammate (blindfolded!) has to shoot the right targets while the rest guide them with voice</div>
            </div>
            <div className="border-l-4 border-cyber-green pl-4">
              <div className="font-semibold text-cyber-green mb-2">Phase 3: Final Battle</div>
              <div className="text-gray-400 text-sm">Team will battle it out using computers and real-world games to beat the final stage</div>
            </div>
          </div>
        </div>

        {/* What is BREAKING VIRTUAL */}
        <div className="cyber-glass rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">What is BREAKING VIRTUAL?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              A mystery game with a tech twist! You'll start by digging through clues hidden on USB drives and inside a computer to figure out a secret code. 
              Then, you'll jump into a virtual world where one teammate (blindfolded!) has to shoot the right targets-while the rest of you guide them with your voice. 
              Finally, your team will battle it out using computers and real-world games to beat the final stage. For this, all you need is brainpower, 
              communication skills, and quick thinking.
            </p>
          </div>
        </div>

        {/* Event Heads */}
        <div className="cyber-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyber-cyan mb-4">Event Heads</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-red-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-red-500">Srijon Sarkar</div>
                    <div className="text-sm text-gray-400">srijons023@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-red-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-red-500">Gautham Karthik</div>
                    <div className="text-sm text-gray-400">gautham797@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-red-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-red-500">Pranav Karthikeyan</div>
                    <div className="text-sm text-gray-400">pranav24ss64@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="bg-cyber-dark/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-red-500"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-red-500">Anush Rao</div>
                    <div className="text-sm text-gray-400">anushrao07@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cyber-dark/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-red-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-red-500">Akshar Damodar</div>
                  <div className="text-sm text-gray-400">akshardamodar47@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}