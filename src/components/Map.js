import React, { useState, useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

// Map function which is rendered via App.js

function Map() {
  // Create useState hook for data & setData, initialise to empty array
  const [data, setData] = useState([]);

  // Create useEffect hook ( Similar to componentDidMount)
  useEffect(() => {
    // Use axios for the GET request to data.police.uk API
    // All crime for London coordinates and no date query returns last month's data
    // Empty dependency array as a second argument ensures useEffect only runs once on mount
    axios
      .get(
        "https://data.police.uk/api/crimes-street/all-crime?lat=51.509865&lng=-0.11809"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // As API returns last months data, 'current' variable evaluates to last months name
  // Gets last month and year - Need to fix logic for when previousMonth === 'December'
  let current = new Date();
  current.setMonth(current.getMonth() - 1);
  let previousMonth = current.toLocaleString("default", { month: "long" });

  let currentYear = [];

  if (previousMonth === "December") {
    currentYear = new Date().getFullYear() - 1;
  } else {
    currentYear = new Date().getFullYear();
  }

  // JSX returns react-leaflet MapContainer
  return (
    <div className="flex">
      <div className="map_info">
        <h4>
          UK Crime Data for {previousMonth} {currentYear}
        </h4>
        <p>// Add totals data from API</p>
        <p>
          // Stretch goal: Add filterable totals table and make it interactive
          with the map
        </p>
      </div>

      <MapContainer
        center={[51.509865, -0.11809]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Map through data, providing key and position for Marker and corresponding Popup (Set to number from string
      using parseFloat()) */}
        {data.map((data) => (
          <Marker
            key={data.id}
            position={[
              parseFloat(data.location.latitude),
              parseFloat(data.location.longitude),
            ]}
          >
            <Popup
              key={data.id}
              position={[
                parseFloat(data.location.latitude),
                parseFloat(data.location.longitude),
              ]}
            >
              {/* Popup displays information about the crime category and outcome if available */}
              <div>
                <h4>Information</h4>
                <p>{"Category: " + data.category}</p>
                <p>
                  {data.outcome_status === null
                    ? "Outcome: Unavailable"
                    : "Outcome: " + data.outcome_status.category}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        ;
      </MapContainer>
    </div>
  );
}

export default Map;
