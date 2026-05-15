import { Injectable, Logger } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

import { envs } from './config';
import { PrismaClient } from './generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly envs: Record<string, unknown> = envs;
  private readonly logger: Logger = new Logger(PrismaService.name);
  constructor() {
    const adapter: PrismaPg = new PrismaPg({
      connectionString: envs.databaseUrl,
    });
    super({ adapter });
    this.logger.debug('Prisma Service Initialized - OrderMs');
  }
}
