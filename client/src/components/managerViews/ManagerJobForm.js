import React, { useState, useContext } from "./node_modules/react";
import { JobContext } from "../../providers/JobProvider";
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  Col,
  Button,
} from "./node_modules/reactstrap";

const JobForm = () => {
  const { addJob, refreshJobs } = useContext(JobContext);
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [userProfileId, setUserProfileId] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const job = { title, desciption, userProfileId };

    addJob(job).then(refreshJobs);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="cards-column">
          <Card>
            <CardBody>
              <h3 className="text-center mb-3">Add Job</h3>
              <Form onSubmit={submit}>
                <FormGroup row>
                  <Col>
                    <Input
                      placeholder="User ID"
                      onChange={(e) => setUserProfileId(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Input
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Input
                      placeholder="Desciption"
                      onChange={(e) => setDesciption(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <Button type="submit" className="btn-block btn-info">
                  SUBMIT
                </Button>
              </Form>
            </CardBody>
          </Card>
          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
