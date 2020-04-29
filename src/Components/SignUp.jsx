import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import TopNavbar from "./TopNavbar";
import { PostData } from "./../service/service";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  signUp = res => {
    console.log(res);
    let postData;
    if (res.profileObj.email) {
      postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        profession: "data engineer",
        userType: "student",
        profileImg: "",
        favouriteVideo: []
      };
    }
    console.log(postData);
    const JsonApiURL = "http://localhost:3200/signup_users";
    fetch(JsonApiURL, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(result => {
        let responseJson = result;
        if (responseJson) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ isUserLoggedIn: true });
        }
      });
    // PostData(postData).then(result => {
    //   let responseJson = result;
    //   console.log(responseJson);
    //   if (responseJson.userData) {
    //     sessionStorage.setItem("userData", JSON.stringify(responseJson));
    //     this.setState({ isUserLoggedIn: true });
    //   }
    // });
  };

  render() {
    // const responseGoogle = response => {
    //   console.log(response);
    //   this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
    // };
    return (
      <div>
        <TopNavbar
          userLoggedIn={this.state.isUserLoggedIn}
          logout={this.logout}
        />

        <div className="container">
          <div className="center-form">
            {!this.state.userLoggedIn && (
              <div className="sign-up">
                <h2>Sign Up </h2>
                <GoogleLogin
                  clientId="897853591099-07vsq27mk00uqb4utejt5ki04kgg49ne.apps.googleusercontent.com"
                  buttonText="Sign Up with Google"
                  onSuccess={this.signUp}
                  // onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            )}
            {this.state.userLoggedIn && (
              <div className="sign-out">
                <p>You are currently signed in, click the button to sign out</p>
                <GoogleLogout
                  buttonText="Log Out"
                  onLogoutSuccess={this.logout}
                ></GoogleLogout>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
