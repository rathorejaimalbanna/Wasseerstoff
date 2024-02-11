import { useState } from "react"; // Importing useState hook from React
import axios from "axios"; // Importing axios for making HTTP requests
import styles from "../styles.module.css"; // Importing CSS module for styling
import SearchResults from "./searchResults.jsx"; // Importing SearchResults component

export default function Search({ handleShow, showSearch, notify }) {
  // State variables for storing search result and input value
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Function to handle input change
  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  // Function to handle search
  const handleSearch = async () => {
    document.querySelector("#inputField").value = ""; // Clearing input field

    // Making GET request to fetch search results
    const response = await axios.get("http://localhost:3200/address", {
      params: { address: searchInput },
    });

    setResult(response.data.result); // Setting search result state
    handleShow(); // Calling handleShow function to show search results
  };

  // Rendering JSX
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <div className={styles.searchdiv}>
          <h3 style={{ marginBottom: "10px" }}>
            The Ethereum Blockchain Explorer
          </h3>
          <div className={styles.input_div}>
            {/* Search input field */}
            <input
              className={styles.inputField}
              type="text"
              id="inputField"
              name="inputField"
              maxLength="120"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              required
              onChange={changeHandler}
            />
            {/* Search button */}
            <button className={styles.btn} onClick={handleSearch}>
              <img
                src="/images/search.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
          <h5 style={{ marginTop: "10px" }}>
            Provides instant access to ethereum transactions
          </h5>
        </div>
      </div>
      {/* Rendering search results if showSearch is true */}
      {showSearch && <SearchResults result={searchInput} notify={notify} output={result} />}
    </div>
  );
}
