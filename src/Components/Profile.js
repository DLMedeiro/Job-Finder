import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Toast from "./Toast";
import "./Toast.css";
import "../styles/forms.css";

import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

function Profile({ update }) {
  const user = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    update(formData);
    new Toast({
      message: "Changes Saved",
      type: "success",
    });
  };
  return (
    <Card id="form-group">
      <h1>{user.firstName}'s Profile</h1>
      <CardBody>
        <Form onSubmit={submit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              className="form-control"
              disabled
              id="username"
              required="required"
              type="text"
              name="username"
              value={user.username}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              className="form-control"
              id="firstName"
              required="required"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              className="form-control"
              id="lastName"
              required="required"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              className="form-control"
              id="email"
              required="required"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              className="form-control"
              id="password"
              required="required"
              type="password"
              name="password"
              // value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button id="btn">Update Profile</Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Profile;
