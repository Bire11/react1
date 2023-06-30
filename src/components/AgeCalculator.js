import React, { useState } from 'react';
// import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className="age-calendar">
      <h2>Age Calendar</h2>
      <label htmlFor="birth-date">Enter your birthdate:</label>
      <input
        type="date"
        id="birth-date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;

