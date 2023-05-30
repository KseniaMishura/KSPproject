import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Place } from "./place.entity";
import { PlaceService } from "./place.service";
import { CreatePlaceDto } from "./placeDTO";

@Controller('places')
export class PlaceController{
    constructor(private readonly placeServ: PlaceService){}
        
        @Get('incomplete')
        findIncomplete(){
            return this.placeServ.findIncomplete();
        }
        
}
