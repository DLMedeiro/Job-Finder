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

function Profile() {
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
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                required="required"
                type="text"
                name="firstName"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                required="required"
                type="text"
                name="lastName"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input id="email" required="required" type="text" name="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                required="required"
                type="text"
                name="confirm"
              />
            </FormGroup>
            <Button>Add Item</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Profile;
