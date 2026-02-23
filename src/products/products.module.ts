import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CategoriesModule } from 'src/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Category } from 'src/categories/entities/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category]), // <--- Add Category here too!
    CategoriesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
