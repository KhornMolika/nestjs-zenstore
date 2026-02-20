import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('products') // access at http://localhost:3000/products
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,  // injected
  ) {}

  // Get /products
  @Get()
  getAll() {
    return this.productsService.findAll();
  }

  // Post /products
  @Post()
  createProduct(@Body() body: { name: string; price: number }) {
    return this.productsService.create(body.name, body.price);
  }

  // Get /products/test-category
  @Get('test-category')
  testCategory() {
    return this.categoriesService.findAll();
  }
}
