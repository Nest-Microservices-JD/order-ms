import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const rpcError: string | object = exception.getError();

    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status: number = Number.isNaN(rpcError.status)
        ? 400
        : Number(rpcError.status);
      return response.status(status).json(rpcError);
    }

    response.status(400).json({
      status: 400,
      message: rpcError,
      error: 'Unauthorized',
    });
  }
}
