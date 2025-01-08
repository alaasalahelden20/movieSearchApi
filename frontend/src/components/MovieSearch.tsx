// src/MovieSearch.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface MovieSearchProps {
  userId: number; // Add userId prop type
}

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a valid search query');
      return;
    }

    setError(null);
    setLoading(true); // Show loading state

    try {
      const response = await axios.get('http://localhost:3333/movies/search', {
        params: { query },
      });
      console.log(response.data); // Log response for debugging

      setMovies(response.data || []); // Update movies list
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const handleFavorite = async (movie: any) => {
    try {
      const response = await axios.post('http://localhost:3333/favorites', {
        movieId: movie.movieId,
        userId: 1, // Replace with dynamic user ID
      });
  
      if (response.status === 200) {
        console.log('Movie added to favorites:', response.data);
        alert(`"${movie.title}" added to favorites!`);
      }
    } catch (err) {
      console.error('Error adding movie to favorites:', err);
      alert('Failed to add to favorites. Please try again.');
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>} {/* Loading state */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.movieId} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <button onClick={() => handleFavorite(movie)}>Add to Favorites</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .movie-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          background-color: #f9f9f9;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .movie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
        }

        .movie-card img {
          width: 100%;
          height: auto;
        }

        .movie-card h3 {
          margin: 10px 0;
          font-size: 1rem;
        }

        .movie-card p {
          margin: 0 0 10px 0;
          font-size: 0.9rem;
          color: #555;
        }
        
        .movie-card button {
          margin: 10px;
          padding: 5px 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .movie-card button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .movie-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 10px;
          }

          .movie-card h3 {
            font-size: 0.9rem;
          }

          .movie-card p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .movie-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          }

          .movie-card h3 {
            font-size: 0.8rem;
          }

          .movie-card p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MovieSearch;
