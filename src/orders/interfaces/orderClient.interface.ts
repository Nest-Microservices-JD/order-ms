import { OrderStatus } from '../../generated/prisma/client';

export interface OrderClient {
  id: string;
  totalAmount: number;
  totalItems: number;
  status: OrderStatus;
  paid: boolean;
  paidAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  OrderItem?: OrderItemClient[];
}

export interface OrderItemClient {
  productId: number;
  quantity: number;
  price: number;
  name?: string;
  description?: string;
}
