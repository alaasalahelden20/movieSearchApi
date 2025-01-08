// src/App.tsx
import React from 'react';
import MovieSearch from './pages/moviesPage'; // Updated import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/movies" element={<MovieSearch />} /> {/* Updated route to point to MovieSearch */}

        {/* Ensure there's a route for the home page */}
      </Routes>
    </Router>
  );
};

export default App;
