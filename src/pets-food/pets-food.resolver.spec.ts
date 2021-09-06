import { Test, TestingModule } from '@nestjs/testing';
import { PetsFoodResolver } from './pets-food.resolver';
import { PetsFoodService } from './pets-food.service';

describe('PetsFoodResolver', () => {
  let resolver: PetsFoodResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetsFoodResolver, PetsFoodService],
    }).compile();

    resolver = module.get<PetsFoodResolver>(PetsFoodResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
