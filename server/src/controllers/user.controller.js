import { addUser as addUserService, getUser as getUserService, getUserByEmail } from "../service/user.service";
import httpStatus from "http-status";
import { getToken,validate } from "../utils/auth";

export const authenticate = async (req, res) => {
    const { userId } = req.params;
    const { data, error } = await getUserService(userId);
    if(!data) {
        return res.status(httpStatus.NOT_FOUND).send({error});
    }
    console.log('Payload', data);
    const token = getToken(data);
    res.cookie('at', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
    res.send({ data });
}

export const addUser = async(req, res) => {
    const { email, lastName, firstName, imageUrl, userId, password } = req.body;
    const { data } = await addUserService({ email, lastName, firstName, imageUrl, userId, password });
    const token = getToken(data);
    res.cookie('at', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true  })
    res.send(data);
}

export const login = async (req, res) => {
    const { userName, password } = req.body;
    const {data, error} = await getUserByEmail(userName, password);
    if(error) {
        res.send(httpStatus.UNAUTHORIZED).send({error});
        return; 
    }
    const token = getToken(data);
    res.cookie('at', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true  })
    res.send(data);
}

export const autoLogin = (req, res) => {
    const {at} = req.cookies;
    const {data, error} = validate(at);
    if(error) {
        res.status(httpStatus.UNAUTHORIZED).send();
    }
    res.status(httpStatus.OK).send(data);
}