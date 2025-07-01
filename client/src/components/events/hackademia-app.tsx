import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Trophy, Users, Calendar, Clock, Award, FileText, Video } from "lucide-react";

export default function HackademiaApp() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cyber-green">HACKADEMIA</h1>
              <p className="text-gray-400">Research Paper & Innovation Showcase</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-cyber-green/20 text-cyber-green border-cyber-green/30">
            <Clock className="w-4 h-4 mr-1" />
            OPEN FOR SUBMISSIONS
          </Badge>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-green">Event Description</CardTitle>
                <CardDescription>
                  Showcase your research, innovations, and academic achievements in technology, science, and engineering.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyber-green" />
                    <span className="text-sm">Submission Deadline: Feb 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyber-green" />
                    <span className="text-sm">Individual or Team (Max 4)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-cyber-green" />
                    <span className="text-sm">Prize Pool: ₹75,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-cyber-green" />
                    <span className="text-sm">Difficulty: All Levels</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyber-green">Event Categories:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Computer Science & AI",
                      "Robotics & Automation", 
                      "Environmental Technology",
                      "Biomedical Engineering",
                      "Sustainable Innovation",
                      "Data Science & Analytics"
                    ].map((category) => (
                      <Badge key={category} variant="outline" className="border-cyber-green/30 text-cyber-green justify-start">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-cyber-green">Submission Formats:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Research Papers (IEEE Format)</li>
                    <li>• Project Prototypes & Demonstrations</li>
                    <li>• Innovation Proposals & Business Plans</li>
                    <li>• Video Presentations (5-10 minutes)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-pink">Prizes & Recognition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>🏆 Best Innovation</span>
                    <span className="text-cyber-green">₹30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📄 Best Research Paper</span>
                    <span className="text-cyber-green">₹25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🌱 Sustainability Award</span>
                    <span className="text-cyber-green">₹20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎯 People's Choice</span>
                    <span className="text-cyber-green">₹15,000</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-yellow">Important Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Registration Opens</span>
                    <span>Jan 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Abstract Submission</span>
                    <span>Jan 31, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Full Paper Due</span>
                    <span>Feb 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Presentation Day</span>
                    <span>Feb 28, 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guidelines" className="space-y-4">
            <div className="grid gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-green">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyber-pink">Research Paper Requirements</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 6-12 pages in IEEE conference format</li>
                      <li>• Original research with proper citations</li>
                      <li>• Clear methodology and results section</li>
                      <li>• English language only</li>
                      <li>• Plagiarism check mandatory</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyber-pink">Project Demonstration</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Working prototype or detailed simulation</li>
                      <li>• 10-minute presentation + 5 minutes Q&A</li>
                      <li>• Technical documentation required</li>
                      <li>• Demonstration video (optional but recommended)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyber-pink">Evaluation Criteria</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-900/50 rounded">
                        <div className="font-semibold text-cyber-cyan">Innovation (30%)</div>
                        <div className="text-xs text-gray-400">Originality and creativity</div>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded">
                        <div className="font-semibold text-cyber-cyan">Technical Merit (25%)</div>
                        <div className="text-xs text-gray-400">Methodology and execution</div>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded">
                        <div className="font-semibold text-cyber-cyan">Impact (25%)</div>
                        <div className="text-xs text-gray-400">Real-world application</div>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded">
                        <div className="font-semibold text-cyber-cyan">Presentation (20%)</div>
                        <div className="text-xs text-gray-400">Clarity and delivery</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-green">Current Submissions</CardTitle>
                <CardDescription>Submitted projects and papers (Latest submissions)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "AI-Powered Smart Irrigation System", category: "Environmental Technology", team: "EcoTech Innovators", status: "Under Review" },
                    { title: "Blockchain-Based Medical Records", category: "Biomedical Engineering", team: "MedChain Team", status: "Accepted" },
                    { title: "Machine Learning for Traffic Optimization", category: "Data Science", team: "TrafficFlow AI", status: "Under Review" },
                    { title: "Sustainable Energy Management IoT", category: "Sustainable Innovation", team: "GreenTech Solutions", status: "Revision Required" },
                    { title: "Robotic Assistant for Elderly Care", category: "Robotics & Automation", team: "CareBot Labs", status: "Accepted" },
                  ].map((submission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-cyber-cyan">{submission.title}</div>
                        <div className="text-sm text-gray-400">{submission.category} • {submission.team}</div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          submission.status === 'Accepted' ? 'border-green-500 text-green-500' :
                          submission.status === 'Under Review' ? 'border-yellow-500 text-yellow-500' :
                          'border-red-500 text-red-500'
                        }`}
                      >
                        {submission.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button className="bg-cyber-green hover:bg-cyber-green/80 text-black font-semibold px-8 py-3">
                <FileText className="w-4 h-4 mr-2" />
                Submit Your Project
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-cyan">Research Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-cyber-pink">Academic Databases</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• IEEE Xplore Digital Library</li>
                        <li>• ACM Digital Library</li>
                        <li>• Google Scholar</li>
                        <li>• ResearchGate</li>
                        <li>• arXiv.org</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-cyber-pink">Writing Tools</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• LaTeX Templates</li>
                        <li>• Mendeley Reference Manager</li>
                        <li>• Grammarly Academic</li>
                        <li>• Overleaf Online Editor</li>
                        <li>• Zotero Citation Tool</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-yellow">Support & Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-cyber-pink">Faculty Mentors</h4>
                      <p className="text-sm text-gray-300">Available for guidance on research methodology and paper writing</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyber-pink">Peer Review Sessions</h4>
                      <p className="text-sm text-gray-300">Weekly sessions for feedback on work-in-progress</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyber-pink">Technical Workshops</h4>
                      <p className="text-sm text-gray-300">Research methodology, LaTeX, and presentation skills</p>
                    </div>
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