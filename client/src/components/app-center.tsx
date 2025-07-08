import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useWindowManager } from "@/hooks/use-window-manager";
import type { Event } from "@shared/schema";

export default function AppCenter() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const windowManager = useWindowManager();

  const { data: events = [], isLoading } = useQuery({
    queryKey: ["/api/events"],
  });

  const { data: announcements = [] } = useQuery({
    queryKey: ["/api/announcements"],
  });

  const installAppMutation = useMutation({
    mutationFn: async (event: Event) => {
      const response = await fetch("/api/installed-apps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 1, eventId: event.id }),
      });
      if (!response.ok) throw new Error("Failed to install app");
      
      return { event, response: await response.json() };
    },
    onSuccess: (data) => {
      const { event } = data;
      
      // Add to local installed apps immediately
      windowManager.addInstalledApp({
        id: event.id,
        name: event.name,
        type: getEventAppType(event.name),
        icon: getEventIcon(event),
        color: event.color
      });
      
      toast({
        title: "App Installed",
        description: `${event.name} has been added to your desktop!`,
      });
      
      queryClient.invalidateQueries({ queryKey: ["/api/users/1/installed-apps"] });
    },
    onError: () => {
      toast({
        title: "Installation Failed",
        description: "Could not install the event app.",
        variant: "destructive",
      });
    },
  });

  const getEventIcon = (event: Event) => {
    return event.icon || "fas fa-star";
  };

  const getEventAppType = (eventName: string) => {
    const appTypes = {
      "CODEUNDRUM": "codeundrum-app",
      "HACKADEMIA": "hackademia-app",
      "CYPHRANEXUS": "cyphranexus-app",
      "HIGH STAKES": "high-stakes-app",
      "BREAKING VIRTUAL": "breaking-virtual-app",
      "GEOMETRY DASH": "geometry-dash-app",
      "SONARIA": "sonaria-app",
    };
    return appTypes[eventName as keyof typeof appTypes] || "codeundrum-app";
  };

  const launchEventApp = (event: Event) => {
    const appType = getEventAppType(event.name);
    windowManager.createWindow(appType as any, `${event.name} - Event Details`);
  };

  const getEventColorClass = (color: string) => {
    switch (color) {
      case "cyber-green":
        return "border-cyber-green/30 hover:border-cyber-green text-cyber-green";
      case "cyber-cyan":
        return "border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan";
      case "cyber-pink":
        return "border-cyber-pink/30 hover:border-cyber-pink text-cyber-pink";
      case "purple-500":
        return "border-purple-500/30 hover:border-purple-500 text-purple-500";
      case "red-500":
        return "border-red-500/30 hover:border-red-500 text-red-500";
      case "yellow-500":
        return "border-yellow-500/30 hover:border-yellow-500 text-yellow-500";
      case "indigo-500":
        return "border-indigo-500/30 hover:border-indigo-500 text-indigo-500";
      default:
        return "border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan";
    }
  };

  const getButtonColorClass = (color: string) => {
    switch (color) {
      case "cyber-green":
        return "bg-cyber-green/20 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black";
      case "cyber-cyan":
        return "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black";
      case "cyber-pink":
        return "bg-cyber-pink/20 border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black";
      case "purple-500":
        return "bg-purple-500/20 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black";
      case "red-500":
        return "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500 hover:text-black";
      case "yellow-500":
        return "bg-yellow-500/20 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black";
      case "indigo-500":
        return "bg-indigo-500/20 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-black";
      default:
        return "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black";
    }
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-cyber-cyan">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Live Announcements Ticker */}
      <div className="bg-cyber-cyan/10 border-b border-cyber-cyan/30 px-4 py-2">
        <div className="flex items-center space-x-2">
          <i className="fas fa-bullhorn text-cyber-cyan"></i>
          <div className="overflow-hidden">
            <div className="animate-pulse text-cyber-cyan text-sm">
              {announcements.map((announcement: any, index: number) => (
                <span key={announcement.id}>
                  {announcement.message}
                  {index < announcements.length - 1 ? " | " : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* App Center Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-cyber-green rounded-lg flex items-center justify-center">
            <img 
              src="/attached_assets/tmp_e69375cb-a5fc-4c7f-a0bb-0b09e42eaaf4_1751974263538.png" 
              alt="Cybernautica Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyber-cyan">CYBERNAUTICA CENTRAL</h1>
            <p className="text-gray-400">Event Applications & Information Hub</p>
          </div>
        </div>
        <img 
          src="/attached_assets/image_1751974288082.png" 
          alt="School Logo" 
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Events Grid */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <div
              key={event.id}
              className={`cyber-glass rounded-lg p-4 border transition-all ${getEventColorClass(event.color)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <i className={`${getEventIcon(event)} text-xl`}></i>
                  <h3 className="font-display font-bold">{event.name}</h3>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${event.type === "SOLO" ? "bg-green-500/20 text-green-500" : "bg-blue-500/20 text-blue-500"}`}>
                  {event.type}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-3">{event.theme}</p>

              <div className="space-y-2 text-xs mb-4">
                <div>
                  <span className="text-cyber-cyan">Grades:</span> {event.grades}
                </div>
                {event.teamSize && (
                  <div>
                    <span className="text-cyber-cyan">Team Size:</span> {event.teamSize}
                  </div>
                )}
                {event.skills && event.skills.length > 0 && (
                  <div>
                    <span className="text-cyber-cyan">Skills:</span> {event.skills.join(", ")}
                  </div>
                )}
              </div>

              <p className="text-gray-300 text-xs mb-4">{event.description}</p>

              <div className="flex space-x-2">
                <Button
                  onClick={() => launchEventApp(event)}
                  className={`flex-1 py-2 rounded-lg transition-all font-semibold text-sm bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black`}
                >
                  LAUNCH APP
                </Button>
                <Button
                  onClick={() => installAppMutation.mutate(event)}
                  disabled={installAppMutation.isPending || windowManager.installedApps.some(app => app.id === event.id)}
                  className={`flex-1 py-2 rounded-lg transition-all font-semibold text-sm ${getButtonColorClass(event.color)}`}
                >
                  {installAppMutation.isPending ? "INSTALLING..." : 
                   windowManager.installedApps.some(app => app.id === event.id) ? "INSTALLED" : "INSTALL"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}