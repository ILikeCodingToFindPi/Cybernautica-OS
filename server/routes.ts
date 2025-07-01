import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventSchema, insertAnnouncementSchema, insertInstalledAppSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events endpoints
  app.get("/api/events", async (_req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const eventId = parseInt(req.params.id);
      const event = await storage.getEvent(eventId);
      
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid event data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  // Announcements endpoints
  app.get("/api/announcements", async (_req, res) => {
    try {
      const announcements = await storage.getActiveAnnouncements();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch announcements" });
    }
  });

  app.post("/api/announcements", async (req, res) => {
    try {
      const validatedData = insertAnnouncementSchema.parse(req.body);
      const announcement = await storage.createAnnouncement(validatedData);
      res.status(201).json(announcement);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid announcement data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create announcement" });
    }
  });

  // Installed apps endpoints
  app.get("/api/users/:userId/installed-apps", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const installedApps = await storage.getUserInstalledApps(userId);
      res.json(installedApps);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch installed apps" });
    }
  });

  app.post("/api/installed-apps", async (req, res) => {
    try {
      const validatedData = insertInstalledAppSchema.parse(req.body);
      const installedApp = await storage.installApp(validatedData);
      res.status(201).json(installedApp);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid installed app data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to install app" });
    }
  });

  app.delete("/api/users/:userId/installed-apps/:eventId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const eventId = parseInt(req.params.eventId);
      await storage.uninstallApp(userId, eventId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to uninstall app" });
    }
  });

  // System endpoints
  app.get("/api/system/time", (_req, res) => {
    res.json({ time: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
