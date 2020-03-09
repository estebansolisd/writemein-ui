import React, { memo, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Local componenets and modules

import { useStyles } from "./style";
import ErrorBoundary from "../../components/errorBoundary";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

// Route Components & Lazy
const Dashboard = lazy(() => import("../dashboard"));
const Login = lazy(() => import("../login"));
const Register = lazy(() => import("../register"));

const PrivateRoute = memo(({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("TOKEN") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
});

const GuestRoute = memo(({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("TOKEN") ? (
          <Redirect
            to={{
              pathname: "/dashboard"
            }}
          />
        ) : (
          children
        )
      }
    />
  );
});

const Router = memo(props => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader isFullSize={true} />}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/dashboard">
              <Navbar />
              <div className={classes.navSpacing}>
                <Dashboard />
              </div>
            </PrivateRoute>
            <GuestRoute exact path="/">
              <div className={classes.navSpacing}>
                <Login />
              </div>
            </GuestRoute>
            <GuestRoute exact path="/register">
              <div className={classes.navSpacing}>
                <Register />
              </div>
            </GuestRoute>
            <Route
              component={() => (
                <h1
                  style={{
                    position: "fixed",
                    left: "50%",
                    bottom: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "0 auto"
                  }}
                >
                  404. upps you are lost.
                </h1>
              )}
            />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
});

export default Router;
