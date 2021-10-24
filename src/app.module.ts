import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';
import { CustomSchedulerModule } from 'src/custom-scheduler/custom-scheduler.module';

@Module({
  imports: [RedisCacheModule, CustomSchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
