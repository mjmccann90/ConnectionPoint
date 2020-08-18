import React from 'react';
import { Card, CardBody } from "reactstrap";

const Application = ({ application, job }) => {
  return (
    <Card className="m-4">
      <CardBody>
        <p>
                <strong>{application.job?.title}</strong>
        </p>
        <p>{application.job?.description}</p>
      </CardBody>
    </Card>
  );
};

export default Application;