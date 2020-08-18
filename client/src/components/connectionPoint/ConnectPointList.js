import React, { useContext, useEffect } from "react";
import { Table } from 'reactstrap';
import { CompatibilityContext } from "../../providers/CompatibilityProvider"


const ConnectPointList = (connectPointTable) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Job Title</th>
          <th>Applicant Personality Type</th>
          <th>Manager Personality Type</th>
          <th>ConnectionPoint Score</th>
          <th>Explaination</th>
        </tr>
      </thead>
    </Table>
  );
}

export default ConnectPointList;