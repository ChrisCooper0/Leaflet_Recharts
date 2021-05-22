import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./BarChart.css";
import { csv } from "d3";

// Sends a HTTP request to load CSV string and parses into array of objects
csv("2020-01-city-of-london-street.csv").then((result) => {
  console.log(result);
  // Map over data and output to chart
});

// Temporary JSON to test chart
let crimeData = [
  { category: "category1", id: 1000 },
  { category: "category2", id: 1900 },
];

function BarChart() {
  const d3Chart = useRef();
  // Ref for updating dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // Ref for resize event update
  const update = useRef(false);

  useEffect(() => {
    // Listen for any resize event update
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // If resize, remove the previous chart
      if (update.current) {
        d3.selectAll("g").remove();
      } else {
        update.current = true;
      }
    });

    // Draw chart using the data and updated dimensions
    DrawChart(crimeData, dimensions);
  }, [dimensions]);

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data) {
    const chartwidth =
      parseInt(d3.select("#d3").style("width")) - margin.left - margin.right;
    const chartheight =
      parseInt(d3.select("#d3").style("height")) - margin.top - margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.id;
    });

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#4f4f4f")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.id))
      .attr("height", (d) => y(0) - y(d.id))
      .attr("width", x.bandwidth());
  }
  return (
    <div id="d3">
      <svg ref={d3Chart}></svg>
    </div>
  );
}

export default BarChart;
