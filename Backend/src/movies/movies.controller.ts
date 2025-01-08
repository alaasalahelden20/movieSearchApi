import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}
  @Get('search')
  async searchmovies(@Query('query') query: string) {
    if (!query) {
      throw new BadRequestException('Search query is required');
    }

    const movies = await this.movieService.getmovies(query);
    console.log('Movies found:', movies);
    return movies;
  }
}
