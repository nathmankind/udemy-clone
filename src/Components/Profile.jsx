import React, { Component } from "react";
import TopNavbar from "./TopNavbar";
// import db from "../";
// import Axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      name: "",
      email: "",
      image: "",
      selectedFile: null
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

  fileSelectedHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  fileUploadHandler = async () => {
    const fileData = new FormData();
    fileData.append("image", this.state.selectedFile);
    fileData.append("upload_preset", "");
    const res = await fetch("API_URL", {
      //INSERT IMAGE URL
      method: "POST",
      body: fileData
    });
    const file = await res.json();
    this.setState({ image: file.secure_url });
    // fetch("http://localhost:3200/signup_users")
    // .then(res => res.json())
    // .then(result => result.filter(
    //   user => user.email=="anikep@gmail.com"
    //   )).then(res => res.map(user => console.log(user.email)))
  };

  handleSubmit = () => {};
  render() {
    return (
      <div>
        {/* <TopNavbar /> */}
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>User Profile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="user-image">
                <img
                  src={this.state.image}
                  alt="profile image"
                  style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "20%",
                    backgroundColor: "grey"
                  }}
                />
                <input
                  type="file"
                  name="file"
                  onChange={this.fileSelectedHandler}
                />
                <button onClick={this.fileUploadHandler}>Upload Image</button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="user-detail">
                <form>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label>Profession</label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      id=""
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                  <button>Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
