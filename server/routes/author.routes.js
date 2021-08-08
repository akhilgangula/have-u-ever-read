import express from "express";
import { getAuthourByName } from "../controllers/author.controller";

const app = express.Router();


// app.get("/books/:authorId", async (req, res) => {
//     const { authorId } = req.params;
//     const { data, error } = await getBooksByAuthor(authorId);
//     if (error) {
//         return res.status(httpStatus.BAD_REQUEST).send(error);
//     }
//     res.status(httpStatus.OK).json(data);
// })

app.get("/:author", getAuthourByName);


export default app;
