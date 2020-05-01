import React, { Component } from "react";

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      name: "",
      email: "",
      selectedImage: "",
      selectedVideo: "",
      videoUrl: "",
      videoPosterImage: "",
      title: "",
      description: ""
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }
  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      this.setState({
        isUserLoggedIn: true,
        name: data.name,
        email: data.email
      });
    } else {
      this.setState({ isUserLoggedIn: false, name: "" });
    }
  }

  imageSelectedHandler = e => {
    this.setState({ selectedImage: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  //Method for video image upload to cloudinary
  posterImageUploadHandler = async e => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append(
      "file",
      this.state.selectedImage,
      this.state.selectedImage.name
    );
    fileData.append("upload_preset", "j6ph0b2u");
    const APIURL = "https://api.cloudinary.com/v1_1/nath/image/upload";
    const res = await fetch(APIURL, {
      method: "POST",
      body: fileData
    });
    const file = await res.json();
    this.setState({ videoPosterImage: file.secure_url });
    let profileImage = file.secure_url;
  };

  //Video Upload
  videoSelectedHandler = e => {
    this.setState({ selectedVideo: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  videoUploadHandler = async e => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append(
      "file",
      this.state.selectedVideo,
      this.state.selectedVideo.name
    );
    fileData.append("upload_preset", "j6ph0b2u");
    const APIURL = "https://api.cloudinary.com/v1_1/nath/video/upload";
    const res = await fetch(APIURL, {
      method: "POST",
      body: fileData
    });
    const file = await res.json();
    this.setState({ videoUrl: file.secure_url });
    let videoUrl = file.secure_url;
    console.log(videoUrl);
  };

  handleSubmit = e => {
    e.preventDefault();
    let postData = {
      title: this.state.title,
      description: this.state.description,
      instructor: this.state.name,
      videoUrl: this.state.videoUrl,
      posterImage: this.state.videoPosterImage
    };
    console.log(postData);
    const JsonApiURL = "http://localhost:3200/videoUploads";
    fetch(JsonApiURL, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>Upload course</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="user-image">
                <iframe src="" frameborder="0"></iframe>
                {/* Upload Image form */}
                <input
                  type="file"
                  name="file"
                  accept="image/png, image/jpeg"
                  onChange={this.imageSelectedHandler}
                />
                <button onClick={this.posterImageUploadHandler}>
                  Upload Image
                </button>
                <img src={this.state.videoPosterImage} alt="poster image" />
                <form>
                  {/* Upload video form */}
                  <input
                    type="file"
                    name="file"
                    accept="video/mp4"
                    onChange={this.videoSelectedHandler}
                  />
                  <button onClick={this.videoUploadHandler}>
                    Upload Video
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-7">
              <div className="user-detail">
                <form>
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter title"
                      onChange={this.handleTitle}
                    />
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      placeholder="Enter description"
                      cols="30"
                      rows="10"
                      onChange={this.handleDescription}
                    />
                  </div>
                  <div class="form-group">
                    <label>Instructor Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="instructor-name"
                      value={this.state.name}
                      readOnly
                    />
                  </div>
                  <button onClick={this.handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoUpload;
