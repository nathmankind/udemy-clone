import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import TopNavbar from "./TopNavbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  signUp = res => {
    console.log(res);

    const JsonApiURL = "http://localhost:3200/signup_users";
    const user_email = res.profileObj.email;
    console.log(user_email);
    fetch(JsonApiURL)
      .then(res => res.json())
      .then(result => {
        result.filter(user => user.email == user_email);
        let responseJson = result;
        console.log(responseJson);
        if (responseJson) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ isUserLoggedIn: true });
        }
      });
  };

  render() {
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
                <h2>Login </h2>
                <GoogleLogin
                  clientId="897853591099-07vsq27mk00uqb4utejt5ki04kgg49ne.apps.googleusercontent.com"
                  buttonText="Continue with Google"
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
export default Login;
