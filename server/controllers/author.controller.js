import { getRelaventAuthors } from "../service/author.service"

export const getAuthourByName = async (req, res) => {
    const { author } = req.params;
    const { data, error } = await getRelaventAuthors(author);
    if (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    res.status(httpStatus.OK).json(data);
}

