import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const JobContext = createContext();

export function JobProvider (props) {
  const apiUrl = "/api/job";
  const { getToken } = useContext(UserProfileContext);

  const [jobs, setJobs] = useState([]);

  const refreshJobs = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setJobs));


        const deleteJob = (id) =>{
          return getToken().then((token) =>
              fetch(`${apiUrl}/${id}`, {
                  method: "DELETE",
                  headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "job/json"
                  }
              })
          );
      }

      const getJob = (id) => {
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

    const addJob = (job) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
      }));

      const updateJob = (id, job) => {
        return getToken().then((token) =>
        fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(job)
        })).then(refreshJobs);
    };

  return (
    <JobContext.Provider value={{ jobs, deleteJob,addJob, refreshJobs, getJob, updateJob }}>
      {props.children}
    </JobContext.Provider>
  );
}
