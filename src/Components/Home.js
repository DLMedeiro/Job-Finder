import React, { useContext } from "react";
import UserContext from "./UserContext";
import "./Home.css";
import {
  Button,
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

function Home({ quantities }) {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="container">
        <div>
          <h1>Jobly</h1>
          <h4>All the jobs in one, convenient place.</h4>
        </div>
        <div>
          {user.username ? (
            <div>
              <h2>Welcome Back {user.firstName}</h2>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <Button style={{ margin: "15px" }}>Log in</Button>
              </Link>
              <Link to={"/signup"}>
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <section className="icons">
        <div className="flex-items">
          <div>
            <i>
              <FontAwesomeIcon icon={faBuilding} size="6x" />
            </i>
            <div>
              <p>500+ Companies</p>
            </div>
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faBriefcase} size="6x" />
            </i>
            <div>
              <p>10000+ Jobs</p>
            </div>
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faPerson} size="6x" />
            </i>
            <div>
              <p>300+ People</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
