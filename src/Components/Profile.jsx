import React, { Component } from "react";
import TopNavbar from "./TopNavbar";
// import db from "../";
import axios from "axios";

class Profile extends Component {
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
      uploadedImg: ""
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
        image: data.profileImg,
        uploadProgress: ""
      });
    } else {
      this.setState({ isUserLoggedIn: false, name: "" });
    }
  }

  fileSelectedHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  fileUploadHandler = async e => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    fileData.append("upload_preset", "j6ph0b2u");
    console.log(fileData);
    console.log(this.state.selectedFile);
    const APIURL = "https://api.cloudinary.com/v1_1/nath/image/upload";
    // const res = await fetch(APIURL, {
    //   method: "POST",
    //   body: fileData
    // });
    axios
      .post(APIURL, fileData, {
        onUploadProgress: ProgressEvent => {
          console.log(
            "Upload progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
          this.setState({
            uploadProgress:
              "Upload progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          });
        }
      })
      .then(result => {
        this.setState({
          image: result.data.secure_url,
          uploadedImg: result.data.secure_url
        });
      });
    console.log(this.state.uploadedImg);
    let profileImage = this.state.uploadedImg;
    // const file = await res.json();
    // this.setState({ image: file.secure_url });
    // let profileImage = file.secure_url;
    // console.log(profileImage);
    fetch(`http://localhost:3200/signup_users/${this.state.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        profileImg: profileImage
      })
    });
    console.log(sessionStorage);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>User Profile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="user-image">
                <form>
                  <img
                    src={this.state.image}
                    alt="profile image"
                    // style={{
                    //   width: "500px",
                    //   height: "500px",
                    //   backgroundColor: "grey"
                    // }}
                  />
                  <input
                    type="file"
                    name="file"
                    accept="image/png, image/jpeg"
                    onChange={this.fileSelectedHandler}
                  />
                  <button onClick={this.fileUploadHandler}>Upload Image</button>

                  <p>{this.state.uploadProgress}</p>
                </form>
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
                    <p>User id: {this.state.userId}</p>
                  </div>
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
