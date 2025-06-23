import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", "");
export class Database {
  #database = {};
}
