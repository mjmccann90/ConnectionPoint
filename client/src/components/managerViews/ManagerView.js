import React, { useState, useContext } from "react"
import { Card, CardBody, Modal, Button, ModalHeader, ModalBody } from "reactstrap";
import { JobContext } from "../../providers/JobProvider"
import EditJobForm from "../jobs/EditJobForm"

// import { ApplicationContext } from "../../providers/ApplicationProvider"
import { Link } from "react-router-dom";



const Job = ({ job }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

  const { deleteJob, refreshJobs } = useContext(JobContext)
  //const { deleteManagerViewJob } = useContext(ManagerViewContext)

  return (
    <Card className="m-4">
      <CardBody>
        <p>
                <strong>{job.title}</strong>
        </p>
        <p>{job.description}</p>
      </CardBody>

       <Button color="secondary" size="sm" className="ml-2" outline onClick={toggleEdit}>Edit</Button>


       <Button outline color="danger" onClick={() => {
                deleteJob(job.id).then(refreshJobs)
                toggle()
            }}>Delete</Button>
      
      <Modal isOpen={editModal} className="modal-md">
          <ModalHeader>Edit Job</ModalHeader>
          <ModalBody>
              <EditJobForm Job={job} toggleEdit={toggleEdit} />
          </ModalBody>
      </Modal>
    </Card>
  );
};

export default Job;
