import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto,loginDto } from './dto';

@Controller('auth')
export class UsersController {
  constructor(private userServive: UsersService) {}
  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    // eslint-disable-next-line prettier/prettier
    console.log({ dto, });
    return this.userServive.createUser(dto);
  }

  @Post('signin')
  signin(@Body() dto: loginDto) {
    return this.userServive.login(dto);
  }
}
