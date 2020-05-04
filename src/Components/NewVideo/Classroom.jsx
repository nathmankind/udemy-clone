import React, { Component } from "react";
import VideoStream from "./VideoStream";
import NewVideoList from "./NewVideoList";

class Classroom extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    liked: false,
    userId: null,
    rating: "",
  };

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    data
      ? this.setState({
          userId: data.id,
        })
      : this.setState({ userId: null });

    const APIURL = "http://localhost:3200/videoUploads";
    fetch(APIURL)
      .then((res) => res.json())
      .then((result) =>
        this.setState({ videos: result, selectedVideo: result[0] })
      );
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  starRating = (video) => {};
  favouriteVideos = () => {
    const api_url = `http://localhost:3200/signup_users/${this.state.userId}`;
    // this.state.liked
    //   ? fetch(api_url, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         favouriteVideo: this.state.selectedVideo,
    //       }),
    //     })
    //   : console.log("not liked");
  };

  handleClick = (e) => {
    this.setState({
      liked: !this.state.liked,
    });
    this.favouriteVideos();
  };

  render() {
    return (
      <div>
        <div className="classroom-page">
          <div className="classroom-top">
            <div className="container">
              <VideoStream
                liked={this.state.liked}
                handleLike={this.handleClick}
                video={this.state.selectedVideo}
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <NewVideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
                // rating={this.state.rating}
                // rate={this.starRating}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classroom;
