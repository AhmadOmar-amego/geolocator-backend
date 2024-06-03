import { Body, Controller, Get, Post } from '@nestjs/common';
import { LocationCreationLogicService } from './location-creation-logic.service';
import { Prisma } from '@prisma/client';

@Controller('location-creation-logic')
export class LocationCreationLogicController {
  constructor(private readonly locationCreationLogicService: LocationCreationLogicService) {
  }

  @Post()
  create(@Body() createLocationCreationLogicDto: Prisma.LocationCreateInput) {
    return this.locationCreationLogicService.create(
      createLocationCreationLogicDto,
    );
  }

  @Get()
  findAll() {
    return this.locationCreationLogicService.findAll();
  }


}
