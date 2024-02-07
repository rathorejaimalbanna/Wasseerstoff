import React from "react";
import styles from "../App.module.css";

export default function Aside() {
  return (
    <div className={styles.statsDiv}>
      {/* First section: All Users */}
      <div>
        <p style={{ display: "inline", fontWeight: "700" }}>All Users</p>
        <p style={{ fontSize: ".6rem", display: "inline", marginLeft: "10px" }}>
          Details
        </p>
        <p
          style={{
            display: "inline",
            marginLeft: "10px",
            fontSize: ".8rem",
            fontWeight: "500",
          }}
        >
          &gt;
        </p>
        <h2 style={{ marginTop: "10px" }}>3,232,544</h2>
      </div>

      {/* Second section: Statistics */}
      <div className={styles.innerStats}>
        {/* Progress bar */}
        <div
          className={styles.colorDiv}
          style={{ backgroundColor: "rgb(134,118,255)" }}
        >
          <img src="increase.png" alt="" className={styles.divImage} />
        </div>
        <div>
          <p style={{ marginBottom: "8px" }}>Total </p>
          <p style={{ marginBottom: "0px" }}>298,550</p>
        </div>
      </div>

      {/* Third section: Crown statistics */}
      <div className={styles.innerStats}>
        {/* Progress bar */}
        <div
          className={styles.colorDiv}
          style={{
            backgroundColor: "rgb(102,200,255)",
          }}
        >
          <img src="crown.png" alt="" className={styles.divImage} />
        </div>
        <div>
          <p style={{ marginBottom: "8px" }}>Total </p>
          <p style={{ marginBottom: "0px" }}>676,990</p>
        </div>
      </div>

      {/* Fourth section: Graph statistics */}
      <div className={styles.innerStats}>
        {/* Progress bar */}
        <div
          className={styles.colorDiv}
          style={{
            backgroundColor: "rgb(255,144,102)",
          }}
        >
          <img className={styles.divImage} src="graph.png" alt="" />
        </div>
        <div>
          <p style={{ marginBottom: "8px" }}> Total </p>
          <p style={{ marginBottom: "0px" }}>343,555</p>
        </div>
      </div>
    </div>
  );
}
