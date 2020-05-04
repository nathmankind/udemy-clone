import React, { Component } from "react";
import service from "../api/service";
import TopNavbar from "./TopNavbar";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class Learn extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("react course");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchterm) => {
    const response = await service.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyA_vDnztUrLZD2dVvEfIilq5JdIwqXkQsM",
        q: searchterm,
      },
    });
    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    return (
      <div>
        {/* <TopNavbar /> */}
        <div className="classroom-page">
          <div className="container">
            <div className="row">
              <SearchBar onFormSubmit={this.handleSubmit} />
            </div>
            <div className="row">
              <VideoDetail video={this.state.selectedVideo} />

              <div className="col-md-4">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
