import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';


@Injectable()
export class RedisCacheService { 
    constructor(
    @Inject(CACHE_MANAGER) 
        private readonly cache: Cache,
  ) {}
  
  get(key) {
     let sid = this.cache.get(key);
     console.log(sid);
     return sid;
  }

  set(key, value) {
    this.cache.set(key, value);
  }
}