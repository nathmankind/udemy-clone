import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
    };
  }

  login = (res) => {
    console.log(res);

    const JsonApiURL =
      "http://udemy-clone-json-server.herokuapp.com/signup_users";
    const user_email = res.profileObj.email;
    console.log(user_email);
    let user_details;
    fetch(JsonApiURL)
      .then((res) => res.json())
      .then((result) => {
        user_details = result.filter((user) => user.email === user_email);
        let responseJson = user_details;
        console.log(responseJson);
        if (responseJson) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson[4])); // remove the [0]
          this.setState({ isUserLoggedIn: true });
        }
      });
    this.pageRefresh();
  };
  refreshPage = () => {
    window.location.reload();
  };
  pageRefresh = () => {
    setTimeout(this.refreshPage, 1000);
  };
  renderRedirect = () => {
    if (this.state.isUserLoggedIn) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="login-form">
                {!this.state.userLoggedIn && (
                  <div className="sign-up">
                    <h2 className="pt-2">Login </h2>
                    <hr className="pb-4" />
                    <GoogleLogin
                      clientId="897853591099-07vsq27mk00uqb4utejt5ki04kgg49ne.apps.googleusercontent.com"
                      buttonText="Continue with Google"
                      onSuccess={this.login}
                      // onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                )}
                {this.state.userLoggedIn && (
                  <div className="sign-out">
                    <p>
                      You are currently signed in, click the button to sign out
                    </p>
                    <GoogleLogout
                      buttonText="Log Out"
                      onLogoutSuccess={this.logout}
                    ></GoogleLogout>
                  </div>
                )}
                <p className="pt-4">
                  Don't have an account?
                  <Link to="/signup"> Sign up</Link>
                </p>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
