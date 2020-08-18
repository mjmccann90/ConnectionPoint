import React, { useContext, useEffect } from "react";
import Application from "../application/Application";
import { ApplicationContext } from "../../providers/ApplicationProvider";

export default function ApplicationList() {
  const { applications, getAllApplications } = useContext(ApplicationContext);

  useEffect(() => {
    getAllApplications();
  }, []);
//
  return (
    <section>
      {applications.map(a =>
        <Application key={a.id} application={a}/>
      )}
    </section>
  );
}