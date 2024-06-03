import { Test, TestingModule } from '@nestjs/testing';
import { LocationCreationLogicService } from './location-creation-logic.service';

describe('LocationCreationLogicService', () => {
  let service: LocationCreationLogicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationCreationLogicService],
    }).compile();

    service = module.get<LocationCreationLogicService>(LocationCreationLogicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
