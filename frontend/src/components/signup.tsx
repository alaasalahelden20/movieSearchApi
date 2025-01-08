import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3333/auth/signup', {
        email,
        username,
        password,
      });
      console.log('Signup successful:', response.data);
      // Redirect to the search page
      navigate('/MovieSearch');
    } catch (error) {
      console.error('Signup error:', error);
      setError('Error creating account');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Signup
