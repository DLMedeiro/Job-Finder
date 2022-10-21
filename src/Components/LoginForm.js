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

function LoginForm() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <Form>
            <FormGroup>
              <Label htmlFor="username">UserName</Label>
              <Input
                id="username"
                required="required"
                type="text"
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required="required"
                type="text"
                name="password"
              />
            </FormGroup>
            <Button>Add Item</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default LoginForm;
