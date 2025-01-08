// src/favorites/favorites.controller.ts
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { FavoritesService } from './favourites.service';
import { CreateFavoriteDto } from './dto/create-favorite';
import { FavoriteDto } from './dto/favorite';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Post()
  async addFavorite(
    @Body() createFavoriteDto: CreateFavoriteDto,
  ): Promise<FavoriteDto> {
    const favorite =
      await this.favoritesService.createFavorite(createFavoriteDto);
    return {
      id: favorite.id,
      movieId: favorite.movieId,
      userId: favorite.userId,
    };
  }

  @Get(':userId')
  async getFavorites(@Param('userId') userId: number): Promise<FavoriteDto[]> {
    const favorites = await this.favoritesService.getFavorites(userId);
    return favorites.map((favorite) => ({
      id: favorite.id,
      movieId: favorite.movieId,
      userId: favorite.userId,
    }));
  }

  @Delete(':id')
  async removeFavorite(@Param('id') id: number): Promise<void> {
    await this.favoritesService.removeFavorite(id);
  }
}
