import React from "react";
import { Link } from "react-router-dom";
// import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function CompanyCard({ title, description, logo, handle }) {
  return (
    <section>
      <Card body outline>
        <CardBody>
          {/* <img src={logo} alt={logo}></img> */}
          <CardTitle tag="h5" className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText className="font-italic">{description}</CardText>
          <Link to={`/companies/${handle}`}>
            <button type="button">Learn More</button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default CompanyCard;
