import styles from "./styles.module.css"; // Importing CSS module for styling
import NavSection from "./components/Navbar.jsx"; // Importing Navbar component
import Liveinfo from "./components/Liveinfo.jsx"; // Importing Liveinfo component
import Search from "./components/search.jsx"; // Importing Search component
import React, { useState } from "react"; // Importing React and useState hook

export default function App() {
  // State variables to manage component visibility
  const [show, setShow] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle hiding search results and showing live info
  function handleHide() {
    setShow(true);
    setShowSearch(false);
  }

  // Function to handle showing search results and hiding live info
  function handleShow() {
    setShow(false);
    setShowSearch(true);
  }

  // Function to handle toggling notification display
  function handleNotify() {
    setShowNotification(!showNotification);
  }

  // Rendering JSX
  return (
    <>
      {/* Navbar component */}
      <NavSection handleShow={handleHide} handleNotify={handleNotify} />
      {/* Main content */}
      <div className={styles.main}>
        {/* Search component */}
        <Search
          handleShow={handleShow}
          showSearch={showSearch}
          notify={showNotification}
        />
        {/* Liveinfo component */}
        {show && <Liveinfo />}
      </div>
    </>
  );
}
