import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatus } from '../../generated/prisma/client';
import { OrderStatusList } from '../enum';

export class ChangeOrderStatusFto {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `status must be one of ${OrderStatusList.join(', ')}`,
  })
  status: OrderStatus;

  constructor(id: string, status: OrderStatus) {
    this.id = id;
    this.status = status;
  }
}
