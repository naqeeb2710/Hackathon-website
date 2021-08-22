import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: "rgba(50, 13, 136)"});
    } else {
      this.setState({color: "#121930"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav_bar" style={{backgroundColor: this.state.color}}>
            <ul>
              <li>
                <a href="#home">
                  <span className="links">Home </span>{" "}
                </a>
              </li>
              <li>
                <a href="https://forms.gle/CPLwRc1SyvxLZyhNA">
                  <span className="links"> Register </span>{" "}
                </a>
              </li>
              <li>
                <a href="#moreinfo">
                  <span className="links">More info </span>{" "}
                </a>
              </li>
              <li>
                <a href="#sponsors">
                  <span className="links"> Sponsors</span>
                </a>
              </li>
              
            </ul>
          </nav>

          <Switch>
            <Route path="/discord" exact component={Discord} />
            <Route path="/linkedin" exact component={Linkedin} />
            <Route path="/devpost" exact component={Devpost} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/links">
              <HomePage />
            </Route>
            <Route path="/projects">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}