// src/components/NumerologyCalculator/NumerologyCalculator.jsx
import React, { useState, useEffect } from "react";
import styles from "./NumerologyCalculator.module.css";
import NumerologyForm from "../NumerologyForm/NumerologyForm";
import ResultsDisplay from "../ResultsDisplay/ResultsDisplay";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {
  calculateSum,
  getSingleDigit,
  getCharacteristicsAndLuck,
} from "../../utils/numerologyUtils";

const NumerologyCalculator = () => {
  const [formData, setFormData] = useState({ name: "", dob: "" });
  const [result, setResult] = useState({
    nameSum: 0,
    nameSingleDigit: 0,
    dobSum: 0,
    dobSingleDigit: 0,
    characteristic: "",
    luck: "",
    theme: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const validateInput = () => {
    if (!formData.name.trim()) {
      setError("Please enter a valid name");
      return false;
    }
    if (!formData.dob) {
      setError("Please select your date of birth");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const nameSum = calculateSum(formData.name);
      const dobSum = formData.dob
        .split("-")
        .reduce((acc, part) => acc + parseInt(part), 0);

      const nameSingleDigit = getSingleDigit(nameSum);
      const dobSingleDigit = getSingleDigit(dobSum);

      console.log("Name Single Digit:", nameSingleDigit); // Debug
      console.log("DOB Single Digit:", dobSingleDigit); // Debug

      const result = getCharacteristicsAndLuck(nameSingleDigit, dobSingleDigit);
      console.log("Result from getCharacteristicsAndLuck:", result); // Debug

      setResult({
        nameSum,
        nameSingleDigit,
        dobSum,
        dobSingleDigit,
        characteristic: result.characteristic,
        luck: result.luck,
        theme: result.theme,
      });
      setIsCalculated(true);
    } catch (err) {
      console.error("Error:", err); // Debug
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", dob: "" });
    setResult({
      nameSum: 0,
      nameSingleDigit: 0,
      dobSum: 0,
      dobSingleDigit: 0,
      characteristic: "",
      luck: "",
      theme: "",
    });
    setIsCalculated(false);
    setError("");
  };

  useEffect(() => {
    document.title = "Numerology Calculator";
    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.appCard} ${
          result.theme ? styles[result.theme] : ""
        } ${isCalculated ? styles.calculated : ""}`}
      >
        <h1 className={styles.title}>Numerology Calculator</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <NumerologyForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          isLoading={isLoading}
          isCalculated={isCalculated}
          error={error}
        />

        {isCalculated && !isLoading && <ResultsDisplay result={result} />}

        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default NumerologyCalculator;
