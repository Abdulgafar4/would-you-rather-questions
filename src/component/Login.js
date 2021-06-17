import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleReceiveUsers } from "../actions/users";
import { handleReceiveQuestions } from "../actions/questions";
import { setAuthedUser, logout } from "../actions/authedUser";
import Users from "./Users";

class Login extends Component {
  state = {
    val: "",
  };

  getAuthedUser = (val) => {
    this.setState((prev) => ({
      val,
    }));
  };

  login = (e) => {
    e.preventDefault();

    this.props.dispatch(
      this.state.val ? setAuthedUser(this.state.val) : logout()
    );

    if (!this.props.itQuestions) this.props.dispatch(handleReceiveQuestions());
  };

  componentDidMount() {
    if (!this.props.itUsers) this.props.dispatch(handleReceiveUsers());
  }

  render() {
    if (this.props.itExist) {
      return (
        <Redirect
          to={
            this.props.location.state
              ? this.props.location.state.prevLoc
              : "/"
          }
        />
      );
    }

    return (
      <div className="container card" style={{ marginTop: "30px" }} >
          <div className="card-body" >
            <h1 className="mb-4">Login</h1>
            <form>
              <Users getAuthedUser={this.getAuthedUser} />
              <button
                onClick={this.login}
                disabled={this.state.val === ""}
                className="btn btn-dark"
              >
                Sign In
              </button>
            </form>
          </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    itExist: authedUser !== null,
    itQuestions: Object.keys(questions).length,
    itUsers: Object.keys(users).length,
  };
}

export default connect(mapStateToProps)(Login);
