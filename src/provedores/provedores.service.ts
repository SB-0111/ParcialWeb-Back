import { Injectable } from '@nestjs/common';
import { CreateProvedoreDto } from './dto/create-provedore.dto';
import { UpdateProvedoreDto } from './dto/update-provedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Provedor } from './entities/provedore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvedoresService {
  constructor(
    @InjectRepository(Provedor)
    private provedoreRepository: Repository<Provedor>,
  ) {}

  async create(createProvedoreDto: CreateProvedoreDto): Promise<Provedor> {
    const provedor = this.provedoreRepository.create(createProvedoreDto);
    return this.provedoreRepository.save(provedor);
  }
  async findAll(): Promise<Provedor[]> {
    return this.provedoreRepository.find();
  }
  findOne(id: number): Promise<Provedor> {
    return this.provedoreRepository.findOne({      where: { id },
      relations: ['organos'],});
  }
  async update(id: number, updateProvedoreDto: UpdateProvedoreDto): Promise<Provedor> {
    const provedor = await this.provedoreRepository.preload({
      id: id,
      ...updateProvedoreDto,
    });
    if (!provedor) {
      throw new Error(`Provedor con id ${id} no encontrado`);
    }
    return this.provedoreRepository.save(provedor);
  }

  async remove(id: number): Promise<Provedor> {
    const provedor = await this.findOne(id);
    return this.provedoreRepository.remove(provedor);
  }

}
