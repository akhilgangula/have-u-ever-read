import axios from "axios";
import httpStatus from "http-status";
import store from "../data/store";

export const getBookByLink = async (selfLink) => {
    const { data, status } = await axios.get(selfLink);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export const addComments = ({ bookId, commentId, userId, ratings, comment }) => {
    const data = store.addData({ bookId, userId, comment, commentId, ratings });
    return { data };
}

export const getComments = (bookId) => {
    const data = store.getData(bookId);
    return { data };
}