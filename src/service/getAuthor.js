import axios from "axios"
import httpStatus from "http-status";
export const getRelatedAuthors = async ({id}) => {
    const { data, status } = await axios.get(`http://localhost:3010/api/author/${encodeURI(id)}`);
    if (status === httpStatus.OK) {
        return { data };
    } else {
        return { error: data };
    }
}

export const getWorkByAuthor = async () => {
    const { data, status } = await axios.get("http://localhost:3010/api/author/books/OL6976840A");
    if (status === httpStatus.OK) {
        return data;
    } else {
        return { error: data };
    }
}