import React from "react";
import BarChart from "./BarChart";
import "./D3.css";
import Recharts from "./Recharts";

function D3Map() {
  return (
    <div>
      <div className="d3">
        <BarChart />
        <Recharts />
      </div>
    </div>
  );
}

export default D3Map;
