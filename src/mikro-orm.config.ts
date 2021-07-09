import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

dotenv.config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  password: process.env.POSTGRES_PASSWORD,
} as Parameters<typeof MikroORM.init>[0];
