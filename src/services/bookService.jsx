import axios from "axios"

let baseUrl="http://localhost:4000/books"

export async function getPopularBooks(){

    let req=await axios.get("/popular",{
            baseURL:baseUrl 
    })
   return req.data;
}

export async function getNewArrivalBooks(count){

    let req=await axios.get("/new?start="+count,{
        baseURL:baseUrl 
})
return req.data;
}