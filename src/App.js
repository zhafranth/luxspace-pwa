import React, { lazy, Suspense } from "react";

// Depend
import { Switch, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Suspense
      fallback={
        <>
          <h2>Loading...</h2>
        </>
      }
    >
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Profile} exact path="/profile" />
      </Switch>
    </Suspense>
  );
}

export default App;
