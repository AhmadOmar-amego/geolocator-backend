import { Module } from '@nestjs/common';
import { LocationCreationLogicService } from './location-creation-logic.service';
import { LocationCreationLogicController } from './location-creation-logic.controller';

@Module({
  controllers: [LocationCreationLogicController],
  providers: [LocationCreationLogicService],
})
export class LocationCreationLogicModule {}
