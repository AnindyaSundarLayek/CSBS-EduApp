import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import pdfRoute from "./route/pdf.route.js"
const app = express()

app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 8050
const URI= process.env.MongoDBURI

// connect to mongoDB
try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to momngoDB")
} catch (error) {
  console.log("Error: ",error)
}

//define routes

app.use("/pdf",pdfRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})