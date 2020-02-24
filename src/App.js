import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { lazy } from "react";

import store from "./store";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navbar";
import ErrorBoundary from "./components/errorBoundary";
import Loader from "./components/loader";

// Lazy Components
const Content = lazy(() => import("./containers/content"));

// import { Router, Switch, Route, Redirect } from "react-router-dom";

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <NavBar />
        <Sidebar />
        <ErrorBoundary>
          <Suspense fallback={<Loader isFullSize={true} />}>
            <Content />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
