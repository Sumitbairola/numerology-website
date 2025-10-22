// src/components/NumerologyForm/NumerologyForm.jsx
import React from 'react';
import styles from './NumerologyForm.module.css';

const NumerologyForm = ({ 
  formData, 
  handleInputChange, 
  handleSubmit, 
  handleReset, 
  isLoading, 
  isCalculated, 
  error 
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.calculatorForm}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">
          Full Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            disabled={isLoading}
            className={error && !formData.name ? styles.error : ''}
          />
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="dob">
          Date of Birth
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            disabled={isLoading}
            className={error && !formData.dob ? styles.error : ''}
          />
        </label>
      </div>

      <div className={styles.buttonGroup}>
        <button 
          type="submit" 
          className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Calculating...' : 'Calculate Destiny'}
        </button>
        
        {isCalculated && (
          <button 
            type="button" 
            className={styles.resetBtn}
            onClick={handleReset}
            disabled={isLoading}
          >
            New Calculation
          </button>
        )}
      </div>
    </form>
  );
};

export default NumerologyForm;
