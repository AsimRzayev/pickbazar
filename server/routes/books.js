import Router from "express"
import { DBooks, DNewBooks } from "../data/books.js";

export const BockRouter=Router();

BockRouter.get("/popular",(req,res)=>{
    setTimeout(()=>res.send(DBooks),2000)
})
BockRouter.get("/new",(req,res)=>{
    let count=Number(req.query.start) || 0;
    let end=count+2;
    console.log(end)
    setTimeout(()=>res.send(DNewBooks.slice(count,end)),2000)
})