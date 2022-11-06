import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/AuthRoute.js';
import dotenv from 'dotenv';
import AuthRoute from './routes/AuthRoute.js';

const app = express();

dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)



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