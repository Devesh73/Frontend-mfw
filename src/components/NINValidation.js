// NINValidation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NINValidation.css';
import usersData from './users.json'; // Assuming the JSON file is in the same directory

const NINValidation = () => {
  const [nin, setNin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const minLength = 9; // Example minimum length requirement

  const handleNinChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNin(value);
    }
  };

  const handleVerify = () => {
    if (nin === '') {
      setError('NIN cannot be empty');
      return;
    }
    if (nin.length < minLength) {
      setError(`NIN must be at least ${minLength} digits long`);
      return;
    }
    const foundUser = usersData.find(user => user.nin === nin);
    if (foundUser) {
      setError('');
      navigate(`/user-profile/${nin}`);
    } else {
      setError('NIN not found');
    }
  };

  return (<>
  
    <div className="nin-validation-body">
      
      <div className="container nin-validation">
        <div className="validation-title-container">
          <h2 className="validation-title">NIN VALIDATION</h2>
        </div>
        <div className="nin-validation">
          <label htmlFor="nin-input" className="nin-label">National Identification Number</label>
          <input
            id="nin-input"
            type="text"
            placeholder="Type Your NIN"
            value={nin}
            onChange={handleNinChange}
          />
          <button onClick={handleVerify}>Verify</button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div></>
  );
};

export default NINValidation;
