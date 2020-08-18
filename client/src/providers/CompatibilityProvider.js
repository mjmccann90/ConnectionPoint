import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const CompatibilityContext = React.createContext();

export const CompatibilityProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [compatibilities, setCompatibilities] = useState([]);

    const apiUrl = '/api/compatibility'

    const getCompatibility = (id) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setCompatibilities));
    };

    const getAllCompatibilities = () => {
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setCompatibilities));
    };
    return (
        <CompatibilityContext.Provider value={{
            compatibilities, getAllCompatibilities, getCompatibility
        }}>
            {props.children}
        </CompatibilityContext.Provider>
    );
};
