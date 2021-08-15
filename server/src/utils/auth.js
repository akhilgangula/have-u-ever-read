import jwt from 'jsonwebtoken';
import { secretKey } from "./config";

export const getToken = (data) => jwt.sign(data, secretKey);

export const validate = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return { data: decoded };
    } catch (error) {
        return { error };
    }
}
