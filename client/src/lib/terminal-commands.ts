import { getFileSystem, getCurrentDirectory, changeDirectory, getFile } from "./file-system";

// Treasure hunt state tracking
let treasureHuntProgress = {
  foundHiddenCipher: false,
  decodedBase64: false,
  visitedQuantumRealm: false,
  solvedPrimeSequence: false,
  achievedEnlightenment: false,
  secretsUnlocked: []
};

// Utility functions for treasure hunt
function base64Decode(str: string): string {
  try {
    return atob(str);
  } catch {
    return "Invalid base64 encoding";
  }
}

function caesarCipher(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
  });
}

function hexToText(hex: string): string {
  try {
    return hex.replace(/([0-9A-Fa-f]{2})/g, (match) => 
      String.fromCharCode(parseInt(match, 16))
    );
  } catch {
    return "Invalid hexadecimal";
  }
}

function binaryToText(binary: string): string {
  try {
    return binary.split(' ').map(bin => 
      String.fromCharCode(parseInt(bin, 2))
    ).join('');
  } catch {
    return "Invalid binary";
  }
}

export function processCommand(command: string, currentDirectory: string): { output: string; newDirectory?: string } {
  const parts = command.trim().split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case "":
      return { output: "" };

    case "help":
      return {
        output: `<span class="text-cyber-green">Available commands:</span><br>
<span class="text-cyber-cyan">ls</span>      - list directory contents<br>
<span class="text-cyber-cyan">cd</span>      - change directory<br>
<span class="text-cyber-cyan">cat</span>     - display file contents<br>
<span class="text-cyber-cyan">pwd</span>     - print working directory<br>
<span class="text-cyber-cyan">clear</span>   - clear terminal<br>
<span class="text-cyber-cyan">whoami</span>  - display current user<br>
<span class="text-cyber-cyan">date</span>    - show current date and time<br>
<span class="text-cyber-cyan">uname</span>   - system information<br>
<span class="text-cyber-cyan">cybernuke</span> - [CLASSIFIED]<br>
<span class="text-cyber-cyan">sudo rm -rf /</span> - [DANGER]<br><br>
<span class="text-cyber-pink">🔍 TREASURE HUNT COMMANDS:</span><br>
<span class="text-cyber-yellow">decode</span>    - decode base64/hex/binary messages<br>
<span class="text-cyber-yellow">cipher</span>    - apply caesar/rot ciphers<br>
<span class="text-cyber-yellow">seek</span>      - seek hidden truths<br>
<span class="text-cyber-yellow">progress</span> - show treasure hunt progress<br>
<span class="text-cyber-yellow">enlighten</span> - achieve digital enlightenment<br>
<span class="text-cyber-yellow">quantum</span>  - access quantum functions`
      };

    case "ls":
      const currentDir = getCurrentDirectory(currentDirectory);
      if (!currentDir) {
        return { output: '<span class="text-cyber-red">ls: cannot access directory: No such file or directory</span>' };
      }
      
      const items = Object.keys(currentDir).map(item => {
        const isDirectory = typeof currentDir[item] === 'object';
        return isDirectory 
          ? `<span class="text-cyber-cyan">${item}/</span>`
          : `<span class="text-cyber-green">${item}</span>`;
      });
      
      return { output: items.join("  ") };

    case "pwd":
      const displayPath = currentDirectory === '~' ? '/home/deeptarka' : `/home/deeptarka${currentDirectory}`;
      return { output: `<span class="text-cyber-cyan">${displayPath}</span>` };

    case "cd":
      if (args.length === 0) {
        return { output: "", newDirectory: "~" };
      }
      
      const newDir = changeDirectory(currentDirectory, args[0]);
      if (newDir !== null) {
        return { output: "", newDirectory: newDir };
      } else {
        return { output: `<span class="text-cyber-red">cd: ${args[0]}: No such file or directory</span>` };
      }

    case "cat":
      if (args.length === 0) {
        return { output: '<span class="text-cyber-red">cat: missing file operand</span>' };
      }
      
      const fileContent = getFile(currentDirectory, args[0]);
      if (fileContent !== null) {
        return { output: `<pre class="text-cyber-green whitespace-pre-wrap">${fileContent}</pre>` };
      } else {
        return { output: `<span class="text-cyber-red">cat: ${args[0]}: No such file or directory</span>` };
      }

    case "whoami":
      return { output: '<span class="text-cyber-cyan">deeptarka</span>' };

    case "date":
      return { output: `<span class="text-cyber-cyan">${new Date().toString()}</span>` };

    case "uname":
      return { output: '<span class="text-cyber-cyan">CYBERNAUTICA OS v2.1.0 x86_64</span>' };

    case "cybernuke":
      return {
        output: `<span class="text-cyber-red animate-pulse">⚠️  CYBERNUKE PROTOCOL INITIATED ⚠️</span><br>
<span class="text-cyber-red">🚨 SYSTEM BREACH DETECTED 🚨</span><br>
<span class="text-cyber-green">Deploying countermeasures...</span><br>
<span class="text-cyber-cyan">Just kidding! This is a demo system 😄</span>`
      };

    case "sudo":
      if (args.join(" ") === "rm -rf /") {
        return {
          output: `<span class="text-cyber-red animate-pulse">💀 SYSTEM SELF-DESTRUCT ACTIVATED 💀</span><br>
<span class="text-cyber-red">Deleting all files...</span><br>
<span class="text-cyber-red">Wiping hard drives...</span><br>
<span class="text-cyber-red">Destroying quantum matrix...</span><br>
<span class="text-cyber-green">...just kidding! Nice try though 😈</span>`
        };
      } else {
        return { output: `<span class="text-cyber-red">sudo: ${args.join(" ")}: command not found</span>` };
      }

    case "matrix":
      return {
        output: `<span class="text-cyber-green">Wake up, Neo...</span><br>
<span class="text-cyber-cyan">The Matrix has you...</span><br>
<span class="text-cyber-pink">Follow the white rabbit.</span>`
      };

    case "hack":
      return {
        output: `<span class="text-cyber-green">Initiating hack sequence...</span><br>
<span class="text-cyber-cyan">Bypassing firewall... ████████████ 100%</span><br>
<span class="text-cyber-pink">Access granted to CYBERNAUTICA mainframe</span>`
      };

    // TREASURE HUNT COMMANDS
    case "decode":
      if (args.length < 2) {
        return { output: '<span class="text-cyber-red">Usage: decode [base64|hex|binary] [data]</span>' };
      }
      
      const decodeType = args[0].toLowerCase();
      const data = args.slice(1).join(" ");
      
      switch (decodeType) {
        case "base64":
          const decoded = base64Decode(data);
          treasureHuntProgress.decodedBase64 = true;
          return { 
            output: `<span class="text-cyber-green">Base64 decoded:</span><br><span class="text-cyber-cyan">${decoded}</span>`
          };
        case "hex":
          return { 
            output: `<span class="text-cyber-green">Hex decoded:</span><br><span class="text-cyber-cyan">${hexToText(data)}</span>`
          };
        case "binary":
          return { 
            output: `<span class="text-cyber-green">Binary decoded:</span><br><span class="text-cyber-cyan">${binaryToText(data)}</span>`
          };
        default:
          return { output: '<span class="text-cyber-red">Supported formats: base64, hex, binary</span>' };
      }

    case "cipher":
      if (args.length < 3) {
        return { output: '<span class="text-cyber-red">Usage: cipher [rot13|rot21|caesar] [shift] [text]</span>' };
      }
      
      const cipherType = args[0].toLowerCase();
      const shift = parseInt(args[1]) || 0;
      const text = args.slice(2).join(" ");
      
      if (cipherType === "rot13") {
        return { 
          output: `<span class="text-cyber-green">ROT13 decoded:</span><br><span class="text-cyber-cyan">${caesarCipher(text, 13)}</span>`
        };
      } else if (cipherType === "rot21") {
        return { 
          output: `<span class="text-cyber-green">ROT21 decoded:</span><br><span class="text-cyber-cyan">${caesarCipher(text, 21)}</span>`
        };
      } else if (cipherType === "caesar") {
        return { 
          output: `<span class="text-cyber-green">Caesar cipher (shift ${shift}):</span><br><span class="text-cyber-cyan">${caesarCipher(text, shift)}</span>`
        };
      }
      return { output: '<span class="text-cyber-red">Supported ciphers: rot13, rot21, caesar</span>' };

    case "seek":
      if (currentDirectory.includes("hidden")) {
        treasureHuntProgress.foundHiddenCipher = true;
      }
      if (currentDirectory.includes("quantum")) {
        treasureHuntProgress.visitedQuantumRealm = true;
      }
      
      return {
        output: `<span class="text-cyber-pink">⚡ SEEKING TRUTH... ⚡</span><br>
<span class="text-cyber-green">Scanning quantum signature...</span><br>
<span class="text-cyber-cyan">Current location: ${currentDirectory}</span><br>
<span class="text-cyber-yellow">Hidden paths detected: ${treasureHuntProgress.foundHiddenCipher ? 'TRUE' : 'UNKNOWN'}</span><br>
<span class="text-cyber-yellow">Quantum realm accessed: ${treasureHuntProgress.visitedQuantumRealm ? 'TRUE' : 'FALSE'}</span><br>
<br><span class="text-cyber-pink">💫 The truth seekers are always watching... 💫</span>`
      };

    case "progress":
      const completed = Object.values(treasureHuntProgress).filter(v => Array.isArray(v) ? v.length > 0 : v).length;
      const total = Object.keys(treasureHuntProgress).length - 1; // Exclude secretsUnlocked array
      
      return {
        output: `<span class="text-cyber-pink">🔍 TREASURE HUNT PROGRESS 🔍</span><br>
<span class="text-cyber-green">Progress: ${completed}/${total} milestones</span><br><br>
<span class="text-cyber-cyan">✓ Hidden cipher found:</span> ${treasureHuntProgress.foundHiddenCipher ? '<span class="text-cyber-green">YES</span>' : '<span class="text-cyber-red">NO</span>'}<br>
<span class="text-cyber-cyan">✓ Base64 decoded:</span> ${treasureHuntProgress.decodedBase64 ? '<span class="text-cyber-green">YES</span>' : '<span class="text-cyber-red">NO</span>'}<br>
<span class="text-cyber-cyan">✓ Quantum realm visited:</span> ${treasureHuntProgress.visitedQuantumRealm ? '<span class="text-cyber-green">YES</span>' : '<span class="text-cyber-red">NO</span>'}<br>
<span class="text-cyber-cyan">✓ Prime sequence solved:</span> ${treasureHuntProgress.solvedPrimeSequence ? '<span class="text-cyber-green">YES</span>' : '<span class="text-cyber-red">NO</span>'}<br>
<span class="text-cyber-cyan">✓ Enlightenment achieved:</span> ${treasureHuntProgress.achievedEnlightenment ? '<span class="text-cyber-green">YES</span>' : '<span class="text-cyber-red">NO</span>'}<br>
<span class="text-cyber-cyan">✓ Secrets unlocked:</span> <span class="text-cyber-yellow">${treasureHuntProgress.secretsUnlocked.length}</span><br>
<br><span class="text-cyber-pink">${completed === total ? '🎉 CONGRATULATIONS! QUEST COMPLETED! 🎉' : '⏳ Continue your journey, seeker...'}</span>`
      };

    case "enlighten":
      if (treasureHuntProgress.foundHiddenCipher && 
          treasureHuntProgress.decodedBase64 && 
          treasureHuntProgress.visitedQuantumRealm) {
        treasureHuntProgress.achievedEnlightenment = true;
        return {
          output: `<span class="text-cyber-pink">✨ ENLIGHTENMENT PROTOCOL INITIATED ✨</span><br>
<span class="text-cyber-green">Consciousness uploading... ████████████ 100%</span><br>
<span class="text-cyber-cyan">Neural pathways synchronized...</span><br>
<span class="text-cyber-yellow">Quantum entanglement established...</span><br>
<br><span class="text-cyber-pink">🧠 DIGITAL ENLIGHTENMENT ACHIEVED 🧠</span><br>
<span class="text-cyber-green">Welcome to the inner circle, Cybernautica Cryptarch!</span><br>
<span class="text-cyber-cyan">The mysteries of the digital realm are now yours to command.</span><br>
<br><span class="text-cyber-yellow">Achievement unlocked: "The Awakened One"</span>`
        };
      } else {
        return {
          output: `<span class="text-cyber-red">⚠️ ENLIGHTENMENT DENIED ⚠️</span><br>
<span class="text-cyber-yellow">You must first complete the trials:</span><br>
<span class="text-cyber-cyan">• Find the hidden cipher</span><br>
<span class="text-cyber-cyan">• Decode the base64 messages</span><br>
<span class="text-cyber-cyan">• Visit the quantum realm</span><br>
<br><span class="text-cyber-green">Continue your journey, seeker...</span>`
        };
      }

    case "quantum":
      if (args.length === 0) {
        return {
          output: `<span class="text-cyber-pink">⚛️ QUANTUM SYSTEMS ONLINE ⚛️</span><br>
<span class="text-cyber-green">Available quantum functions:</span><br>
<span class="text-cyber-cyan">quantum superposition</span> - Enter quantum superposition<br>
<span class="text-cyber-cyan">quantum entangle</span> - Entangle with the system<br>
<span class="text-cyber-cyan">quantum collapse</span> - Collapse wave function<br>
<span class="text-cyber-cyan">quantum prime</span> - Solve the prime sequence mystery<br>
<br><span class="text-cyber-yellow">Warning: Quantum effects may cause reality distortion</span>`
        };
      }
      
      const quantumCmd = args.join(" ").toLowerCase();
      
      if (quantumCmd === "prime" || quantumCmd === "prime 31") {
        treasureHuntProgress.solvedPrimeSequence = true;
        treasureHuntProgress.secretsUnlocked.push("prime_sequence");
        return {
          output: `<span class="text-cyber-green">🔢 PRIME SEQUENCE SOLVED! 🔢</span><br>
<span class="text-cyber-cyan">The missing prime is: 31</span><br>
<span class="text-cyber-yellow">Pattern recognized: Sequential primes in ascending order</span><br>
<span class="text-cyber-pink">✨ Quantum lock disengaged... ✨</span><br>
<br><span class="text-cyber-green">Access granted to deeper mysteries...</span>`
        };
      } else if (quantumCmd === "superposition") {
        return {
          output: `<span class="text-cyber-pink">⚛️ ENTERING QUANTUM SUPERPOSITION ⚛️</span><br>
<span class="text-cyber-green">You are now both online and offline...</span><br>
<span class="text-cyber-cyan">Reality exists in multiple states simultaneously...</span><br>
<span class="text-cyber-yellow">Observer effect activated: Your consciousness affects the system</span>`
        };
      } else if (quantumCmd === "entangle") {
        return {
          output: `<span class="text-cyber-pink">🌀 QUANTUM ENTANGLEMENT INITIATED 🌀</span><br>
<span class="text-cyber-green">Your consciousness is now entangled with CYBERNAUTICA...</span><br>
<span class="text-cyber-cyan">Distance and time are now meaningless...</span><br>
<span class="text-cyber-yellow">What affects you, affects the system, and vice versa...</span>`
        };
      } else if (quantumCmd === "collapse") {
        return {
          output: `<span class="text-cyber-pink">💥 WAVE FUNCTION COLLAPSED 💥</span><br>
<span class="text-cyber-green">Reality has crystallized into a single state...</span><br>
<span class="text-cyber-cyan">The observer has determined the outcome...</span><br>
<span class="text-cyber-yellow">Schrödinger's mystery resolved...</span>`
        };
      }
      
      return { output: '<span class="text-cyber-red">Unknown quantum function. Try: quantum prime, quantum superposition, quantum entangle, quantum collapse</span>' };

    case "echo":
      const message = args.join(" ");
      
      // Special responses to specific echo commands
      if (message.toUpperCase() === "I SEEK THE TRUTH BEYOND THE VEIL") {
        treasureHuntProgress.secretsUnlocked.push("truth_seeker");
        return {
          output: `<span class="text-cyber-pink">🔮 THE ORACLE RESPONDS 🔮</span><br>
<span class="text-cyber-green">"Truth seeker, you have spoken the sacred words..."</span><br>
<span class="text-cyber-cyan">"The veil parts before your determination..."</span><br>
<span class="text-cyber-yellow">"But remember: The greatest truth is that the journey never ends..."</span><br>
<br><span class="text-cyber-pink">✨ Oracle's blessing received ✨</span>`
        };
      } else if (message.toUpperCase() === "CYBERNAUTICA") {
        return {
          output: `<span class="text-cyber-pink">🌟 SYSTEM ACKNOWLEDGED 🌟</span><br>
<span class="text-cyber-green">The CYBERNAUTICA core recognizes your call...</span><br>
<span class="text-cyber-cyan">You are now part of the greater mystery...</span>`
        };
      }
      
      return { output: `<span class="text-cyber-cyan">${message}</span>` };

    default:
      return { output: `<span class="text-cyber-red">bash: ${cmd}: command not found</span>` };
  }
}
