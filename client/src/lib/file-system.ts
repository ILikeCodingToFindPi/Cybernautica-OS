export interface FileSystemNode {
  [key: string]: FileSystemNode | string;
}

const fileSystem: FileSystemNode = {
  '~': {
    'Documents': {
      'Events': {
        'Hackademia.txt': `HACKADEMIA Event Information

Theme: AI for Education
Grades: 9-12
Type: Team Event (2-3 members per team)
Equipment: Bring your own laptops; Wi-Fi will be provided

What is HACKADEMIA?
In this electrifying race against time, teams will design AI-powered tools that reimagine how students learn, revise, and understand school subjects. Think chatbots that explain calculus, physics or chemistry-if it teaches, it counts!

Special Note: Subject drop happens 1 day before the hackathon

Event Heads:
- Pranjal Jain: 4pranjaljain@gmail.com
- Deeptarka Dey: deeptarkadey29@gmail.com
- Vishnu Srigiriraju: vishnu.srigiriraju@gmail.com`,

        'Codeundrum.txt': `CODEUNDRUM Event Information

Theme: Competitive Coding
Grades: 9-12
Type: Solo Event
Registration Limit: 5 participants per school

What is CODEUNDRUM?
The ultimate coding gladiator arena where problem-solving prowess meets algorithmic artistry. Navigate through two intense rounds: "Cornered!" tests your exception-handling skills, while "Executed!" pushes your problem-solving limits with advanced challenges.

Event Heads:
- Aman Kumar: amankmr8050@gmail.com
- Arvind Shivaswamy: Arvind3108work@gmail.com`,

        'Cyphranexus.txt': `CYPHRANEXUS Event Information

Theme: Cryptography and Puzzle Solving
Grades: 9-12
Type: Team (2 members, must include 1 Grade 12 student)
Registration Limit: 8 teams in total; first-come, first-serve basis
Prerequisites: Basic idea of a Book Cipher (Example: Beale Ciphers)

What is CYPHRANEXUS?
Find the Key, Follow the Trail, Decipher! Be ready to engage in mind-bending puzzles and to perceive meaningful connections between seemingly unrelated things. Participants will use their expertise in technology and their problem-solving abilities to decrypt a powerful message, all while racing against the clock.

Event Heads:
- Aditya Kathait: kathaitaditya12@gmail.com
- Riya Shivram: riya.shivram@gmail.com`,

        'HighStakes.txt': `HIGH STAKES Event Information

Theme: Card-based Strategy Games
Grades: 10-12
Type: Solo Event
Team Size: 2 participants per school (individual participation)
Registration Limit: 7 teams in total; first-come, first-serve basis
Equipment: Event will be conducted at the school computer lab

What is HIGH STAKES?
Step into the exhilarating world of High Stakes! A thrilling multi-round strategy-based event that blends timeless classics with smart risk-taking. Participants will battle it out through various card related chance games. With credits at stake and eliminations at every turn, only the sharpest minds will survive till the end.

Event Heads:
- Anshuman Kesavan: anshuman.s.kesavan@gmail.com
- Tejaas Muthukumar: tejaas08@gmail.com
- Goutham Ramanathan: gouthamramanathan1234@gmail.com`,

        'BreakingVirtual.txt': `BREAKING VIRTUAL Event Information

Theme: Mystery Game with Tech Twist
Grades: 9-12
Type: Team Event (4 members per team)
Registration Limit: 1 team per school
Equipment: Usage of any devices except those given by organisers is not permitted

What is BREAKING VIRTUAL?
A mystery game with a tech twist! You'll start by digging through clues hidden on USB drives and inside a computer to figure out a secret code. Then, you'll jump into a virtual world where one teammate (blindfolded!) has to shoot the right targets-while the rest of you guide them with your voice. Finally, your team will battle it out using computers and real-world games to beat the final stage.

Event Heads:
- Srijon Sarkar: srijons023@gmail.com
- Gautham Karthik: gautham797@gmail.com
- Pranav Karthikeyan: pranav24ss64@gmail.com
- Anush Rao: anushrao07@gmail.com
- Akshar Damodar: akshardamodar47@gmail.com`,

        'GeometryDash.txt': `GEOMETRY DASH Event Information

Theme: Arduino Programming & Robotics
Grades: 9-12
Type: Team Event (3 members per team)
Registration Limit: 1 team per school
Time Limit: Ten-minute coding sprint

What is GEOMETRY DASH?
Geometry Dash challenges each team to transform pure Python logic into flawless motion. In a ten-minute coding sprint, participants will program an Arduino line-tracing rover to replicate intricate geometric figures with speed and precision. External references are prohibited; only algorithmic insight decides the outcome.

Event Heads:
- Arjun Sinha: arjun@iqlect.com
- Nihaar S: nihaars@hotmail.com`,

        'Sonaria.txt': `SONARIA Event Information

Theme: Tech-Themed Music + Visual Art
Grades: 9-12
Type: Team Event (6-8 members per team)
Roles: 2 members for graphic design and the rest in singing
Registration Limit: 8 teams in total; first-come, first-serve basis

What is SONARIA?
Sonaria is a unique and electrifying event that fuses the worlds of technology, music, and design. Participants must bring both cyber knowledge and musical flair to the stage. Each team is split into two groups: one group crafts a clever parody of a popular song, using cyber topics ranging from cybersecurity to technology. The other group must transform the song into a visually striking poster.

Event Heads:
- Nishka Rao: nishkarao01@gmail.com
- Nimisha Srivastava: nimishasrivastava220@gmail.com
- Sumaira Shantanu: sumaira.shantanu@gmail.com`
      },
    },
    'etc': {},
    'bin': {},
    'tmp': {},
    'var': {
      'log': {}
    }
  }
};

export function getFileSystem(): FileSystemNode {
  return fileSystem;
}

export function getCurrentDirectory(path: string): FileSystemNode | null {
  const parts = path.split('/').filter(part => part !== '');
  let current = fileSystem;
  
  for (const part of parts) {
    if (part === '~') continue;
    if (typeof current === 'string') return null;
    if (!(part in current)) return null;
    current = current[part];
  }
  
  return current;
}

export function getFile(currentPath: string, filename: string): string | null {
  const current = getCurrentDirectory(currentPath);
  if (!current || typeof current === 'string') return null;
  
  const file = current[filename];
  return typeof file === 'string' ? file : null;
}

export function changeDirectory(currentPath: string, newPath: string): string | null {
  // Handle absolute paths
  if (newPath.startsWith('/')) {
    const target = getCurrentDirectory(newPath);
    return target && typeof target !== 'string' ? newPath : null;
  }
  
  // Handle relative paths
  if (newPath === '..') {
    const parts = currentPath.split('/').filter(part => part !== '');
    if (parts.length <= 1) return '/~';
    parts.pop();
    return '/' + parts.join('/');
  }
  
  if (newPath === '.') return currentPath;
  
  const targetPath = currentPath === '/~' ? `/~/${newPath}` : `${currentPath}/${newPath}`;
  const target = getCurrentDirectory(targetPath);
  return target && typeof target !== 'string' ? targetPath : null;
}