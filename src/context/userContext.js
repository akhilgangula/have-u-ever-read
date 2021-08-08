import { createContext } from "react";

export const UserContext = createContext({
    firstName: "Guest",
    lastName: "User",
    id: '000000000',
    isLoggedIn: false,
    logOut: () => {},
    logIn: () => {}
});