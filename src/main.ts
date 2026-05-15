import { INestMicroservice, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const { port } = envs;
  const logger: Logger = new Logger('OrderMSBootstrap');
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      },
    });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen();
  logger.log(`Order Microservice running on port ${port}`);
}
bootstrap();
