import { Test, TestingModule } from '@nestjs/testing';
import { LocationCreationLogicController } from './location-creation-logic.controller';
import { LocationCreationLogicService } from './location-creation-logic.service';

describe('LocationCreationLogicController', () => {
  let controller: LocationCreationLogicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationCreationLogicController],
      providers: [LocationCreationLogicService],
    }).compile();

    controller = module.get<LocationCreationLogicController>(LocationCreationLogicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
