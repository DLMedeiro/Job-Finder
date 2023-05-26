import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import UserContext from "./UserContext";

function JobCard({ id, title, companyName, salary, equity, apply }) {
  const user = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log(id);
    if (user.applications.indexOf(id) > -1) {
      console.log("Application already submitted");
    } else {
      apply(id);
    }
  };

  useEffect(() => {
    if (user.applications.indexOf(id) > -1) {
      setApplied(true);
    } else {
      setApplied(false);
    }
  }, [user]);

  return (
    <section>
      <Card body outline id="form-group-info">
        <CardBody className="card-body">
          <CardTitle tag="h1" className="font-weight-bold" id="card-title">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2" tag="h3" id="card-text">
            {companyName}
          </CardSubtitle>
          <CardText id="card-text" tag="h4" className="font-italic">
            Salary: {salary}
          </CardText>
          <CardText id="card-text" tag="h4" className="font-italic">
            Equity: {equity}
          </CardText>
          {applied ? (
            <Button id="btn" disabled>
              Applied
            </Button>
          ) : (
            <Button id="btn" onClick={submit}>
              Apply
            </Button>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default JobCard;
