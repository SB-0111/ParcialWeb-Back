import { Module } from '@nestjs/common';
import { ProvedoresService } from './provedores.service';
import { ProvedoresController } from './provedores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provedor } from './entities/provedore.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Provedor])],
  controllers: [ProvedoresController],
  providers: [ProvedoresService],
})
export class ProvedoresModule {}
