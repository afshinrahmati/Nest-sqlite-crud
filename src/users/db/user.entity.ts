import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: 'o@gmail.com' })
  email: string;

  @Column('varchar', { length: 255 })
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('\x1b[33m%s\x1b[0m', 'user Insert ==>' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('\x1b[34m%s\x1b[0m', 'user Insert ==>' + this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('\x1b[31m%s\x1b[0m', 'user Insert ==>' + this.id);
  }
}
