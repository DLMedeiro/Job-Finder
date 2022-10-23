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

function Profile({ currentUser }) {
  const [formData, setFormData] = useState(currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // login(userLogin, userLogin.username);
  };
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                required="required"
                type="text"
                name="username"
                value={currentUser.username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                required="required"
                type="text"
                name="firstName"
                value={currentUser.firstName}
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
                value={currentUser.lastName}
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
                value={currentUser.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                required="required"
                type="text"
                name="confirm"
                // value={userLogin.username}
                // onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={onSubmit}>Add Item</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Profile;
