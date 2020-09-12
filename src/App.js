import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

import Homepage from "./pages/Homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import Header from "./Components/header/header.component.jsx";

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={signInAndSignOut} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
