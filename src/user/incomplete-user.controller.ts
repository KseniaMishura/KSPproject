import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('places')
export class UserController{
    constructor(private readonly userServ: UserService){}
        @Get()
        findAll(){
            return this.userServ.findAll();
        }
        @Get('incomplete')
        findIncomplete(){
            return this.userServ.findIncomplete;
        }
        @Get(':id')
        findOne(@Param('id') id: string){
            return this.userServ.findOne(+id);
        }
        @Put(':id')
        update(@Param('id') id: string, @Body() updUser: User){
            return this.userServ.update(+id, updUser);
        }
        @Post(':id')
        create(@Body() createUser: User){
            return this.userServ.create(createUser);
        }
        @Delete(':id')
        remove(@Param('id') id: string){
            return this.userServ.remove(+id);
        }
}
