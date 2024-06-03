import { Injectable } from '@nestjs/common';
import { CreateLocationCreationLogicDto } from './dto/create-location-creation-logic.dto';
import { UpdateLocationCreationLogicDto } from './dto/update-location-creation-logic.dto';

@Injectable()
export class LocationCreationLogicService {
  create(createLocationCreationLogicDto: CreateLocationCreationLogicDto) {
    return 'This action adds a new locationCreationLogic';
  }

  findAll() {
    return `This action returns all locationCreationLogic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationCreationLogic`;
  }

  update(id: number, updateLocationCreationLogicDto: UpdateLocationCreationLogicDto) {
    return `This action updates a #${id} locationCreationLogic`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationCreationLogic`;
  }
}
