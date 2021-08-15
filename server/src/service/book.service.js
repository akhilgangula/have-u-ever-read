import axios from "axios";
import httpStatus from "http-status";
import { getUser } from "../service/user.service";
import store from "../data/store";

export const getBookByLink = async (selfLink) => {
    const { data, status } = await axios.get(selfLink);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export const addComments = ({ id, commentId, userId, ratings, comment, title }) => {
    const data = store.addData(id, { bookId: id, userId, comment, commentId, ratings, title });
    return { data };
}

export const getComments = (bookId) => {
    const data = store.getData(bookId);
    return { data };
}
