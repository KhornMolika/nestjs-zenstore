import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [CategoriesModule],  // IMPORTANT
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
