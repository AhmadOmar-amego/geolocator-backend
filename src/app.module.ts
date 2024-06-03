import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { DatabaseModule } from './database/database.module';
import { LocationCreationLogicModule } from './location-creation-logic/location-creation-logic.module';

@Module({
  imports: [LocationsModule, DatabaseModule, LocationCreationLogicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
