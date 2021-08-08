import express from "express";
import httpStatus from "http-status";
import cors from "cors";
import bookRoutes from "./routes/book.routes";
import authorRoutes from './routes/author.routes';
import recommendationRoute from './routes/recommendation.routes';
import searchRoute from './routes/search.routes';
import bodyParser from "body-parser";
import { PORT } from "./utils/config";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/book', bookRoutes);

app.use('/api/author', authorRoutes);

app.use("/api/recommendation", recommendationRoute);

app.use("/api/search", searchRoute);

app.get("/api/health", (req, res) => res.status(httpStatus.OK).send("OK"));

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
