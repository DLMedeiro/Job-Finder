import React, { useState } from "react";
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

function SearchFrom({ searchFunction }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const submit = (e) => {
    e.preventDefault();
    searchFunction(search);
  };

  return (
    <Card id="form-group-search">
      <CardBody>
        <Form onSubmit={submit}>
          <FormGroup>
            <Input
              className="form-control-search"
              id="search"
              required="required"
              type="text"
              name="search"
              placeholder="Enter search term"
              value={search}
              onChange={handleChange}
            />
          </FormGroup>
          <Button id="btn">Submit</Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default SearchFrom;
