import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PersonalityTypeContext = React.createContext();

export const PersonalityTypeProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [personalityType, setPersonalityType] = useState([]);

    const apiUrl = '/api/personalityType'

    const getPersonalityTypes = (id) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPersonalityType));
    };

    const getAllPersonalityType = () => {
            return fetch(apiUrl, {
                method: "GET",
            }).then(resp => resp.json())
                .then(setPersonalityType);
    };

    return (
        <PersonalityTypeContext.Provider value={{
            personalityType, getAllPersonalityType, getPersonalityTypes
        }}>
            {props.children}
        </PersonalityTypeContext.Provider>
    );
};