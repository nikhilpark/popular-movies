import React from "react";
import {Provider} from "react-redux";
import Home from "./components/Home/Home"
import Movie from "./components/Movie/Movie"
import NavBar from "./components/NavBar/NavBar"
import {store} from "./store";

import { HashRouter, Route, Link,Switch } from "react-router-dom";



function App() {
  return (
    <Provider store={store}>
      <HashRouter basename='/'>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/movie/:movieId" component={Movie}/>
      </Switch>
      </HashRouter>
      </Provider>
  );
}

export default App;
