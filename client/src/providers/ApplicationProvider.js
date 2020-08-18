import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const ApplicationContext = createContext();

export function ApplicationProvider(props) {
  const apiUrl = "/api/JobApplication";
  const { getToken } = useContext(UserProfileContext);

  const [applications, setApplications] = useState([]);

  const getAllApplications = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setApplications));

  const addApplication = (application) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(application)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }));

      const getApplication = (id) => {
        getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            }).then((res) => res.json())
        );
    }

    const deleteApplication = (id) =>{
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
        );
    }
    const updateApplication = (application) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${application.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(application)
            }));
    };

  return (
    <ApplicationContext.Provider value={{ applications, getAllApplications, addApplication, getApplication, deleteApplication, updateApplication }}>
      {props.children}
    </ApplicationContext.Provider>
  );
}
