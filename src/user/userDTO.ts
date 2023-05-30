import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'Ксения', description: 'Имя'})
    name: string;
    @ApiProperty({example: 'mail@mail.com', description: 'Email'})
    email: string;
    @ApiProperty({example: '89876543221', description: 'Телефон'})
    phone: string;
    @ApiProperty({example: 'qwerty1234', description: 'Пароль'})
    password: string;
}