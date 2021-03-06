import React, { useState, useContext } from "react";
import { JobContext } from "../../providers/JobProvider";
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  Label,
  Button,
} from "reactstrap";

const JobForm = () => {
  const { addJob, refreshJobs } = useContext(JobContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userProfile = sessionStorage.getItem("userProfile");


  const submit = (e) => {
    e.preventDefault();

    const job = {
      title,
      description};

    addJob(job).then(refreshJobs);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="cards-column">
          
          <Card>
            <CardBody>
              <Form onSubmit={submit}>
                <FormGroup row>
                <Label for="title">Job Title</Label>
                    <Input
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  
                  <Label for="jobDescription">Job Description</Label>
                    <Input type="textarea" name="text"
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  
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
