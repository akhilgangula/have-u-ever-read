import express from "express";
import httpStatus from "http-status";
import cors from "cors";
import axios from "axios";
import isbn from 'node-isbn';
import { map, reduce } from "lodash";
import { constructQueryParams } from "./utils/utilityFunctions";
const app = express();
app.use(cors());
app.get("/health", (req, res) => res.status(httpStatus.OK).send("OK"));

const queryParams = "&key=AIzaSyDuMbGQXe6cb5CnbIpg7rf3V3EYq_uqjGQ&fields=items(volumeInfo, id, selfLink)";
//service

const getRelaventAuthors = async (author) => {
    const { data, status } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}${queryParams}`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

const getBooksByAuthor = async (authorId) => {
    const { data, status } = await axios.get(`https://openlibrary.org/authors/${authorId}/works.json`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}



app.get("/book", async (req, res) => {
    const { data, status } = await axios.get(req.query.selfLink);
    if (status === httpStatus.OK) {
        return res.send({ data });
    }
    return res.status(httpStatus.BAD_REQUEST).json({ error: data });
    // isbn.resolve('9781623651435').then(function (book) {
    //     res.status(httpStatus.OK).json(book);
    // }).catch(function (err) {
    //     res.status(httpStatus.BAD_REQUEST).send({ err });
    // });
})
app.get("/author/books/:authorId", async (req, res) => {
    const { authorId } = req.params;
    const { data, error } = await getBooksByAuthor(authorId);
    if (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    res.status(httpStatus.OK).json(data);
})

app.get("/authors/:author", async (req, res) => {
    const { author } = req.params;
    const { data, error } = await getRelaventAuthors(author);
    if (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    res.status(httpStatus.OK).json(data);
});

app.get("/recommendation/:author", async (req, res) => {
    const { author } = req.params;
    const { data, status } = await axios.get(`https://openlibrary.org/search.json?q=${author}&_facet=false&_spellcheck_count=0&limit=7&fields=key,cover_i,title,author_name,name&mode=everything`);
    if (status === httpStatus.OK) {
        return res.status(status).json(data);
    }
    res.status(status).send(data);
});

app.get("/search", async (req, res) => {
    const { author, title } = req.query;
    const searchParams = {};
    if (author) searchParams['inauthor'] = author;
    if (title) searchParams['intitle'] = title;
    const customQuery = constructQueryParams(searchParams);
    console.log(`https://www.googleapis.com/books/v1/volumes?q=${customQuery}${queryParams}`);
    const { data, status } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${customQuery}${queryParams}`);
    if (status === httpStatus.OK) {
        return res.status(status).json(data);
    }
    res.status(status).send(data);

});

app.listen(3010, () => {
    console.log('Server started');
})

// https://openlibrary.org/authors/OL6976840A/works.json to get books by author

//https://openlibrary.org/search/authors.json?q=j%20k%20rowling get authors

