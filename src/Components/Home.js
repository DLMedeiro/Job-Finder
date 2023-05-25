import React, { useContext } from "react";
import "../styles/home.css";
import "../styles/utilities.css";
import UserContext from "./UserContext";
import HeroImage from "../images/pexels-vlad-chețan-2923156.jpg";
import {
  Button,
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const user = useContext(UserContext);
  return (
    <Grid container spacing={0} className="hero">
      <Grid item xs={12} className="hero-left">
        <div className="content">
          <h1>Job Finder</h1>
          <p>All the jobs</p>
          <p>In one convenient place</p>

          {user.username ? (
            <div>
              <h2>Welcome Back {user.firstName}</h2>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <Button id="btn">Log in</Button>
              </Link>
              <Link to={"/signup"}>
                <Button id="btn">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={12} className="hero-right">
        <div className="faded">
          {/* <img src={HeroImage} alt="man excited jumping" />
          <div className="shadow"></div> */}
        </div>
      </Grid>

      {/* <section className="icons">
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
      </section> */}
    </Grid>
  );
}

export default Home;
