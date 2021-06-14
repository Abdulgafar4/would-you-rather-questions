import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Menu from "./Menu";
import NotFound from "./NotFound"
import "./App.css";
import { connect } from "react-redux";
import NewQuestion from "./NewQuestion";
import Leaders from "./Leaders";
import ViewQuestion from "./ViewQuestion";

const App = (props) => {
  if (!props.authedUser) {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Menu />
        <Switch>
          <Route path="/" exact render={() => {
            return (
              <Dashboard />
            )
          }}/>
          <Route path="/leader" component={Leaders} /> 
          <Route path="/add" component={NewQuestion} /> 
          <Route path="/404" component={NotFound} />
          <Route path="/questions/:id" component={ViewQuestion} />
        </Switch>
      </Fragment>
    </Router>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
