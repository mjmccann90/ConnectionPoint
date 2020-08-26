import React from 'react';
import { Card, CardBody, Button } from "reactstrap";
import { JobContext } from "../../providers/JobProvider"
// import { ApplicationContext } from "../../providers/ApplicationProvider"
import { Link } from "react-router-dom";



const Job = ({ job }) => {
  return (
    <Card className="m-4">
      <CardBody>
        <p>
                <strong>{job.title}</strong>
        </p>
        <p>{job.description}</p>
      </CardBody>

      
      
    </Card>
  );
};

export default Job;
