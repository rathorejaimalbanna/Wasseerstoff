import { useEffect, useState } from "react"; // Importing hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import moment from "moment"; // Importing moment.js for date manipulation
import styles from "../styles.module.css"; // Importing CSS module for styling
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons"; // Importing Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component

export default function Liveinfo() {
  // State variables for storing fetched data
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const [ethPrice, setEthPrice] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    // Function to fetch Ethereum price
    const getEthPrice = async () => {
      const response = await axios.get(`http://localhost:3200/liveprice`, {});
      setEthPrice(response.data.usdPrice);
    };

    // Function to fetch block and transaction information
    const getBlockInfo = async () => {
      const response = await axios.get(
        `http://localhost:3200/getallblocks`,
        {}
      );

      // Extracting block and transaction data from the response
      const blockArray = [
        response.data.previousBlockInfo[1],
        response.data.previousBlockInfo[2],
        response.data.previousBlockInfo[3],
        response.data.previousBlockInfo[4],
        response.data.previousBlockInfo[5],
      ];

      // Setting state with fetched data
      setTotalTransactions(response.data.previousBlockInfo[1].totalTransactions);
      setLatestBlock(response.data.latestBlock);
      setBlockResult(blockArray);
      setTransactionsResult(response.data.previousBlockInfo[0].transactions);
    };

    // Call the functions to fetch data
    getEthPrice();
    getBlockInfo();
  }, []);

  // Rendering JSX
  return (
    <div className={styles.herodivContainer}>
      {(
        <div>
          {/* Displaying Ethereum price and market cap */}
          <div className={styles.latestResults_header}>
            <div>
              <div className={styles.latestResults_box}>
                <div className={styles.svgdiv}>
                  <img src="/images/ethereum.png" alt="" style={{width:'30px',height:'30px'}} />
                </div>
                <div className={styles.hero_box}>
                  <p style={{color:'#000'}}>ETHER PRICE</p>
                  <p className={styles.heroValues}>
                    ${Number(ethPrice).toFixed(2)}
                  </p>
                </div>
              </div>
              <span className={styles.divider}></span>
              <div className={styles.latestResults_box}>
                <div className={styles.svgdiv}>
                  <FontAwesomeIcon icon={faGlobe} className={styles.svgIcons} />
                </div>
                <div className={styles.hero_box}>
                  <p style={{color:'#000'}}>MARKET CAP</p>
                  <p className={styles.heroValues}>$196,968,104,207.00</p>
                </div>
              </div>
            </div>
            {/* Displaying total transactions and latest finalized block */}
            <div>
              <div className={styles.latestResults_box}>
                <div className={styles.svgdiv}>
                  <FontAwesomeIcon icon={faServer} className={styles.svgIcons} />
                </div>
                <div className={styles.hero_box}>
                  <p style={{color:'#000'}}>TRANSACTIONS</p>
                  <p className={styles.heroValues}>{totalTransactions}</p>
                </div>
              </div>
              <span className={styles.divider}></span>
              <div className={styles.latestResults_box}>
                <div className={styles.svgdiv}>
                  <FontAwesomeIcon icon={faGauge} className={styles.svgIcons} />
                </div>
                <div className={styles.hero_box}>
                  <p style={{color:'#000'}}>LAST FINALIZED BLOCK</p>
                  <p className={styles.heroValues}>{latestBlock}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Displaying latest blocks and transactions */}
          <div className={styles.latestResults_body}>
            <div>
              <div className={styles.latestResults_body_title}>
                Latest Blocks
              </div>
              <table className={styles.latestResults_body_table}>
                <tbody>
                  {/* Mapping through blockResult array to render blocks */}
                  {blockResult.map((block) => {
                    return (
                      <tr
                        className={`${styles.latestResults_body_tr} ${
                          blockResult.indexOf(block) ===
                            blockResult.length - 1 && styles.lastTd
                        }`}
                        key={block.blockNumber}
                      >
                        <td className={styles.tdIcon}>
                          <FontAwesomeIcon icon={faCube} />
                        </td>
                        <td className={styles.tdBlock}>
                          <div className={styles.blueText}>
                            {block.blockNumber}
                          </div>
                          <div>
                            {moment(block.time, "YYYYMMDD").fromNow()}
                          </div>
                        </td>
                        <td className={styles.tdTxns}>
                          <div>
                            Fee Recipient{" "}
                            <span className={styles.blueText}>
                              {block.miner.slice(0, 6)}...
                              {block.miner.slice(36)}
                            </span>
                          </div>
                          <div>
                            <span className={styles.blueText}>
                              {block.totalTransactions} txns
                            </span>
                          </div>
                        </td>
                        <td className={styles.tdValue}>{block.gasUsed} Eth</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <div className={styles.latestResults_body_title}>
                Latest Transactions
              </div>
              <table className={styles.latestResults_body_table}>
                <tbody>
                  {/* Mapping through transactionsResult array to render transactions */}
                  {transactionsResult.map((txn,index) => {
                    if(index<15) // Rendering only first 15 transactions
                    return (
                      <tr
                        className={`${styles.latestResults_body_tr} ${
                          transactionsResult.indexOf(txn) ===
                            transactionsResult.length - 1 && styles.lastTd
                        }`}
                        key={txn.transactionHash}
                      >
                        <td className={styles.tdContract}>
                          <FontAwesomeIcon
                            icon={faFileContract}
                            className={styles.tdContract}
                          />
                        </td>
                        <td className={styles.tdBlock}>
                          <div className={styles.blueText}>
                            {txn.transactionHash?.slice(0, 14)}...
                          </div>
                          <div>
                            {moment(txn.time, "YYYYMMDD").fromNow()}
                          </div>
                        </td>
                        <td className={styles.tdFromTo}>
                          <div>
                            From{" "}
                            <span className={styles.blueText}>
                              {txn.fromAddress?.slice(0, 6)}...
                              {txn.fromAddress?.slice(36)}
                            </span>
                          </div>
                          <div>
                            To{" "}
                            <span className={styles.blueText}>
                              {txn.toAddress?.slice(0, 6)}...
                              {txn.toAddress?.slice(36)}
                            </span>
                            <span className={styles.blueText}>
                              {txn.totalTransactions}
                            </span>
                          </div>
                        </td>
                        <td className={styles.tdValue}>
                          {(Number(txn.value) / 10 ** 18).toFixed(4)} Eth
                        </td>
                      </tr>
                    );
                    else{return(<></>)} // Render empty fragment after rendering 15 transactions
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
