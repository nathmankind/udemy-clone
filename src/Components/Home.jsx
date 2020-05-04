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
                <h2>Learn on your schedule</h2>
                <p style={{fontWeight:"100"}}>
                Study any topic, anytime. Choose from thousands of 
                  <br></br>
                  expert-led courses now.
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
