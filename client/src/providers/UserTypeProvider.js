import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const UserTypeContext = React.createContext();

export const UserTypeProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [userType, setUserType] = useState([]);

    const apiUrl = '/api/userType'

    const getUserTypes = (id) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setUserType));
    };

    const getAllUserType = () => {
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setUserType));
    };

    return (
        <UserTypeContext.Provider value={{
            userType, getAllUserType, getUserTypes
        }}>
            {props.children}
        </UserTypeContext.Provider>
    );
};