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
        <p>
          <strong>Note:</strong> I chose to learn and implement D3.js over
          TypeScript for this app in the interest of time. Below are some
          stretch goals I will continue to work in my own time.
        </p>
        <ul>
          <li>- Utilise CSS Modules and update UI</li>
          <li>- Use react-table for the Leaflet Map data breakdown</li>
          <li>- Refactor to TypeScript</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
