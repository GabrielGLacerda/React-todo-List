import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config'
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URI),TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
