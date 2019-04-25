import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import IntroDataContext from "../../IntroDataContext";
import api from "../../services/api";

function NavBar() {
  return (
    <div className="pt-4 pb-2 navcolor">
      <Nav className="d-flex flex-row justify-content-around" navbar>
        <NavItem>
          <Link to="/home" data-testid="homepage-link">
            <h4 className="text-muted font-weight-bolder">
              About Introspection
            </h4>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/admin">
            <h4 className="text-muted font-weight-bolder">Admin Panel</h4>
          </Link>
        </NavItem>

        <IntroDataContext.Consumer>
          {({ name, profilePic }) =>
            name ? (
              <React.Fragment>
                <NavItem>
                  <a href={`${api}/auth/logout`}>
                    <h4 className="text-muted font-weight-bolder">Logout</h4>
                  </a>
                </NavItem>
                <NavItem>
                  <Link to="/profile">
                    <img
                      alt="avatar"
                      width="25px"
                      height="25px"
                      src={profilePic}
                      className="rounded-circle"
                    />
                    <span className="text-muted font-weight-bolder">
                      {name}
                    </span>
                  </Link>
                </NavItem>
              </React.Fragment>
            ) : (
              <NavItem>
                <a href={`${api}/auth/google`}>
                  <h4 className="text-muted font-weight-bolder">Login</h4>
                </a>
              </NavItem>
            )
          }
        </IntroDataContext.Consumer>
      </Nav>
    </div>
  );
}

export default NavBar;
