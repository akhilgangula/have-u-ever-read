import { createContext } from "react";

export const UserContext = createContext({
    firstName: "Guest",
    lastName: "User",
    userId: '000000000',
    imageUrl: "",
    email: "",
    isLoggedIn: false,
    logOut: () => {},
    logIn: () => {}
});