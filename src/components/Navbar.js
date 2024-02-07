import React from "react";
import styles from "../App.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUser, faW, faSliders  } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

export default function Navbar({handleShow}) {
  const user =   <FontAwesomeIcon icon={faUser} />; // Define FontAwesomeIcon for user icon
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faW} style={{marginRight:"5px"}}/> {/* FontAwesomeIcon for logo */}
        Wasseerstoff
      </div>
      {/* Search bar */}
      <div className={styles.search}>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="search"
        />
      </div>
      {/* Navigation buttons */}
      <div className={styles.buttons}>
        <button className={styles.navButtons} onClick={handleShow}>statistics</button> {/* Button for statistics */}
        <button className={styles.navButtons} style={{boxShadow:'0px 2px 0px rgb(134,118,255)',color:'black'}}>overview</button> {/* Button for overview */}
        <button className={styles.navButtons}>Dashboard</button> {/* Button for Dashboard */}
        <button className={styles.navButtons}>Analytics</button> {/* Button for Analytics */}
      </div>
      {/* User and settings icons */}
      <div>
        <button style={{outline:'none',marginRight:'5px',backgroundColor:'transparent',border:"none"}}>
          {user} {/* User icon */}
        </button>
        <button style={{border:"none"}}>
          <FontAwesomeIcon icon={faSliders} /> {/* Settings icon */}
        </button>
      </div>
    </div>
  );
}
