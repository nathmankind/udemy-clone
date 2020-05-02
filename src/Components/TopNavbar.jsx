import React, { Component } from "react";
import udemyLogo from "../logo-coral.svg";
import { Link, Redirect } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      name: "",
      userType: ""
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    data
      ? this.setState({
          isUserLoggedIn: true,
          name: data.name,
          userType: data.userType
        })
      : this.setState({ isUserLoggedIn: false, name: "" });
    // if (data) {
    //   this.setState({ isUserLoggedIn: true, name: data.name });
    // } else {
    //   this.setState({ isUserLoggedIn: false, name: "" });
    // }
  }

  logout = () => {
    sessionStorage.clear();
    this.setState({ isUserLoggedIn: false, name: "" });
  };
  renderRedirect = () => {
    if (!this.state.isUserLoggedIn) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img src={udemyLogo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              {this.state.isUserLoggedIn && (
                <div>
                  {this.state.userType == "Instructor" ? (
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
                <Button variant="outline-success">
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button variant="outline-success">
                  <Link to="/login">Login</Link>
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
                    {this.renderRedirect()}
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
