import React, { Component } from "react";
import udemyLogo from "../logo-coral.svg";
import { Redirect, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      name: "",
      userType: "",
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    data
      ? this.setState({
          isUserLoggedIn: true,
          name: data.name,
          userType: data.userType,
        })
      : this.setState({ isUserLoggedIn: false, name: "" });
  }

  logout = () => {
    sessionStorage.clear();
    this.setState({ isUserLoggedIn: false, name: "" });
    // this.renderRedirect()
  };
  renderRedirect = () => {
    if (!this.state.isUserLoggedIn) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Navbar bg="light" expand="lg">
          <div className="container-fluid">
            <Navbar.Brand>
              <Link to="/">
                <img src={udemyLogo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                {this.state.isUserLoggedIn && (
                  <div>
                    <Button variant="outline-success">
                      <Link to="/new-courses">Checkout new courses</Link>
                    </Button>
                  </div>
                )}
                {this.state.isUserLoggedIn && (
                  <div>
                    {this.state.userType === "Instructor" ? (
                      <div>
                        <Button variant="outline-success">
                          <Link to="/upload-video">Upload video</Link>
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline-success">
                        <Link to="/instructor-registration">
                          Become an Instructor
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </Nav>
              {!this.state.isUserLoggedIn && (
                <div>
                  <Button variant="outline-success" className="login-button">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="signup-button" variant="outline-success">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
              {this.state.isUserLoggedIn && (
                <div>
                  <NavDropdown title={this.state.name} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/profile">Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.logout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              )}
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
