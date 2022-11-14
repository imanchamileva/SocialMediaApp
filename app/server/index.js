import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js'

const app = express();

dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const uri = process.env.MONGO_DB;

// async function connect() {

//     try {
//         await mongoose.connect(uri);
//         console.log("connected to MongoDB");
//     } catch (error) {
//         console.error(error);
//     }
// }

// connect();


mongoose.connect(uri, {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})




app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

//usage of routes

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)