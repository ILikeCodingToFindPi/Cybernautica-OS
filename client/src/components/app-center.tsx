
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Mail, AlertCircle, MapPin } from "lucide-react";

export default function AppCenter() {
  const { toast } = useToast();

  return (
    <div className="h-full flex flex-col">
      <div className="bg-cyber-cyan/10 border-b border-cyber-cyan/30 px-4 py-2">
        <div className="flex items-center space-x-2">
          <i className="fas fa-bullhorn text-cyber-cyan"></i>
          <div className="overflow-hidden">
            <div className="animate-pulse text-cyber-cyan text-sm">
              Event registration now open! All event apps available on desktop.
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-cyber-green rounded-lg flex items-center justify-center">
            <img 
              src="/attached_assets/tmp_e69375cb-a5fc-4c7f-a0bb-0b09e42eaaf4_1751979522431.png" 
              alt="Cybernautica Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyber-cyan">CYBERNAUTICA 2025</h1>
            <p className="text-gray-400">Event Information & Registration Hub</p>
          </div>
        </div>
        <img 
          src="/attached_assets/image_1751979533333.png" 
          alt="School Logo" 
          className="w-12 h-12 object-contain"
        />
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Key Event Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyber-cyan flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Event Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-cyber-green" />
                  <div>
                    <p className="font-semibold text-cyber-green">Event Date</p>
                    <p className="text-sm text-gray-300">July 18th, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-cyber-pink" />
                  <div>
                    <p className="font-semibold text-cyber-pink">Timing</p>
                    <p className="text-sm text-gray-300">8:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-cyber-yellow" />
                  <div>
                    <p className="font-semibold text-cyber-yellow">Venue</p>
                    <p className="text-sm text-gray-300">NPS HSR Layout</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyber-cyan flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Registration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-cyber-green">Registration Deadline</p>
                  <p className="text-sm text-gray-300">July 11th, 2025 by 11:59 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-cyber-pink">Confirmation</p>
                  <p className="text-sm text-gray-300">By July 13th, 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-cyber-yellow">Contact</p>
                  <p className="text-sm text-gray-300">events@npshsr.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* General Guidelines */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-cyber-cyan flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>General Guidelines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-cyber-green">Participation Rules</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Each student can participate in only one event</li>
                  <li>• Each school can register only one team per event</li>
                  <li>• Participants must belong to eligible grades</li>
                  <li>• Valid school identification required</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-cyber-pink">Event Day</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Wear school uniforms</li>
                  <li>• Phones deposited at registration</li>
                  <li>• Food stalls available on campus</li>
                  <li>• Results announced at closing ceremony</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Categories */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-cyber-cyan">Available Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "CODEUNDRUM", icon: "fas fa-code", color: "cyber-green", grades: "9-12" },
                { name: "HACKADEMIA", icon: "fas fa-robot", color: "cyber-cyan", grades: "9-12" },
                { name: "CYPHRANEXUS", icon: "fas fa-lock", color: "cyber-purple", grades: "9-12" },
                { name: "HIGH STAKES", icon: "fas fa-cards", color: "cyber-red", grades: "10-12" },
                { name: "BREAKING VIRTUAL", icon: "fas fa-vr-cardboard", color: "cyber-pink", grades: "9-12" },
                { name: "GEOMETRY DASH", icon: "fas fa-microchip", color: "cyber-yellow", grades: "9-12" },
                { name: "SONARIA", icon: "fas fa-music", color: "cyber-green", grades: "9-12" }
              ].map((event) => (
                <div key={event.name} className="bg-cyber-dark/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${event.color}/20 rounded-full flex items-center justify-center`}>
                      <i className={`${event.icon} text-${event.color}`}></i>
                    </div>
                    <div>
                      <div className={`font-semibold text-${event.color}`}>{event.name}</div>
                      <div className="text-xs text-gray-400">Grades {event.grades}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-cyber-cyan/10 rounded-lg">
              <p className="text-sm text-cyber-cyan">
                <i className="fas fa-info-circle mr-2"></i>
                Click on event icons in the desktop to access detailed information and registration for each event.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-cyber-cyan flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-cyber-green">General Inquiries</p>
                <p className="text-sm text-gray-300">events@npshsr.com</p>
              </div>
              <div>
                <p className="font-semibold text-cyber-pink">Event-Specific Queries</p>
                <p className="text-sm text-gray-300">Email the general contact with event heads in CC</p>
              </div>
              <div className="text-xs text-gray-400">
                <p>For specific event queries, contact information is available in individual event applications on the desktop.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
