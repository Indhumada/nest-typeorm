import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('typeormtable')
export class CrudEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column({nullable:true})
  mobile: string;

   
}