import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Since your app is running on your host machine
      port: 5432,
      username: 'moly',
      password: 'moly123!@#',
      database: 'zenstore',
      autoLoadEntities: true,
      synchronize: true, // Auto-creates tables in Docker (Dev only!)
    }),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
