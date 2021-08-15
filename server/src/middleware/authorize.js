import httpStatus from "http-status";
import { validate } from "../utils/auth";


export const authorize = (req, res, next) => {
    const { at } = req.cookies;
    const {data, error} = validate(at);
    if(error) {
        return res.status(httpStatus.UNAUTHORIZED).send({error: "Invalid token, re-login"});
    }
    next();
}