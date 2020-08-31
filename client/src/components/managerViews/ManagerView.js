import React, { useState, useContext } from "react"
import { Card, CardBody, Button } from "reactstrap";
import { ManagerViewContext } from "../../providers/ManagerViewProvider"
import { JobContext } from "../../providers/JobProvider"

// import { ApplicationContext } from "../../providers/ApplicationProvider"
import { Link } from "react-router-dom";



const Job = ({ job }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const { deleteJob, refreshJobs } = useContext(JobContext)
  const { jobManager } = useContext(ManagerViewContext)
  //const { deleteManagerViewJob } = useContext(ManagerViewContext)

  return (
    <Card className="m-4">
      <CardBody>
        <p>
                <strong>{job.title}</strong>
        </p>
        <p>{job.description}</p>
      </CardBody>

       <Button color="secondary" size="sm" className="ml-2" outline><Link to={`/application/`} className="linkText">Edit</Link></Button> 
       <Button outline color="danger" onClick={() => {
                deleteJob(job.id).then(refreshJobs)
                toggle()
            }}>Delete</Button>
      
    </Card>
  );
};

export default Job;
