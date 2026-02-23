import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor (private readonly categoriesService: CategoriesService) {};

    @Get()
    getAll(){
        return this.categoriesService.findAll();
    }

    @Post()
    createCategory( @Body() createcategoryDto: CreateCategoryDto) {  // Use the DTO!
        return this.categoriesService.create(createcategoryDto);
    }
}
