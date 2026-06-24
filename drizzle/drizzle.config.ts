//drizzle.config.ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema/**/*.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  schemaFilter: ["public"],
   
  verbose: true,
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});


 