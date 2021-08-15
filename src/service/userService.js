import httpStatus from "http-status";
import httpClient from "../utils/httpClient";

export const getUser = async (id) => {
    const { data, status } = await httpClient.get(`http://localhost:3010/api/user/${id}`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export const validate = async (userName, password) => {
    const { data, status } = await httpClient.post(`http://localhost:3010/api/user/login`, { userName, password });
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export const createUser = async ({ email, lastName, firstName, imageUrl, userId }) => {
    const { data, status } = await httpClient.post("http://localhost:3010/api/user", { email, lastName, firstName, imageUrl, userId });
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export const autoLogin = async () => {
    const { data, status } = await httpClient.post('http://localhost:3010/api/user/autologin', {});
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data === "" ? "Auto-login Failed" : data };
}