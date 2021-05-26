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

// Dummy data & random values
let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let num3 = Math.floor(Math.random() * 1000);
let num4 = Math.floor(Math.random() * 1000);
let largeNum1 = Math.floor(Math.random() * 2500);
let largeNum2 = Math.floor(Math.random() * 2500);
let largeNum3 = Math.floor(Math.random() * 2500);
let largeNum4 = Math.floor(Math.random() * 2500);

const data = [
  {
    name: "Anti-social",
    Q1: num1,
    Q2: num2,
    Q3: num3,
    Q4: largeNum3,
  },
  {
    name: "Bicycle Theft",
    Q1: num4,
    Q2: num3,
    Q3: num2,
    Q4: largeNum3,
  },

  {
    name: "Burglary",
    Q1: num4,
    Q2: largeNum2,
    Q3: num1,
    Q4: num3,
  },
  {
    name: "Criminal Damage",
    Q1: num1,
    Q2: num2,
    Q3: num3,
    Q4: num4,
  },
  {
    name: "Drugs",
    Q1: num4,
    Q2: num3,
    Q3: largeNum1,
    Q4: num1,
  },
  {
    name: "Other Theft",
    Q1: num3,
    Q2: largeNum3,
    Q3: largeNum2,
    Q4: num2,
  },
  {
    name: "Weapons",
    Q1: num4,
    Q2: num1,
    Q3: num2,
    Q4: num3,
  },
  {
    name: "Public Order",
    Q1: num2,
    Q2: num3,
    Q3: num4,
    Q4: num1,
  },
  {
    name: "Robbery",
    Q1: num4,
    Q2: num3,
    Q3: largeNum2,
    Q4: num1,
  },
  {
    name: "Shoplifting",
    Q1: largeNum4,
    Q2: num1,
    Q3: num4,
    Q4: num2,
  },
  {
    name: "Theft from person",
    Q1: num4,
    Q2: num1,
    Q3: num2,
    Q4: num3,
  },
  {
    name: "Vehicle Crime",
    Q1: num1,
    Q2: num2,
    Q3: num3,
    Q4: num4,
  },
  {
    name: "Violent Crime",
    Q1: num1,
    Q2: num3,
    Q3: num3,
    Q4: largeNum4,
  },
  {
    name: "Other Crime",
    Q1: num1,
    Q2: num2,
    Q3: num3,
    Q4: num4,
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
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" interval={0} angle={45} textAnchor="start" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={30} />
          <Bar dataKey="Q1" stackId="a" fill="#007E6C" />
          <Bar dataKey="Q2" stackId="a" fill="#6EC5F7" />
          <Bar dataKey="Q3" stackId="a" fill="#4EDDA6" />
          <Bar dataKey="Q4" stackId="a" fill="#2A8FBE" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
