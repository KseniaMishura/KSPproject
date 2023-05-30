import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Place } from "./place.entity";
import { PlaceService } from "./place.service";

@Controller('places')
export class PlaceController{
    constructor(private readonly placeServ: PlaceService){}
        @Get()
        findAll(){
            return this.placeServ.findAll();
        }
        @Get(':id')
        findOne(@Param('id') id: string){
            return this.placeServ.findOne(+id);
        }
        @Put(':id')
        update(@Param('id') id: string, @Body() updPlace: Place){
            return this.placeServ.update(+id, updPlace);
        }
        @Post(':id')
        create(@Body() createPlace: Place){
            return this.placeServ.create(createPlace);
        }
        @Delete(':id')
        remove(@Param('id') id: string){
            return this.placeServ.remove(+id);
        }
}
