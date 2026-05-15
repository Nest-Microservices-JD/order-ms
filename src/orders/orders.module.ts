import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from '../config';
import { PrismaService } from '../prisma.service';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { NatsModule } from '../transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [
    NatsModule
  ],
  exports: [],
})
export class OrdersModule {}
