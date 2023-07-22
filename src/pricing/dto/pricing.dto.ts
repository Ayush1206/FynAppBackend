import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreatePricingDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  distanceBasePrice: number;

  @IsNumber()
  @Min(0)
  distanceAdditionalPrice: number;

  @IsNumber()
  @Min(0)
  timeMultiplierFactor: number;

  @IsNumber()
  @Min(0)
  waitingCharges: number;
}

export class UpdatePricingDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  distanceBasePrice: number;

  @IsNumber()
  @Min(0)
  distanceAdditionalPrice: number;

  @IsNumber()
  @Min(0)
  timeMultiplierFactor: number;

  @IsNumber()
  @Min(0)
  waitingCharges: number;
}