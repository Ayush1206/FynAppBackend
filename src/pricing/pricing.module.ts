import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PricingController } from './controller/pricing.controller';
import { PricingService } from './services/pricing.service';
import { Pricing, PricingSchema } from './schemas/pricing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pricing.name, schema: PricingSchema }]),
  ],
  controllers: [PricingController],
  providers: [PricingService],
})
export class PricingModule {}
