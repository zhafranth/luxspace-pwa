import React, { lazy, Suspense } from "react";

// Depend
import { Switch, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/Home"));

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
      </Switch>
    </Suspense>
  );
}

export default App;
