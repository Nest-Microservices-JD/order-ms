import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE, envs } from '../config';

@Module({
  controllers: [],
  exports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
        },
      },
    ]),
  ],
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
        },
      },
    ]),
  ],
  providers: [],
})
export class NatsModule {}
