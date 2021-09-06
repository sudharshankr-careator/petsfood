import { CreatePetsFoodInput } from './create-pets-food.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetsFoodInput extends PartialType(CreatePetsFoodInput) {
  @Field(() => Int)
  id: number;
}
