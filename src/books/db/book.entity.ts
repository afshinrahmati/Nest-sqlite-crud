import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  title: string;
  @Column()
  summary: string;
  @Column()
  comments: string;

  @Column()
  language: string;

  @Column('simple-array')
  tags: string[];
}
