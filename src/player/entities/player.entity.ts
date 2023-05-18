import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  male = '男',
  female = '女',
  unknow = '未知',
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.unknow,
  })
  gender: Gender;

  @Column()
  pid: string;

  @Column()
  matchId: string;
}
