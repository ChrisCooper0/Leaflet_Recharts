import React from "react";
import * as d3 from "d3";
import "./BarChart.css";
import { csv } from "d3";

// Initialise dataset variable
let dataset;

// Sends a HTTP request to load CSV string and parses into array of objects
csv("2020-01-city-of-london-street.csv").then((d) => {
  dataset = d;
  console.log(dataset);
});

function BarChart() {
  return (
    <div>
      <div id="d3">Test</div>
    </div>
  );
}

export default BarChart;
