import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricingModule } from './pricing/pricing.module';

const username = encodeURIComponent('dev');
const password = encodeURIComponent('myheart1007');

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dev:myheart1007@demodb.hstnw3d.mongodb.net/mydatabase?retryWrites=true&w=majority',
    ),
    PricingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
