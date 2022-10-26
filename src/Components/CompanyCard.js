import React from "react";
import { Link } from "react-router-dom";
// import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function CompanyCard({ title, description, logo, handle }) {
  return (
    <section>
      <Card body outline className="text-center">
        <CardBody>
          {/* <img src={logo} alt={logo}></img> */}
          <CardTitle tag="h5" className="font-weight-bold ">
            {title}
          </CardTitle>
          <CardText className="font-italic">{description}</CardText>
          <Link to={`/companies/${handle}`}>
            <Button type="button">Learn More</Button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default CompanyCard;
