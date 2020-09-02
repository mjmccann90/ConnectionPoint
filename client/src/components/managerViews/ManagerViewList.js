import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

import ManagerView from "../managerViews/ManagerView";
import { ManagerViewContext } from "../../providers/ManagerViewProvider";
import { JobContext } from "../../providers/JobProvider";
import JobForm from "../jobs/JobForm"


export default function ManagerViewList() {
  const { jobsManagerViews } = useContext(ManagerViewContext);
  const { jobs, getJobByManager, setJobs, myJobs } = useContext(JobContext);
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));


  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const userId = sessionStorage.getItem("job")


  useEffect(() => {
    getJobByManager(userProfile.id)
  }, []);

  return (
    <>
    <Button onClick={(e) => {
      // check if the user is authenticated
      e.preventDefault()
      toggle()
        }}>New Job</Button>

      <section>
        {myJobs.map(j =>
          <ManagerView key={j.id} job={j}/>
        )} 
      </section>

      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
              New Job
          </ModalHeader>

          <ModalBody>
              <JobForm toggler={toggle} />
          </ModalBody>
        </Modal>
    </>
  );
}

