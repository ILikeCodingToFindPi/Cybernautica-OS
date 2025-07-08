import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [username, setUsername] = useState("User");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication - in production this would be real
    if (username && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="fixed inset-0 cyber-bg z-40 flex flex-col justify-center items-center">
      <div className="cyber-glass rounded-2xl p-8 w-96 window-shadow">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            
            <h1 className="text-3xl font-display font-bold text-cyber-cyan neon-text">
              CYBERNAUTICA
            </h1>
            
          </div>
          <p className="text-gray-400 mt-2">Secure Access Terminal</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/30 border border-cyber-cyan/30 rounded-lg px-4 py-3 focus:border-cyber-cyan focus:outline-none glow-hover transition-all duration-300 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter secure passphrase (Anything)"
              className="w-full bg-black/30 border border-cyber-cyan/30 rounded-lg px-4 py-3 focus:border-cyber-cyan focus:outline-none glow-hover transition-all duration-300 text-white"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-cyber-cyan text-black font-semibold py-3 rounded-lg hover:bg-white transition-all duration-300 glow-hover"
          >
            ACCESS SYSTEM
          </Button>
        </form>
      </div>
    </div>
  );
}
