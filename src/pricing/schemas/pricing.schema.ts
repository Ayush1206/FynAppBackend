import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PricingDocument = Pricing & Document;

@Schema()
export class Pricing {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  distanceBasePrice: number;

  @Prop({ required: true })
  distanceAdditionalPrice: number;

  @Prop({ required: true })
  timeMultiplierFactor: number;

  @Prop({ required: true })
  waitingCharges: number;
}

export const PricingSchema = SchemaFactory.createForClass(Pricing);
