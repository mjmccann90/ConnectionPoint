import React, { useContext, useEffect } from "react";

import { CompatibilityContext } from "../../providers/CompatibilityProvider"
import { JobContext } from "../../providers/JobProvider";
import { UserTypeContext } from "../../providers/UserTypeProvider"
import {PersonalityTypeContext} from "../../providers/PersonalityTypeProvider"
import { Table } from "reactstrap";


const Compatibility = ({ Compatibility }) => {

    const { getJob } = useContext(JobContext);
    const { compatibilities, getAllCompatibilities } = useContext(CompatibilityContext);

    const { personalityType, getAllPersonalityType} = useContext(PersonalityTypeContext);
    const { userType, getAllUserType} = useContext(UserTypeContext);
    const userProfile = sessionStorage.getItem("userProfile");


  useEffect(() => {
    getAllCompatibilities()
     getAllUserType()
     getAllPersonalityType()
 }, []);

    return (
        <>
        <tbody>
      {compatibilities.map(Compatibility =>
       
            <tr class="Compatibility">
                <td>{Compatibility.job.title}</td>
                <td>{Compatibility.applicant.name}</td>
                <td>{Compatibility.applicant.personalityType.type}</td>
                <td>{Compatibility.job.manager.name}</td>
                <td>{Compatibility.job.manager.personalityType.type}</td>
                <td>{Compatibility.compatibility.compatibilityScore}</td>
                <td>{Compatibility.compatibility.scoreExplanation}</td>
            </tr>
      )}
    </tbody>


        </>
    );
};

export default Compatibility;