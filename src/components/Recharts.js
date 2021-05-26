import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


// Dummy data based on data.police.uk api data
// Change Q1 & Q2 values to data from api

const data = [
  {
    name: "Anti-social",
    Q1: 1234,
    Q2: 4356,
  },
  {
    name: "Bicycle Theft",
    Q1: 5432,
    Q2: 234,
  },

  {
    name: "Burglary",
    Q1: 5689,
    Q2: 5887,
  },
  {
    name: "Criminal Damage",
    Q1: 3568,
    Q2: 2345,
  },
  {
    name: "Drugs",
    Q1: 2568,
    Q2: 3546,
  },
  {
    name: "Other theft",
    Q1: 7890,
    Q2: 1345,
  },
  {
    name: "Weapons",
    Q1: 6546,
    Q2: 7546,
  },
  {
    name: "Public Order",
    Q1: 3345,
    Q2: 3456,
  },
  {
    name: "Robbery",
    Q1: 867,
    Q2: 7899,
  },
  {
    name: "Shoplifting",
    Q1: 3456,
    Q2: 5256,
  },
  {
    name: "Theft from person",
    Q1: 3490,
    Q2: 8676,
  },
  {
    name: "Vehicle Crime",
    Q1: 3490,
    Q2: 3468,
  },
  {
    name: "Violent Crime",
    Q1: 3456,
    Q2: 4556,
  },
  {
    name: "Other Crime",
    Q1: 6789,
    Q2: 2356,
  },
];

export default class Recharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={50} />
          <Bar dataKey="Q1" stackId="a" fill="#2A8FBE" />
          <Bar dataKey="Q2" stackId="a" fill="#00C6BF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
