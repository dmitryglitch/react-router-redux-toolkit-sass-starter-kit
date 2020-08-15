import React, { Component } from "react";
import { connect } from "react-redux";
import ROUTES, { RenderRoutes } from "../routes";

import gif from "../assets/starter-gif.gif";
import "../sass/app.sass";
import News from "./News/News";

const App = () => {
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
      <div className="news">
        <News />
      </div>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
};

export default App;
