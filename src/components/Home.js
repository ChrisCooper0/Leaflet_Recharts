import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <h3>Web Development Challenge</h3>
        <h4>
          Please click the link in the navigation menu to view that page or view
          the code
          <a href="https://github.com/ChrisCooper0/valcri_test"> here</a>.
        </h4>
        <p class="note">
          Below are some stretch goals I will continue to work on:
        </p>
        <ul className="stretch-goals">
          <li>- Utilise CSS Modules and update UI</li>
          <li>- Use react-table for the data breakdowns on the Leaflet page</li>
          <li>- Learn more and implement a d3 grouped-bar chart</li>
          <li>- Refactor to TypeScript</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
