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
Type: Team (2-3 members)

Goal: Build educational AI tools like chatbot tutors
Tech Stack: Any programming language
Deployment: via GitHub

This event challenges students to create innovative AI solutions for educational purposes. Teams will develop AI-powered tools that can assist in learning, such as intelligent tutoring systems, automated grading systems, or personalized learning assistants.

Registration: Open now!
Deadline: December 15, 2024
Contact: hackademia@cybernautica.org`,

        'Codeundrum.txt': `CODEUNDRUM Event Information

Theme: Competitive Coding
Grades: 9-12
Type: Solo

Rounds:
Level 1: Cornered! - Exception handling challenges
Level 2: Executed! - Advanced problem solving

Supported Languages: Python, Java, C, C++

This is the ultimate competitive programming challenge where individual participants face increasingly difficult algorithmic problems. The first round focuses on robust error handling and edge cases, while the second round tests advanced algorithmic thinking and optimization skills.

Registration: Now Open
Format: Online Judge System
Duration: 3 hours per round`,

        'Cyphranexus.txt': `CYPHRANEXUS Event Information

Theme: Cryptography and Puzzle Solving
Grades: 9-12
Type: Team (2 members, must include 1 Grade 12 student)

Skills Required:
- Book ciphers and classical cryptography
- Trail-following and clue interpretation
- Mathematical puzzle solving

Example Challenge: Beale Cipher-based riddles
Teams will navigate through a series of interconnected cryptographic puzzles, each revealing clues to the next challenge. This event combines historical ciphers with modern cryptographic concepts.

Team Formation Deadline: December 10, 2024
Event Date: December 20, 2024`,

        'Events_List.txt': `CYBERNAUTICA 2024 Events Overview

1. CODEUNDRUM - Competitive Coding
   Solo event for grades 9-12
   
2. HACKADEMIA - AI for Education  
   Team event (2-3 members) for grades 9-12
   
3. CYPHRANEXUS - Cryptography & Puzzles
   Team event (2 members) for grades 9-12
   
4. HIGH STAKES - Strategy Card Games
   Solo event for grades 10-12
   
5. BREAKING VIRTUAL - VR + Real-world Puzzles
   Team event (4 members) for grades 9-12
   
6. GEOMETRY DASH - Robotics & Arduino
   Team event (3 members) for grades 9-12
   
7. SONARIA - Tech Music & Visual Art
   Team event (6-8 members) for grades 9-12

Total Prize Pool: $50,000
Registration Deadline: December 15, 2024
Event Dates: December 20-22, 2024`,

        'Registration_Info.txt': `CYBERNAUTICA Registration Information

How to Register:
1. Visit cybernautica.org/register
2. Select your events
3. Form teams (where applicable)
4. Submit required documents
5. Pay registration fee ($25 per participant)

Required Documents:
- Student ID verification
- Parental consent (for minors)
- Team formation agreement (team events)

Important Dates:
- Early Bird Registration: Until December 1 ($20 fee)
- Regular Registration: December 1-15 ($25 fee)
- Event Dates: December 20-22, 2024

Contact: 
Email: register@cybernautica.org
Phone: 1-800-CYBER-24
Discord: discord.gg/cybernautica`
      },
      'Readme.txt': 'Welcome to the CYBERNAUTICA file system! Explore the Events folder to learn about our hackathon competitions.'
    },
    'Desktop': {
      'Welcome.txt': 'Welcome to CYBERNAUTICA OS! This is your personal desktop space.'
    },
    'Downloads': {
      'sample.txt': 'This is a sample downloaded file.'
    },
    '.bashrc': '# CYBERNAUTICA Bash Configuration\nexport PS1="\\u@cybernautica:\\w$ "\nalias ll="ls -la"\nalias hack="echo \'Hacking in progress...\'"',
    '.profile': '# User profile for CYBERNAUTICA OS\necho "Welcome to the future, $(whoami)!"'
  }
};

export function getFileSystem(): FileSystemNode {
  return fileSystem;
}

export function getCurrentDirectory(path: string): FileSystemNode | null {
  const parts = path === '~' ? [] : path.split('/').filter(p => p && p !== '~');
  let current: FileSystemNode | string = fileSystem['~'];
  
  for (const part of parts) {
    if (typeof current === 'string' || !current[part]) {
      return null;
    }
    current = current[part];
  }
  
  return typeof current === 'object' ? current : null;
}

export function getFile(currentPath: string, filename: string): string | null {
  const dir = getCurrentDirectory(currentPath);
  if (!dir || !dir[filename] || typeof dir[filename] !== 'string') {
    return null;
  }
  return dir[filename] as string;
}

export function changeDirectory(currentPath: string, newPath: string): string | null {
  if (newPath === '~' || newPath === '/') {
    return '~';
  }
  
  if (newPath === '..') {
    if (currentPath === '~') {
      return '~'; // Can't go above home
    }
    const parts = currentPath.split('/').filter(p => p);
    if (parts.length <= 1) {
      return '~';
    }
    parts.pop();
    return parts.length === 0 ? '~' : '/' + parts.join('/');
  }
  
  // Handle relative path
  let targetPath = currentPath;
  if (currentPath === '~') {
    targetPath = '/' + newPath;
  } else {
    targetPath = currentPath + '/' + newPath;
  }
  
  // Check if directory exists
  const dir = getCurrentDirectory(targetPath);
  return dir ? targetPath : null;
}
