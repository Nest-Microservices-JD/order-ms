import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NatsModule } from '../transports/nats.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [
    NatsModule
  ],
  exports: [],
})
export class OrdersModule {}
