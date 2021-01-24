import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tools')
export default class Tool {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  active: boolean;

  @Column()
  avatarURL: string;

  @Column()
  name: string;

  @Column()
  site: string;

  @Column()
  status: string;

  @Column()
  version: string;

  @Column()
  info: string;
}
