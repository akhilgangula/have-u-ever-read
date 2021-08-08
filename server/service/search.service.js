import axios from "axios";
import { queryParams } from "../utils/config";
import { constructQueryParams } from "../utils/utilityFunctions";

export const search = async ({ author, title }) => {
    const searchParams = {};
    if (author) searchParams['inauthor'] = author;
    if (title) searchParams['intitle'] = title;
    const customQuery = constructQueryParams(searchParams);
    const { data, status } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${customQuery}${queryParams}`);
    if (status === httpStatus.OK) {
        return { data }
    }
    return { error: data };
}