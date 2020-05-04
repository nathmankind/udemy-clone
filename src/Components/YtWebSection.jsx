import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class YtWebSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [
        {
          image: "https://i.ytimg.com/vi/zojEMeQGGHs/mqdefault.jpg",
          title: "Svelte For Beginners",
          description: "Svelte is a javascript framework for building SPA",
        },
        {
          image: "https://i.ytimg.com/vi/udHm7I_OvJs/mqdefault.jpg",
          title: "Cloud Functions",
          description: "Firebase is a great cloud technology to use",
        },
        {
          image: "https://i.ytimg.com/vi/zckH4xalOns/mqdefault.jpg",
          title: "Laravel 6",
          description: "A PHP framework for building awesome websites",
        },
        {
          image: "https://i.ytimg.com/vi/LuWxwLk8StM/mqdefault.jpg",
          title: "Object Oriented PHP",
          description: "Learn Object oriented PHP, and build powerful websites",
        },
      ],
      isUserLoggedIn: false,
    };
  }
  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    data
      ? this.setState({
          isUserLoggedIn: true,
        })
      : this.setState({ isUserLoggedIn: false });
  }

  falseLink = () => {
    alert("You have to be signed in to continue");
  };

  render() {
    return (
      <div>
        <div className="web-section py-4">
          <div className="container">
            <div className="section-top">
              <h3 style={{ fontWeight: "100" }} className="section-name py-4">
                Check our learning contents
              </h3>
              <div className="row">
                {this.state.imageUrl.map((courseImage) => (
                  <div className="col-md-3">
                    <div className="course-card">
                      <img
                        className="img-fluid"
                        src={courseImage.image}
                        alt="web-course-img"
                      />
                      <div className="py-4 course-detail">
                        <p className="course-title">{courseImage.title}</p>
                        <p className="course-description">
                          {courseImage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="web-button py-5">
                {this.state.isUserLoggedIn ? (
                  <button type="button" className="home-button">
                    <Link to="/learn"> Start Learning </Link>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="home-button"
                    onClick={this.falseLink}
                  >
                    Start Learning
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
