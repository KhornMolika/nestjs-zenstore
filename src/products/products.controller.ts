import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products') // access at http://localhost:3000/products
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
  ) {}

  // Get /products
  @Get()
  getAll() {
    return this.productsService.findAll();
  }

  // Post /products
  @Post()
  CreateProduct( @Body() createProductDto: CreateProductDto) {  // Use the DTO!
    return this.productsService.create(createProductDto);
  }
}
