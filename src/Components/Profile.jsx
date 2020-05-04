import React, { Component } from "react";
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
      uploadedImg: "",
      uploadProgress: ""
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    data?
      this.setState({
        isUserLoggedIn: true,
        name: data.name,
        email: data.email,
        userType: data.userType,
        userId: data.id,
        image: data.profileImg
      })
    :
      this.setState({ isUserLoggedIn: false, name: "" });
    
  }

  fileSelectedHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  fileUploadHandler = e => {
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
        const img_url = result.data.secure_url;

        this.setState({
          image: result.data.secure_url,
          uploadedImg: result.data.secure_url
        });
        fetch(`http://localhost:3200/signup_users/${this.state.userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            profileImg: img_url
          })
        });
        console.log(img_url);
      });
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
          <div className="row ">
            <div className="profile-box">
              <div className="col-md-5">
                <div className="user-image">
                  <form>
                    <img
                      src={this.state.image}
                      alt="profile image"
                      style={{
                        width: "65%",
                        height: "auto",
                        padding: "10px"
                      }}
                    />
                    <input
                      type="file"
                      name="file"
                      accept="image/png, image/jpeg"
                      onChange={this.fileSelectedHandler}
                    />
                    <button onClick={this.fileUploadHandler}>
                      Upload Image
                    </button>

                    <p>{this.state.uploadProgress}</p>
                  </form>
                </div>
              </div>
              <div className="col-md-7 my-3 px-3 py-3">
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
