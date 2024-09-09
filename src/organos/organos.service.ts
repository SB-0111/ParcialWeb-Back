import { Injectable } from '@nestjs/common';
import { CreateOrganoDto } from './dto/create-organo.dto';
import { UpdateOrganoDto } from './dto/update-organo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Organo } from './entities/organo.entity';
import { Provedor } from 'src/provedores/entities/provedore.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class OrganosService {

  findOneBy: any;
  findOrganoByClienteId: any;
  remove: any;
  update: any;

  constructor(
    @InjectRepository(Organo)
    private organoRepository: Repository<Organo>,
    @InjectRepository(Provedor)
    private provedorRepository: Repository<Provedor>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ){}

  async create(createOrganoDto: CreateOrganoDto): Promise<Organo> {
    const proveedor = await this.provedorRepository.findOne({ where: { id: createOrganoDto.proveedorId } });
    
    // Verificar si se proporciona un cliente, si no, asignar null
    let cliente = null;
    if (createOrganoDto.clienteId) {
      cliente = await this.clienteRepository.findOne({ where: { id: createOrganoDto.clienteId } });
    }
    
    const organo = this.organoRepository.create({
      ...createOrganoDto,
      cliente,  // Puede ser null si no se proporciona clienteId
      proveedor,
    });
    
    return this.organoRepository.save(organo);
  }
  async updateOrgano(id: number, updateOrganoDto: UpdateOrganoDto): Promise<Organo> {
    const organo = await this.organoRepository.preload({
      id: id,
      ...updateOrganoDto,
    });
    if (!organo) {
      throw new Error(`Organo con id ${id} no encontrado`);
    }
    return this.organoRepository.save(organo);
  }

  async findAll(): Promise<Organo[]> {
    return this.organoRepository.find();
  }

}
