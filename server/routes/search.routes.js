import express from "express";
import { getSearchResult } from "../controllers/search.controller";

const app = express.Router();

app.get("/", getSearchResult);

export default app;
