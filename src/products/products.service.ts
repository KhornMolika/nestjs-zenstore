import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/categories.entity';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create (createProductDto: CreateProductDto) {
    const {name, price, categoryId} = createProductDto;

    // 1. Verify the category existent
    const category = await this.categoryRepository.findOneBy({id: categoryId});
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    // 2. Create the product instance and link the category object
    const newProduct = this.productRepository.create({
      name,
      price,
      category
    });

    // 3. Save to database
    return await this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find({ relations: ['category'] });
  }

}
