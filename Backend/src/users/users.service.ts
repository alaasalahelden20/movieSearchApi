// src/users/users.service.ts
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, loginDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(dto: CreateUserDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
          username: dto.username,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new ForbiddenException('credintals taken');
        }
        throw error;
      }
    }
  }
  async login(dto: loginDto) {
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (!user) {
      throw new ForbiddenException('email not found');
    }
    const passmatch = await argon.verify(user.password, dto.password);
    if (!passmatch) {
      throw new ForbiddenException('password not correct');
    }
    return user;
  }
}
