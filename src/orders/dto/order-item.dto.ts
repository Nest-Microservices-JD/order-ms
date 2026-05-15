import { IsNumber, IsPositive, Min } from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  productId: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  quantity: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  price: number;

  constructor(productId: number, quantity: number, price: number) {
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}
