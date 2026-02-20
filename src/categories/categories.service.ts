import { Injectable } from '@nestjs/common';

export interface Category{
    id: number;
    name: string;
}

@Injectable()
export class CategoriesService {
    private categories: Category[] = [];

    findAll(){
        return this.categories;
    }
}
