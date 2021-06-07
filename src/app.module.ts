import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule,MongooseModule.forRoot('', {
    useNewUrlParser: true,
    useCreateIndex: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
