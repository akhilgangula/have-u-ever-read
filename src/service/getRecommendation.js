import axios from "axios";
import httpStatus from "http-status";

export const getRecommendation = async ({ author = "amish tripathi" }) => {

    const { data, status } = await axios.get(`http://localhost:3010/api/recommendation/${encodeURI(author)}`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}