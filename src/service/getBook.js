import axios from "axios";
import httpStatus from "http-status";

export const getBook = async ({ selfLink }) => {
    const { data: { data }, status } = await axios.get(`http://localhost:3010/book?selfLink=${selfLink}`);
    if (status === httpStatus.OK) {
        return data;
    } else {
        return { error: data };
    }
}