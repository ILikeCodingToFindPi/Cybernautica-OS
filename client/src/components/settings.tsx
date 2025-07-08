import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { School, MapPin, Phone, Mail, Globe, Users, Trophy, Calendar, ExternalLink } from "lucide-react";

export default function Settings() {
  return (
    <div className="h-full bg-gradient-to-b from-cyber-dark to-slate-900 text-white overflow-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <img 
                src="https://th.bing.com/th/id/OIP.7qW-ZZfZCiuxsbk7EiGxtgAAAA?w=151&h=176&c=7&r=0&o=7&pid=1.7&rm=3" 
                alt="School Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cyber-cyan">SYSTEM SETTINGS</h1>
              <p className="text-gray-400">NPSHSR - CYBERNAUTICA OS</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            
            <img 
              src="https://drive.google.com/thumbnail?id=12LT96_XXBbJsTOyhBRlrejkX0YeQXTRr" 
              alt="Cybernautica Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="institution">Institution</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-cyan">System Information</CardTitle>
                <CardDescription>
                  Current system status and configuration details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Operating System</h4>
                    <p className="text-sm text-gray-300">CYBERNAUTICA OS v2025.1.0</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Build</h4>
                    <p className="text-sm text-gray-300">Hackathon Edition</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Active Events</h4>
                    <p className="text-sm text-gray-300">7 Competitions Running</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyber-pink">Total Participants</h4>
                    <p className="text-sm text-cyber-green">300+ Registered</p>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-3">
                  <h4 className="font-semibold text-cyber-cyan">Event Status</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { name: "CODEUNDRUM", status: "Upcoming", color: "cyber-pink" },
                      { name: "HACKADEMIA", status: "Upcoming", color: "cyber-pink" },
                      { name: "CYPHRANEXUS", status: "Upcoming", color: "cyber-pink" },
                      { name: "HIGH STAKES", status: "Upcoming", color: "cyber-pink" },
                      { name: "BREAKING VIRTUAL", status: "Upcoming", color: "cyber-pink" },
                      { name: "GEOMETRY DASH", status: "Upcoming", color: "cyber-pink" },
                      { name: "SONARIA", status: "Upcoming", color: "cyber-pink" },
                    ].map((event, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-slate-900/50 rounded">
                        <span className="text-sm">{event.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`border-${event.color}/30 text-${event.color} text-xs`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="institution" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-cyan">Institution Details</CardTitle>
                <CardDescription>
                  National Public School HSR Layout - Official Information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <School className="w-12 h-12 text-cyber-cyan" />
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan">National Public School</h3>
                    <p className="text-gray-400">HSR Layout, Bangalore</p>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyber-pink mb-2">Establishment</h4>
                      <p className="text-sm text-gray-300">Founded in 2008</p>
                      <p className="text-sm text-gray-300">17+ years of academic excellence</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyber-pink mb-2">Curriculum</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• CBSE Board Affiliation</li>
                        <li>• Classes KG to XII</li>
                        <li>• Science, Commerce & Humanities</li>

                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyber-pink mb-2">Campus Features</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Modern Computer Labs</li>
                        <li>• Science & Innovation Center</li>
                        
                       
                        <li>• Auditoriums</li>
                      </ul>
                    </div>

                    <div>


                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-3">
                  <h4 className="font-semibold text-cyber-cyan">Technology & Innovation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-slate-900/50 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <Trophy className="w-8 h-8 text-cyber-yellow mx-auto mb-2" />
                        <h5 className="font-semibold text-cyber-yellow">Coding Champions</h5>
                        <p className="text-xs text-gray-400 mt-1">Multiple hackathon victories</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-900/50 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <Users className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                        <h5 className="font-semibold text-cyber-green">Tech Community</h5>
                        <p className="text-xs text-gray-400 mt-1">Active coding clubs & societies</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-900/50 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <Globe className="w-8 h-8 text-cyber-pink mx-auto mb-2" />
                        <h5 className="font-semibold text-cyber-pink">Global Reach</h5>
                        <p className="text-xs text-gray-400 mt-1">International collaborations</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-cyan">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyber-cyan" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-gray-300">National Public School</p>
                      <p className="text-sm text-gray-300">HSR Layout, Sector 7</p>
                      <p className="text-sm text-gray-300">Bangalore - 560102</p>
                      <p className="text-sm text-gray-300">Karnataka, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyber-green" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-300">+91 80 - 2572 9406 / 07 / 08 </p>

                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyber-pink" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-300"> info@npshsr.com</p>

                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-cyber-yellow" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="#" className="text-sm text-cyber-cyan hover:text-cyber-cyan/80 flex items-center">
                        www.npshsr.edu.in <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyber-cyan">CYBERNAUTICA Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">

                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyber-pink">Event Coordinators</h4>
                    <div className="space-y-2 text-sm">


                      <p>Tech Team: Deeptarka Dey, Pranjal Jain</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyber-pink">Emergency Contact</h4>
                    <div className="space-y-2 text-sm">
                      <p>Emergency Hotline: +91 9876543210</p>
                      <p>Available: 24/7 during event days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-cyan">About CYBERNAUTICA</CardTitle>
                <CardDescription>
                  Cybernautica is NPSHSR's biennial technology and innovation fest, a world full of AI, robotics and coding adventures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cyber-pink mb-3">Project Overview</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">

                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyber-pink mb-3">Development Team</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h5 className="font-semibold text-cyber-cyan">Core Team</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Aarush </li>  
                         <li>• Asmii </li>   
                         <li>• Vibha</li>   
                         <li>• Megha </li>   
                         <li>• Anaika </li>   
                         <li>• Prithvi </li>   




                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-cyber-cyan">Technologies Used</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• React & TypeScript</li>
                        <li>• Modern Web Technologies</li>


                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cyber-pink mb-3">Event Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-slate-900/50 rounded">
                      <div className="text-2xl font-bold text-cyber-green">7</div>
                      <div className="text-xs text-gray-400">Active Events</div>
                    </div>
                    <div className="text-center p-3 bg-slate-900/50 rounded">
                      <div className="text-2xl font-bold text-cyber-cyan">300+</div>
                      <div className="text-xs text-gray-400">Participants</div>
                    </div>

                    <div className="text-center p-3 bg-slate-900/50 rounded">
                      <div className="text-2xl font-bold text-cyber-yellow">4</div>
                      <div className="text-xs text-gray-400">Hours Total</div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    © 2025 National Public School HSR Layout. All rights reserved.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Developed with ❤️ by NPSHSR Tech Team
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}