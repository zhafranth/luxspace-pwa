import React, { lazy, Suspense } from "react";

// Depend
import { Switch, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Details = lazy(() => import("./pages/Details"));
const Cart = lazy(() => import("./pages/Cart"));

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
        <Route component={Profile} path="/profile" />
        <Route component={Details} path="/details/:id" />
        <Route component={Cart} path="/cart" />
      </Switch>
    </Suspense>
  );
}

export default App;
