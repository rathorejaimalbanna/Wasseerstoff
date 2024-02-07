import React from 'react';
import styles from '../App.module.css';

export default function ProgressBar() {
  return (
    <>
      {/* Main container for progress bars */}
      <div className={styles.container}>
        {/* Progress bar for Java */}
        <div className={styles.ui_widgets}>
          <div className={styles.ui_values}>85%</div> {/* Value of the progress */}
          <div className={styles.ui_labels}>Java</div> {/* Label for the progress */}
        </div>

        {/* Progress bar for HTML */}
        <div className={styles.ui_widgets}>
          <div className={styles.ui_values}>50%</div> {/* Value of the progress */}
          <div className={styles.ui_labels}>HTML</div> {/* Label for the progress */}
        </div>
      </div>
    </>
  );
}
