import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationCreationLogicService } from './location-creation-logic.service';
import { CreateLocationCreationLogicDto } from './dto/create-location-creation-logic.dto';
import { UpdateLocationCreationLogicDto } from './dto/update-location-creation-logic.dto';

@Controller('location-creation-logic')
export class LocationCreationLogicController {
  constructor(private readonly locationCreationLogicService: LocationCreationLogicService) {}

  @Post()
  create(@Body() createLocationCreationLogicDto: CreateLocationCreationLogicDto) {
    return this.locationCreationLogicService.create(createLocationCreationLogicDto);
  }

  @Get()
  findAll() {
    return this.locationCreationLogicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationCreationLogicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationCreationLogicDto: UpdateLocationCreationLogicDto) {
    return this.locationCreationLogicService.update(+id, updateLocationCreationLogicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationCreationLogicService.remove(+id);
  }
}
