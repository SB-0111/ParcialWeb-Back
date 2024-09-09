import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Organo } from '../../organos/entities/organo.entity';

@Entity("Provedor")
export class Provedor {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    telefono: string;

    @OneToMany(() => Organo, (organo) => organo.proveedor, {cascade: true, onDelete: 'CASCADE'})
    organos: Organo[];


}
