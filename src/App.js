import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Map from "./components/Map";
import D3Map from "./components/D3Map";
import Home from "./components/Home";

const HomePage = () => (
  <div>
    <h2>Home</h2>
    <Home />
  </div>
);

const Leaflet = () => (
  <div>
    <h2>Leaflet Map</h2>
    <Map />
  </div>
);

const D3 = () => (
  <div>
    <h2>D3 Map</h2>
    <D3Map />
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:page" component={Header} />
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/leaflet" component={Leaflet} />
        <Route exact path="/d3" component={D3} />
      </Router>
    </div>
  );
}

export default App;
