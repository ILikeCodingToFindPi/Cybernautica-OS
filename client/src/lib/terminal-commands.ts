import { getFileSystem, getCurrentDirectory, changeDirectory, getFile } from "./file-system";

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
<span class="text-cyber-cyan">sudo rm -rf /</span> - [DANGER]`
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

    default:
      return { output: `<span class="text-cyber-red">bash: ${cmd}: command not found</span>` };
  }
}
