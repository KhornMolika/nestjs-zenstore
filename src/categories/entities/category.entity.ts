import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // FIX: Added [] to Product to indicate an array
  @OneToMany(() => Product, (pro) => pro.category)
  products: Product[];
}
