import React from "react";
import * as d3 from "d3";
import "./BarChart.css";
import { csv } from "d3";

// Goal: Use d3 to return a grouped bar chart
// Separate bars for each last outcome category grouped by crime type
// Similar to this example: https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad
// x axis = One bar for each "Crime type"
// y axis = "Last outcome category" summed for each crime type

let data;

csv("2020-01-city-of-london-street.csv").then((d) => {
  data = d;
  console.log(data);
  let crime = [];
  let outcome = [];

  for (let i = 0; i < data.length; i++) {
    crime.push(data[i]["Crime type"]);
    outcome.push(data[i]["Last outcome category"]);
  }
});

function BarChart() {
  return (
    <div>
      <div id="d3">D3 Chart here</div>
    </div>
  );
}

export default BarChart;
