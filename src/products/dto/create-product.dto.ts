import { IsString, IsNumber, IsPositive, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  categoryId: number; // Used to link to the category
}
