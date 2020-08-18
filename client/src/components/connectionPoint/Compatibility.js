import React from "react";
import "./Compatibility"


const Compatibility = ({ compatibility }) => {


    return (
        <>
            <tr class="Compatibility">
                <td>{compatibility.applicantPersonalityType}</td>
                <td>{compatibility.managerPersonalityType}</td>
                <td>{compatibility.compatibilityScore}</td>
                <td>{compatibility.scoreExplanation}</td>
            </tr>


        </>
    );
};

export default Compatibility;