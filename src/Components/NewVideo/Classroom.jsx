import React, { Component } from "react";
import VideoStream from "./VideoStream";
import NewVideoList from "./NewVideoList";

class Classroom extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    const APIURL = "http://localhost:3200/videoUploads";
    fetch(APIURL)
      .then(res => res.json())
      .then(result =>
        this.setState({ videos: result, selectedVideo: result[0] })
      );
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <div className="classroom-page">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <VideoStream video={this.state.selectedVideo} />
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <NewVideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
              <div className="col-md-5">
                <p>Empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classroom;
