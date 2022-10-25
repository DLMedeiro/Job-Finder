import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
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

  const onSubmit = (e) => {
    e.preventDefault();
    update(formData);
  };
  return (
    <section>
      <h1>{user.firstName}'s Profile</h1>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
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
                id="password"
                required="required"
                type="password"
                name="password"
                // value={formData.password}
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={onSubmit}>Update Profile</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Profile;
