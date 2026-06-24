import { InferSelectModel } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";



export const profile = pgTable("profile", {
    id: uuid("id").notNull().primaryKey().defaultRandom(),
    authId: uuid("auth_id").notNull().unique(),
    fname: text("fname").notNull(),
    lname: text("lname").notNull(),
    email: text("email").notNull(),
    mobile_no: integer("mobile_no").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    deletedAt: timestamp("deleted_at")
})

export type Profile = InferSelectModel<typeof profile>;