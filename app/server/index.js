const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
import postRoutes from './routes/posts.js';


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)


const uri = "mongodb+srv://adminUser:Lalala7@cluster0.apbujcz.mongodb.net/?retryWrites=true&w=majority";

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




app.listen(PORT, () => console.log(`server running on port ${PORT}`))