// src/components/ResultsDisplay/ResultsDisplay.jsx
import React from 'react';
import styles from './ResultsDisplay.module.css';

const ResultsDisplay = ({ result }) => {
  const luckDisplay = result.luck && !result.luck.includes('%') 
    ? `${result.luck}%` 
    : result.luck;
  
  // Width should be a percentage value without the % symbol for CSS
  const luckWidth = luckDisplay && luckDisplay.replace('%', '');

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultGrid}>
        <div className={styles.resultItem}>
          <h3>Life Path Number</h3>
          <div className={styles.numberCircle}>{result.dobSingleDigit}</div>
        </div>
        
        <div className={styles.resultItem}>
          <h3>Destiny Number</h3>
          <div className={styles.numberCircle}>{result.nameSingleDigit}</div>
        </div>
      </div>

      <div className={styles.resultDetails}>
        <div className={styles.luckMeterContainer}>
          <h3>Your Luck Potential</h3>
          <div className={styles.luckMeter}>
            <div 
              className={styles.luckFill}
              style={{ width: `${luckWidth}%` }}
            >
              <span className={styles.luckText}>{luckDisplay}</span>
            </div>
          </div>
        </div>

        <div className={styles.characteristicContainer}>
          <h3>Your Characteristic</h3>
          <p className={styles.characteristicText}>
            {result.characteristic || 'Unique Individual'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
