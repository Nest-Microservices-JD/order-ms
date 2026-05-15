import { OrderClient } from './orderClient.interface';

export interface AllFilterOrderResponse {
  data: OrderClient[];
  meta: MetaDataOrderResponse;
}

interface MetaDataOrderResponse {
  total: number;
  page: number;
  lastPage: number;
  perPage: number;
}
