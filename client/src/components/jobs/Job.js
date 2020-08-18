import React from 'react';
import { Card, CardBody, Button } from "reactstrap";
import { JobContext } from "../../providers/JobProvider"
import { ApplicationContext } from "../../providers/ApplicationProvider"
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

      <Button color="secondary" size="sm" className="ml-2" outline><Link to={`/application/`} className="linkText">Apply</Link></Button>
      
    </Card>
  );
};

export default Job;
