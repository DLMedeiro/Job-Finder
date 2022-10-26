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
      apply(id, user.username);
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
      <Card body outline className="text-center">
        <CardBody>
          <CardTitle tag="h5" className="font-weight-bold">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {companyName}
          </CardSubtitle>
          <CardText className="font-italic">
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
          </CardText>
          {applied ? (
            <Button disabled>Applied</Button>
          ) : (
            <Button onClick={submit}>Apply</Button>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default JobCard;
