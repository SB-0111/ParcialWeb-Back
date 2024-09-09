import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganoDto } from './create-organo.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateOrganoDto extends PartialType(CreateOrganoDto) {
    @IsNumber()
    clienteId?: number;
}
