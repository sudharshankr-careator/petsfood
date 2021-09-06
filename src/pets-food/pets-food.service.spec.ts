import { Test, TestingModule } from '@nestjs/testing';
import { PetsFoodService } from './pets-food.service';

describe('PetsFoodService', () => {
  let service: PetsFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetsFoodService],
    }).compile();

    service = module.get<PetsFoodService>(PetsFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
