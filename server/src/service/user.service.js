import store from "../data/userStore";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";

export const addUser = async ({ email, lastName, firstName, imageUrl, userId, password }) => {
    let encryptedPass = password;
    if(password){
        encryptedPass = await bcrypt.hash(password, 8);
    }
    const user = await UserModel.create({ email, lastName, firstName, imageUrl, userId, password: encryptedPass });
    return user ? { data: { email, lastName, firstName, imageUrl, userId } } : null;
}

export const getUser = async (userId) => {

    const user = await UserModel.findOne({ userId }).lean();
    if (user) {
        return { data: user };
    }
    return { error: "User not found" };

    // const data = store.getAllData();
    // const user = Object.values(data).find(entry => entry.userId === userId);
    // if (!user) {
    //     return { data: undefined };
    // }
    // return { data: user };
}

export const getUserByEmail = async (email, password) => {
    const user = await UserModel.findOne({ email }).lean();
    if (user) {
        if (await UserModel.isPasswordMatch(password, user.password)) {
            return { data: user };
        }
    }
    return { error: "User not found" };
    // const data = store.getData(email);
    // if (!data) {
    //     return { data: undefined };
    // }
    // return { data };
}