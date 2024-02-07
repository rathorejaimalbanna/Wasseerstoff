import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Import Navbar component
import { MyResponsiveChoropleth } from "./components/geography/geo"; // Import Choropleth map component
import Aside from "./components/aside"; // Import Aside component
import Footer from "./components/footer"; // Import Footer component
import styles from "./App.module.css"; // Import CSS modules for styling
import { MyResponsiveSwarmPlot } from "./components/bubble/bubble"; // Import SwarmPlot component

export default function App() {
  // State to control whether to show the popup component
  const [show, setShow] = useState(false);

  // Function to toggle the value of 'show'
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* Render the Navbar component and pass handleShow function as a prop */}
      <Navbar handleShow={handleShow} />
      
      {/* Main container div for the application */}
      <div className={styles.geoDiv}>
        
        {/* Aside component */}
        <div className={styles.aside}>
          <Aside />
        </div>
        
        {/* Map container div */}
        <div className={styles.mapDiv}>
          {/* Conditional rendering of MyResponsiveSwarmPlot based on 'show' state */}
          {show && <div className={styles.popup}><MyResponsiveSwarmPlot/></div>}
          
          {/* Render the choropleth map */}
          <MyResponsiveChoropleth />
        </div>
      </div>
      
      {/* Container for the footer */}
      <div className={styles.footContainer}>
        <div className={styles.footer}>
          {/* Render the Footer component */}
          <Footer/>
        </div>
      </div>
    </div>
  );
}
