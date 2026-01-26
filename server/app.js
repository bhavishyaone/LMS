import express from "express";
import cors from 'cors';
import  {errrorHandler}  from "./src/middlewares/error.middleware.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use(errrorHandler)
export default app;