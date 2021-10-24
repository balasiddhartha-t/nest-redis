import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { CustomSchedulerService } from './custom-scheduler.service';

@Module({
    imports: [RedisCacheModule],
    providers: [CustomSchedulerService],
  })
export class CustomSchedulerModule {}
