import Router from "express"
import { BockRouter } from "./books.js";

export const GlobalRouter=Router(); 
GlobalRouter.use("/books",BockRouter)