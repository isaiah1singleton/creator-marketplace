import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const profilesTable = pgTable("profiles", {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    displayName: text("display_name").notNull(),
    username: text("username").notNull(),
    role: text("role"),
    avatarUrl: text("avatar_url"),
  });