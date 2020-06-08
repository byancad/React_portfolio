import React from "react";
import ReactDOM from "react-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import github from "./components/github/github";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Github from "./components/github/github";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <Switch>
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/" component={AboutMe} exact />
          <Route path="/React_portfolio" component={AboutMe} exact />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main style={{ marginTop: "64px" }}></main>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
