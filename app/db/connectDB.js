import Database from "better-sqlite3";
import path from "path";
// connect Database
const dbPath = path.resolve(process.cwd(), "app", "db", "dua_main.sqlite");
const db = new Database(dbPath);

export default db;
