import { Injectable } from '@nestjs/common';
import { CreatePetsFoodInput } from './dto/create-pets-food.input';
import { UpdatePetsFoodInput } from './dto/update-pets-food.input';

@Injectable()
export class PetsFoodService {
  create(createPetsFoodInput: CreatePetsFoodInput) {
    return 'This action adds a new petsFood';
  }

  findAll() {
    return `This action returns all petsFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petsFood`;
  }

  update(id: number, updatePetsFoodInput: UpdatePetsFoodInput) {
    return `This action updates a #${id} petsFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} petsFood`;
  }
}
