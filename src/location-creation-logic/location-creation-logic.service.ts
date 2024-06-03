import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LocationCreationLogicService {

  constructor(private readonly databaseService: DatabaseService) {
  }

  create(createLocationCreationLogicDto: Prisma.LocationCreateInput) {
    return this.databaseService.location.create({
      data: createLocationCreationLogicDto,
    });
  }

  async findAll() {

    return this.databaseService.location.findMany();
  }

}
