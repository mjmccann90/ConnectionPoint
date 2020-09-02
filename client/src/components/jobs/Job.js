import React from 'react';
import { Card, CardBody, Button } from "reactstrap";
import { JobContext } from "../../providers/JobProvider"

// import { ApplicationContext } from "../../providers/ApplicationProvider"
import { Link } from "react-router-dom";



const Job = ({ job }) => {
  const userProfile = sessionStorage.getItem("userProfile");

  return (
    <Card className="m-4">
      <CardBody>
        <p>
                <strong>Posted by: {job.manager.name}</strong>
        </p>
        <p>
                <strong>{job.title}</strong>
        </p>
        <p>{job.description}</p>
        <h7>
          <a href="mailto:{job.manager.email}">
            <span class="label">Email your resume</span>
          </a>
        </h7>
      </CardBody>
    </Card>
  );
};

export default Job;
