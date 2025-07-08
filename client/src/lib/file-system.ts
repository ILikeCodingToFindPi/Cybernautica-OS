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
Prize: $8,000

Goal: Build educational AI tools like chatbot tutors
Tech Stack: Any programming language
Deployment: via GitHub

This event challenges students to create innovative AI solutions for educational purposes. Teams will develop AI-powered tools that can assist in learning, such as intelligent tutoring systems, automated grading systems, or personalized learning assistants.

Key Features:
- AI-powered chatbot tutors
- Automated grading systems
- Personalized learning assistants
- Educational content recommendation systems
- Study schedule optimization tools

Judging Criteria:
- Innovation and creativity
- Technical implementation
- Educational impact
- User experience
- Scalability

Registration: Open now!
Deadline: July 18, 2025
Contact: events@npshsr.com`,

        'Codeundrum.txt': `CODEUNDRUM Event Information

Theme: Competitive Coding
Grades: 9-12
Type: Solo
Prize: $10,000

Rounds:
Level 1: Cornered! - Exception handling challenges
Level 2: Executed! - Advanced problem solving

Supported Languages: Python, Java, C, C++

This is the ultimate competitive programming challenge where individual participants face increasingly difficult algorithmic problems. The first round focuses on robust error handling and edge cases, while the second round tests advanced algorithmic thinking and optimization skills.

Challenge Types:
- Data structures and algorithms
- Dynamic programming
- Graph theory
- String manipulation
- Mathematical problems
- Time and space complexity optimization

Skills Required:
- Strong problem-solving abilities
- Algorithmic thinking
- Code optimization
- Debugging skills
- Time management

Registration: Now Open
Format: Online Judge System
Duration: 3 hours per round
Platform: HackerRank/CodeChef style interface`,

        'Cyphranexus.txt': `CYPHRANEXUS Event Information

Theme: Cryptography and Puzzle Solving
Grades: 9-12
Type: Team (2 members, must include 1 Grade 12 student)
Prize: $7,000

Skills Required:
- Book ciphers and classical cryptography
- Trail-following and clue interpretation
- Mathematical puzzle solving
- Pattern recognition
- Historical cipher knowledge

Challenge Types:
- Caesar and Substitution ciphers
- Beale Cipher-based riddles
- Steganography challenges
- Hash function puzzles
- Digital signature verification
- Modern cryptographic protocols

Example Challenge: Beale Cipher-based riddles
Teams will navigate through a series of interconnected cryptographic puzzles, each revealing clues to the next challenge. This event combines historical ciphers with modern cryptographic concepts.

Equipment Needed:
- Calculators
- Reference materials
- Notebooks for working
- Basic programming knowledge helpful

Team Formation Deadline: 11 July 2025
Event Date: July 18, 2025`,

        'HighStakes.txt': `HIGH STAKES Event Information

Theme: Strategy Card Games
Grades: 10-12
Type: Solo
Prize: $5,000

Game Types:
- Poker variants
- Blackjack strategy
- Custom card games
- Probability-based challenges

Skills Required:
- Mathematical probability
- Risk assessment
- Strategic thinking
- Decision making under pressure
- Bluffing and psychology

Challenge Structure:
- Multiple rounds of different card games
- Elimination-style tournament
- Final table with top performers
- Real-time strategy adjustments

Judging Criteria:
- Consistency across games
- Strategic decision making
- Adaptability to new game rules
- Mathematical accuracy
- Risk management

Registration: Open
Format: Tournament style
Duration: 4 hours
No prior card game experience required - rules will be explained`,

        'BreakingVirtual.txt': `BREAKING VIRTUAL Event Information

Theme: VR + Real-world Puzzles
Grades: 9-12
Type: Team (4 members)
Prize: $9,000

Challenge Components:
- Virtual Reality escape rooms
- Physical puzzle solving
- Mixed reality challenges
- Collaborative problem solving

Skills Required:
- Spatial reasoning
- Teamwork and communication
- Adaptability to VR environments
- Logical thinking
- Physical dexterity

Equipment Provided:
- VR headsets and controllers
- Physical puzzle components
- Mixed reality interfaces
- Collaboration tools

Challenge Types:
- 3D maze navigation
- Object manipulation in VR
- Pattern recognition across realities
- Time-based challenges
- Coordination between virtual and physical spaces

Team Roles:
- VR Navigator
- Physical Puzzle Solver
- Coordinator/Communication
- Strategy/Analysis

Registration: Open
Format: Progressive challenges
Duration: 3 hours
Team formation deadline: July 11, 2025`,

        'GeometryDash.txt': `GEOMETRY DASH Event Information

Theme: Robotics & Arduino
Grades: 9-12
Type: Team (3 members)
Prize: $8,500

Challenge: Build and program robots to navigate obstacle courses

Skills Required:
- Arduino programming
- Sensor integration
- Mechanical design
- Problem-solving
- Electronics knowledge

Components Provided:
- Arduino boards
- Sensors (ultrasonic, light, touch)
- Motors and servos
- Structural materials
- Basic tools

Challenge Types:
- Line following
- Obstacle avoidance
- Object pickup and placement
- Maze navigation
- Speed challenges

Programming Languages:
- C++ (Arduino IDE)
- Python (for advanced features)
- Block-based programming available

Team Roles:
- Programmer
- Hardware Designer
- Strategist/Tester

Registration: Open
Format: Build and compete
Duration: 5 hours
Materials provided, but teams can bring additional components`,

        'Sonaria.txt': `SONARIA Event Information

Theme: Tech Music & Visual Art
Grades: 9-12
Type: Team (6-8 members)
Prize: $6,000

Challenge: Create multimedia performances combining technology, music, and visual art

Skills Required:
- Music production
- Visual arts/animation
- Programming (optional)
- Creative collaboration
- Performance skills

Categories:
- Digital music composition
- Visual art creation
- Interactive installations
- Live performance
- Technology integration

Tools Available:
- Digital Audio Workstations
- Graphics/Animation software
- Projection equipment
- Sound systems
- Programming environments

Judging Criteria:
- Creativity and originality
- Technical execution
- Artistic merit
- Collaboration quality
- Audience engagement

Team Composition:
- Musicians/Composers
- Visual Artists
- Technical/Programming support
- Performance coordinators

Registration: Open
Format: Create and perform
Duration: 6 hours
Final performances in the evening`,

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
Registration Deadline: July 11, 2025
Event Dates: July 18, 2025`,

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



Contact: 
Email: events@npshsr.com
Phone: 7975796436
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
