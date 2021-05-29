import Home from "../components/Home";
import { ProfileRouter } from "./ProfileRouter";
import { WorksRoute } from "./WorksRoute";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact="true" path="/">
          <Home />
        </Route>
        <Route
          path="/Profile"
          render={({ match: { url } }) => (
            <Switch>
              {ProfileRouter.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />

        <Route
          path="/Works"
          render={({ match: { url } }) => (
            <Switch>
              {WorksRoute.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </div>
  );
};

export default Router;
