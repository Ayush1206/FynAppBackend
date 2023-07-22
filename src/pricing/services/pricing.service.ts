import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pricing, PricingDocument } from '../schemas/pricing.schema';
import { CreatePricingDto, UpdatePricingDto } from '../dto/pricing.dto';

@Injectable()
export class PricingService {
  constructor(
    @InjectModel(Pricing.name)
    private readonly pricingModel: Model<PricingDocument>,
  ) {}

  async createPricing(createPricingDto: CreatePricingDto): Promise<Pricing> {
    const createdPricing = new this.pricingModel(createPricingDto);
    return createdPricing.save();
  }

  async getAllPricingConfigurations(): Promise<Pricing[]> {
    return this.pricingModel.find().exec();
  }

  async updatePricing(
    id: string,
    updatePricingDto: UpdatePricingDto,
  ): Promise<Pricing> {
    return this.pricingModel
      .findByIdAndUpdate(id, updatePricingDto, { new: true })
      .exec();
  }

  async deletePricing(id: string): Promise<Pricing> {
    return this.pricingModel.findByIdAndDelete(id).exec();
  }

  async calculatePricing(
    id: string,
    additionalDistance: number,
    timeTraveled: number,
  ): Promise<number> {
    const pricing = await this.pricingModel.findById(id).exec();
    if (!pricing) {
      throw new Error('Pricing configuration not found.');
    }

    console.log(pricing);
    

    const basePrice = pricing.distanceBasePrice;
    const distanceAdditionalPrice = pricing.distanceAdditionalPrice;
    const timeMultiplierFactor = pricing.timeMultiplierFactor;
    const waitingCharges = pricing.waitingCharges;

    console.log('basePrice:- ' + basePrice + ' distanceAdditionalPrice : - ' +distanceAdditionalPrice+' TMF :- '+ timeMultiplierFactor+ ' WC:- ' + waitingCharges +' timeTraveled :-' + timeTraveled+' AD :- '+ additionalDistance);
    

    const finalPrice =
      basePrice +
      additionalDistance * distanceAdditionalPrice +
      timeTraveled * timeMultiplierFactor +
      waitingCharges;

      console.log(finalPrice);
      

    return finalPrice;
  }
}
