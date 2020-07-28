import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

import Homepage from "./pages/Homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import Header from "./Components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
