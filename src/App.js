// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NINValidation from './components/NINValidation';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NINValidation />} />
        <Route path="/user-profile/:nin" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
