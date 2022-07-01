import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.carsService.findOneById( id );
  }

  @Post()
  createCar( @Body() createCardDto: CreateCarDto ) {
    return this.carsService.create( createCardDto );
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateCarDto: UpdateCarDto ) 
  {
    return this.carsService.update( id, updateCarDto );
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.carsService.delete( id )
  }

}
