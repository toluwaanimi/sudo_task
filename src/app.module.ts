import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule,MongooseModule.forRoot('mongodb+srv://petra:africa@petra.cj3xy.mongodb.net/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
