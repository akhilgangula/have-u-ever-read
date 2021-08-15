import express from "express";
import { getRecommendations } from "../controllers/recommendation.controller";

const app = express.Router();

app.get("/:author", getRecommendations);

export default app;
