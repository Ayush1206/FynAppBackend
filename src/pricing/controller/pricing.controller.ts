import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { PricingService } from '../services/pricing.service';
import { Pricing } from '../schemas/pricing.schema';
import { CreatePricingDto, UpdatePricingDto } from '../dto/pricing.dto';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Get()
  async getAllPricingConfigurations(): Promise<Pricing[]> {
    return this.pricingService.getAllPricingConfigurations();
  }

  @Post()
  async createPricingConfiguration(
    @Body() createPricingDto: CreatePricingDto,
  ): Promise<Pricing> {
    return this.pricingService.createPricing(createPricingDto);
  }

  @Put(':id')
  async updatePricingConfiguration(
    @Param('id') id: string,
    @Body() updatePricingDto: UpdatePricingDto,
  ): Promise<Pricing> {
    return this.pricingService.updatePricing(id, updatePricingDto);
  }

  @Delete(':id')
  async deletePricingConfiguration(@Param('id') id: string): Promise<Pricing> {
    return this.pricingService.deletePricing(id);
  }

  @Get(':id/calculate')
  async calculatePricing(
    @Param('id') id: string,
    @Query('additionalDistance') additionalDistance: number,
    @Query('timeTraveled') timeTraveled: number,
  ): Promise<number> {
    return this.pricingService.calculatePricing(
      id,
      additionalDistance,
      timeTraveled,
    );
  }
}
