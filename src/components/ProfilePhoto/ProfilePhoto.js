import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
const ProfilePhoto = () => {
    const userContext = useContext(UserContext)
    return (<img src={userContext.imageUrl} style={{width: "40px"}}/>);
}

export default ProfilePhoto;