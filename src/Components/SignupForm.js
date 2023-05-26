import React, { useState } from "react";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

function SignupForm({ registerNewUser }) {
  const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(formData);
    registerNewUser(formData);
    // setFormData(INITIAL_STATE);
  };
  return (
    <Card id="form-group">
      <h1>Sign Up</h1>
      <CardBody className="text-center">
        <Form onSubmit={submit}>
          <FormGroup>
            <Label className="form-label" htmlFor="username">
              Username
            </Label>
            <Input
              className="form-control"
              id="username"
              required="required"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" htmlFor="password">
              Password
            </Label>
            <Input
              className="form-control"
              id="password"
              required="required"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" htmlFor="firstName">
              First Name
            </Label>
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
            <Label className="form-label" htmlFor="lastName">
              Last Name
            </Label>
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
            <Label className="form-label" htmlFor="email">
              Email
            </Label>
            <Input
              className="form-control"
              id="email"
              required="required"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <Button id="btn">Create Profile</Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default SignupForm;
