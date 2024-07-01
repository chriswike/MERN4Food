import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//connect to mongodo with mongooge
//typescript cast as sring
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to Database"));

//create express server
const app = express();
app.use(express.json())
app.use(cors())

//test server
app.get("/test", async (req: Request, res: Response)=>{
    res.json({ message: "Hello!"});
});

app.listen(8000, ()=> {
    console.log("sever started on localhost:8000")
});