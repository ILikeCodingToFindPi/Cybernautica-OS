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
        description: "Competitive Coding Challenge with exception handling and advanced problem solving",
        grades: "9-12",
        type: "SOLO",
        teamSize: "1",
        skills: ["Python", "Java", "C", "C++"],
        details: {
          rounds: ["Level 1: Cornered! – Exception handling", "Level 2: Executed! – Advanced problem solving"],
          languages: ["Python", "Java", "C", "C++"]
        },
        color: "cyber-green",
        icon: "fas fa-code",
        isActive: true
      },
      {
        name: "HACKADEMIA",
        theme: "AI for Education",
        description: "Build educational AI tools like chatbot tutors using any programming language",
        grades: "9-12",
        type: "TEAM",
        teamSize: "2-3",
        skills: ["AI", "Machine Learning", "Education"],
        details: {
          goal: "Build educational AI tools (e.g., chatbot tutors)",
          tech: "Any language; deploy via GitHub",
          focus: "AI solutions for educational purposes"
        },
        color: "cyber-cyan",
        icon: "fas fa-robot",
        isActive: true
      },
      {
        name: "CYPHRANEXUS",
        theme: "Cryptography and Puzzle Solving",
        description: "Cryptography challenges including book ciphers and trail-following puzzles",
        grades: "9-12",
        type: "TEAM",
        teamSize: "2 (must include Grade 12)",
        skills: ["Cryptography", "Book ciphers", "Trail-following"],
        details: {
          example: "Beale Cipher-based riddles",
          requirements: "Must include one Grade 12 student"
        },
        color: "cyber-pink",
        icon: "fas fa-lock",
        isActive: true
      },
      {
        name: "HIGH STAKES",
        theme: "Card-based Strategy Games",
        description: "Strategic prediction and risk-reward games with leaderboard elimination",
        grades: "10-12",
        type: "SOLO",
        teamSize: "1",
        skills: ["Strategy", "Risk Assessment", "Prediction"],
        details: {
          focus: "Strategic prediction, risk-reward games",
          bonus: "Leaderboard influences elimination"
        },
        color: "purple-500",
        icon: "fas fa-diamond",
        isActive: true
      },
      {
        name: "BREAKING VIRTUAL",
        theme: "Real-world + Virtual Puzzle",
        description: "Multi-phase challenge combining USB clues, VR shooting, and computer puzzles",
        grades: "9-12",
        type: "TEAM",
        teamSize: "4",
        skills: ["Command line", "Logic", "Coordination", "VR"],
        details: {
          phases: ["USB clue solving", "Blindfolded VR target shooting", "Final computer puzzle battle"]
        },
        color: "red-500",
        icon: "fas fa-vr-cardboard",
        isActive: true
      },
      {
        name: "GEOMETRY DASH",
        theme: "Robotics + Geometry",
        description: "Program a line-tracing Arduino rover judged on speed, accuracy, and code efficiency",
        grades: "9-12",
        type: "TEAM",
        teamSize: "3",
        skills: ["Arduino", "Robotics", "Programming", "Geometry"],
        details: {
          task: "Program a line-tracing Arduino rover",
          judging: "Speed, accuracy, code efficiency"
        },
        color: "yellow-500",
        icon: "fas fa-microchip",
        isActive: true
      },
      {
        name: "SONARIA",
        theme: "Tech-Themed Music + Visual Art",
        description: "Tech-themed music and visual art with poster design and parody song performance",
        grades: "9-12",
        type: "TEAM",
        teamSize: "6-8",
        skills: ["Music", "Art", "Design", "Performance"],
        details: {
          roles: "2 do poster design, remaining perform parody song",
          examples: "Sing about phishing, cyber safety"
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
        message: "🔥 HACKADEMIA registrations now open!",
        type: "success",
        isActive: true
      },
      {
        message: "🎯 CODEUNDRUM Level 2 starting soon",
        type: "info",
        isActive: true
      },
      {
        message: "🔐 CYPHRANEXUS team formation deadline approaching",
        type: "warning",
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
