import { IsEmail, IsPhoneNumber, IsString, MinLength} from 'class-validator';

export class AuthDto{
    @IsEmail()
    email: string
    @MinLength(6, { message: "Пароль должен содержать не менее 6 символов"},)
    @IsString()
    password: string
    @IsString()
    name: string
    @IsString()
    nickname: string
    @IsString()
    @IsPhoneNumber()
    phone: string
}