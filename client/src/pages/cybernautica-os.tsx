import { useState, useEffect } from "react";
import BootScreen from "@/components/boot-screen";
import LoginScreen from "@/components/login-screen";
import Desktop from "@/components/desktop";

type SystemState = "booting" | "login" | "desktop";

export default function CybernaruticaOS() {
  const [systemState, setSystemState] = useState<SystemState>("booting");

  useEffect(() => {
    document.body.className = `bg-cyber-dark text-white font-system overflow-hidden dark`;
  }, []);

  const handleBootComplete = () => {
    setSystemState("login");
  };

  const handleLoginSuccess = () => {
    setSystemState("desktop");
  };

  return (
    <div className="min-h-screen w-full">
      {systemState === "booting" && <BootScreen onComplete={handleBootComplete} />}
      {systemState === "login" && <LoginScreen onLoginSuccess={handleLoginSuccess} />}
      {systemState === "desktop" && <Desktop />}
    </div>
  );
}
