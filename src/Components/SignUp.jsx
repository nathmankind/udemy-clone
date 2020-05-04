import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import { Link, Redirect } from "react-router-dom";
import { PostData } from "./../service/service";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
    };
  }

  signUp = (res) => {
    console.log(res);
    let postData;
    if (res.profileObj.email) {
      postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        profession: "data engineer",
        userType: "student",
        profileImg: "",
        favouriteVideo: [],
      };
    }
    console.log(postData);
    const JsonApiURL =
      "http://udemy-clone-json-server.herokuapp.com/signup_users";
    fetch(JsonApiURL, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        let responseJson = result;
        if (responseJson) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ isUserLoggedIn: true });
        }
      });

    this.pageRefresh();
    // PostData(postData).then(result => {
    //   let responseJson = result;
    //   console.log(responseJson);
    //   if (responseJson.userData) {
    //     sessionStorage.setItem("userData", JSON.stringify(responseJson));
    //     this.setState({ isUserLoggedIn: true });
    //   }
    // });
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
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="login-form">
                {!this.state.userLoggedIn && (
                  <div className="sign-up">
                    <h2 className="pt-2">Sign Up </h2>
                    <hr className="pb-4" />
                    {this.renderRedirect()}
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
                    <p>
                      You are currently signed in, click the button to sign out
                    </p>
                    <GoogleLogout
                      buttonText="Log Out"
                      onLogoutSuccess={this.logout}
                    ></GoogleLogout>
                  </div>
                )}
                <p className="pt-4 ">
                  Already have an account?
                  <Link to="/login"> Login</Link>
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
export default SignUp;
