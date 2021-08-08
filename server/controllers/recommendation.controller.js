import httpStatus from "http-status";
import { search as searchService } from "../service/search.service";

export const getRecommendations = async (req, res) => {
    const { author } = req.params;
    const { data, error } = await searchService({ author });
    if (error) {
        console.log("Recommendation Controller", "getRecommendations", error);
        return res.status(httpStatus.BAD_REQUEST).send({ error });
    }
    return res.status(httpStatus.OK).send({ data });
}