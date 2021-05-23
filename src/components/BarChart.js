import React from "react";
import * as d3 from "d3";
import "./BarChart.css";

// Use d3 to return a grouped bar chart
// Ideally separate bars for each outcome category grouped by crime type
//  e.g. https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad

// x axis = One bar for each "Crime type"
// y axis = "Last outcome category" summed for each crime type

getData();

async function getData() {
  const response = await fetch("2020-01-city-of-london-street.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1);
  rows.forEach((el) => {
    const row = el.split(",");
    const crime = row[9];
    const outcome = row[10];
    // console.log(crime, outcome);
    // Need variables for sum of crime & sum of outcome and then use them with d3 so shouldn't be available outside of this function
  });
}

function BarChart() {
  return (
    <div>
      <div id="d3">Test</div>
    </div>
  );
}

export default BarChart;
