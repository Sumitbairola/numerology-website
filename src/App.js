import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState({
    nameSum: 0,
    nameSingleDigit: 0,
    dobSum: 0,
    dobSingleDigit: 0,
    characteristic: '',
    luck: '',
    theme: ''
  });

  const calculateSum = (input) => {
    return input
      .toUpperCase()
      .split('')
      .filter(char => char >= 'A' && char <= 'Z')
      .reduce((sum, char) => sum + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1), 0);
  };

  const getSingleDigit = (number) => {
    while (number > 9) {
      number = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return number;
  };

  const getCharacteristicsAndLuck = (nameSingleDigit, dobSingleDigit) => {
    const characteristics = {
      11: { characteristic: "Visionary Leader", luck: "100%", theme: "celebration" },
      12: { characteristic: "sumit ki mummy", luck: "90%", theme: "celebration" },
      13: { characteristic: "Empathetic Friend", luck: "85%", theme: "celebration" },
      14: { characteristic: "Strategic Thinker", luck: "80%", theme: "celebration" },
      15: { characteristic: "Creative Genius", luck: "75%", theme: "celebration" },
      16: { characteristic: "Charismatic Speaker", luck: "70%", theme: "celebration" },
      17: { characteristic: "Dedicated Worker", luck: "65%", theme: "sad" },
      18: { characteristic: "Detail-Oriented", luck: "60%", theme: "sad" },
      19: { characteristic: "Resilient Survivor", luck: "55%", theme: "sad" },
      21: { characteristic: "Passionate Leader", luck: "100%", theme: "celebration" },
      22: { characteristic: "Determined Fighter", luck: "95%", theme: "celebration" },
      23: { characteristic: "Caring Advisor", luck: "90%", theme: "celebration" },
      24: { characteristic: "Dependable Friend", luck: "85%", theme: "celebration" },
      25: { characteristic: "Artistic Soul", luck: "80%", theme: "celebration" },
      26: { characteristic: "Organized Planner", luck: "75%", theme: "celebration" },
      27: { characteristic: "Loyal Companion", luck: "70%", theme: "celebration" },
      28: { characteristic: "Practical Realist", luck: "65%", theme: "sad" },
      29: { characteristic: "Courageous Explorer", luck: "60%", theme: "sad" },
      31: { characteristic: "Innovative Leader", luck: "100%", theme: "celebration" },
      32: { characteristic: "Dynamic Strategist", luck: "95%", theme: "celebration" },
      33: { characteristic: "Sumit ka ladka", luck: "90%", theme: "celebration" },
      34: { characteristic: "Reliable Worker", luck: "85%", theme: "celebration" },
      35: { characteristic: "Visionary Artist", luck: "80%", theme: "celebration" },
      36: { characteristic: "Energetic Planner", luck: "75%", theme: "celebration" },
      37: { characteristic: "Supportive Ally", luck: "70%", theme: "celebration" },
      38: { characteristic: "Critical Thinker", luck: "65%", theme: "sad" },
      39: { characteristic: "Bold Adventurer", luck: "60%", theme: "sad" },
      41: { characteristic: "Inspirational Leader", luck: "100%", theme: "celebration" },
      42: { characteristic: "Assertive Pioneer", luck: "95%", theme: "celebration" },
      43: { characteristic: "Sensitive Helper", luck: "90%", theme: "celebration" },
      44: { characteristic: "Steadfast Guardian", luck: "85%", theme: "celebration" },
      45: { characteristic: "Artistic Visionary", luck: "80%", theme: "celebration" },
      46: { characteristic: "Systematic Organizer", luck: "75%", theme: "celebration" },
      47: { characteristic: "Reliable Partner", luck: "70%", theme: "celebration" },
      48: { characteristic: "Realistic Planner", luck: "65%", theme: "sad" },
      49: { characteristic: "Brave Leader", luck: "60%", theme: "sad" },
      51: { characteristic: "deepika's love", luck: "100%", theme: "celebration" },
      52: { characteristic: "Strategic Leader", luck: "90%", theme: "celebration" },
      53: { characteristic: "Friendly Companion", luck: "85%", theme: "celebration" },
      54: { characteristic: "Thoughtful Advisor", luck: "80%", theme: "celebration" },
      55: { characteristic: "Visionary Pioneer", luck: "75%", theme: "celebration" },
      56: { characteristic: "Insightful Analyst", luck: "70%", theme: "celebration" },
      57: { characteristic: "Determined Leader", luck: "65%", theme: "sad" },
      58: { characteristic: "Pragmatic Worker", luck: "60%", theme: "sad" },
      59: { characteristic: "Resourceful Innovator", luck: "55%", theme: "sad" },
      61: { characteristic: "Confident Leader", luck: "100%", theme: "celebration" },
      62: { characteristic: "Resilient Fighter", luck: "90%", theme: "celebration" },
      63: { characteristic: "Loving Supporter", luck: "85%", theme: "celebration" },
      64: { characteristic: "sumit's love", luck: "80%", theme: "celebration" },
      65: { characteristic: "Dynamic Visionary", luck: "75%", theme: "celebration" },
      66: { characteristic: "Harmonious Leader", luck: "70%", theme: "celebration" },
      67: { characteristic: "Steadfast Partner", luck: "65%", theme: "sad" },
      68: { characteristic: "Ambitious Planner", luck: "60%", theme: "sad" },
      69: { characteristic: "Practical Thinker", luck: "55%", theme: "sad" },
      71: { characteristic: "Charismatic Leader", luck: "100%", theme: "celebration" },
      72: { characteristic: "Fierce Defender", luck: "95%", theme: "celebration" },
      73: { characteristic: "Generous Mentor", luck: "90%", theme: "celebration" },
      74: { characteristic: "Loyal Protector", luck: "85%", theme: "celebration" },
      75: { characteristic: "Innovative Creator", luck: "80%", theme: "celebration" },
      76: { characteristic: "Insightful Planner", luck: "75%", theme: "celebration" },
      77: { characteristic: "Strong Advocate", luck: "70%", theme: "celebration" },
      78: { characteristic: "Practical Analyst", luck: "65%", theme: "sad" },
      79: { characteristic: "Adventurous Explorer", luck: "60%", theme: "sad" },
      81: { characteristic: "Visionary Leader", luck: "100%", theme: "celebration" },
      82: { characteristic: "Strategic Thinker", luck: "90%", theme: "celebration" },
      83: { characteristic: "Loving Supporter", luck: "85%", theme: "celebration" },
      84: { characteristic: "Reliable Worker", luck: "80%", theme: "celebration" },
      85: { characteristic: "Creative Genius", luck: "75%", theme: "celebration" },
      86: { characteristic: "Harmonious Leader", luck: "70%", theme: "celebration" },
      87: { characteristic: "Dependable Partner", luck: "65%", theme: "sad" },
      88: { characteristic: "Realistic Planner", luck: "60%", theme: "sad" },
      89: { characteristic: "Resilient Achiever", luck: "55%", theme: "sad" },
      91: { characteristic: "Dynamic Leader", luck: "100%", theme: "celebration" },
      92: { characteristic: "Determined Worker", luck: "95%", theme: "celebration" },
      93: { characteristic: "Inspirational Mentor", luck: "90%", theme: "celebration" },
      94: { characteristic: "Reliable Ally", luck: "85%", theme: "celebration" },
      95: { characteristic: "Creative Visionary", luck: "80%", theme: "celebration" },
      96: { characteristic: "Organized Planner", luck: "75%", theme: "celebration" },
      97: { characteristic: "Loyal Supporter", luck: "70%", theme: "celebration" },
      98: { characteristic: "Realistic Realist", luck: "65%", theme: "sad" },
      99: { characteristic: "Bold Leader", luck: "60%", theme: "sad" }
    };

    const key = `${nameSingleDigit}${dobSingleDigit}`;
    return characteristics[key] || { characteristic: 'Unknown', luck: 'Unknown', theme: 'default' };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const dob = e.target.elements.dob.value;

    const nameSum = calculateSum(name);
    const dobSum = dob.split('-').reduce((acc, part) => acc + parseInt(part), 0);

    const nameSingleDigit = getSingleDigit(nameSum);
    const dobSingleDigit = getSingleDigit(dobSum);

    const { characteristic, luck, theme } = getCharacteristicsAndLuck(nameSingleDigit, dobSingleDigit);

    setResult({
      nameSum,
      nameSingleDigit,
      dobSum,
      dobSingleDigit,
      characteristic,
      luck,
      theme
    });
  };

  return (
    <div className={`app ${result.theme}`}>
      {result.theme === 'celebration' && <div className="rain goldRain"></div>}
      {result.theme === 'sad' && <div className="rain sorrowRain"></div>}
      <h1>Numerology Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" required />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div className="result">
        <p><strong>Life Path Number:</strong> {result.dobSingleDigit}</p>
        <p><strong>Destiny Number:</strong> {result.nameSingleDigit}</p>
        <p><strong>Luck:</strong> {result.luck}</p>
        <p><strong>Characteristic:</strong> {result.characteristic}</p>
      </div>
    </div>
  );
};

export default App;
