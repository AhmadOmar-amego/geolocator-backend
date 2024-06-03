import { Module } from '@nestjs/common';
import { LocationCreationLogicService } from './location-creation-logic.service';
import { LocationCreationLogicController } from './location-creation-logic.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationCreationLogicController],
  providers: [LocationCreationLogicService],
})
export class LocationCreationLogicModule {
}
