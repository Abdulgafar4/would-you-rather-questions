import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../Actions/shared'
import './App.css';
import Typography from '@material-ui/core/Typography';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';

function App(props) {

  useEffect (() => {
    props.dispatch(handleInitialData())
  });

    return (
      <div className="app">
      {props.authUser === null ? (
        <Route render={() => (
         <Container>
            <Typography >
              <Login/>
            </Typography>
         </Container>
        )}
      />
      ) : (
        <Fragment>
          <Nav />
         <Container>
            <Typography >
              <Dashboard/>
            </Typography>
         </Container>
        </Fragment>
      )}
      </div>
    );
  }



export default connect()(App);