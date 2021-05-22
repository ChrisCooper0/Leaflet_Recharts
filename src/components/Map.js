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

  // Total & breakdown data

  let total = data.length.toLocaleString("en");

  let antiSocial = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "anti-social-behaviour") {
      antiSocial.push(data[i]);
    }
  }

  let bike = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "bicycle-theft") {
      bike.push(data[i]);
    }
  }

  let burglary = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "burglary") {
      burglary.push(data[i]);
    }
  }

  let criminalDamage = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "criminal-damage-arson") {
      criminalDamage.push(data[i]);
    }
  }

  let drugs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "drugs") {
      drugs.push(data[i]);
    }
  }

  let otherTheft = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "other-theft") {
      otherTheft.push(data[i]);
    }
  }

  let weapons = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "possession-of-weapons") {
      weapons.push(data[i]);
    }
  }

  let publicOrder = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "public-order") {
      publicOrder.push(data[i]);
    }
  }

  let robbery = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "robbery") {
      robbery.push(data[i]);
    }
  }

  let shoplifting = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "shoplifting") {
      shoplifting.push(data[i]);
    }
  }

  let theft = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "theft-from-the-person") {
      theft.push(data[i]);
    }
  }

  let vehicle = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "vehicle-crime") {
      vehicle.push(data[i]);
    }
  }

  let violent = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "violent-crime") {
      violent.push(data[i]);
    }
  }

  let other = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "other-crime") {
      other.push(data[i]);
    }
  }

  // JSX returns react-leaflet MapContainer
  return (
    <div className="flex">
      <div className="map_info">
        <h4>
          Central London Crime Data for {previousMonth} {currentYear}
        </h4>
        <p className="text">There were {total} crimes recorded.</p>
        <ul>
          <li>Anti-Social: {antiSocial.length}</li>
          <li>Bicycle Theft: {bike.length}</li>
          <li>Burglary: {burglary.length}</li>
          <li>Criminal Damage: {criminalDamage.length}</li>
          <li>Drugs: {drugs.length}</li>
          <li>Other Theft: {otherTheft.length}</li>
          <li>Weapons: {weapons.length}</li>
          <li>Public Order: {publicOrder.length}</li>
          <li>Robbery: {robbery.length}</li>
          <li>Shoplifting: {shoplifting.length}</li>
          <li>Theft from person: {theft.length}</li>
          <li>Vehicle Crime: {vehicle.length}</li>
          <li>Violent Crime: {violent.length}</li>
          <li>Other Crime: {other.length}</li>
        </ul>
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
