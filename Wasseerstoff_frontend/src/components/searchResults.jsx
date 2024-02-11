import moment from "moment"; // Importing moment library for date manipulation
import styles from "../styles.module.css"; // Importing CSS module for styling

export default function SearchResults(props) {
  // Function to calculate average value of transactions
  function avgValue() {
    const arr = props.output;
    var sum = 0;
    for (let i of arr) {
      let val = i.value;
      sum += val / 10 ** 18;
    }
    const avg = sum / arr.length;
    return avg.toFixed(3);
  }

  // Rendering JSX
  return (
    <div className={styles.searchResults}>
      {/* Notification div */}
      {props.notify && (
        <div className={styles.notify}>
          <table style={{ width: "180px", paddingLeft: "5px" }}>
            <thead>
              <tr>
                <th>Value</th>
                <th>Type</th>
              </tr>
            </thead>
            {/* Mapping through search results */}
            {props.output.map((txn, index) => {
              if (index < 6) {
                return (
                  <tr>
                    <td>{(txn.value / 10 ** 18).toFixed(5)} ETH</td>
                    <td>
                      <span
                        className={`${
                          txn.from_address.toLowerCase() !==
                          props.result.toLowerCase()
                            ? styles.inTxn
                            : styles.outTxn
                        }`}
                      >
                        {txn.from_address.toLowerCase() !==
                        props.result.toLowerCase()
                          ? "IN"
                          : "OUT"}
                      </span>
                    </td>
                  </tr>
                );
              } else {
                return <></>; // Render empty fragment after rendering 6 transactions
              }
            })}
          </table>
          <p>Avg. token value: {avgValue()}</p> {/* Displaying average token value */}
        </div>
      )}

      {/* Rendering search results */}
      <div className={styles.overflow}>
        <p className={styles.amountOfTransactions}>Latest transactions</p>
        <table className={styles.txndiv}>
          <thead>
            <tr className={styles.txnTitle}>
              <th>Transaction Hash</th>
              <th>Method</th>
              <th>Block</th>
              <th className={styles.blueText}>Age</th>
              <th>From</th>
              <th>In/Out</th>
              <th>To</th>
              <th>Value</th>
            </tr>
          </thead>
          {/* Mapping through search results */}
          {props.output.map((txn) => {
            return (
              <tr className={styles.txn}>
                <td className={styles.blueText}>
                  {txn.hash.slice(0, 16)}...
                </td>
                <td>
                  <span className={styles.transfer}>
                    {txn.decoded_call
                      ? txn.decoded_call.label.slice(0, 8)
                      : "Unknown"}
                  </span>
                </td>
                <td className={styles.blueText}>{txn.block_number}</td>
                <td>
                  {moment(txn.block_timestamp, "YYYYMMDD").fromNow()}
                </td>
                <td>
                  {txn.from_address.slice(0, 8)}...
                  {txn.from_address.slice(34)}
                </td>
                <td>
                  <span
                    className={`${
                      txn.from_address.toLowerCase() !==
                      props.result.toLowerCase()
                        ? styles.inTxn
                        : styles.outTxn
                    }`}
                  >
                    {txn.from_address.toLowerCase() !==
                    props.result.toLowerCase()
                      ? "IN"
                      : "OUT"}
                  </span>
                </td>
                <td className={styles.blueText}>
                  {txn.to_address.slice(0, 8)}...
                  {txn.to_address.slice(34)}
                </td>
                <td>{(txn.value / 10 ** 18).toFixed(5)} ETH</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
