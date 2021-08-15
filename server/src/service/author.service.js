import { queryParams } from "../utils/config";
import axios from "axios";
import httpStatus from "http-status";
export const getRelaventAuthors = async (author) => {
    const { data, status } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}${queryParams}`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

// export const getBooksByAuthor = async (authorId) => {
//     const { data, status } = await axios.get(`https://openlibrary.org/authors/${authorId}/works.json`);
//     if (status === httpStatus.OK) {
//         return { data };
//     }
//     return { error: data };
// }