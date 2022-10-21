import React from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

function JobCard({ title, companyName, salary, equity }) {
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {" "}
            {companyName}{" "}
          </CardSubtitle>
          <CardText className="font-italic">{salary}</CardText>
          <CardText className="font-italic">{equity}</CardText>
          <Button>Apply/Applied</Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default JobCard;
