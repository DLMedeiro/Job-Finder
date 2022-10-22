import React from "react";
import { Link } from "react-router-dom";
// import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function CompanyCard({ title, description, logo, handle }) {
  return (
    <section>
      <Link to={`/companies/${handle}`}>
        <Card body outline>
          <CardBody>
            <img alt={logo}></img>
            <CardTitle className="font-weight-bold text-center">
              {title}
            </CardTitle>
            <CardText className="font-italic">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </section>
  );
}

export default CompanyCard;
