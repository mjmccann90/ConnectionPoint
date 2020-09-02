import React, { useContext, useEffect } from "react";
import { Table } from 'reactstrap';
import Compatibility from "./Compatibility";





const ConnectPointList = () => {

  return ( 
  <>
    <Table dark>
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Applicant Name</th>
          <th>Applicant Personality Type</th>
          <th>Manager Name</th>
          <th>Manager Personality Type</th>
          <th>ConnectionPoint Score</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <Compatibility/>
    </Table>
    </>
  );
}

export default ConnectPointList;