import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() registrationDto: CreateUserDto) {
    return this.authService.register(registrationDto);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }
}
