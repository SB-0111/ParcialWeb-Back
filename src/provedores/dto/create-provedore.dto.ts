
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateProvedoreDto {
    @IsString()
    nombre: string;
  
    @IsString()
    apellido: string;
  
    @IsEmail()
    email: string;
  
    @IsPhoneNumber(null)  // Valida el teléfono basado en el formato del país
    telefono: string;
}
