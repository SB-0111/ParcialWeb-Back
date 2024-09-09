import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Organo} from '../../organos/entities/organo.entity';

@Entity("Cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    apellido: string;

    
    @Column()
    email: string;

    @OneToMany(() => Organo, (organo) => organo.cliente, {cascade: true, onDelete: 'CASCADE'})
    organos: Organo[];
}
