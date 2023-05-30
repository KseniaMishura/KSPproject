import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { Comment } from "./comment.entity";
import { CommentService } from "./comment.service";

@Controller('Comment')
export class CommentController{
    constructor (private readonly comServ: CommentService){}
    @Get()
    findAll(){
        return this.comServ.findAll();
    }
    @Get()
    findOne(@Param('id') id: string){
        return this.comServ.findOne(+id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCom: Comment){
        return this.comServ.update(+id, updateCom);
    }
    @Post()
    create(@Body() createCom: Comment){
        return this.comServ.create(createCom);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.comServ.remove(+id);
    }
    
}