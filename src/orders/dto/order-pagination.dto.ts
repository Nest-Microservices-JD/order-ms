import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common';
import { OrderStatus } from '../../generated/prisma/client';
import { OrderStatusList } from '../enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `status must be one of ${OrderStatusList.join(', ')}`,
  })
  status?: OrderStatus;
}
