import React, { Component } from "react";
import udemyLogo from "../logo-coral.svg";
import { Link } from "react-router-dom";
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
      name: ""
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      this.setState({ isUserLoggedIn: true, name: data.name });
    } else {
      this.setState({ isUserLoggedIn: false, name: "" });
    }
  }

  logout = () => {
    sessionStorage.clear();
    this.setState({ isUserLoggedIn: false, name: "" });
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
            </Nav>
            {!this.state.isUserLoggedIn && (
              <div>
                <Button variant="outline-success">
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button variant="outline-success">Log In</Button>
              </div>
            )}
            {this.state.isUserLoggedIn && (
              <NavDropdown title={this.state.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Edit profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  // onClick={() => {
                  //   logout();
                  // }}
                  onClick={this.logout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

// const TopNavbar = ({ userLoggedIn, logout }) => {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">
//           <img src={udemyLogo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Form inline>
//               <FormControl
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Nav>
//           {!userLoggedIn && (
//             <div>
//               <Button variant="outline-success">
//                 <Link to="/register">Sign Up</Link>
//               </Button>
//               <Button variant="outline-success">Log In</Button>
//             </div>
//           )}
//           {userLoggedIn && (
//             <NavDropdown title="Profile" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">
//                 Edit profile
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 href="#"
//                 onClick={() => {
//                   logout();
//                 }}
//               >
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           )}
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };
export default TopNavbar;
