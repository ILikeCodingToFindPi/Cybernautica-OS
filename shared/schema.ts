import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  theme: text("theme").notNull(),
  description: text("description").notNull(),
  grades: text("grades").notNull(),
  type: text("type").notNull(), // SOLO, TEAM
  teamSize: text("team_size"),
  skills: text("skills").array(),
  details: jsonb("details"),
  color: text("color").notNull(),
  icon: text("icon").notNull(),
  isActive: boolean("is_active").default(true),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  type: text("type").notNull(), // info, warning, success
  isActive: boolean("is_active").default(true),
});

export const installedApps = pgTable("installed_apps", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  eventId: integer("event_id").references(() => events.id),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertAnnouncementSchema = createInsertSchema(announcements).omit({
  id: true,
});

export const insertInstalledAppSchema = createInsertSchema(installedApps).omit({
  id: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Announcement = typeof announcements.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
export type InstalledApp = typeof installedApps.$inferSelect;
export type InsertInstalledApp = z.infer<typeof insertInstalledAppSchema>;
