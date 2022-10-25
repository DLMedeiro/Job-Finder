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

function SearchFrom({ searchFunction }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchFunction(search);
  };

  return (
    <section>
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
                value={search}
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={onSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default SearchFrom;
