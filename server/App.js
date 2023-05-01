import express from "express"
// import router from './routes/route.js'
import cors from "cors"
import mongoose from "mongoose"

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/wheresthepartytonight", {})

// app.use('/*', router)

app.listen(3001, 'localhost', () => {
    console.log("Server started.")
});