import express from "express";
import { authorize } from "../middleware/authorize";
import { getBookByLink, getComments, addComments } from "./../controllers/book.controller";
const app = express.Router();

app.get("/", getBookByLink);

app.get("/comment/:id", getComments);

app.post("/comment", authorize ,addComments);

app.post("/home", addComments);

export default app;