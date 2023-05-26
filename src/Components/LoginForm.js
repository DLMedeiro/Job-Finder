import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
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

function LoginForm({ login, error }) {
  const user = useContext(UserContext);
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

  const submit = (e) => {
    e.preventDefault();
    login(userLogin, userLogin.username);
    setUserLogin(INITIAL_STATE);
  };

  return (
    <>
      {user.username ? (
        <>
          <Redirect to="/companies" />
        </>
      ) : (
        <>
          {error > 0 ? { error } : ""}
          <Card id="form-group">
            <h1>Login</h1>
            <CardBody className="text-center">
              <Form onSubmit={submit}>
                <FormGroup>
                  <Label htmlFor="username">UserName</Label>
                  <Input
                    className="form-control"
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
                    className="form-control"
                    id="password"
                    required="required"
                    type="password"
                    name="password"
                    value={userLogin.password}
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button id="btn">Log In</Button>
              </Form>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
}

export default LoginForm;
