import React from "react";
import {
  Route,
  Switch
} from "react-router";
import LogIn from "../components/LogInNew";
import About from "../components/About";
import NoMatch from "../components/NoMatch";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import {
  connect
} from "react-redux";

const routes = ( <
  div >
  <
  NavBar / >
  <
  Switch >
  <
  Route exact path = "/"
  component = {
    Home
  }
  /> <
  Route path = "/about"
  component = {
    About
  }
  /> <
  Route path = "/login"
  component = {
    LogIn
  }
  /> <
  Route component = {
    NoMatch
  }
  /> < /
  Switch > <
  /div>
);

export default routes;