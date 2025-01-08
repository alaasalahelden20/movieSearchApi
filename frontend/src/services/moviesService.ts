// src/services/moviesService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3333/movies'; // Update with your backend URL

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
