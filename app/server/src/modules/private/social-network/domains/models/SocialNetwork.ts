import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('socialNetwork')
export default class SocialNetwork {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}
