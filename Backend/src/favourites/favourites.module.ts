import { Module } from '@nestjs/common';
import { FavoritesService } from './favourites.service';
import { FavoritesController } from './favourites.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService, PrismaService],
})
export class FavoritesModule {}
