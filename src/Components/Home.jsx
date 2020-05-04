import React, { Component } from "react";
import YtWebSection from "./YtWebSection";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-head">
          <div className="top-row">{/* <TopNavbar /> */}</div>
        </div>
        <div className="main-head">
          <div className="container">
            <div className="row">
              <div className="text text-left">
                <h2>24-Hour Flash Sale</h2>
                <p>
                  Great timing! Courses from $11.99. Better hurry - the{" "}
                  <br></br>
                  clock is ticking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works text-center">
          <div className="container">
            <div className="row py-2 pt-4">
              <div className="col-md-4">
                <b>100,000 online courses</b>
                <p>Explore a variety of fresh topics</p>
              </div>
              <div className="col-md-4">
                <b>Expert instruction</b>
                <p>Find the right instructor for you</p>
              </div>
              <div className="col-md-4">
                <b>Lifetime access</b>
                <p>Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
        <YtWebSection />
      </div>
    );
  }
}

export default Home;
