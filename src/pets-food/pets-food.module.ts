import { Module } from '@nestjs/common';
import { PetsFoodService } from './pets-food.service';
import { PetsFoodResolver } from './pets-food.resolver';

@Module({
  providers: [PetsFoodResolver, PetsFoodService]
})
export class PetsFoodModule {}
