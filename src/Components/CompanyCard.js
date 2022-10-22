import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function CompanyCard({ title, description, logo }) {
  return (
    <section>
      <Card body outline>
        <CardBody>
          <img alt={logo}></img>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText className="font-italic">{description}</CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default CompanyCard;
