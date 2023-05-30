import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { RefreshTokenDto } from './refreshToken.dto';
import { Auth } from './auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register(@Body() dto: AuthDto){
    return this.authService.register(dto);
  }
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('login')
  async login(@Body() dto: AuthDto){
    return this.authService.login(dto);
  }
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login/new-token')
  async newToken(@Body() dto: RefreshTokenDto){
    return this.authService.getNewToken(dto.refreshToken);
  }
}
