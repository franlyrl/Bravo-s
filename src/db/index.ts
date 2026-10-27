import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const isDbConfigured = Boolean(process.env.DATABASE_URL);

function createDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está definida. Copia .env.example a .env y pon tu cadena de conexión de Neon.");
  }
  return drizzle(neon(process.env.DATABASE_URL), { schema });
}

let _db: ReturnType<typeof createDb> | undefined;

export function getDb() {
  _db ??= createDb();
  return _db;
}
