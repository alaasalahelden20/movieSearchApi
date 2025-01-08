import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async createFavorite(data: CreateFavoriteDto) {
    try {
      // Check if the movie is already in favorites
      const existingFavorite = await this.prisma.favorite.findUnique({
        where: { movieId: data.movieId },
      });

      if (existingFavorite) {
        throw new Error('Movie is already in favorites.');
      }

      return await this.prisma.favorite.create({
        data,
      });
    } catch (error) {
      throw new Error('Could not create favorite: ' + error.message);
    }
  }

  async getFavorites(userId: number) {
    return await this.prisma.favorite.findMany({
      where: { userId },
    });
  }

  async removeFavorite(id: number) {
    return await this.prisma.favorite.delete({
      where: { id },
    });
  }
}
