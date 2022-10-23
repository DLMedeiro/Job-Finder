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

function LoginForm({ login, currentUser }) {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((userLogin) => ({
      ...userLogin,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(userLogin, userLogin.username);
    setUserLogin(INITIAL_STATE);
  };

  if (currentUser) {
    return;
  }

  return (
    <>
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
                  value={userLogin.username}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required="required"
                  type="text"
                  name="password"
                  value={userLogin.password}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button onClick={onSubmit}>Add Item</Button>
            </Form>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default LoginForm;
