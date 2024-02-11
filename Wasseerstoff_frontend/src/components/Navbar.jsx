import Container from "react-bootstrap/Container"; // Importing Container component from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Importing Nav component from react-bootstrap
import Navbar from "react-bootstrap/Navbar"; // Importing Navbar component from react-bootstrap
import {
  faHouse,
  faRightToBracket,
  faBell
} from "@fortawesome/free-solid-svg-icons"; // Importing Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component
import styles from '../styles.module.css'; // Importing CSS module for styling

// Functional component for the navigation section
function NavSection({ handleShow, handleNotify }) {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "rgb(10,21,47)", color: "white" }}
    >
      <Container fluid>
        {/* Brand logo and title */}
        <Navbar.Brand
          href="#"
          style={{
            color: "rgb(253,191,0)",
            marginLeft: "50px",
            fontWeight: "700",
          }}
        >
          <img
            src="/images/blockchain.png"
            alt=""
            style={{ width: "40px", height: "40px", marginRight: "20px" }}
          />{" "}
          Ethexplorer
        </Navbar.Brand>
        {/* Navbar toggle button */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Navbar collapse content */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {/* Home button */}
          <button
            onClick={handleShow}
            style={{
              marginRight: "40px",
              background: "none",
              border: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon icon={faHouse} className={styles.fontAwesome} />
            Home
          </button>
          {/* Notification button */}
          <button
            onClick={handleNotify}
            style={{
              marginRight: "40px",
              background: "none",
              border: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon icon={faBell} className={styles.fontAwesome} />
            Notification
          </button>
          {/* Sign in link */}
          <Nav.Link href="#signIn" style={{ marginRight: '50px' }}>
            <FontAwesomeIcon icon={faRightToBracket} className={styles.fontAwesome} />
            SignIn
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
