import { getBookByLink as getBookByLinkService, getComments as getCommentsService, addComments as addCommentsService } from "../service/book.service";
import httpStatus from "http-status";

export const getBookByLink = async (req, res) => {
    const { selfLink } = req.query;
    const { data, error } = await getBookByLinkService(selfLink);
    if (error) {
        console.log("Book Controller", "getBookByLink", error);
        return res.status(httpStatus.BAD_REQUEST).json({ error });
    }
    return res.status(httpStatus.OK).send({ data });
}

export const getComments = async (req, res) => {
    const { id } = req.params;
    const { data } = getCommentsService(id);
    res.send({ data });
}

export const addComments = async (req, res) => {
    const { bookId: id, userId, commentId, comment, rating, title } = req.body;
    const { data } = addCommentsService({ id, commentId, userId, rating, comment, title });
    res.send(data);
}
