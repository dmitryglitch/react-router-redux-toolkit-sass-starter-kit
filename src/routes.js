import React from "react";
import { Redirect, Route, Switch } from "react-router";

import pageNotFound from "./components/pageNotFound";

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <CreateRoute key={route.key} {...route} />;
      })}
      <Route component={() => pageNotFound()} />
    </Switch>
  );
};

const ROUTES = [
  {
    path: "/",
    key: "/",
    exact: true,
    component: () => <Redirect to={"/mainpage"} />,
  },
  {
    path: "/mainpage",
    key: "MAINPAGE",
    component: RenderRoutes,
    routes: [
      {
        path: "/mainpage",
        key: "MAINPAGE_CHILDROUT",
        component: () => <></>,
      },
    ],
  },
];

const CreateRoute = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default ROUTES;
