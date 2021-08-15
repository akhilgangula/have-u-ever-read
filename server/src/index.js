import express from "express";
import httpStatus from "http-status";
import cors from "cors";
import bookRoutes from "./routes/book.routes";
import authorRoutes from './routes/author.routes';
import recommendationRoute from './routes/recommendation.routes';
import searchRoute from './routes/search.routes';
import userRoute from './routes/user.routes';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { PORT } from "./utils/config";
import mongoose from "mongoose";

const app = express();

app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use(bodyParser.json());
app.use(cookieParser())

app.use('/api/book', bookRoutes);

app.use('/api/author', authorRoutes);

app.use("/api/recommendation", recommendationRoute);

app.use("/api/search", searchRoute);

app.use("/api/user", userRoute);

app.get("/api/health", (req, res) => res.status(httpStatus.OK).send("OK"));


mongoose.connect("mongodb+srv://PG-internship:wbEMTmTSsLeNPj7D@cluster0.79qqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
})