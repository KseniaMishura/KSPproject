import { CityService } from "./city.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { City } from "./city.entity";

@Controller('City')
export class CityController{
    constructor (private readonly cityServ: CityService){}
    @Get()
    findAll(){
        return this.cityServ.findAll();
    }
    @Get()
    findOne(@Param('id') id: string){
        return this.cityServ.findOne(+id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCity: City){
        return this.cityServ.update(+id, updateCity);
    }
    @Post()
    create(@Body() createCity: City){
        return this.cityServ.create(createCity);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.cityServ.remove(+id);
    }
    
}
