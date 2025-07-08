import { useToast } from "@/hooks/use-toast";

export default function AppCenter() {
  const { toast } = useToast();

  return (
    <div className="h-full flex flex-col">
      <div className="bg-cyber-cyan/10 border-b border-cyber-cyan/30 px-4 py-2">
        <div className="flex items-center space-x-2">
          <i className="fas fa-bullhorn text-cyber-cyan"></i>
          <div className="overflow-hidden">
            <div className="animate-pulse text-cyber-cyan text-sm">
              App Center functionality coming later...
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 p-6">
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

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">🚧</div>
          <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Coming Later</h2>
          <p className="text-gray-400 text-lg mb-6">
            App Center functionality is under development
          </p>
          <p className="text-gray-500">
            All event apps are now available directly on your desktop!
          </p>
        </div>
      </div>
    </div>
  );
}