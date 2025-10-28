import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { log } from "console"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import { watch } from "fs"


//  App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// parse URL-encoded bodies (for form-data without files)
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/' , (req, res) => {
    res.send("Home page")
})


app.listen(port, () => {
    console.log("server started on PORT: "+ port);
    console.log("http://localhost:"+port);
    
    
})



// watch from 
// 6:29:00