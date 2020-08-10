import React, { Component } from "react";
import { connect } from "react-redux";
import ROUTES, { RenderRoutes } from "../routes";

import gif from "../assets/starter-gif.gif";
import "../sass/app.sass";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="starter-pack-author">
          <p className="starter-pack-author__text">
            Starter pack by Dmitryglitch
          </p>
          <ul className="starter-pack-author__list">
            <li>React, React-Router</li>
            <li>Redux, Redux-Thunk, Redux-ToolKit</li>
            <li>Sass</li>
          </ul>
          <img src={gif} />
        </div>
        <RenderRoutes routes={ROUTES} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
