import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoritesList: React.FC<{ userId: number }> = ({ userId }) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/favorites/${userId}`);
      setFavorites(response.data);
    } catch (err) {
      console.error('Error fetching favorites:', err);
      setError('Failed to fetch favorites. Please try again.');
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [userId]); // Fetch favorites when userId changes

  return (
    <div>
      <h2>Favorite Movies</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title} - {movie.year}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
