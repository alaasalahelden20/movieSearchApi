import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  private readonly omdbApiUrl: string;
  private readonly omdbApiKey: string;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    this.omdbApiUrl = this.configService.get<string>('OMDB_API_URL');
    this.omdbApiKey = this.configService.get<string>('OMDB_API_KEY');
  }

  async getmovies(query: string): Promise<any> {
    console.log(`Searching for movies with query: ${query}`);
    try {
      const response = await axios.get(this.omdbApiUrl, {
        params: { s: query, apikey: this.omdbApiKey },
      });
      console.log('API Response:', response.data); // Log the response data

      if (response.data.Response === 'False') {
        console.log(`API Response Error: ${response.data.Error}`);
        throw new HttpException(response.data.Error, HttpStatus.BAD_REQUEST);
      }

      return response.data.Search.map((movie) => ({
        movieId: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }));
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
