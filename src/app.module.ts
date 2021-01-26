import { Module } from '@nestjs/common';
import { OrderGateway } from './order.gateway';
import { OrderService } from './order/order.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OrderGateway, OrderService],
})
export class AppModule {}
