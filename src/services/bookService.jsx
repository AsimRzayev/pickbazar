import axios from "axios";

let baseUrl="http://localhost:4000/books"

export async function getPopularBooks(){

    let req=await axios.get("/popular",{
            baseURL:baseUrl 
    })
   return req.data;
}

export async function getMostLikedBooks(){

    let req=await axios.get("/mostliked",{
            baseURL:baseUrl 
    })
   return req.data;
}

export async function getAuthors(){

    let req=await axios.get("/authors",{
            baseURL:baseUrl 
    })
   return req.data;
}


export async function getManufacturers(){

    let req=await axios.get("/manufacturers",{
            baseURL:baseUrl 
    })
   return req.data;
}


export async function getNewArrivalBooks({pageParam=1}){

    let req=await axios.get(`/new?page=${pageParam}`,{
        baseURL:baseUrl 
})


const data= await req.data;

const responseData = {
    results:data.results,
    next: data.next === null ? undefined : pageParam + 1,
  };
  return responseData;
}
