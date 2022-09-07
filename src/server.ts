import express from "express"
import "reflect-metadata"
import { AppDataSource } from "./database/data-source"

const port = process.env.PORT || 3001

const app = express()

AppDataSource.initialize()
    .then(() => {
       console.log(`connected postgres database: ${process.env.TYPEORM_DATABASE}`)
    })
    .catch((error) => console.log(error))

app.listen(3000, () => console.log(`server is running on port ${port}`))