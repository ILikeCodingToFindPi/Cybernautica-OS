import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Trophy, Users, Calendar, Clock, Award } from "lucide-react";

export default function CodeundrumApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cyber-cyan">CODEUNDRUM</h1>
              <p className="text-gray-400">Competitive Programming Challenge</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-cyber-green/20 text-cyber-green border-cyber-green/30">
            <Clock className="w-4 h-4 mr-1" />
            LIVE EVENT
          </Badge>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-cyan">Event Description</CardTitle>
                <CardDescription>
                  Battle through mind-bending algorithms and data structures in this competitive programming marathon.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-sm">Duration: 4 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-sm">Max Team Size: 3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-sm">Prize Pool: ₹50,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-sm">Difficulty: Hard</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyber-cyan">Event Format:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 8 progressively difficult problems</li>
                    <li>• Real-time scoring and ranking</li>
                    <li>• Multiple programming languages supported</li>
                    <li>• Time penalty for wrong submissions</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-cyber-cyan">Supported Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Python", "Java", "JavaScript", "Go", "Rust"].map((lang) => (
                      <Badge key={lang} variant="outline" className="border-cyber-cyan/30 text-cyber-cyan">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-pink">Prizes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>🥇 First Place</span>
                    <span className="text-cyber-green">₹25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🥈 Second Place</span>
                    <span className="text-cyber-green">₹15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🥉 Third Place</span>
                    <span className="text-cyber-green">₹10,000</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-yellow">Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Registration</span>
                    <span>9:00 AM - 10:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contest</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Results</span>
                    <span>2:30 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <div className="grid gap-4">
              {[
                { title: "Array Manipulation", difficulty: "Easy", points: 100, solved: 45 },
                { title: "Graph Traversal", difficulty: "Medium", points: 200, solved: 23 },
                { title: "Dynamic Programming", difficulty: "Hard", points: 300, solved: 12 },
                { title: "String Algorithms", difficulty: "Medium", points: 250, solved: 18 },
                { title: "Tree Operations", difficulty: "Hard", points: 400, solved: 8 },
                { title: "Number Theory", difficulty: "Expert", points: 500, solved: 3 },
              ].map((challenge, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-cyber-cyan">{challenge.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              challenge.difficulty === 'Easy' ? 'border-green-500 text-green-500' :
                              challenge.difficulty === 'Medium' ? 'border-yellow-500 text-yellow-500' :
                              challenge.difficulty === 'Hard' ? 'border-red-500 text-red-500' :
                              'border-purple-500 text-purple-500'
                            }`}
                          >
                            {challenge.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-400">{challenge.points} points</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-cyber-green">{challenge.solved} solved</div>
                        <Button size="sm" className="mt-1 bg-cyber-cyan hover:bg-cyber-cyan/80">
                          View Problem
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-cyan">Live Leaderboard</CardTitle>
                <CardDescription>Real-time rankings updated every 30 seconds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, team: "CodeNinjas", score: 1250, solved: 6, time: "3:45:12" },
                    { rank: 2, team: "AlgoMasters", score: 1180, solved: 5, time: "3:52:33" },
                    { rank: 3, team: "ByteBeasts", score: 950, solved: 5, time: "3:58:45" },
                    { rank: 4, team: "DataDragons", score: 850, solved: 4, time: "3:12:18" },
                    { rank: 5, team: "LogicLords", score: 750, solved: 4, time: "3:25:47" },
                  ].map((team) => (
                    <div key={team.rank} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          team.rank === 1 ? 'bg-yellow-500 text-black' :
                          team.rank === 2 ? 'bg-gray-400 text-black' :
                          team.rank === 3 ? 'bg-amber-600 text-black' :
                          'bg-slate-600 text-white'
                        }`}>
                          {team.rank}
                        </div>
                        <div>
                          <div className="font-semibold text-cyber-cyan">{team.team}</div>
                          <div className="text-sm text-gray-400">{team.solved} problems solved</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-cyber-green">{team.score}</div>
                        <div className="text-xs text-gray-400">{team.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-cyan">Practice Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Algorithms & Data Structures</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Arrays, Strings, and Hash Maps</li>
                      <li>• Trees and Graph Algorithms</li>
                      <li>• Dynamic Programming Patterns</li>
                      <li>• Sorting and Searching Techniques</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Recommended Practice</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• LeetCode Medium/Hard problems</li>
                      <li>• Codeforces Div 2 contests</li>
                      <li>• HackerRank algorithm challenges</li>
                      <li>• GeeksforGeeks practice problems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-yellow">Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>Technical Issues: tech-support@cybernautica.in</p>
                    <p>Contest Queries: contests@cybernautica.in</p>
                    <p>Discord: #codeundrum-help</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}