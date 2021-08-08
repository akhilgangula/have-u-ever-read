import express from "express";
import { getBookByLink, getComments, addComments } from "./../controllers/book.controller";
const app = express.Router();

app.get("/", getBookByLink);

app.get("/comment/:id", getComments);

app.post("/comment", addComments);

export default app;
