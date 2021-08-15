import express from "express";
import { authenticate, addUser, login, autoLogin } from "../controllers/user.controller";

const app = express.Router();

app.get("/:userId", authenticate);

app.post("/", addUser);

app.post("/login", login);

app.post("/autologin", autoLogin);

export default app;
