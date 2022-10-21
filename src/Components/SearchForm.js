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
              <Label htmlFor="name">Item Name</Label>
              <Input id="name" required="required" type="text" name="name" />
            </FormGroup>
            <Button>Add Item</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Profile;
