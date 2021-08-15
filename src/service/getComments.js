import axios from "axios";
import httpStatus from "http-status";
import httpClient from "../utils/httpClient";
export const getCommentsByBookId = async ({ id }) => {
    const { data: { data }, status } = await axios.get(`http://localhost:3010/api/book/comment/${id}`);
    if (status === httpStatus.OK) {
        return { data };
    } else {
        return { error: data };
    }
}

export const addComment = async ({ bookId, userId, commentId, comment, rating, title }) => {
    const { data, status } = await httpClient.post(`http://localhost:3010/api/book/comment`, { bookId, userId, commentId, comment, rating, title });
    if (status === httpStatus.OK) {
        return { data };
    } else {
        return { error: data };
    }
}