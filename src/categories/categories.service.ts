import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';


@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category)
        private categoryRepostory: Repository<Category>,
    ) {}

    async create(createCategoryDto: CreateCategoryDto) {
        const newCategory = this.categoryRepostory.create(createCategoryDto);
        return await this.categoryRepostory.save(newCategory);
    }

    findAll(){
        return this.categoryRepostory.find();
    }
} 
