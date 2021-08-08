import { UserContext } from "../context/userContext";
import React, { useState } from 'react';

const UserContextProvider = ({ children }) => {
    const [userDetials, setUserDetails] = useState({});
    const [isLoggedIn, setLogInStatus] = useState(false);
    return (<UserContext.Provider value={{
        ...userDetials,
        isLoggedIn,
        logIn: (details) => { setUserDetails(details); setLogInStatus(true); },
        logOut: () => { setLogInStatus(false); }
    }}>
        {children}
    </UserContext.Provider>)
}

export default UserContextProvider;