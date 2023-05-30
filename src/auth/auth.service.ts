import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { hash, verify } from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
   constructor(private userServ: UserService, private jwt: JwtService ){}

   
   async register(dto: AuthDto){
    const extUser = await this.userServ.findByEmail(dto.email)
    if(extUser)throw new BadRequestException("Пользователь уже существует")

    const usr = await this.userServ.create(dto);
    const token = await this.createTokens(usr.id)
    return {user: this.returnUserInfo(usr),
    ...token}
   }
   private async createTokens(userId: number){
    const obj = {id: userId}
    const accessToken = this.jwt.sign(obj, {
        expiresIn: '15min',
    })
    const refreshToken = this.jwt.sign(obj, {
        expiresIn: '7d',
    })
    return { accessToken, refreshToken }
   }

   private returnUserInfo(user: User){
    return{
        id: user.id,
        email: user.email
        }
   }
   async getNewToken(refreshToken: string){
    const rezult = await this.jwt.verifyAsync(refreshToken) 
    if(!rezult) throw new UnauthorizedException('Недоступный токен')
    const user = await this.userServ.findOne(rezult.id)
    const token = await this.createTokens(user.id)
    return {user: this.returnUserInfo(user),
        ...token}
   }

   async login(dto: AuthDto){
    const user = await this.validateUser(dto)
    const tokens = await this.createTokens(user.id)
    return{
        user: this.returnUserInfo(user),
        ...tokens
    }
   }
   private async validateUser(dto: AuthDto){
    const user = await this.userServ.findByEmail(dto.email)
    if(!user) throw new NotFoundException('Пользователь не существует')
    const isValid = await verify( user.password, dto.password)
    if(!isValid) throw new UnauthorizedException('Неверный пароль')
    return user
   }
}

