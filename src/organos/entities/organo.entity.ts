import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Provedor } from '../../provedores/entities/provedore.entity';

@Entity("Organo")
export class Organo {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        nombre: string;
      
        @Column()
        descripcionPortador: string;
      
        @Column()
        imagen: string;
      
        @Column()
        precio: number;
      
        @Column()
        stock: number;
      
        @Column()
        categoria: string;
      
        @Column()
        fechaCreacion: Date;
      
        @Column()
        fechaActualizacion: Date;
      
        @Column()
        activo: boolean;
      
        // Relación Many-to-One con Cliente
        @ManyToOne(() => Cliente, (cliente) => cliente.organos, { onDelete: 'SET NULL', nullable: true })
        cliente: Cliente;
      
        // Relación Many-to-One con Proveedor
        @ManyToOne(() => Provedor, (proveedor) => proveedor.organos, { onDelete: 'SET NULL', nullable: true })
        proveedor: Provedor;
      

}
