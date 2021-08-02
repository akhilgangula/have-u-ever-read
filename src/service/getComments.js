import axios from "axios";
import httpStatus from "http-status";

const getBook = async ({ id }) => {
    const { data, status } = await axios.get(`http://localhost:3010/book/comment/${id}`);
    if (status === httpStatus.OK) {
        return { data };
    } else {
        return { error: data };
    }
}
export default getBook;