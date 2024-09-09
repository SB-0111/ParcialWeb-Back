import { IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator';

export class CreateOrganoDto {

  @IsString()
  nombre: string;

  @IsString()
  descripcionPortador: string;

  @IsString()
  imagen: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsString()
  categoria: string;

  @IsDate()
  fechaCreacion: Date;

  @IsDate()
  fechaActualizacion: Date;

  @IsBoolean()
  activo: boolean;

  @IsOptional()
  clienteId?: number;

  @IsNumber()
  proveedorId: number;
}
