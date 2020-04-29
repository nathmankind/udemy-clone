import React, { Component } from "react";

const API = "AIzaSyA_vDnztUrLZD2dVvEfIilq5JdIwqXkQsM";
const channelId = "UCW5YeuERMmlnqo4oq8vwUpg";
const maxResults = 1;
const url = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

class WebDevClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const videoIdList = result.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ videoId: videoIdList });
        console.log(videoIdList);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.videoId.map(videoList => (
              <iframe
                width="560"
                height="315"
                src={videoList}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WebDevClass;
