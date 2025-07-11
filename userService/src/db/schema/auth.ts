import { InferSelectModel, } from "drizzle-orm";
import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const users = pgTable("User", {
  id: serial("id").primaryKey(),
  first_name: varchar("first_name", { length: 255 }),
  last_name: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone_number: varchar("phone_number", { length: 15 }).unique(),
  password: varchar("password", { length: 255 }).notNull(),
  Company_Name: varchar("company_name", { length: 255 }).notNull(),
  profile_picture: varchar("profile_picture", { length: 255 }),
  is_verified: varchar("is_verified", { enum: ["true", "false"] }).default("false").notNull(),
  is_active: varchar("is_active", { enum: ["true", "false"] }).default("true").notNull(),
  is_deleted: varchar("is_deleted", { enum: ["true", "false"] }).default("false").notNull(),
  is_blocked: varchar("is_blocked", { enum: ["true", "false"] }).default("false").notNull(),
  is_approved: varchar("is_approved", { enum: ["true", "false"] }).default("false").notNull(),
  is_suspended: varchar("is_suspended", { enum: ["true", "false"] }).default("false").notNull(),
  is_password_reset: varchar("is_password_reset", { enum: ["true", "false"] }).default("false").notNull(),
  is_email_verified: varchar("is_email_verified", { enum: ["true", "false"] }).default("false").notNull(),
  is_phone_verified: varchar("is_phone_verified", { enum: ["true", "false"] }).default("false").notNull(),
  email_verified_at: timestamp("is_email_verified_at", { mode: "date" }),
  phone_verified_at: timestamp("is_phone_verified_at", { mode: "date" }),
  password_reset_at: timestamp("is_password_reset_at", { mode: "date" }),
  is_blocked_at: timestamp("is_blocked_at", { mode: "date" }),
  is_approved_at: timestamp("is_approved_at", { mode: "date" }),
  is_suspended_at: timestamp("is_suspended_at", { mode: "date" }),
  is_deleted_at: timestamp("is_deleted_at", { mode: "date" }),
  is_active_at: timestamp("is_active_at", { mode: "date" }),
  is_verified_at: timestamp("is_verified_at", { mode: "date" }),
  role: varchar("role", { enum: ["user", "admin"] }).default("user").notNull(),
  refresh_token: text("refresh_token").unique(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});
export type User = InferSelectModel<typeof users>;