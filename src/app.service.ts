import { Injectable } from '@nestjs/common';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  constructor(
    private readonly redisCacheService: RedisCacheService
    ) {}

  setRedisHello(): string {
    this.redisCacheService.set("fuck", "done-done");
    return 'Hello World Redis!';
  }

  async getRedisHello() {
    let sid = await this.redisCacheService.get("fuck");
    return sid;
  }

}
