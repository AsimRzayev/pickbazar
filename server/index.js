import express from "express"
import cors from "cors"
import bodyparser from 'body-parser';
import { GlobalRouter } from "./routes/index.js";
const app=express();

const corsOptions={
    origin:["http://localhost:3000","http://localhost:3001"],
    optionsSuccessStatus: 200 ,
    method:["POST","GET"]
}
app.use(cors(corsOptions))
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())

app.use("",GlobalRouter)


const port=4000;
app.listen(port,function(){
    console.log("Orient gorup 3 mock is runing http://localhost:"+port)
})