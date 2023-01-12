import Router from "express"
import { DBooks, DNewBooks } from "../data/books.js";

export const BockRouter=Router();

BockRouter.get("/popular",(req,res)=>{
    setTimeout(()=>res.send(DBooks),2000)
})
BockRouter.get("/mostliked",(req,res)=>{
    setTimeout(()=>res.send(DBooks.slice(0,8)),2000)
})

BockRouter.get("/new",(req,res)=>{
    let rest=0;
    const page=Number(req.query.page)
    if(page===1){
            rest=0
    }
    else{
        rest=(page-1)*5;
    }
  
    const resultBooks=DNewBooks.slice(rest,page*5);

  
    if(page===1){
        res.send({
            count:DNewBooks.length,
            next:`http://localhost:4000/books/new?page=${page+1}`,
            previus:null,
            results:resultBooks
        })
    } 
    else{
     


        if(resultBooks[resultBooks.length-1].id===DNewBooks[DNewBooks.length-1].id){
            res.send({
                count:DNewBooks.length,
                next:null,
                previus:`http://localhost:4000/books/new?page=${page-1}`,
                results:resultBooks
            })

        }
        else{
            res.send({
                count:DNewBooks.length,
                next:`http://localhost:4000/books/new?page=${page+1}`,
                previus:`http://localhost:4000/books/new?page=${page-1}`,
                results:resultBooks
            })
        }
        
       
    }
})