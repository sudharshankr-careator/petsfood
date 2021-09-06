import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetsFoodService } from './pets-food.service';
import { PetsFood } from './entities/pets-food.entity';
import { CreatePetsFoodInput } from './dto/create-pets-food.input';
import { UpdatePetsFoodInput } from './dto/update-pets-food.input';

@Resolver(() => PetsFood)
export class PetsFoodResolver {
  constructor(private readonly petsFoodService: PetsFoodService) {}

  @Mutation(() => PetsFood)
  createPetsFood(@Args('createPetsFoodInput') createPetsFoodInput: CreatePetsFoodInput) {
    return this.petsFoodService.create(createPetsFoodInput);
  }

  @Query(() => [PetsFood], { name: 'petsFood' })
  findAll() {
    return this.petsFoodService.findAll();
  }

  @Query(() => PetsFood, { name: 'petsFood' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petsFoodService.findOne(id);
  }

  @Mutation(() => PetsFood)
  updatePetsFood(@Args('updatePetsFoodInput') updatePetsFoodInput: UpdatePetsFoodInput) {
    return this.petsFoodService.update(updatePetsFoodInput.id, updatePetsFoodInput);
  }

  @Mutation(() => PetsFood)
  removePetsFood(@Args('id', { type: () => Int }) id: number) {
    return this.petsFoodService.remove(id);
  }
}
