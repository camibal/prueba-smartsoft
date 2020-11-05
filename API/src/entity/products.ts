import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmail } from 'class-validator';

@Entity()
@Unique(['id'])
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsNotEmpty()
  identification: string;

  @Column()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @Column()
  @MinLength(1)
  @IsNotEmpty()
  category: string;

  @Column()
  @MinLength(1)
  @IsNotEmpty()
  price: string;

  @Column()
  @MinLength(1)
  @IsNotEmpty()
  inventory: string;
}
