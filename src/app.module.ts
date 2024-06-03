import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { DatabaseModule } from './database/database.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationsModule, DatabaseModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
