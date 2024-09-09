import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvedoresModule } from './provedores/provedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrganosModule } from './organos/organos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'parcialweb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProvedoresModule, ClientesModule, OrganosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


