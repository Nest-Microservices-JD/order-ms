import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  ChangeOrderStatusFto,
  CreateOrderDto,
  OrderPaginationDto,
} from './dto';
import { AllFilterOrderResponse, OrderClient } from './interfaces';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('createOrder')
  public create(
    @Payload() createOrderDto: CreateOrderDto,
  ): unknown {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('findAllOrders')
  public findAll(
    @Payload() orderPaginationDto: OrderPaginationDto,
  ): Promise<AllFilterOrderResponse> {
    return this.ordersService.findAll(orderPaginationDto);
  }

  @MessagePattern('findOneOrder')
  public findOne(
    @Payload('id', ParseUUIDPipe) id: string,
  ): Promise<OrderClient | null> {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('changeOrderStatus')
  public changeOrderStatus(
    @Payload() changeOrderStatusDto: ChangeOrderStatusFto,
  ): Promise<OrderClient | null> {
    return this.ordersService.changeOrderStatus(changeOrderStatusDto);
  }
}
