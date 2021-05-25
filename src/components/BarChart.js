import React from "react";
import * as d3 from "d3";
import "./BarChart.css";
import { csv } from "d3";

// Goal: Use d3 to return a grouped bar chart
// Separate bars for each last outcome category grouped by crime type
// e.g. https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad
// x axis = One bar for each "Crime type"
// y axis = "Last outcome category" summed for each crime type

// Initialise data variable and parse data using d3's csv function
let data;

csv("2020-01-city-of-london-street.csv").then((d) => {
  data = d;
  let allCrimes = [];
  let allOutcomes = [];
  let allCrimesSum = null;

  for (let i = 0; i < data.length; i++) {
    allCrimes.push(data[i]["Crime type"]);
    allOutcomes.push(data[i]["Last outcome category"]);
  }
  allCrimesSum = allCrimes.length;

  console.log(allCrimesSum, allCrimes, allOutcomes);
});

function BarChart() {
  return <div></div>;
}

export default BarChart;
