import { Module } from '@nestjs/common';
import { OrganosService } from './organos.service';
import { OrganosController } from './organos.controller';
import { Type } from 'class-transformer';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organo } from './entities/organo.entity';
import { Provedor } from '../provedores/entities/provedore.entity';
import {Cliente} from '../clientes/entities/cliente.entity';
 
@Module({
  imports : [TypeOrmModule.forFeature([Organo, Provedor, Cliente])],
  controllers: [OrganosController],
  providers: [OrganosService],
})
export class OrganosModule {}
