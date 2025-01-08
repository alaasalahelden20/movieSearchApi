// src/favorites/dto/create-favorite.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFavoriteDto {
  @IsString()
  @IsNotEmpty()
  movieId: string; // Unique identifier for the movie

  @IsNumber()
  userId: number; // ID of the user who favorites the movie
}
