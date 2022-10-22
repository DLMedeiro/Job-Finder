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
              <Input
                id="search"
                required="required"
                type="text"
                name="search"
                placeholder="Enter search term"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Profile;
