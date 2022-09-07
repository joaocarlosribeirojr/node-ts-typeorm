import { DataSource } from "typeorm";
import { Category } from "./entities/Category";
import { Video } from "./entities/Video";


export const AppDataSource = new DataSource({
  type:  "postgres",
  host: process.env.TYPEORM_HOST ,
  port:  5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Category,Video],
  subscribers: [],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
})
