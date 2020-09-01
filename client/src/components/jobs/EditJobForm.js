import React, { useContext, useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { JobContext } from "../../providers/JobProvider";

const EditJobForm = ({ toggleEdit, Job }) => {

    const { updateJob } = useContext(JobContext);

   const title = useRef()
   const description = useRef()


    const submitForm = (e) => {
        e.preventDefault();

        updateJob(
            Job.id,
            {
                userProfileId: Job.userProfileId,
                id: Job.id,
                title: title.current.value,
                description: description.current.value

            })
            .then(toggleEdit)
    };

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="title">Job Title</Label>
                <Input type="text" name="title" id="title" innerRef={title} defaultValue={Job.title} maxlength="50" />
            </FormGroup>

            <FormGroup>
                <Label for="jobDescription">Job Description</Label>
                <Input type="text" name="jobDescription" id="jobDescription" innerRef={description} defaultValue={Job.description} maxlength="2000" />
            </FormGroup>

            <FormGroup className="text-right">
                <Button
                    type="button"
                    color="secondary"
                    onClick={toggleEdit}
                >Cancel</Button>
                <Button
                    type="submit"
                    color="primary"
                    className="ml-2"
                >Save</Button>
            </FormGroup>
        </Form >
    )

}

export default EditJobForm;