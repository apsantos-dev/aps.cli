import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datacli')
export default class Datacli {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  navbar: string;

  @Column()
  version: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;
}
