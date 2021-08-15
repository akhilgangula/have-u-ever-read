import httpStatus from "http-status";
import { search as searchService } from "../service/search.service";

export const getSearchResult = async (req, res) => {
    const { author, title } = req.query;
    const { data, error } = await searchService({ author, title });
    if (error) {
        console.log("Search Controller", "getSearchResult", error);
        return res.status(httpStatus.BAD_REQUEST).send({ error });
    }
    return res.status(httpStatus.OK).send({ data });
}