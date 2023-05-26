import React from "react";
import { Link } from "react-router-dom";
// import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function CompanyCard({ title, description, logo, handle }) {
  return (
    <Card body outline id="form-group-info">
      <CardBody className="card-body">
        {/* <img src={logo} alt={logo}></img> */}
        <CardTitle tag="h1" className="font-weight-bold" id="card-title">
          {title}
        </CardTitle>
        <CardText id="card-text" tag="h4">
          {description}
        </CardText>
        <Link to={`/companies/${handle}`}>
          <Button type="button" id="btn">
            Learn More
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default CompanyCard;
