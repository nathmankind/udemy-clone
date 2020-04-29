import React, { Component } from "react";

class MobileSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [
        {
          image: "https://i.ytimg.com/vi/dfYCp9NBogg/mqdefault.jpg",
          title: "Flutter Tutorials",
          description: "Svelte is a javascript framework for SPA"
        },
        {
          image: "https://i.ytimg.com/vi/H8HGTHbrPeE/mqdefault.jpg",
          title: "Kotlin Google API",
          description: "Firebase is a great cloud technology to use"
        },
        {
          image: "https://i.ytimg.com/vi/LCoSXirkV_A/mqdefault.jpg",
          title: "App Store Optimizaton Basics",
          description: "A PHP framework for building awesome websites"
        },
        {
          image: "https://i.ytimg.com/vi/-1wf2fxfooE/mqdefault.jpg",
          title: "ASO Best Practices",
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
              <h3 className="section-name">Mobile Development</h3>
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
                  Go to Mobile Development Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileSection;
