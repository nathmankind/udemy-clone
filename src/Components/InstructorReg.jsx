import React, { Component } from "react";
import TopNavbar from "./TopNavbar";
// import db from "../";
// import Axios from "axios";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      name: "",
      email: "",
      image: "",
      userType: "",
      userId: null,
      selectedFile: null,
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      this.setState({
        isUserLoggedIn: true,
        name: data.name,
        email: data.email,
        userType: data.userType,
        userId: data.id,
      });
    } else {
      this.setState({ isUserLoggedIn: false, name: "" });
    }
  }

  handleChange = (e) => {
    e.target.value == "Yes"
      ? this.setState({ userType: "Instructor" })
      : this.setState({ userType: "Student" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://udemy-clone-json-server.herokuapp.com/signup_users/${this.state.userId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userType: this.state.userType,
        }),
      }
    );
    console.log(sessionStorage);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className=" header instructor-header">
              <h1>Become an instructor</h1>
              <p>
                Being an instructor means you will be able to upload course
                contents and share with students.
              </p>
            </div>
          </div>
          <div className="instructor-box">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                placeholder=""
                value={this.state.name}
                readOnly
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder=""
                value={this.state.email}
                readOnly
              />
            </div>
            <div class="form-group">
              <label>User Type</label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                value={this.state.userType}
                readOnly
              />
            </div>
            <form>
              <p>Do you want to be an instructor?</p>
              <div className="instructor-choice" onChange={this.handleChange}>
                <div className="option pb-3">
                  <input type="radio" name="instructor" value="Yes" />
                  Yes
                </div>

                <div className="option pb-3">
                  <input type="radio" name="instructor" value="No" />
                  No
                </div>
              </div>
              <button className="submit-button" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructor;
