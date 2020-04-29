import React, { Component } from "react";
import WebDevClass from "./WebDevClass";
import { Link } from "react-router-dom";

export default class YtWebSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [
        {
          image: "https://i.ytimg.com/vi/zojEMeQGGHs/mqdefault.jpg",
          title: "Svelte For Beginners",
          description: "Svelte is a javascript framework for SPA"
        },
        {
          image: "https://i.ytimg.com/vi/udHm7I_OvJs/mqdefault.jpg",
          title: "Cloud Functions",
          description: "Firebase is a great cloud technology to use"
        },
        {
          image: "https://i.ytimg.com/vi/zckH4xalOns/mqdefault.jpg",
          title: "Laravel 6",
          description: "A PHP framework for building awesome websites"
        },
        {
          image: "https://i.ytimg.com/vi/LuWxwLk8StM/mqdefault.jpg",
          title: "Object Oriented PHP",
          description: "Learn Object oriented PHP, and build powerful websites"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="web-section py-4">
          <div className="container">
            <div className="section-top">
              <h3 className="section-name">Web Development</h3>
              <p className="">Youtube video will display here for web</p>
              <div className="row">
                {this.state.imageUrl.map(courseImage => (
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
                <button type="button" class="btn btn-primary">
                  <Link to="/web-development">Go to Web Development Class</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
