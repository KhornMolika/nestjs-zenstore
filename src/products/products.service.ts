import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    findAll(){
        return this.products;
    }

    create(name: string, price: number) {
        const newProduct = {id: Date.now(), name, price};
        this.products.push(newProduct);
        return newProduct;
    }
}
