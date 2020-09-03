import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { PersonalityTypeContext } from "../providers/PersonalityTypeProvider"
import { UserTypeContext } from "../providers/UserTypeProvider"


export default function Register() {
  const history = useHistory();
  const { register } = useContext(UserProfileContext);
  const { personalityType, getAllPersonalityType} = useContext(PersonalityTypeContext);
  const { userType, getAllUserType} = useContext(UserTypeContext);



  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userTypeId, setUserType] = useState("");
  const [personalityTypeId, setPersonalityType] = useState("");


  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = { name, email, userTypeId, personalityTypeId};
      register(userProfile, password)
        .then(() => history.push("/"));
    }
  };
  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" onChange={e => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
        </FormGroup>

        <fieldset>
                <div className="form-group">
                    <label htmlFor="userTypeSelect">Select whether you are manager or job seeker: </label>
                    <select
                        defaultValue=""
                        name="userType"
                        ref={userType}
                        id="userTypeSelectId"
                        className="form-control"
                        onChange={e => setUserType(e.target.value)}
                    >
                        <option value=
                        "0">Select whether you are manager or job seeker</option>
                        (userType.length)
                        {userType.map(ut => (
                            <option key={ut.id} value={ut.id}>
                                {ut.name}
                            </option>
                        ))}
                    </select>
                </div>
          </fieldset>

          <fieldset>
                <div className="form-group">
                    <label htmlFor="personalityTypeSelect">Select your personality type: </label>
                    <select
                        defaultValue=""
                        name="personalityType"
                        ref={personalityType}
                        id="personalityTypeSelecId"
                        className="form-control"
                        onChange={e => setPersonalityType(e.target.value)}

                    >
                        <option value="0">Select your personality type</option>
                        (personalityType.length)
                        {personalityType.map(pt => (
                            <option key={pt.id} value={pt.id}>
                                {pt.type}
                            </option>
                        ))}
                    </select>
                </div>
          </fieldset>


        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}