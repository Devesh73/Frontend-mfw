import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';
import usersData from './users.json'; // Assuming the JSON file is in the same directory

const UserProfile = () => {
  const { nin } = useParams();
  const user = usersData.find(user => user.nin === nin);

  if (!user) {
    return <div>User not found</div>;
  }

  const profilePicture = require(`${user.profilePicture}`);

  const handleTransferFunds = () => {
    alert('Transfer Funds');
  };

  return (
    <div className="user-profile-body">
      <header className="profile-header">
        <h1 className="company-name">Micro Finance</h1>
        <p>Hello,</p>
      </header>
      <div className="profile-container">
        <div className="left-column">
          <div className="profile-details-container">
            
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <h2>User Details</h2>
            <div className="profile-details">
              <p><strong>First Name:</strong> {user.first_name}</p>
              <p><strong>Middle Name:</strong> {user.middle_name}</p>
              <p><strong>Last Name:</strong> {user.last_name}</p>
              <p><strong>NIN:</strong> {user.nin}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="account-container">
            <h2>Account</h2>
            <p>Balance</p>
            <button className="transfer-button" onClick={handleTransferFunds}>Transfer</button>
          </div>
          <div className="transaction-record-container">
            <h2>Transaction record</h2>
            {/* Placeholder for transaction records */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
