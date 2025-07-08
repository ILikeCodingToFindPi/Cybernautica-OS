import { users, events, announcements, installedApps, type User, type InsertUser, type Event, type InsertEvent, type Announcement, type InsertAnnouncement, type InstalledApp, type InsertInstalledApp } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Events
  getAllEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Announcements
  getActiveAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  
  // Installed Apps
  getUserInstalledApps(userId: number): Promise<InstalledApp[]>;
  installApp(installedApp: InsertInstalledApp): Promise<InstalledApp>;
  uninstallApp(userId: number, eventId: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private announcements: Map<number, Announcement>;
  private installedApps: Map<number, InstalledApp>;
  private currentUserId: number;
  private currentEventId: number;
  private currentAnnouncementId: number;
  private currentInstalledAppId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.announcements = new Map();
    this.installedApps = new Map();
    this.currentUserId = 1;
    this.currentEventId = 1;
    this.currentAnnouncementId = 1;
    this.currentInstalledAppId = 1;
    
    // Initialize with default data
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Create default events
    const defaultEvents: InsertEvent[] = [
      {
        name: "CODEUNDRUM",
        theme: "Competitive Coding",
        description: "An exciting, individual, competitive coding competition designed to challenge students' programming skills through multiple levels of testing.",
        grades: "9-12",
        type: "SOLO",
        teamSize: "2 participants per school",
        skills: ["Python", "Java", "C", "C++", "Error handling"],
        details: {
          rounds: ["Level 1: Cornered! - Testing exception and error handling", "Level 2: Executed! - Write codes based on problem statements at an advanced level from scratch"],
          languages: ["Python", "Java", "C", "C++"],
          equipment: "Participants will be provided with computer systems",
          eventHeads: [
            { name: "Netra Karthigeyan", email: "netrakarthigeyan@gmail.com" }
          ]
        },
        color: "cyber-green",
        icon: "fas fa-code",
        isActive: true
      },
      {
        name: "HACKADEMIA",
        theme: "AI for Education",
        description: "In this electrifying race against time, teams will design AI-powered tools that reimagine how students learn, revise, and understand school subjects. Think chatbots that explain calculus, physics or chemistry-if it teaches, it counts!",
        grades: "9-12",
        type: "TEAM",
        teamSize: "2-3 members per team",
        skills: ["Python", "Javascript", "AI", "Education", "Problem-solving"],
        details: {
          goal: "Design AI-powered tools that reimagine how students learn, revise, and understand school subjects",
          tech: "Any programming language (Python, Javascript etc), GitHub deployment",
          focus: "AI solutions for educational purposes",
          equipment: "Bring your own laptops; Wi-Fi will be provided",
          subjectDrop: "Subject drop happens 1 day before the hackathon",
          eventHeads: [
            { name: "Pranjal Jain", email: "4pranjaljain@gmail.com" },
            { name: "Deeptarka Dey", email: "deeptarkadey29@gmail.com" },
            { name: "Vishnu Srigiriraju", email: "vishnu.srigiriraju@gmail.com" }
          ]
        },
        color: "cyber-cyan",
        icon: "fas fa-robot",
        isActive: true
      },
      {
        name: "CYPHRANEXUS",
        theme: "Cryptography and Puzzle Solving",
        description: "Find the Key, Follow the Trail, Decipher! Be ready to engage in mind-bending puzzles and to perceive meaningful connections between seemingly unrelated things. Participants will use their expertise in technology and their problem-solving abilities to decrypt a powerful message, all while racing against the clock.",
        grades: "9-12",
        type: "TEAM",
        teamSize: "2 members per team",
        skills: ["Cryptography", "Book ciphers", "Problem-solving", "Technology"],
        details: {
          example: "Basic idea of a Book Cipher. Example: Beale Ciphers",
          requirements: "Must include one student from Grade 12",
          registrationLimit: "8 teams in total; first-come, first-serve basis",
          eventHeads: [
            { name: "Aditya Kathait", email: "kathaitaditya12@gmail.com" },
            { name: "Riya Shivram", email: "riya.shivram@gmail.com" }
          ]
        },
        color: "cyber-pink",
        icon: "fas fa-lock",
        isActive: true
      },
      {
        name: "HIGH STAKES",
        theme: "Card-based Strategy Games",
        description: "Step into the exhilarating world of High Stakes! A thrilling multi-round strategy-based event that blends timeless classics with smart risk-taking. Participants will battle it out through various card related chance games. With credits at stake and eliminations at every turn, only the sharpest minds will survive till the end.",
        grades: "10-12",
        type: "SOLO",
        teamSize: "2 participants per school (individual participation)",
        skills: ["Strategy", "Risk Assessment", "Prediction", "Java", "Python"],
        details: {
          focus: "Multi-round strategy-based event with card games",
          bonus: "The leaderboard is your lifeline-stay on top or get knocked out!",
          equipment: "Event will be conducted at the school computer lab",
          registrationLimit: "7 teams in total; first-come, first-serve basis",
          eventHeads: [
            { name: "Anshuman Kesavan", email: "anshuman.s.kesavan@gmail.com" },
            { name: "Tejaas Muthukumar", email: "tejaas08@gmail.com" },
            { name: "Goutham Ramanathan", email: "gouthamramanathan1234@gmail.com" }
          ]
        },
        color: "purple-500",
        icon: "fas fa-diamond",
        isActive: true
      },
      {
        name: "BREAKING VIRTUAL",
        theme: "Mystery Game with Tech Twist",
        description: "A mystery game with a tech twist! You'll start by digging through clues hidden on USB drives and inside a computer to figure out a secret code. Then, you'll jump into a virtual world where one teammate (blindfolded!) has to shoot the right targets-while the rest of you guide them with your voice. Finally, your team will battle it out using computers and real-world games to beat the final stage.",
        grades: "9-12",
        type: "TEAM",
        teamSize: "4 members per team",
        skills: ["Command line", "Logic", "Coordination", "Communication", "Computer knowledge"],
        details: {
          phases: ["USB clue solving", "Virtual world with blindfolded teammate shooting targets", "Final computer and real-world game battle"],
          equipment: "Usage of any devices except those given by organisers is not permitted",
          eventHeads: [
            { name: "Srijon Sarkar", email: "srijons023@gmail.com" },
            { name: "Gautham Karthik", email: "gautham797@gmail.com" },
            { name: "Pranav Karthikeyan", email: "pranav24ss64@gmail.com" },
            { name: "Anush Rao", email: "anushrao07@gmail.com" },
            { name: "Akshar Damodar", email: "akshardamodar47@gmail.com" }
          ]
        },
        color: "red-500",
        icon: "fas fa-vr-cardboard",
        isActive: true
      },
      {
        name: "GEOMETRY DASH",
        theme: "Arduino Programming & Robotics",
        description: "Geometry Dash challenges each team to transform pure Python logic into flawless motion. In a ten-minute coding sprint, participants will program an Arduino line-tracing rover to replicate intricate geometric figures with speed and precision. External references are prohibited; only algorithmic insight decides the outcome as judges score path fidelity, execution time, and efficiency.",
        grades: "9-12",
        type: "TEAM",
        teamSize: "3 members per team",
        skills: ["Python", "Arduino", "Robotics", "Programming", "Geometry"],
        details: {
          task: "Program an Arduino line-tracing rover to replicate intricate geometric figures",
          judging: "Path fidelity, execution time, and efficiency",
          timeLimit: "Ten-minute coding sprint",
          equipment: "Additional hardware for building the bot, or uploading the code is not required",
          eventHeads: [
            { name: "Arjun Sinha", email: "arjun@iqlect.com" },
            { name: "Nihaar S", email: "nihaars@hotmail.com" }
          ]
        },
        color: "yellow-500",
        icon: "fas fa-microchip",
        isActive: true
      },
      {
        name: "SONARIA",
        theme: "Tech-Themed Music + Visual Art",
        description: "Sonaria is a unique and electrifying event that fuses the worlds of technology, music, and design. Participants must bring both cyber knowledge and musical flair to the stage. Each team is split into two groups: one group crafts a clever parody of a popular song, using cyber topics ranging from cybersecurity to technology. The other group must transform the song into a visually striking poster.",
        grades: "9-12",
        type: "TEAM",
        teamSize: "6-8 members per team",
        skills: ["Music", "Art", "Design", "Performance", "Cyber safety", "Technology"],
        details: {
          roles: "2 members for graphic design and the rest in singing",
          examples: "From firewalls to phishing, from coding to hacking, Sonaria is where the digital meets the dramatic",
          requirements: "Proficient in vocals (backing track will be provided)",
          registrationLimit: "8 teams in total; first-come, first-serve basis",
          eventHeads: [
            { name: "Nishka Rao", email: "nishkarao01@gmail.com" },
            { name: "Nimisha Srivastava", email: "nimishasrivastava220@gmail.com" },
            { name: "Sumaira Shantanu", email: "sumaira.shantanu@gmail.com" }
          ]
        },
        color: "indigo-500",
        icon: "fas fa-music",
        isActive: true
      }
    ];

    defaultEvents.forEach(event => this.createEvent(event));

    // Create default announcements
    const defaultAnnouncements: InsertAnnouncement[] = [
      {
        message: "🔥 CYBERNAUTICA 2025 - Registration open until July 11th, 2025 by 11:59 PM",
        type: "success",
        isActive: true
      },
      {
        message: "📅 Event Date: July 18th, 2025 | Reporting Time: 8:00 AM | Concludes by 4:00 PM",
        type: "info",
        isActive: true
      },
      {
        message: "⚠️ Each student can participate in only ONE event. Bring valid school ID.",
        type: "warning",
        isActive: true
      },
      {
        message: "📱 All phones must be deposited at registration desk upon arrival",
        type: "info",
        isActive: true
      }
    ];

    defaultAnnouncements.forEach(announcement => this.createAnnouncement(announcement));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => event.isActive);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id,
      details: insertEvent.details || null,
      teamSize: insertEvent.teamSize || null,
      skills: insertEvent.skills || null,
      isActive: insertEvent.isActive !== undefined ? insertEvent.isActive : true
    };
    this.events.set(id, event);
    return event;
  }

  // Announcement methods
  async getActiveAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values()).filter(announcement => announcement.isActive);
  }

  async createAnnouncement(insertAnnouncement: InsertAnnouncement): Promise<Announcement> {
    const id = this.currentAnnouncementId++;
    const announcement: Announcement = { 
      ...insertAnnouncement, 
      id,
      isActive: insertAnnouncement.isActive !== undefined ? insertAnnouncement.isActive : true
    };
    this.announcements.set(id, announcement);
    return announcement;
  }

  // Installed Apps methods
  async getUserInstalledApps(userId: number): Promise<InstalledApp[]> {
    return Array.from(this.installedApps.values()).filter(app => app.userId === userId);
  }

  async installApp(insertInstalledApp: InsertInstalledApp): Promise<InstalledApp> {
    const id = this.currentInstalledAppId++;
    const installedApp: InstalledApp = { 
      ...insertInstalledApp, 
      id,
      userId: insertInstalledApp.userId || null,
      eventId: insertInstalledApp.eventId || null
    };
    this.installedApps.set(id, installedApp);
    return installedApp;
  }

  async uninstallApp(userId: number, eventId: number): Promise<void> {
    const apps = Array.from(this.installedApps.entries());
    for (const [id, app] of apps) {
      if (app.userId === userId && app.eventId === eventId) {
        this.installedApps.delete(id);
        break;
      }
    }
  }
}

export const storage = new MemStorage();
